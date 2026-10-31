import * as THREE from 'three';
import { Input } from './core/input';
import { audio } from './core/audio';
import { Store, Settings, CharId } from './core/save';
import { School, FH } from './world/school';
import { Environment } from './world/environment';
import { Character } from './chars/character';
import { Effects } from './chars/effects';
import { NPCManager } from './chars/npc';
import { LOOKS, npcDefs, PLAYER_SEAT } from './chars/cast';
import { Player, ThirdPersonCam } from './game/player';
import { Director } from './game/director';
import { Story, PERIODS, periodAt, fmtClock } from './game/story';
import { ui } from './ui/ui';
import { drawOverview, drawMinimap, floorOf, type MapView } from './ui/map';

type State = 'loading' | 'menu' | 'select' | 'play' | 'credits' | 'ending';
const $ = (s: string) => document.querySelector(s) as HTMLElement;

export class Game {
  renderer: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 600);
  input: Input;
  settings: Settings = Store.settings();
  school!: School;
  env!: Environment;
  effects!: Effects;
  npcs!: NPCManager;
  player!: Player;
  cam!: ThirdPersonCam;
  director: Director;
  story: Story | null = null;
  protagonist: CharId = 'gonzalo';
  state: State = 'loading';
  paused = false;
  private clock = new THREE.Clock();
  private t = 0;
  private menuT = 0;
  // selección de personaje
  private selScene = new THREE.Scene();
  private selChars: Record<CharId, Character> = {} as Record<CharId, Character>;
  private selected: CharId = 'gonzalo';
  private selFree = false;
  private selT = 0;
  private mapFloor = 0;
  private interactTarget: { label: string; key: 'E' | 'F'; action: () => void } | null = null;
  private wpTmp = new THREE.Vector3();
  // mapa en pantalla
  private mapZoom = 2.6;
  private route: THREE.Vector3[] = [];
  private routeT = 0;
  private unlockAt = 0;
  private appliedShadows = -1;

  constructor() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    $('#app').appendChild(this.renderer.domElement);
    this.input = new Input(this.renderer.domElement);
    this.director = new Director(this);
    addEventListener('resize', () => this.resize());
  }

  async boot() {
    await new Promise((r) => setTimeout(r, 30));
    await (document as Document & { fonts?: FontFaceSet }).fonts?.ready.catch(() => {});
    this.school = new School(this.scene);
    this.env = new Environment(this.scene, this.school.world);
    this.effects = new Effects(this.scene);
    this.npcs = new NPCManager(this.school, this.scene);
    this.buildSelectScene();
    this.populate(null);
    this.applySettings();
    this.resize();
    this.renderer.compile(this.scene, this.camera);
    $('.load-sub').textContent = 'Listo.';
    $('.load-start').classList.remove('hidden');
    $('#loading').addEventListener('click', () => {
      audio.init();
      this.applySettings();
      $('#loading').classList.add('hidden');
      this.toMenu();
    }, { once: true });
    this.bindUI();
    this.renderer.setAnimationLoop(() => this.frame());
  }

  resize() {
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight);
  }

  applySettings() {
    const s = this.settings;
    audio.setVolumes(s.master, s.music, s.sfx);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, s.scale));
    if (this.env) this.env.setShadows(s.shadows, this.renderer);
    if (this.player) { this.player.sens = s.sens; this.player.invertY = s.invertY; }
    this.applyMapMode();
    // recompilar materiales sólo si cambió la calidad de sombras (antes ocurría con cada slider)
    if (this.appliedShadows !== s.shadows) {
      this.appliedShadows = s.shadows;
      this.scene.traverse((o) => { const m = (o as THREE.Mesh).material as THREE.Material | undefined; if (m) m.needsUpdate = true; });
    }
  }

  /** 0 = sin mapa, 1 = minimapa, 2 = mapa grande en pantalla. */
  applyMapMode() {
    const m = this.settings.mapMode;
    $('#minimap').classList.toggle('hidden', m !== 1);
    $('#bigmap').classList.toggle('hidden', m !== 2);
    $('#map-hint').classList.toggle('hidden', m === 0);
    document.body.classList.toggle('mapbig', m === 2);
  }
  cycleMapMode() {
    this.settings.mapMode = (this.settings.mapMode + 1) % 3;
    Store.saveSettings(this.settings);
    this.applyMapMode();
    ui.toast(['Mapa en pantalla: apagado', 'Mapa en pantalla: minimapa', 'Mapa en pantalla: grande'][this.settings.mapMode], 1500);
  }
  private mapView(): MapView {
    return {
      school: this.school, player: this.player.pos, heading: this.player.char.yaw, camYaw: this.player.camYaw,
      target: this.story?.waypoint() ?? null, route: this.route, npcs: this.npcs,
    };
  }
  /** Ruta por el grafo de navegación desde el jugador hasta el objetivo. */
  private updateRoute(dt: number, wp: THREE.Vector3 | null) {
    this.routeT -= dt;
    if (this.routeT > 0) return;
    this.routeT = 0.35;
    if (!wp) { this.route = []; return; }
    const nav = this.school.nav;
    const pts = nav.path(nav.nearest(this.player.pos), nav.nearest(wp));
    this.route = [this.player.pos.clone(), ...pts, wp.clone()];
  }

  // ------------------------------------------------------------------ población
  /** (Re)crea a todos los personajes. pc = null en el menú. */
  populate(pc: CharId | null) {
    for (const n of this.npcs.npcs) this.scene.remove(n.char.root);
    this.npcs.npcs = [];
    this.effects.clearIcons();
    this.effects.stopCloud();
    const defs = npcDefs(pc ?? 'gonzalo');
    if (!pc) defs.push({ id: 'gonzalo', role: 'student', group: '2A', seatIndex: 5, start: new THREE.Vector3(4, 0, 22), lines: ['¡Quiubo!'] });
    for (const def of defs) {
      const c = new Character(LOOKS[def.id]);
      c.onSteam = (p) => this.effects.steam(p);
      this.npcs.add(def, c, def.start.clone(), Math.random() * Math.PI * 2);
    }
    if (this.player) this.scene.remove(this.player.char.root);
    if (pc) {
      const c = new Character(LOOKS[pc]);
      c.onSteam = (p) => this.effects.steam(p);
      this.scene.add(c.root);
      this.player = new Player(c, this.school);
      this.player.sens = this.settings.sens; this.player.invertY = this.settings.invertY;
      this.cam = new ThirdPersonCam(this.camera, this.school);
    } else {
      // jugador de mentira para el menú (oculto)
      const c = new Character(LOOKS.gonzalo);
      c.root.visible = false;
      this.player = new Player(c, this.school);
      this.cam = new ThirdPersonCam(this.camera, this.school);
      this.npcs.setPhase({ kind: 'recess' }, false);
    }
  }
  get playerSeatIndex() { return PLAYER_SEAT[this.protagonist]; }
  charOf(id: string): Character {
    if (id === this.protagonist && this.state === 'play') return this.player.char;
    return this.npcs.get(id).char;
  }

  // ------------------------------------------------------------------ estados
  toMenu() {
    this.state = 'menu';
    this.paused = false;
    this.story = null;
    this.director.reset();
    ['#hud', '#pause', '#tab', '#map', '#ending', '#credits', '#select', '#dialog', '#choices', '#qte'].forEach((s) => $(s).classList.add('hidden'));
    ui.cinematic(false);
    ui.waypoint(0, 0, null);
    this.input.unlock();
    this.populate(null);
    const has = !!Store.game();
    ($('#btn-continue') as HTMLButtonElement).disabled = !has;
    const meta = Store.meta();
    $('#btn-free').classList.toggle('hidden', !(meta.completed.gonzalo || meta.completed.manuel));
    ui.screen('menu', true);
    ui.fade(0, 600);
    audio.play('menu');
    audio.setCrowd(0.6);
    audio.outdoors = true;
  }

  toSelect(free = false) {
    this.state = 'select';
    this.selFree = free;
    ui.screen('menu', false);
    ui.screen('select', true);
    $('.select-buttons .primary').textContent = free ? 'EXPLORAR' : 'COMENZAR HISTORIA';
    const meta = Store.meta();
    for (const id of ['gonzalo', 'manuel'] as CharId[]) $(`[data-badge="${id}"]`).textContent = meta.completed[id] ? '★ Historia completada' : '';
    this.pick(Store.meta().lastChar ?? 'gonzalo');
  }
  pick(id: CharId) {
    this.selected = id;
    document.querySelectorAll('.card').forEach((c) => c.classList.toggle('on', (c as HTMLElement).dataset.char === id));
    const ch = this.selChars[id];
    ch.anim = 'cheer'; ch.setExpr('happy');
    setTimeout(() => { if (this.selected === id) { ch.anim = 'present'; } }, 900);
    setTimeout(() => { if (this.selected === id) { ch.anim = 'idle'; ch.setExpr('neutral'); } }, 2200);
    const o = this.selChars[id === 'gonzalo' ? 'manuel' : 'gonzalo'];
    o.anim = 'idle'; o.setExpr('neutral');
    audio.confirm();
  }

  async startGame(pc: CharId, free: boolean, fromSave = false) {
    await ui.fade(1, 500);
    ['#menu', '#select', '#ending', '#credits', '#pause'].forEach((s) => $(s).classList.add('hidden'));
    this.director.reset();
    this.protagonist = pc;
    this.state = 'play';
    this.paused = false;
    this.populate(pc);
    const meta = Store.meta(); meta.lastChar = pc; Store.saveMeta(meta);
    ui.setChar(pc === 'gonzalo' ? 'GONZALO' : 'MANUEL', pc === 'gonzalo' ? '#2f7bff' : '#ff3b4a');
    const save = fromSave ? Store.game() : null;
    this.story = new Story(this, pc, free);
    if (save) {
      this.player.pos.set(...save.pos);
      this.player.camYaw = save.yaw;
      this.story.start({ step: save.step, minutes: save.minutes, flags: save.flags });
    } else if (free) {
      this.player.pos.set(2, 0, 20); this.player.camYaw = Math.PI;
      this.story.start();
    } else {
      this.player.pos.copy(this.school.poi.spawn); this.player.camYaw = Math.PI; this.player.char.yaw = Math.PI;
      this.story.start();
    }
    this.cam.release();
    ui.showHUD(true);
    audio.play('school');
    await ui.fade(0, 700);
    if (!save && !free) {
      ui.banner('7:00 AM · VIERNES', 'COLEGIO GANTE', 'Día de civil. Un día normal… por ahora.', false, 3600);
    }
    ui.lockHint(true);
  }

  finishStory(pc: CharId) {
    const meta = Store.meta();
    meta.completed[pc] = true; Store.saveMeta(meta);
    Store.clearGame();
    this.state = 'ending';
    this.input.unlock();
    ui.showHUD(false);
    ui.fade(0, 800);
    audio.play('ending');
    const other = pc === 'gonzalo' ? 'Manuel' : 'Gonzalo';
    $('#ending-title').textContent = pc === 'gonzalo' ? 'Gonzalo no lo vio venir' : 'Manuel nunca lo olvidaría';
    $('#ending-text').textContent = pc === 'gonzalo'
      ? 'Gonzalo descubrió que Manuel había sido empujado por Brayan, Kevin y Ulises. Demasiado tarde para evitar el reporte, pero justo a tiempo para deberle una torta. Muchas tortas.'
      : 'Manuel sólo quería lavarse las manos. Terminó con un reporte, una pelea que no empezó y una furia legendaria. Y nunca, jamás, cantó el rap de Vegetta777.';
    ($('#ending [data-act="other"]') as HTMLElement).textContent = `Vivirlo como ${other}`;
    ui.screen('ending', true);
  }

  save(auto = false) {
    if (!this.story || this.story.free) { if (!auto) ui.toast('En exploración libre no se guarda progreso de historia'); return; }
    Store.saveGame({
      char: this.protagonist, free: false, step: this.story.step, minutes: this.story.minutes,
      pos: [this.player.pos.x, this.player.pos.y, this.player.pos.z], yaw: this.player.camYaw, flags: this.story.flags, savedAt: Date.now(),
    });
    if (!auto) ui.toast('💾 Partida guardada'); else ui.toast('Progreso guardado', 1600);
  }

  setPause(on: boolean) {
    if (this.state !== 'play') return;
    this.paused = on;
    ui.screen('pause', on);
    if (on) { this.input.unlock(); audio.click(); } else { ui.screen('tab', false); ui.screen('map', false); ui.screen('settings', false); }
  }

  // ------------------------------------------------------------------ UI
  bindUI() {
    const click = (sel: string, fn: (e: HTMLElement) => void) => document.querySelectorAll(sel).forEach((el) => el.addEventListener('click', (ev) => { ev.stopPropagation(); audio.click(); fn(el as HTMLElement); }));
    document.querySelectorAll('button').forEach((b) => b.addEventListener('mouseenter', () => audio.hover()));
    click('#menu [data-act]', (el) => {
      const a = el.dataset.act;
      if (a === 'new' || a === 'select') this.toSelect(false);
      if (a === 'free') this.toSelect(true);
      if (a === 'continue') { const s = Store.game(); if (s) this.startGame(s.char, false, true); }
      if (a === 'settings') this.openSettings();
      if (a === 'credits') this.showCredits();
    });
    click('#select [data-act]', (el) => {
      if (el.dataset.act === 'back') { ui.screen('select', false); this.toMenu(); }
      if (el.dataset.act === 'start') { Store.clearGame(); this.startGame(this.selected, this.selFree); }
    });
    click('.card', (el) => this.pick(el.dataset.char as CharId));
    click('#pause [data-act]', (el) => {
      const a = el.dataset.act;
      if (a === 'resume') { this.setPause(false); this.input.lock(); }
      if (a === 'schedule') { this.fillTab(); ui.screen('tab', true); }
      if (a === 'map') { this.setMapFloor(floorOf(this.player.pos.y)); ui.screen('map', true); }
      if (a === 'settings') this.openSettings();
      if (a === 'save') this.save(false);
      if (a === 'mainmenu') { ui.fade(1, 400).then(() => this.toMenu()); }
    });
    click('#ending [data-act]', (el) => {
      const a = el.dataset.act;
      ui.screen('ending', false);
      if (a === 'other') this.startGame(this.protagonist === 'gonzalo' ? 'manuel' : 'gonzalo', false);
      if (a === 'free') this.startGame(this.protagonist, true);
      if (a === 'credits') this.showCredits();
      if (a === 'mainmenu') this.toMenu();
    });
    click('#settings [data-act="close"]', () => ui.screen('settings', false));
    click('.map-floors button', (el) => this.setMapFloor(Number(el.dataset.floor)));
    $('#credits').addEventListener('click', () => this.closeCredits());
    // ajustes
    document.querySelectorAll('#settings [data-set]').forEach((el) => {
      const inp = el as HTMLInputElement;
      inp.addEventListener('input', () => {
        const k = inp.dataset.set as keyof Settings;
        const s = this.settings as unknown as Record<string, number | boolean>;
        s[k] = inp.type === 'checkbox' ? inp.checked : Number(inp.value);
        Store.saveSettings(this.settings);
        this.applySettings();
      });
    });
    // clic en el lienzo = capturar mouse
    this.renderer.domElement.addEventListener('click', () => {
      if (this.state === 'play' && !this.paused) { this.input.lock(); }
    });
    document.addEventListener('pointerlockchange', () => {
      if (!document.pointerLockElement) this.unlockAt = performance.now();
      if (!document.pointerLockElement && this.state === 'play' && !this.paused && !ui.busy() && !this.director.active) this.setPause(true);
    });
  }
  setMapFloor(f: number) {
    this.mapFloor = f;
    document.querySelectorAll('.map-floors button').forEach((b) => b.classList.toggle('on', Number((b as HTMLElement).dataset.floor) === f));
  }
  openSettings() {
    document.querySelectorAll('#settings [data-set]').forEach((el) => {
      const inp = el as HTMLInputElement;
      const v = (this.settings as unknown as Record<string, number | boolean>)[inp.dataset.set!];
      if (inp.type === 'checkbox') inp.checked = !!v; else inp.value = String(v);
    });
    ui.screen('settings', true);
  }
  showCredits() {
    this.state = 'credits';
    ui.screen('menu', false);
    const roll = $('.credits-roll');
    roll.style.animation = 'none'; void roll.offsetWidth; roll.style.animation = '';
    ui.screen('credits', true);
    audio.play('ending');
  }
  closeCredits() { ui.screen('credits', false); this.toMenu(); }

  fillTab() {
    const tbl = $('#schedule-table');
    const min = this.story?.minutes ?? 420;
    const cur = periodAt(min);
    tbl.innerHTML = PERIODS.map((p, i) => `<tr class="${i === cur ? 'now' : i < cur ? 'done' : ''}"><td>${fmtClock(p.start)}</td><td>${p.label}</td></tr>`).join('');
    const ml = $('#mission-list');
    const st = this.story;
    if (!st) { ml.innerHTML = ''; return; }
    if (st.free) { ml.innerHTML = `<div class="mission"><div class="mt">Exploración libre</div><div class="mo">Recorre la escuela, habla con todos y toma la clase que quieras.</div></div>`; return; }
    const items: string[] = [];
    const main = st.steps.findIndex((s) => s.id === 'main');
    items.push(`<div class="mission ${st.step > 0 ? 'done' : ''}"><div class="mt">Entrada</div><div class="mo">Entra a la secundaria</div></div>`);
    items.push(`<div class="mission ${st.step >= main ? 'done' : ''}"><div class="mt">Un día normal</div><div class="mo">Asiste a tus clases y sobrevive al receso</div></div>`);
    if (st.step >= main) items.push(`<div class="mission main"><div class="mt">★ Todo por un rap</div><div class="mo">${st.cur?.obj() ?? ''}</div></div>`);
    else items.push(`<div class="mission"><div class="mt">Actual</div><div class="mo">${st.cur?.obj() ?? ''}</div></div>`);
    ml.innerHTML = items.join('');
  }

  // ------------------------------------------------------------------ selección
  private buildSelectScene() {
    const s = this.selScene;
    s.background = new THREE.Color('#0f1424');
    s.fog = new THREE.Fog('#0f1424', 8, 22);
    s.add(new THREE.HemisphereLight('#8fb6ff', '#1a1020', 0.9));
    const key = new THREE.DirectionalLight('#fff2dd', 2.2); key.position.set(3, 6, 5); key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    s.add(key);
    const blue = new THREE.PointLight('#3f8bff', 25, 10); blue.position.set(-2.5, 2.5, 1.5); s.add(blue);
    const red = new THREE.PointLight('#ff3b4a', 25, 10); red.position.set(2.5, 2.5, 1.5); s.add(red);
    const floor = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.4, 0.3, 48), new THREE.MeshStandardMaterial({ color: '#2a2f45', roughness: 0.4, metalness: 0.2 }));
    floor.position.y = -0.15; floor.receiveShadow = true; s.add(floor);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(4.25, 0.04, 8, 64), new THREE.MeshStandardMaterial({ color: '#ffd23f', emissive: '#ffd23f', emissiveIntensity: 1.2 }));
    ring.rotation.x = Math.PI / 2; s.add(ring);
    // casilleros de fondo
    for (let i = 0; i < 12; i++) {
      const l = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.4, 0.5), new THREE.MeshStandardMaterial({ color: i % 2 ? '#2e6fb5' : '#c4552f', roughness: 0.5 }));
      const a = -0.9 + (i / 11) * 1.8;
      l.position.set(Math.sin(a) * 7, 1.2, -Math.cos(a) * 7); l.lookAt(0, 1.2, 0); s.add(l);
    }
    const g = new Character(LOOKS.gonzalo), m = new Character(LOOKS.manuel);
    g.position.set(-1.1, 0, 0); g.yaw = 0.25; m.position.set(1.1, 0, 0); m.yaw = -0.25;
    for (const c of [g, m]) { c.root.traverse((o) => { if ((o as THREE.Mesh).isMesh) o.castShadow = true; }); c.root.scale.setScalar(1.25); s.add(c.root); }
    this.selChars = { gonzalo: g, manuel: m };
  }

  // ------------------------------------------------------------------ bucle
  private noRender = false;
  /** Avanza la simulación en pasos fijos (para pruebas automáticas). */
  sim(sec: number, press: string[] = []) {
    this.noRender = true;
    const n = Math.round(sec * 30);
    for (let i = 0; i < n; i++) {
      for (const k of press) this.input.pressed.add(k);
      this.t += 1 / 30;
      if (this.state === 'play') this.framePlay(1 / 30);
      this.input.endFrame();
    }
    this.noRender = false;
  }

  private frame() {
    const dt = Math.min(0.05, this.clock.getDelta());
    this.t += dt;
    const inp = this.input;
    if (this.state === 'select') this.frameSelect(dt);
    else if (this.state === 'menu' || this.state === 'credits' || this.state === 'loading' || this.state === 'ending') this.frameMenu(dt);
    else if (this.state === 'play') this.framePlay(dt);
    if (inp.hit('Escape') && this.state === 'credits') this.closeCredits();
    inp.endFrame();
  }

  private frameMenu(dt: number) {
    this.menuT += dt;
    const t = this.menuT;
    if (this.state !== 'ending') {
      const a = t * 0.04;
      this.camera.position.set(Math.sin(a) * 26, 7.5 + Math.sin(t * 0.13) * 1.5, 30 + Math.cos(a) * 14);
      this.camera.lookAt(Math.sin(a * 0.7) * 6, 3.0, 12);
      this.npcs.playerPos.copy(this.camera.position);
      this.npcs.update(dt, this.t);
      this.school.update(dt, this.t, [], () => {});
      this.env.update(dt, this.t, new THREE.Vector3(0, 0, 15), false);
      this.effects.update(dt);
    }
    this.renderer.render(this.scene, this.camera);
  }

  private frameSelect(dt: number) {
    this.selT += dt;
    const c = this.selChars[this.selected];
    const a = Math.sin(this.selT * 0.3) * 1.0 + (this.selected === 'gonzalo' ? -0.25 : 0.25);
    const target = c.position.clone().add(new THREE.Vector3(0, 1.15, 0));
    const camPos = target.clone().add(new THREE.Vector3(Math.sin(a) * 3.6, 0.35, Math.cos(a) * 3.6));
    this.camera.position.lerp(camPos, Math.min(1, dt * 2));
    this.camera.lookAt(target);
    for (const ch of Object.values(this.selChars)) ch.update(dt);
    const inp = this.input;
    if (inp.hit('KeyA') || inp.hit('ArrowLeft')) this.pick('gonzalo');
    if (inp.hit('KeyD') || inp.hit('ArrowRight')) this.pick('manuel');
    if (inp.hit('Enter')) { Store.clearGame(); this.startGame(this.selected, this.selFree); }
    if (inp.hit('Escape')) { ui.screen('select', false); this.toMenu(); }
    this.renderer.render(this.selScene, this.camera);
  }

  private framePlay(dt: number) {
    const inp = this.input;
    const st = this.story!;
    // menús de juego
    // al salir del pointer lock con Esc el navegador ya pausó: ignorar ese mismo Esc
    if (inp.hit('Escape') && performance.now() - this.unlockAt > 400) {
      if (ui.isOpen('settings')) ui.screen('settings', false);
      else if (ui.isOpen('tab') || ui.isOpen('map')) { ui.screen('tab', false); ui.screen('map', false); if (!ui.isOpen('pause')) this.paused = false; }
      else this.setPause(!this.paused);
    }
    if (!ui.busy()) {
      if (inp.hit('Tab')) { const on = !ui.isOpen('tab'); this.fillTab(); ui.screen('tab', on); ui.screen('map', false); this.paused = on || ui.isOpen('pause'); if (on) inp.unlock(); }
      if (inp.hit('KeyM')) { const on = !ui.isOpen('map'); if (on) this.setMapFloor(floorOf(this.player.pos.y)); ui.screen('map', on); ui.screen('tab', false); this.paused = on || ui.isOpen('pause'); if (on) inp.unlock(); }
      if (inp.hit('KeyN')) this.cycleMapMode();
      if (inp.hit('Equal') || inp.hit('NumpadAdd') || inp.hit('BracketRight')) this.mapZoom = Math.min(5, this.mapZoom * 1.3);
      if (inp.hit('Minus') || inp.hit('NumpadSubtract') || inp.hit('Slash')) this.mapZoom = Math.max(1.2, this.mapZoom / 1.3);
    }
    if (ui.isOpen('map')) {
      if (inp.hit('Digit1')) this.setMapFloor(0);
      if (inp.hit('Digit2')) this.setMapFloor(1);
      drawOverview($('#map-canvas') as HTMLCanvasElement, this.mapView(), this.mapFloor, false);
    }
    if (this.paused) { this.renderer.render(this.scene, this.camera); return; }

    const cine = this.director.active;
    const blocked = cine || ui.busy();
    this.director.update(dt);
    st.update(dt);
    if (!blocked && inp.locked) this.player.look(inp);
    ui.lockHint(!inp.locked && !blocked);
    const obstacles = this.npcs.npcs.filter((n) => n.char.root.visible).map((n) => n.char.position);
    this.player.update(dt, blocked ? null : inp, obstacles);
    this.npcs.playerPos.copy(this.player.pos);
    this.npcs.update(dt, this.t);
    const actorPos = [this.player.pos, ...obstacles];
    this.school.update(dt, this.t, actorPos, () => audio.door());
    const indoors = this.school.isIndoors(this.player.pos);
    this.env.update(dt, this.t, this.player.pos, indoors);
    this.effects.update(dt);
    for (const id of this.director.iconOwners) this.effects.placeIcon('ic_' + id, this.charOf(id).headWorld(), this.t);
    this.cam.update(dt, this.player, indoors);
    ui.update(dt, inp);

    // música y ambiente según el momento del día
    const per = PERIODS[periodAt(st.minutes)];
    if (!cine && !st.running) audio.play(per.kind === 'recess' ? 'recess' : 'school');
    audio.outdoors = !indoors;
    audio.setCrowd(per.kind === 'class' ? (indoors ? 0.25 : 0.1) : indoors ? 0.45 : 1.0);

    // interacción
    this.interactTarget = null;
    if (!blocked && !st.running) {
      if (this.player.seat) {
        this.interactTarget = { label: 'Levantarse', key: 'E', action: () => this.player.stand() };
      } else {
        let best: { label: string; key: 'E' | 'F'; action: () => void } | null = null, bd = Infinity;
        for (const it of st.interactables()) {
          const d = it.pos.distanceTo(this.player.pos);
          if (d < it.r && d < bd && Math.abs(it.pos.y - this.player.pos.y) < 1.2) { bd = d; best = it; }
        }
        const n = this.npcs.nearestTalkable(this.player.pos, 2.2, (c) => st.canTalk(c));
        if (n && (!best || n.char.position.distanceTo(this.player.pos) < bd + 0.4)) {
          best = { label: `Hablar con ${n.name}`, key: 'F', action: () => this.talk(n) };
        }
        this.interactTarget = best;
      }
    }
    ui.prompt(this.interactTarget?.label ?? null, this.interactTarget?.key);
    if (this.interactTarget) {
      const k = this.interactTarget.key === 'E' ? 'KeyE' : 'KeyF';
      if (inp.consume(k) || (this.interactTarget.key === 'F' && inp.consume('KeyE'))) this.interactTarget.action();
    }

    // HUD: objetivo, distancia, minimapa
    const wp = st.waypoint();
    if (wp && !blocked) {
      const p = this.wpTmp.copy(wp).add(new THREE.Vector3(0, 2.1, 0));
      const dist = p.distanceTo(this.player.pos);
      p.project(this.camera);
      let x = (p.x * 0.5 + 0.5) * innerWidth, y = (-p.y * 0.5 + 0.5) * innerHeight;
      if (p.z > 1) { x = innerWidth - x; y = innerHeight - 40; }
      x = Math.max(40, Math.min(innerWidth - 40, x)); y = Math.max(80, Math.min(innerHeight - 40, y));
      ui.waypoint(x, y, dist > 2.5 ? `${Math.round(dist)} m` : null);
      const fl = wp.y > FH - 0.5 ? 1 : 0, pf = this.player.pos.y > FH - 0.5 ? 1 : 0;
      ui.setDistance(fl !== pf ? (fl ? '↑ Está en el 2º piso (escaleras a los lados del edificio)' : '↓ Está en la planta baja') : this.school.zoneAt(this.player.pos));
    } else { ui.waypoint(0, 0, null); ui.setDistance(this.school.zoneAt(this.player.pos)); }
    this.updateRoute(dt, blocked ? null : wp);
    if (this.noRender) return;
    if (this.settings.mapMode === 1) drawMinimap($('#minimap') as HTMLCanvasElement, this.mapView(), this.mapZoom);
    else if (this.settings.mapMode === 2) drawOverview($('#bigmap') as HTMLCanvasElement, this.mapView(), floorOf(this.player.pos.y), true);

    this.renderer.render(this.scene, this.camera);
  }

  private talk(n: import('./chars/npc').NPC) {
    const st = this.story!;
    if (st.onTalk(n)) return;
    if (n.state === 'scripted') return;
    st.run(async () => {
      const d = this.director;
      const prevState = n.state;
      const prevAnim = n.char.anim;
      n.mover.cancel();
      const seated = prevAnim.startsWith('sit') || prevAnim === 'type';
      if (!seated) d.faceNow(n.id, this.player.char.position);
      d.faceNow(this.protagonist, n.char.position);
      n.char.lookTarget = this.player.char.position;
      await d.say(n.id, n.nextLine(), { anim: seated ? prevAnim : 'talk' });
      n.char.lookTarget = null;
      n.char.anim = prevAnim === 'walk' || prevAnim === 'run' ? 'idle' : prevAnim;
      n.mover.faceYaw = null;
      if (prevState === 'chat' || prevState === 'wander') n.timer = 0.5;
    });
  }
}

const game = new Game();
(window as unknown as { game: Game }).game = game;
game.boot();
