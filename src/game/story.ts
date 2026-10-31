import * as THREE from 'three';
import type { Game } from '../main';
import type { Phase, NPC } from '../chars/npc';
import { ui } from '../ui/ui';
import { audio } from '../core/audio';
import { runClass } from './classes';
import type { CharId } from '../core/save';
import { FH } from '../world/school';

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

export interface Period { start: number; label: string; kind: Phase['kind']; room?: string; subject?: string; teacher?: string }
export const PERIODS: Period[] = [
  { start: 420, label: 'Entrada a la escuela', kind: 'arrival' },
  { start: 435, label: 'Matemáticas', kind: 'class', room: '2A', subject: 'math', teacher: 'ramirez' },
  { start: 485, label: 'Español', kind: 'class', room: '2A', subject: 'espanol', teacher: 'lupita' },
  { start: 535, label: 'Ciencias', kind: 'class', room: 'lab', subject: 'ciencias', teacher: 'herrera' },
  { start: 585, label: 'Historia', kind: 'class', room: '2A', subject: 'historia', teacher: 'galindo' },
  { start: 635, label: 'Receso', kind: 'recess' },
  { start: 665, label: 'Inglés', kind: 'class', room: '2A', subject: 'ingles', teacher: 'karen' },
  { start: 715, label: 'Tecnología', kind: 'class', room: 'comp', subject: 'tecnologia', teacher: 'tono' },
  { start: 765, label: 'Tiempo libre', kind: 'free' },
];
export const DAY_END = 900;
export function periodAt(min: number) {
  let idx = 0;
  for (let i = 0; i < PERIODS.length; i++) if (min >= PERIODS[i].start) idx = i;
  return idx;
}
export function fmtClock(min: number) {
  const h = Math.floor(min / 60), m = Math.floor(min % 60);
  return `${h}:${m.toString().padStart(2, '0')}`;
}
const ROOM_HINT: Record<string, string> = { '2A': 'salón 2° A (planta baja)', lab: 'Laboratorio (2º piso)', comp: 'salón de Computación (2º piso)' };

export interface Interactable { pos: THREE.Vector3; r: number; label: string; key: 'E' | 'F'; action: () => void; }

interface StepDef {
  id: string;
  mission: string;
  obj: () => string;
  period: number;
  enter?: (fromLoad: boolean) => void;
  check?: () => void;
  target?: () => THREE.Vector3 | null;
}

const BATH_DOOR_OUT = V(22.1, 0, 4.4);
const SINK = V(21.15, 0, -4.0);

export class Story {
  step = 0;
  flags: Record<string, boolean> = {};
  minutes = 420;
  running = false;
  steps: StepDef[];
  other: CharId;
  private classDone = new Set<number>();
  private lastPeriod = -1;

  constructor(public g: Game, public pc: CharId, public free: boolean) {
    this.other = pc === 'gonzalo' ? 'manuel' : 'gonzalo';
    this.steps = free ? [] : this.buildSteps();
  }
  get d() { return this.g.director; }
  get npcs() { return this.g.npcs; }
  get cur(): StepDef | undefined { return this.steps[this.step]; }
  get pcName() { return this.pc === 'gonzalo' ? 'Gonzalo' : 'Manuel'; }

  // ---------------------------------------------------------------- pasos
  private buildSteps(): StepDef[] {
    const pc = this.pc;
    const S: StepDef[] = [];
    S.push({
      id: 'arrive', mission: 'Un día normal', period: 0, obj: () => 'Entra a la secundaria',
      enter: () => { this.setPeriodPhase(0); },
      target: () => V(0, 0, 47),
      check: () => { if (this.g.player.pos.z < 46.6) this.run(() => this.arrivalScene()); },
    });
    S.push({
      id: 'juan', mission: 'Un día normal', period: 0, obj: () => 'Busca a Juan junto al asta bandera (F para hablar)',
      enter: () => {
        this.setPeriodPhase(0);
        this.npcs.script(['juan']);
        this.d.place('juan', V(6.4, 0, 28.6), Math.PI * 0.85, 'idle');
      },
      target: () => this.g.charOf('juan').position,
    });
    const classStep = (period: number) => {
      const p = PERIODS[period];
      S.push({
        id: 'class_' + p.subject, mission: 'Un día normal', period,
        obj: () => (this.g.player.seat?.room === p.room ? 'Pon atención en clase' : `Ve al ${ROOM_HINT[p.room!]} y siéntate (E)`),
        enter: (fromLoad) => {
          this.minutes = Math.max(this.minutes, p.start);
          this.setPeriodPhase(period, fromLoad);
          if (!fromLoad) this.bell(`NUEVA CLASE: ${p.label.toUpperCase()}`);
        },
        target: () => (this.g.player.seat ? null : this.seatTarget(p.room!)),
        check: () => {
          if (this.g.player.seat?.room === p.room) this.run(async () => { await runClass(this.g, p.subject!, p.room!, p.teacher!); this.minutes = PERIODS[period + 1].start - 1; this.next(); });
        },
      });
    };
    classStep(1); classStep(2); classStep(3); classStep(4);
    S.push({
      id: 'recess', mission: '¡Receso!', period: 5,
      obj: () => {
        const a = this.flags.bought ? '✔' : '○', b = this.flags.juanRecess ? '✔' : '○';
        return `${a} Compra algo en la cooperativa   ${b} ${pc === 'gonzalo' ? 'Juega una reta con Juan en las canchas' : 'Siéntate con Juan en las mesas'}`;
      },
      enter: (fromLoad) => {
        this.minutes = Math.max(this.minutes, 635);
        this.setPeriodPhase(5, fromLoad);
        if (this.g.player.seat) this.g.player.stand();
        if (!fromLoad) { audio.bell(); ui.banner('10:35', '¡RECESO!', 'Treinta minutos de libertad'); }
        this.npcs.script(['juan']);
        if (pc === 'gonzalo') this.d.place('juan', V(44, 0, 22.5), -Math.PI / 2, 'dribble');
        else this.d.place('juan', V(-30, 0, 18.6), Math.PI / 2, 'eat');
      },
      target: () => (!this.flags.bought ? V(-42.3, 0, 22) : !this.flags.juanRecess ? this.g.charOf('juan').position : null),
      check: () => {
        if (this.flags.bought && this.flags.juanRecess && !this.flags.recessDone) { this.flags.recessDone = true; ui.toast('Suena la campana en un momento…'); this.minutes = Math.max(this.minutes, 662); }
        if (this.minutes >= 665) { this.npcs.unscript(['juan']); this.next(); }
      },
    });
    classStep(6); classStep(7);
    // misión principal
    S.push({
      id: 'main', mission: 'Todo por un rap', period: 8,
      obj: () => (pc === 'gonzalo' ? 'Ve al baño de hombres (planta baja)' : this.g.school.zoneAt(this.g.player.pos) === 'BAÑO HOMBRES' ? 'Lávate las manos en el lavabo (E)' : 'Lávate las manos de tinta en el baño de hombres (planta baja)'),
      enter: (fromLoad) => {
        this.minutes = Math.max(this.minutes, 765);
        this.setPeriodPhase(8, fromLoad);
        if (this.g.player.seat) this.g.player.stand();
        if (!fromLoad) this.run(() => this.mainUnlock());
        this.setupPreIncident();
      },
      target: () => (pc === 'gonzalo' ? BATH_DOOR_OUT : this.g.school.zoneAt(this.g.player.pos) === 'BAÑO HOMBRES' ? SINK : BATH_DOOR_OUT),
      check: () => {
        const p = this.g.player.pos;
        if (pc === 'gonzalo' && p.y < 1 && Math.abs(p.x - 22.1) < 1.6 && p.z < 5.6 && p.z > 2.2) this.run(() => this.incident());
      },
    });
    if (pc === 'gonzalo') {
      S.push({
        id: 'investigate', mission: 'La verdad del baño', period: 8,
        obj: () => `Habla con los testigos (${['wDiego', 'wSofia', 'wPepe'].filter((f) => this.flags[f]).length}/3): Diego, Sofía y Don Pepe`,
        enter: () => {
          this.setPeriodPhase(8, true);
          this.npcs.script(['diego', 'sofia', 'pepe', 'juan']);
          this.d.place('diego', V(23.0, 0, -9.0), 0, 'idle');
          this.d.place('sofia', V(25.5, 0, 5.0), -Math.PI / 2, 'crossed');
          this.d.place('pepe', V(36.5, 0, 4.5), -Math.PI / 2, 'crossed');
          this.d.place('juan', V(19.5, 0, 5.2), Math.PI / 2, 'idle');
          for (const id of ['manuel', 'brayan', 'kevin', 'ulises']) this.npcs.script([id]);
          this.d.place('brayan', V(44, 0, 40), 0, 'dribble'); this.d.place('kevin', V(45, 0, 41), 0, 'cheer'); this.d.place('ulises', V(43, 0, 41), 0, 'idle');
          this.d.place('manuel', V(1.1, 0, -9.6), Math.PI, 'sitSad');
          this.d.place('lupita', V(3.6, 0, -9.0), -Math.PI * 0.8, 'crossed');
          this.npcs.script(['lupita']);
        },
        target: () => (!this.flags.wDiego ? this.g.charOf('diego').position : !this.flags.wSofia ? this.g.charOf('sofia').position : !this.flags.wPepe ? this.g.charOf('pepe').position : null),
        check: () => { if (this.flags.wDiego && this.flags.wSofia && this.flags.wPepe) this.next(); },
      });
      S.push({
        id: 'toDir', mission: 'La verdad del baño', period: 8, obj: () => 'Ve a la ventana de la Dirección',
        enter: (fromLoad) => {
          if (!fromLoad) ui.toast('Ahora sabes la verdad. Manuel está en la Dirección…', 4000);
          this.npcs.script(['manuel', 'lupita']);
          this.d.place('manuel', V(1.1, 0, -9.6), Math.PI, 'sitSad');
          this.d.place('lupita', V(3.6, 0, -9.0), -Math.PI * 0.8, 'crossed');
        },
        target: () => V(-1.5, 0, 3.4),
        check: () => { if (this.g.player.pos.distanceTo(V(-1.5, 0, 3.4)) < 1.6) this.run(() => this.gonzaloFinale()); },
      });
    }
    return S;
  }

  // ---------------------------------------------------------------- ciclo
  start(fromSave?: { step: number; minutes: number; flags: Record<string, boolean> }) {
    if (fromSave) { this.step = fromSave.step; this.minutes = fromSave.minutes; this.flags = { ...fromSave.flags }; }
    if (this.free) {
      this.lastPeriod = -1;
      this.minutes = Math.max(this.minutes, 640);
      this.updateFree(0);
      ui.setMission('Exploración libre', 'Explora la escuela. Siéntate en un salón durante una clase para tomarla.');
      return;
    }
    this.enter(this.step, !!fromSave);
  }
  enter(i: number, fromLoad = false) {
    this.step = i;
    const s = this.cur;
    if (!s) return;
    s.enter?.(fromLoad);
    this.refreshHUD();
    if (!fromLoad) this.g.save(true);
  }
  next() { this.running = false; this.enter(this.step + 1); }
  run(fn: () => Promise<void>) {
    if (this.running) return;
    this.running = true;
    fn().catch((e) => { console.error(e); }).finally(() => { this.running = false; this.refreshHUD(); });
  }
  refreshHUD() {
    if (this.free) return;
    const s = this.cur;
    if (s) ui.setMission(s.mission, s.obj());
  }

  setPeriodPhase(idx: number, instant = false) {
    const p = PERIODS[idx];
    this.npcs.setPhase({ kind: p.kind, room: p.room, subject: p.subject }, instant);
  }
  bell(title: string) { audio.bell(); ui.banner(fmtClock(this.minutes), title); }

  seatTarget(room: string) {
    const r = this.g.school.room(room);
    const seat = r.seats[this.g.playerSeatIndex];
    return seat ? seat.pos : V(r.doorX, r.floor * FH, 0.8);
  }

  update(dt: number) {
    // reloj escolar
    const s = this.cur;
    if (this.free) { this.updateFree(dt); return; }
    if (!s) return;
    if (!this.running && !this.d.active) {
      const next = PERIODS[s.period + 1]?.start ?? DAY_END;
      let cap = next - 1;
      const per = PERIODS[s.period];
      if (per.kind === 'class') cap = this.g.player.seat?.room === per.room ? next - 1 : per.start + 4; // llega tarde, el reloj espera
      if (s.id === 'recess') cap = 665;
      if (s.id === 'juan' || s.id === 'arrive') cap = 434;
      const rate = s.id === 'recess' ? (this.flags.recessDone ? 2 : 0.33) : 0.4;
      this.minutes = Math.max(this.minutes, per.start, Math.min(cap, this.minutes + dt * rate));
      s.check?.();
    }
    ui.setClock(fmtClock(this.minutes), PERIODS[s.period].label);
    if (!this.running) ui.setMission(s.mission, s.obj());
  }

  private updateFree(dt: number) {
    if (!this.running && !this.d.active) this.minutes += dt * 0.5;
    if (this.minutes >= DAY_END) this.minutes = 420;
    const idx = periodAt(this.minutes);
    if (idx !== this.lastPeriod) {
      const first = this.lastPeriod === -1;
      this.lastPeriod = idx;
      this.setPeriodPhase(idx, first);
      if (!first) this.bell(PERIODS[idx].kind === 'class' ? `NUEVA CLASE: ${PERIODS[idx].label.toUpperCase()}` : PERIODS[idx].label.toUpperCase());
    }
    const p = PERIODS[idx];
    ui.setClock(fmtClock(this.minutes), p.label);
    if (p.kind === 'class' && this.g.player.seat?.room === p.room && !this.classDone.has(this.minutesKey(idx)) && !this.running) {
      this.classDone.add(this.minutesKey(idx));
      this.run(async () => { await runClass(this.g, p.subject!, p.room!, p.teacher!); this.minutes = (PERIODS[idx + 1]?.start ?? DAY_END) - 1; });
    }
  }
  private minutesKey(idx: number) { return idx + Math.floor(this.minutes / DAY_END) * 100; }

  waypoint(): THREE.Vector3 | null {
    if (this.free || this.running || this.d.active) return null;
    return this.cur?.target?.() ?? null;
  }

  // ---------------------------------------------------------------- interacción
  interactables(): Interactable[] {
    const out: Interactable[] = [];
    const g = this.g, p = g.player;
    const poi = g.school.poi;
    const pos = p.pos;
    const fl = pos.y > FH - 0.5 ? 1 : 0;
    // sillas
    if (!p.seat) {
      for (const r of g.school.rooms) {
        if (r.floor !== fl || pos.x < r.x0 - 1 || pos.x > r.x1 + 1 || pos.z > 2.5) continue;
        for (const s of r.seats) if (!s.occupant && s.pos.distanceTo(pos) < 1.1 && !this.seatTaken(s.pos)) out.push({ pos: s.pos, r: 1.1, label: 'Sentarse', key: 'E', action: () => p.sit(s) });
      }
    }
    if (fl === 0) {
      out.push({ pos: poi.coopCounter, r: 1.8, label: 'Comprar en la cooperativa', key: 'E', action: () => this.run(() => this.buy()) });
      out.push({ pos: poi.fountain, r: 1.5, label: 'Tomar agua', key: 'E', action: () => this.run(() => this.drink()) });
      out.push({ pos: V(-15, 0, 13.3), r: 1.8, label: 'Leer el periódico mural', key: 'E', action: () => this.run(() => this.mural()) });
      out.push({ pos: SINK, r: 1.2, label: 'Lavarse las manos', key: 'E', action: () => this.run(() => (this.cur?.id === 'main' && this.pc === 'manuel' ? this.incident() : this.sink())) });
      for (const hx of [36, 58]) out.push({ pos: V(hx, 0, 22.3), r: 2.2, label: 'Tirar a la canasta', key: 'E', action: () => this.run(() => this.shoot(hx)) });
    } else {
      if (poi.bookshelf) out.push({ pos: poi.bookshelf.clone().setY(FH), r: 1.6, label: 'Leer un libro', key: 'E', action: () => this.run(() => this.book()) });
      if (poi.labSkeleton) out.push({ pos: poi.labSkeleton.clone().setY(FH), r: 1.6, label: 'Saludar al modelo anatómico', key: 'E', action: () => this.run(() => this.skeleton()) });
    }
    return out;
  }

  /** Conversación especial según el momento de la historia (o null si es charla normal). */
  specialTalk(n: NPC): (() => Promise<void>) | null {
    const id = n.id;
    const s = this.cur?.id;
    if (s === 'juan' && id === 'juan') return async () => { await this.juanMorning(); this.npcs.unscript(['juan']); this.next(); };
    if (s === 'recess' && id === 'juan' && !this.flags.juanRecess) return () => this.juanRecess();
    if (s === 'recess' && id === 'cuca') return () => this.buy();
    if (s === 'investigate') {
      if (id === 'diego' && !this.flags.wDiego) return () => this.witness('diego');
      if (id === 'sofia' && !this.flags.wSofia) return () => this.witness('sofia');
      if (id === 'pepe' && !this.flags.wPepe) return () => this.witness('pepe');
      if (id === 'juan') return async () => { await this.d.say('juan', 'Pregúntale a Diego, a Sofía y a Don Pepe. Algo vieron, estoy seguro.'); };
    }
    if ((s === 'main' || s === 'investigate' || s === 'toDir') && ['brayan', 'kevin', 'ulises'].includes(id)) {
      const lines: Record<string, string> = { brayan: '¿Qué? Nosotros no sabemos nada. Estábamos aquí desde hace… mucho.', kevin: 'Jajaja… digo, no, ¿cuál baño?', ulises: 'Yo ni sé dónde quedan los baños.' };
      return async () => { await this.d.say(id, lines[id], { expr: 'smug' }); };
    }
    if (this.free && id === this.other) {
      if (this.flags.reconciled) {
        return async () => {
          if (this.pc === 'gonzalo') await this.d.say('manuel', 'Ya te dije: torta de jamón. Con Gansito. No se te olvide.', { expr: 'smug' });
          else await this.d.say('gonzalo', '¡La torta va, la torta va! Ya no me lo recuerdes.', { expr: 'worried' });
        };
      }
      return async () => {
        if (this.pc === 'gonzalo') {
          await this.d.say('manuel', '…', { expr: 'angry' });
          await this.d.say('gonzalo', 'Oye, Manuel… perdón por lo del baño. No vi que te empujaron.', { expr: 'worried' });
          await this.d.say('manuel', 'Me pusieron reporte por tu culpa.', { expr: 'angry' });
          await this.d.say('gonzalo', 'Ya sé, ya sé. ¿Te invito una torta de la cooperativa?', { expr: 'happy' });
          await this.d.say('manuel', '…Que sea de jamón. Y con Gansito.', { expr: 'smug' });
        } else {
          await this.d.say('gonzalo', 'Manuel… oye… lo del baño… ¿seguimos siendo compas?', { expr: 'worried' });
          await this.d.say('manuel', 'Me debes una torta. Y una disculpa con la directora.', { expr: 'angry' });
          await this.d.say('gonzalo', 'Va, va. Las dos cosas. ¡Pero no me cantes el rap de Vegetta!', { expr: 'happy' });
          await this.d.say('manuel', 'Nunca. Jamás. En la vida.', { expr: 'furious' });
        }
        this.g.charOf('manuel').setExpr('neutral');
        this.g.charOf('manuel').redTarget = 0;
        this.flags.reconciled = true;
      };
    }
    return null;
  }
  /** ¿Se puede hablar con este NPC ahora mismo? */
  canTalk(n: NPC) { return n.state !== 'scripted' || !!this.specialTalk(n); }
  /** Un personaje colocado por la historia puede estar sentado sin marcar la silla. */
  private seatTaken(p: THREE.Vector3) {
    return this.npcs.npcs.some((n) => n.char.position.distanceToSquared(p) < 0.2);
  }
  /** Conversaciones especiales según la historia. Devuelve true si se manejó. */
  onTalk(n: NPC): boolean {
    const f = this.specialTalk(n);
    if (!f) return false;
    this.run(f);
    return true;
  }

  // ---------------------------------------------------------------- escenas pequeñas
  private async arrivalScene() {
    const d = this.d;
    d.begin();
    d.place(this.pc, this.g.player.pos.clone().setZ(46.4), Math.PI);
    d.place('beto', V(2.4, 0, 45.0), -Math.PI / 2, 'idle');
    d.faceNow('beto', this.pc); d.faceNow(this.pc, 'beto');
    await d.twoShot(this.pc, 'beto', 0, 3.4, 0.5);
    await d.say('beto', `¡Buenos días, joven ${this.pcName}! Hoy es día de civil, ¿eh? Se ve muy ${this.pc === 'gonzalo' ? 'azulito' : 'rojito'}.`, { expr: 'happy' });
    if (this.pc === 'gonzalo') await d.say('gonzalo', 'Buenos días, Don Beto. ¡Hoy va a ser un gran día, lo presiento!', { expr: 'happy' });
    else await d.say('manuel', 'Buenos días, Don Beto. Ojalá sea un día tranquilo.', { expr: 'neutral' });
    await d.say('beto', 'Ándele, pásele. Su amigo Juan anda por el asta bandera.');
    d.end();
    this.npcs.unscript([]);
    this.next();
  }

  private async juanMorning() {
    const d = this.d;
    d.begin();
    d.face('juan', this.pc); d.face(this.pc, 'juan');
    await d.wait(0.3);
    await d.twoShot(this.pc, 'juan', 0.8, 3, 0.45);
    if (this.pc === 'gonzalo') {
      await d.say('juan', '¡Gonzalo! ¿Hiciste la tarea de mate?', { expr: 'happy' });
      const c = await d.choose(['Obvio. Bueno, la mitad.', '¿Había tarea?', 'La hice en el camión, cuenta como hecha.']);
      if (c === 0) await d.say('gonzalo', 'Obvio. Bueno… la mitad. La otra mitad es "pensamiento abstracto".', { expr: 'smug' });
      if (c === 1) await d.say('gonzalo', '¿Había tarea? ¿Desde cuándo hay tarea?', { expr: 'surprised' });
      if (c === 2) await d.say('gonzalo', 'La hice en el camión. Con letra de terremoto, pero hecha.', { expr: 'happy' });
      await d.say('juan', 'Jaja. Oye, en el receso echamos una reta en las canchas, ¿va?');
      await d.say('gonzalo', '¡Va! Hoy siento que nada puede salir mal.', { expr: 'happy' });
      await d.say('juan', 'No digas eso… siempre que alguien dice eso, algo sale mal.', { expr: 'worried' });
    } else {
      await d.say('juan', '¡Manuel! ¿Qué onda? Te ves desvelado.', { expr: 'happy' });
      const c = await d.choose(['Me dormí tarde viendo videos.', 'Estoy bien, gracias.', '(Bostezar dramáticamente)']);
      if (c === 0) await d.say('manuel', 'Me dormí tarde viendo videos. De Minecraft. Muchos.', { expr: 'bored' });
      if (c === 1) await d.say('manuel', 'Estoy bien, gracias. Sólo quiero que hoy sea un día tranquilo.', { expr: 'neutral' });
      if (c === 2) { d.anim('manuel', 'cheer'); await d.say('manuel', '¡Aaaaaaahhhhh! Perdón. Sí, me desvelé.', { expr: 'bored' }); d.anim('manuel', 'idle'); }
      await d.say('juan', 'Oye, ten cuidado con Brayan y sus amigos. Andan con la onda del rap de Vegetta777, molestando a todos.', { expr: 'worried' });
      await d.say('manuel', 'Ugh. Ojalá no se acuerden de mí.', { expr: 'worried' });
    }
    await d.say('juan', '¡Ya va a sonar la campana! Vámonos al salón.');
    d.end();
  }

  private async juanRecess() {
    const d = this.d;
    d.begin();
    d.face(this.pc, 'juan'); d.face('juan', this.pc);
    await d.twoShot(this.pc, 'juan', 0.6, 3.2, 0.5);
    if (this.pc === 'gonzalo') {
      await d.say('juan', '¡Llegaste! A ver si encestas una, que la última vez le diste a una paloma.', { expr: 'happy' });
      await d.say('gonzalo', 'La paloma se atravesó. Fue su culpa.', { expr: 'smug' });
      d.place(this.pc, V(37.6, 0, 22.3), -Math.PI / 2, 'idle');
      d.place('juan', V(39.5, 0, 23.5), -Math.PI / 2, 'idle');
      await d.shot(V(41.5, 2.2, 25.5), V(35, 2.6, 22.3), 0.8);
      const ok = await ui.qteMash('¡TIRO DE TRES!', 'KeyE', 8, 3, 'Presiona E rápido para tomar impulso');
      d.anim(this.pc, 'jump'); audio.whoosh();
      await d.wait(0.4);
      if (ok >= 1) { d.comic('¡CANASTA!', V(35, 3.4, 22.3), '#ffd23f', 1); audio.correct(); d.anim('juan', 'cheer'); await d.say('juan', '¡No manches! ¡Ni tocó el aro!', { expr: 'surprised' }); }
      else { d.comic('¡CLONK!', V(35, 3.4, 22.3), '#ff8a65', 1); audio.bonk(); await d.say('juan', 'Le diste al tablero… y a mi autoestima.', { expr: 'bored' }); }
      d.anim(this.pc, 'idle');
      await d.say('juan', 'Al rato que salgamos de Tecnología echamos otra. Ahorita voy por agua.');
    } else {
      await d.say('juan', 'Siéntate, Manuel. Te aparté lugar.', { expr: 'happy' });
      d.place(this.pc, V(-30, 0, 20.4), Math.PI / 2, 'sit');
      d.face(this.pc, 'juan');
      await d.twoShot(this.pc, 'juan', 0.6, 3, 0.4);
      await d.say('manuel', 'Gracias. Aquí nadie me molesta.', { expr: 'happy' });
      // presagio: los tres chavos
      this.npcs.script(['brayan', 'kevin', 'ulises']);
      d.place('brayan', V(-24, 0, 20), -Math.PI / 2); d.place('kevin', V(-24, 0, 21.2), -Math.PI / 2); d.place('ulises', V(-24, 0, 18.8), -Math.PI / 2);
      d.walk('brayan', V(-28.6, 0, 20.4)); d.walk('kevin', V(-28.9, 0, 21.6)); await d.walk('ulises', V(-28.9, 0, 19.2));
      d.face('brayan', this.pc); d.face('kevin', this.pc); d.face('ulises', this.pc);
      d.anim(this.pc, 'sitSad');
      await d.overShoulder(this.pc, 'brayan', 0.5);
      await d.say('kevin', '¡Manuel! ¿Te sabes el rap de Vegetta777?', { expr: 'smug' });
      await d.say('brayan', 'Dicen que te lo sabes completito. Cántatelo, ¿no?', { expr: 'smug' });
      const c = await d.choose(['No.', 'No me lo sé.', '(Ignorarlos y comer tu torta)']);
      if (c === 0) await d.say('manuel', 'No.', { expr: 'angry' });
      if (c === 1) await d.say('manuel', 'No me lo sé. Ni me gusta.', { expr: 'worried' });
      if (c === 2) { d.anim(this.pc, 'eat'); await d.say('manuel', '(…Mastica… mastica… no hagas contacto visual…)', { expr: 'bored' }); }
      await d.say('juan', 'Ya déjenlo, ¿no? Vayan a molestar a las palomas.', { expr: 'angry' });
      await d.say('brayan', 'Al rato te lo vamos a sacar, Manuel. Ya verás.', { expr: 'smug' });
      d.walk('brayan', V(-15, 0, 26)); d.walk('kevin', V(-14, 0, 27)); d.walk('ulises', V(-15, 0, 28));
      await d.wait(1);
      this.npcs.unscript(['brayan', 'kevin', 'ulises']);
      await d.twoShot(this.pc, 'juan', 0.5, 3, 0.4);
      await d.say('juan', 'No les hagas caso. Se aburren rápido.', { expr: 'worried' });
      await d.say('manuel', 'Eso espero…', { expr: 'sad' });
      d.place(this.pc, V(-30, 0, 21.4), Math.PI / 2, 'idle');
    }
    this.flags.juanRecess = true;
    d.end();
  }

  private async buy() {
    const d = this.d;
    d.begin(false);
    d.face('cuca', this.pc); d.face(this.pc, 'cuca');
    await d.twoShot(this.pc, 'cuca', 0.5, 2.6, 0.4);
    await d.say('cuca', '¿Qué va a llevar, mijo?', { expr: 'happy' });
    const c = await d.choose(['Torta de jamón ($25)', 'Tostitos preparados ($30)', 'Agua de horchata ($12)', 'Un Gansito ($14)']);
    const resp = [
      'Una torta de jamón, con su chile y todo. ¡Provecho!',
      'Tostitos con salsa, limón, cueritos y amor. Bueno, sin cueritos.',
      'Horchata bien fresquecita. Del garrafón de la esperanza.',
      'Un Gansito. Recuérdame… bueno, ya sabes el resto.',
    ];
    audio.pop();
    await d.say('cuca', resp[c], { expr: 'happy' });
    d.anim(this.pc, 'eat');
    await d.wait(1.2);
    d.anim(this.pc, 'idle');
    if (!this.flags.bought) ui.toast('✔ Compraste algo en la cooperativa');
    this.flags.bought = true;
    d.end();
  }
  private async drink() {
    const d = this.d; d.begin(false);
    d.anim(this.pc, 'bow'); audio.bubble(); await d.wait(1.2); audio.bubble(); await d.wait(0.6);
    d.anim(this.pc, 'idle');
    await d.say(this.pc, ['Ahh. Agua con sabor a tubería. Delicioso.', 'Hidratación nivel secundaria.', 'Sabe a… metal. Y a nostalgia.'][Math.floor(Math.random() * 3)]);
    d.end();
  }
  private async mural() {
    const d = this.d; d.begin(false);
    await d.shot(V(-15, 1.5, 15.2), V(-15, 1.3, 12.6), 0.6);
    await d.narrate('«Concurso de cuentos: tema libre (no se aceptan cuentos sobre el baño, Brayan).»');
    await d.narrate('«Se busca: balón perdido. Si lo encuentras, regrésalo a Educación Física. Recompensa: nada.»');
    d.end();
  }
  private async sink() {
    const d = this.d;
    d.begin(false);
    d.place(this.pc, SINK, -Math.PI / 2, 'wash'); audio.water(true);
    await d.wait(1.6); audio.water(false); d.anim(this.pc, 'idle');
    await d.say(this.pc, 'Manos limpias. Higiene ante todo.');
    d.end();
  }
  private async shoot(hx: number) {
    const d = this.d; d.begin(false);
    const ok = await ui.qteMash('¡A LA CANASTA!', 'KeyE', 6, 2.5, 'Presiona E rápido');
    d.anim(this.pc, 'jump'); audio.whoosh(); await d.wait(0.4);
    const ringX = hx < 47 ? 34.9 : 59.1;
    if (ok >= 1) { d.comic('¡SWISH!', V(ringX, 3.4, 22.3)); audio.correct(); } else { d.comic('¡FALLÓ!', V(ringX, 3.4, 22.3), '#ff8a65'); audio.bonk(); }
    d.anim(this.pc, 'idle'); d.end();
  }
  private async book() {
    const d = this.d; d.begin(false);
    const titles = ['«El Principito»', '«Cómo sobrevivir a la secundaria», tomo 3', '«Historia de México para gente con sueño»', '«Química para no explotar»', '«100 chistes para el recreo»'];
    await d.narrate(`Tomas ${titles[Math.floor(Math.random() * titles.length)]} y lees un par de páginas.`);
    await d.say(this.pc, 'Interesante… creo. Ya lo leeré en vacaciones. Tal vez.');
    d.end();
  }
  private async skeleton() {
    const d = this.d; d.begin(false);
    d.anim(this.pc, 'raise');
    await d.say(this.pc, 'Buenos días, Don Huesos. ¿Usted también vino en día de civil?', { expr: 'happy' });
    await d.narrate('El modelo anatómico no responde. Pero sabes que te escuchó.');
    d.end();
  }

  private async mainUnlock() {
    const d = this.d;
    audio.bell();
    await ui.banner('12:45', 'TIEMPO LIBRE', '', false, 2200);
    audio.stinger();
    await ui.banner('MISIÓN PRINCIPAL DESBLOQUEADA', 'TODO POR UN RAP', 'Nada volvería a ser igual.', true, 3600);
    d.begin();
    if (this.pc === 'gonzalo') {
      await d.closeUp('gonzalo', { dur: 0.6 });
      await d.say('gonzalo', 'Uff, me anda del baño desde Historia. Me aguanté toda Tecnología.', { expr: 'worried' });
      await d.say('gonzalo', 'El baño de hombres está en la planta baja, junto a la sala de maestros. ¡Vamos!', { expr: 'neutral' });
    } else {
      await d.closeUp('manuel', { dur: 0.6 });
      await d.say('manuel', 'Ugh… se me reventó el cartucho de tinta en Tecnología. Tengo las manos azules.', { expr: 'worried' });
      await d.say('manuel', 'Voy al baño de abajo a lavarme antes de que la maestra piense que me pinté.', { expr: 'neutral' });
    }
    d.end();
  }

  /** Prepara a los personajes antes del incidente. */
  private setupPreIncident() {
    const d = this.d;
    if (this.pc === 'gonzalo') {
      // Manuel y los tres chavos ya están dentro: Gonzalo no lo sabe
      this.npcs.script(['manuel', 'brayan', 'kevin', 'ulises', 'diego']);
      d.place('manuel', SINK, -Math.PI / 2, 'wash');
      d.place('brayan', V(21.4, 0, -5.4), 0, 'talk');
      d.place('kevin', V(22.3, 0, -4.9), -0.6, 'talk');
      d.place('ulises', V(22.5, 0, -3.6), -1.3, 'talk');
      d.place('diego', V(25.0, 0, -8.4), 0, 'idle');
    } else {
      this.npcs.script(['gonzalo']);
      d.place('gonzalo', V(14, 0, 10.5), Math.PI / 2, 'idle');
    }
  }

  // ---------------------------------------------------------------- EL INCIDENTE
  private async incident() {
    const d = this.d, g = this.g;
    const pov = this.pc;
    d.begin();
    this.npcs.script(['manuel', 'gonzalo', 'brayan', 'kevin', 'ulises', 'juan', 'lupita', 'sofia', 'diego'].filter((x) => x !== pov));
    audio.play('tension');
    const IMPACT = V(22.1, 0, 0.7);

    if (pov === 'manuel') {
      d.place('manuel', SINK, -Math.PI / 2, 'wash');
      audio.water(true);
      await d.shot(V(23.9, 1.75, -1.4), V(21.0, 1.1, -4.4), 0);
      await d.wait(0.8);
      await d.say('manuel', '(Ahhh… agua fría. Por fin un momento de paz.)', { expr: 'happy' });
      // llegan los tres
      d.place('brayan', V(22.1, 0, 4.6), Math.PI); d.place('kevin', V(22.7, 0, 5.4), Math.PI); d.place('ulises', V(21.5, 0, 5.6), Math.PI);
      d.place('diego', V(25.0, 0, -8.4), 0, 'idle');
      audio.door();
      d.walk('brayan', V(21.4, 0, -5.4), false, 'idle', true);
      d.path('kevin', [V(22.4, 0, 0.5), V(22.3, 0, -4.9)]);
      await d.path('ulises', [V(22.0, 0, 0.6), V(22.5, 0, -3.6)]);
      await d.wait(0.6);
      d.face('brayan', 'manuel'); d.face('kevin', 'manuel'); d.face('ulises', 'manuel');
      audio.water(false); d.anim('manuel', 'idle');
      d.face('manuel', 'kevin');
      await d.wait(0.3);
      await d.overShoulder('manuel', 'kevin', 0.6);
      await d.say('kevin', '¡Manuel! ¡Manuel! ¡Miren quién está aquí!', { expr: 'smug', anim: 'point' });
      await d.closeUp('brayan', { dur: 0.4 });
      await d.say('brayan', '¡Manuel, cántate el rap de Vegetta777!', { expr: 'smug' });
      await d.closeUp('kevin', { dur: 0.3 });
      await d.say('kevin', '¡Ándale, cántalo!', { expr: 'happy', anim: 'cheer' });
      await d.say('ulises', '¡Sí! ¡El de "Vegetta, Vegetta, ñam ñam"! Bueno, no me lo sé, pero tú sí.', { expr: 'smug' });
      d.anim('kevin', 'idle');
      await d.closeUp('manuel', { dur: 0.4 });
      // opciones de diálogo para negarse
      let c = await d.choose(['No, ya déjenme.', 'No me lo sé.', '(Ignorarlos y seguir lavándote)']);
      if (c === 0) await d.say('manuel', 'No, ya déjenme.', { expr: 'angry' });
      if (c === 1) await d.say('manuel', 'No me lo sé. En serio.', { expr: 'worried' });
      if (c === 2) { d.anim('manuel', 'wash'); audio.water(true); await d.say('manuel', '(…Si no los veo, no existen…)', { expr: 'bored' }); audio.water(false); d.anim('manuel', 'idle'); }
      await d.overShoulder('manuel', 'brayan', 0.4);
      await d.say('brayan', 'Ándale, no seas aguado. Nomás un pedacito. El coro.', { expr: 'smug' });
      c = await d.choose(['Que no.', '¿Por qué no se lo cantan ustedes?', 'Voy a decirle a la maestra.']);
      if (c === 0) { await d.say('manuel', 'Que no.', { expr: 'angry' }); await d.say('kevin', 'Uuuuy, el serio.', { expr: 'smug' }); }
      if (c === 1) { await d.say('manuel', '¿Por qué no se lo cantan ustedes, si tanto les gusta?', { expr: 'angry' }); await d.say('ulises', 'Porque nosotros no lo sabemos, ¡duh!', { expr: 'smug' }); }
      if (c === 2) { await d.say('manuel', 'Voy a decirle a la maestra.', { expr: 'worried' }); await d.say('kevin', '¿A cuál? ¿A la que no está aquí? Jajaja.', { expr: 'happy' }); }
      d.walk('brayan', V(21.35, 0, -4.75), false, 'idle', true);
      await d.wait(0.6);
      d.face('brayan', 'manuel');
      await d.closeUp('brayan', { dur: 0.4, side: -0.4 });
      await d.say('brayan', 'Canta, Manuel. Si no, te vamos a tener que "inspirar".', { expr: 'angry' });
      await d.closeUp('manuel', { dur: 0.3 });
      await d.say('manuel', 'No, ya déjenme.', { expr: 'angry' });
      c = await d.choose(['Intentar salir del baño', 'Seguir negándote']);
      if (c === 0) { d.face('manuel', V(22.1, 0, 2)); await d.say('manuel', 'Me voy.', { expr: 'angry' }); }
      else await d.say('manuel', 'No voy a cantar nada.', { expr: 'angry' });
      // EL EMPUJÓN — Manuel lo ve todo
      d.faceNow('manuel', V(22.1, 0, 2));
      d.faceNow('brayan', V(22.1, 0, 2));
      await d.shot(V(24.2, 1.4, -2.2), V(21.6, 1.0, -3.0), 0);
      // Gonzalo viene entrando (fuera de cuadro)
      d.place('gonzalo', V(22.1, 0, 4.9), Math.PI, 'walk');
      d.anim('brayan', 'push'); audio.whoosh();
      d.comic('¡EMPUJÓN!', V(21.5, 1.6, -4.3), '#ff5a66', 0.8);
      d.shake(0.6);
      d.anim('manuel', 'stumble'); d.expr('manuel', 'surprised'); audio.gasp();
      d.path('gonzalo', [V(22.1, 0, 1.25)], true);
      g.cam.follow = { target: () => g.charOf('manuel').headWorld(), offset: V(2.0, 0.3, 0.6) };
      g.cam.cine = true;
      await d.path('manuel', [V(21.7, 0, -2.0), IMPACT.clone().setZ(0.55)], true, 'stumble');
    } else {
      // ----- POV de Gonzalo: no ve lo que pasó antes
      d.place('gonzalo', V(22.1, 0, 5.0), Math.PI, 'idle');
      d.place('manuel', SINK, -Math.PI / 2, 'wash');
      d.place('brayan', V(21.35, 0, -4.75), 0.3, 'idle'); d.place('kevin', V(22.3, 0, -4.9), -0.6, 'idle'); d.place('ulises', V(22.5, 0, -3.6), -1.3, 'idle');
      await d.shot(V(22.75, 1.75, 7.2), V(22.1, 1.2, 1.5), 0);
      await d.say('gonzalo', '(Ya casi… ya casi… aguanta, vejiga, aguanta…)', { expr: 'worried' });
      d.path('gonzalo', [V(22.1, 0, 1.25)], true, 'idle');
      // cámara frente a la cara de Gonzalo: no ve lo que ocurre dentro del baño
      await d.shot(V(23.2, 1.5, -0.6), V(22.1, 1.4, 2.6), 0);
      await d.wait(0.7);
      // el empujón ocurre fuera de cuadro
      d.faceNow('manuel', V(22.1, 0, 2)); d.faceNow('brayan', V(22.1, 0, 2));
      d.anim('brayan', 'push');
      d.anim('manuel', 'stumble'); d.expr('manuel', 'surprised');
      await d.path('manuel', [V(21.7, 0, -2.0), IMPACT.clone().setZ(0.55)], true, 'stumble');
      // los tres se hacen los inocentes al fondo
      d.anim('brayan', 'whistle'); d.anim('kevin', 'whistle'); d.anim('ulises', 'whistle');
      d.face('brayan', 0); d.face('kevin', -0.4); d.face('ulises', 0.6);
    }

    // ===== IMPACTO (ambas perspectivas)
    audio.thud(); audio.bonk();
    d.shake(1.2);
    d.comic('¡POW!', V(22.1, 1.6, 0.9), '#ffd23f', 1.1);
    d.place('gonzalo', V(22.1, 0, 1.45), Math.PI, 'stumble');
    d.place('manuel', V(22.05, 0, 0.35), 0, 'stumble');
    d.expr('gonzalo', 'surprised');
    await d.wait(0.5);
    d.anim('gonzalo', 'idle'); d.anim('manuel', 'idle');
    d.faceNow('manuel', 'gonzalo'); d.faceNow('gonzalo', 'manuel');
    await d.twoShot('gonzalo', 'manuel', 0, 2.0, 0.35);
    d.expr('gonzalo', 'angry');
    d.icon('gonzalo', '💢', '#ff5a66');
    await d.closeUp('gonzalo', { dur: 0.25, dist: 1.1 });
    d.shake(0.5);
    await d.say('gonzalo', '¡¿QUÉ TE PASA?!', { expr: 'angry', anim: 'point' });
    d.clearIcon('gonzalo');
    await d.closeUp('manuel', { dur: 0.25, dist: 1.1 });
    await d.say('manuel', '¡Me empujaron, yo no hice nada!', { expr: 'worried', anim: 'present' });
    if (pov === 'gonzalo') {
      // breve mirada: al fondo nadie parece culpable
      await d.shot(V(22.4, 1.7, 1.9), V(22.0, 1.2, -4.6), 0.5);
      await d.say('gonzalo', '(¿Empujaron? Ahí atrás nomás hay tres chavos chiflando y viendo el techo…)', { expr: 'angry' });
      await d.closeUp('gonzalo', { dur: 0.25, dist: 1.1 });
      await d.say('gonzalo', '¡Sí, cómo no! ¡Me aventaste a propósito!', { expr: 'furious' });
    } else {
      await d.overShoulder('manuel', 'gonzalo', 0.3);
      await d.say('gonzalo', '¡Sí, cómo no! ¡Me aventaste a propósito!', { expr: 'furious' });
      await d.say('manuel', '¡Que no! ¡Fueron ell…!', { expr: 'surprised' });
    }

    // ===== LA PELEA (estilizada, nube de cómic)
    audio.play('fight', 0.3);
    const C = V(22.05, 0, -0.5);
    d.place('gonzalo', C.clone().add(V(0, 0, 0.35)), Math.PI, 'brawl');
    d.place('manuel', C.clone().add(V(0, 0, -0.35)), 0, 'brawl');
    g.effects.startCloud(C);
    // compañeros se asoman desde el pasillo
    const crowd = ['valeria', 'ximena', 'fer', 'andrea', 'tonito'];
    this.npcs.script(crowd);
    crowd.forEach((id, i) => { d.place(id, V(20.6 + i * 0.8, 0, 3.6 + (i % 2) * 0.7), Math.PI, i % 2 ? 'point' : 'idle'); d.expr(id, 'surprised'); });
    this.npcs.watch(V(22.1, 0, 1), 30, [...crowd, 'juan', 'lupita', 'sofia']);
    const words = ['¡PAF!', '¡ZAS!', '¡CATAPLÁN!', '¡AY!', '¡MI PELO!', '¡SUÉLTAME!', '¡TÚ EMPEZASTE!', '¡BONK!'];
    let wi = 0;
    const fightFx = async (secs: number) => {
      const end = secs;
      for (let t = 0; t < end; t += 0.35) {
        if (Math.random() < 0.8) d.comic(words[wi++ % words.length], C.clone().add(V(0, 1.5, 0)), ['#ffd23f', '#ff8a65', '#80d8ff', '#ffffff'][wi % 4], 0.6 + Math.random() * 0.3);
        if (Math.random() < 0.5) audio.bonk(); else audio.whoosh();
        d.shake(0.25);
        await d.wait(0.35);
      }
    };
    g.cam.follow = null;
    // órbita alrededor de la nube
    const orbit = async (from: number, to: number, dur: number, r = 2.6) => {
      const steps = 6;
      for (let i = 0; i <= steps; i++) {
        const a = from + (to - from) * (i / steps);
        await d.shot(C.clone().add(V(Math.sin(a) * r * 0.8, 1.9, Math.cos(a) * r * 0.6)), C.clone().add(V(0, 0.8, 0)), dur / steps);
      }
    };
    await d.shot(V(23.8, 1.8, 1.5), C.clone().add(V(0, 0.9, 0)), 0);
    fightFx(3.0);
    await orbit(0.4, 1.4, 1.6);
    const qTitle = pov === 'gonzalo' ? '¡CAOS EN EL BAÑO!' : '¡CÚBRETE!';
    const keys = ['KeyA', 'KeyD', 'KeyW', 'KeyS'];
    const seq = Array.from({ length: 6 }, () => keys[Math.floor(Math.random() * 4)]);
    const fx2 = fightFx(4.5);
    await ui.qteSeq(qTitle, seq, 4.5, pov === 'gonzalo' ? 'Esquiva los manotazos (no hay forma de ganar esto)' : 'Esquiva y protégete');
    await fx2;
    // los tres escapan entre el caos
    if (pov === 'manuel') {
      await d.shot(V(23.6, 1.6, -3.4), V(22.2, 1.0, -1.5), 0.3);
      d.anim('brayan', 'walk'); d.anim('kevin', 'walk'); d.anim('ulises', 'walk');
      await d.say('kevin', '¡Vámonos, vámonos! Jajajaja.', { expr: 'happy', auto: 1.2 });
      d.path('brayan', [V(22.9, 0, -1.5), V(23.0, 0, 1.2), V(23.6, 0, 6.5), V(35, 0, 9)], true);
      d.path('kevin', [V(23.0, 0, -1.8), V(23.1, 0, 1.2), V(23.6, 0, 6.5), V(36, 0, 10)], true);
      await d.path('ulises', [V(22.9, 0, -2.2), V(23.0, 0, 1.2)], true);
      d.path('ulises', [V(23.6, 0, 6.5), V(34, 0, 10)], true);
      d.comic('(Se escapan…)', V(23, 1.4, 1.5), '#ffffff', 0.5);
      await d.wait(0.6);
    } else {
      d.place('brayan', V(35, 0, 9)); d.place('kevin', V(36, 0, 10)); d.place('ulises', V(34, 0, 10));
      d.walk('brayan', V(44, 0, 40)); d.walk('kevin', V(45, 0, 41)); d.walk('ulises', V(43, 0, 41));
    }
    // Sofía corre por la maestra
    d.place('sofia', V(24.5, 0, 4.8), Math.PI / 2);
    d.place('lupita', V(18.3, 0, 4.4), Math.PI / 2, 'idle');
    d.place('juan', V(14, 0, 5), Math.PI / 2, 'idle');
    d.path('sofia', [V(19.2, 0, 5)], true).then(() => d.comic('¡MAESTRA! ¡SE ESTÁN PELEANDO!', V(19.2, 2.2, 5), '#ffffff', 0.45));
    await d.shot(C.clone().add(V(1.6, 1.4, 1.8)), C.clone().add(V(0, 0.9, 0)), 0.5);
    fightFx(2.1);
    await ui.qteMash(pov === 'gonzalo' ? '¡PIDE TIEMPO FUERA!' : '¡GRITA AUXILIO!', 'KeyE', 7, 2.4, 'Presiona E repetidamente');

    // ===== JUAN INTERVIENE
    d.path('juan', [V(21.6, 0, 5), V(21.7, 0, 1.8), V(22.0, 0, 0.5)], true);
    await d.wait(1.6);
    await d.shot(V(23.6, 1.7, 2.6), C.clone().add(V(0, 0.9, 0)), 0.3);
    await d.say('juan', '¡YA, YA, SEPÁRENSE!', { expr: 'angry', anim: 'restrain' });
    g.effects.stopCloud();
    audio.play('tension', 0.3);
    d.place('juan', C.clone(), Math.PI / 2, 'restrain');
    d.place('gonzalo', C.clone().add(V(0.05, 0, 0.9)), Math.PI, 'idle');
    d.place('manuel', C.clone().add(V(-0.05, 0, -0.95)), 0, 'idle');
    d.expr('gonzalo', 'angry'); d.expr('manuel', 'angry');
    d.char('gonzalo').redTarget = 0.3; d.char('manuel').redTarget = 0.3;
    await d.twoShot('gonzalo', 'manuel', 0.4, 2.2, 0.4);
    await d.say('juan', '¡¿Qué les pasa?! ¡Están en el baño, cochinos!', { expr: 'angry', anim: 'restrain' });

    // ===== LA MAESTRA
    d.path('lupita', [V(21.2, 0, 4.6), V(21.4, 0, 1.4), V(21.1, 0, -0.4)], true);
    await d.wait(1.4);
    d.face('lupita', C);
    audio.dun();
    await d.closeUp('lupita', { dur: 0.3, dist: 1.4 });
    await d.say('lupita', '¡¿QUÉ ESTÁ PASANDO AQUÍ?!', { expr: 'furious', anim: 'point' });
    d.char('lupita').redTarget = 0;
    d.anim('juan', 'idle'); d.place('juan', C.clone().add(V(0.8, 0, 0)), -Math.PI / 2, 'idle');
    d.face('gonzalo', 'lupita'); d.face('manuel', 'lupita');
    await d.say('lupita', '¡En mi escuela nadie se pelea! ¡Y menos en el baño!', { expr: 'angry' });
    await d.closeUp('gonzalo', { dur: 0.25 });
    await d.say('gonzalo', '¡Maestra, él se me aventó encima!', { expr: 'angry', anim: 'point' });
    await d.closeUp('manuel', { dur: 0.25 });
    await d.say('manuel', '¡Me empujaron! ¡Yo no hice nada!', { expr: 'worried', anim: 'present' });
    await d.closeUp('lupita', { dur: 0.25 });
    await d.say('lupita', 'Pues eso lo vas a explicar en la Dirección. Manuel, vente conmigo. ¡Ahora!', { expr: 'angry' });
    await d.closeUp('manuel', { dur: 0.25 });
    await d.say('manuel', '¿Yo? ¡Pero maestra…!', { expr: 'surprised' });
    await d.say('lupita', 'Sin peros. Y tú, Gonzalo, quédate aquí: al rato hablo contigo. ¡Los demás, circulen!', { expr: 'angry' });
    this.npcs.unscript(crowd); this.npcs.unwatch();
    d.char('gonzalo').redTarget = 0; d.char('manuel').redTarget = 0;
    d.expr('manuel', 'sad');
    // salen hacia la dirección
    d.path('lupita', [V(21.8, 0, 1.0), V(21.8, 0, 5), V(6.3, 0, 5)], false);
    await d.wait(0.3);
    const exitPath = d.path('manuel', [V(22.1, 0, 1.0), V(22.2, 0, 4.7), V(6.9, 0, 4.7)], false);
    await d.shot(V(22.4, 1.6, -1.6), V(22.0, 1.1, 2.6), 0.6);
    await d.wait(1.5);
    audio.play('none');

    if (pov === 'manuel') {
      await d.shot(V(14, 1.8, 7.6), V(18, 1.1, 5), 0.01);
      await d.wait(2.2);
      exitPath.then(() => {});
      await this.directionScene();
    } else {
      d.mover('manuel').cancel();
      d.mover('lupita').cancel();
      await this.gonzaloAftermath();
    }
  }

  private async directionScene() {
    const d = this.d, g = this.g;
    await d.fade(1, 700);
    this.npcs.script(['directora', 'lupita']);
    d.place('manuel', V(1.1, 0, -9.6), Math.PI, 'sitSad');
    d.place('directora', V(2, 0, -12.0), 0, 'sit');
    d.place('lupita', V(3.7, 0, -9.0), -Math.PI * 0.75, 'crossed');
    d.place('gonzalo', V(14, 0, 10.5), Math.PI / 2, 'idle');
    d.expr('manuel', 'sad'); d.expr('directora', 'neutral'); d.expr('lupita', 'angry');
    d.look('manuel', 'directora');
    await d.shot(V(-2.6, 2.4, -6.2), V(1.9, 0.9, -10.6), 0);
    audio.play('drama', 2);
    await d.fade(0, 900);
    await ui.banner('DIRECCIÓN', 'Diez minutos después', '', false, 2200);
    await d.closeUp('directora', { dur: 1.2, dist: 1.6 });
    await d.say('directora', 'A ver, Manuel. La Maestra Lupita dice que te estabas peleando en el baño.', { expr: 'neutral', anim: 'sit' });
    await d.closeUp('manuel', { dur: 0.6, dist: 1.4 });
    const c = await d.choose(['¡Unos niños me empujaron!', 'Gonzalo empezó a pegarme.', '(Quedarse callado)']);
    if (c === 0) {
      await d.say('manuel', '¡Unos niños me empujaron! Me estaban molestando para que cantara un rap y uno me aventó.', { expr: 'worried', anim: 'sitSad' });
      await d.say('directora', '¿Cuáles niños? La maestra sólo los vio a ustedes dos.', { anim: 'sit' });
      await d.say('manuel', 'Es que… se escaparon.', { expr: 'sad', anim: 'sitSad' });
    } else if (c === 1) {
      await d.say('manuel', 'Gonzalo empezó a pegarme. Yo sólo me caí encima de él porque me empujaron.', { expr: 'worried', anim: 'sitSad' });
      await d.say('directora', 'Mmm. Gonzalo dice que tú te le aventaste.', { anim: 'sit' });
    } else {
      await d.say('manuel', '…', { expr: 'sad', anim: 'sitSad' });
      await d.say('directora', 'El silencio no te va a ayudar, Manuel.', { anim: 'sit' });
    }
    await d.say('lupita', 'Yo llegué y estaban los dos revolcándose junto a la puerta, Directora.', { expr: 'angry', anim: 'crossed' });
    await d.closeUp('directora', { dur: 0.6, dist: 1.5 });
    await d.say('directora', 'Mira, Manuel. Yo no vi lo que pasó. Pero hubo una pelea, y en esta escuela las peleas tienen consecuencias.', { anim: 'sit' });
    await d.closeUp('manuel', { dur: 0.5, dist: 1.3 });
    await d.say('manuel', 'Pero… yo sólo me estaba lavando las manos…', { expr: 'sad', anim: 'sitSad' });
    d.anim('directora', 'sitWrite');
    await d.shot(V(3.2, 1.5, -10.0), V(2.0, 0.85, -11.0), 0.8);
    audio.chalk(); await d.wait(0.5); audio.chalk(); await d.wait(0.5); audio.chalk();
    await d.say('directora', 'Te voy a levantar un reporte. Tus papás tienen que firmarlo y traerlo el lunes.', { anim: 'sitWrite' });
    d.anim('directora', 'present');
    d.comic('REPORTE', V(1.6, 1.25, -10.3), '#ff5a66', 0.55);
    audio.dun();
    await d.closeUp('manuel', { dur: 0.5, dist: 1.25 });
    const c2 = await d.choose(['Está bien…', '¡No es justo!']);
    if (c2 === 0) { await d.say('manuel', 'Está bien…', { expr: 'sad', anim: 'sitSad' }); await d.say('directora', 'Gracias por entender. Puedes quedarte un momento aquí.', { anim: 'sit' }); }
    else { await d.say('manuel', '¡No es justo!', { expr: 'angry', anim: 'sitSad' }); await d.say('directora', 'La vida no siempre es justa, Manuel. Pero las reglas sí son claras.', { anim: 'sit' }); }
    d.anim('directora', 'sit');

    // ===== CINEMÁTICA EMOCIONAL: llanto → lágrima → furia
    await this.manuelBreakdown(false);
    await d.fade(1, 1200);
    audio.play('none');
    await d.wait(0.5);
    ui.cinematic(false);
    d.end();
    g.finishStory('manuel');
  }

  /** Llanto, lágrima y furia de Manuel (se usa en ambas perspectivas). */
  private async manuelBreakdown(fromWindow: boolean) {
    const d = this.d, g = this.g;
    const m = g.charOf('manuel');
    d.look('manuel', null);
    d.face('manuel', Math.PI);
    if (!fromWindow) {
      await d.shot(V(1.1 - 1.6, 1.4, -9.6 - 2.2), m.headWorld(), 0);
      await d.closeUp('manuel', { dur: 3.0, dist: 1.6, side: 0.2, h: -0.08 });
    } else {
      await d.shot(V(-1.2, 1.55, 2.6), m.headWorld().add(V(0, -0.1, 0)), 0);
      await d.shot(V(-0.4, 1.45, 0.6), m.headWorld().add(V(0, -0.1, 0)), 2.5);
    }
    d.expr('manuel', 'sad'); d.anim('manuel', 'sitSad');
    await d.wait(1.4);
    // comienza a llorar
    d.expr('manuel', 'cry'); d.anim('manuel', 'cry');
    audio.sob();
    if (!fromWindow) await d.closeUp('manuel', { dur: 2.2, dist: 1.05, side: 0.15, h: -0.1 });
    else await d.wait(1.6);
    audio.sob(); await d.wait(1.3); audio.sob(); await d.wait(1.2);
    // se seca una lágrima
    d.anim('manuel', 'wipe'); d.expr('manuel', 'sad');
    if (!fromWindow) await d.closeUp('manuel', { dur: 1.2, dist: 0.95, side: -0.25 });
    await d.wait(2.0);
    d.anim('manuel', 'sitSad');
    audio.play('none', 0.8);
    await d.wait(1.0);
    // silencio… y la expresión cambia lentamente
    d.expr('manuel', 'angry');
    audio.dun();
    if (!fromWindow) await d.closeUp('manuel', { dur: 2.4, dist: 0.85, side: 0, h: 0.02 });
    else await d.wait(1.6);
    d.anim('manuel', 'rage');
    m.redTarget = 1.0;
    m.onSteam = (p) => g.effects.steam(p);
    await d.wait(1.0);
    d.expr('manuel', 'furious');
    audio.rage();
    d.shake(0.4);
    await d.wait(1.6);
    d.comic('GRRRRR', m.headWorld().add(V(0, 0.45, 0)), '#ff3b3b', 0.7);
    audio.rage(); d.shake(0.7);
    if (!fromWindow) await d.closeUp('manuel', { dur: 1.6, dist: 0.62, side: 0, h: 0.02 });
    else await d.wait(1.2);
    await d.say('manuel', '(…Esto… no… se va… a quedar… así.)', { expr: 'furious', anim: 'rage' });
    await d.wait(1.0);
  }

  private async gonzaloAftermath() {
    const d = this.d;
    await d.twoShot('gonzalo', 'juan', 0.6, 2.4, 0.4);
    d.face('juan', 'gonzalo'); d.face('gonzalo', 'juan');
    d.expr('gonzalo', 'angry');
    await d.say('gonzalo', '¡¿Viste eso?! ¡Se me aventó encima nomás porque sí!', { expr: 'angry', anim: 'point' });
    await d.say('juan', 'Gonzalo… yo venía atrás de ti. Vi salir a tres chavos corriendo del baño, muertos de risa.', { expr: 'worried' });
    await d.say('gonzalo', '¿Tres chavos? …¿Los que estaban chiflando?', { expr: 'surprised' });
    await d.say('juan', 'Pregúntale a Diego, estaba en el baño. Y Sofía y Don Pepe andaban por el pasillo.', { expr: 'neutral' });
    await d.say('gonzalo', '(Ay no… ¿y si Manuel decía la verdad?)', { expr: 'worried' });
    audio.play('school', 2);
    d.end();
    this.next();
  }

  private async witness(id: 'diego' | 'sofia' | 'pepe') {
    const d = this.d;
    d.begin();
    d.face(id, 'gonzalo'); d.face('gonzalo', id);
    await d.twoShot('gonzalo', id, 0.5, 2.6, 0.4);
    if (id === 'diego') {
      await d.say('gonzalo', 'Diego, ¿tú estabas en el baño? ¿Qué viste?', { expr: 'worried' });
      await d.say('diego', 'Todo. Yo estaba en el cubículo. Brayan, Kevin y Ulises le pedían a Manuel que cantara el rap de Vegetta777.', { expr: 'worried' });
      await d.say('diego', 'Manuel les dijo que no como mil veces. Y luego Brayan lo empujó. Justo cuando tú ibas entrando.', { expr: 'sad' });
      await d.say('gonzalo', '…Entonces sí lo empujaron.', { expr: 'surprised' });
      this.flags.wDiego = true;
    } else if (id === 'sofia') {
      await d.say('gonzalo', 'Sofía, ¿viste quién salió del baño?', { expr: 'worried' });
      await d.say('sofia', 'Sí. Brayan, Kevin y Ulises salieron corriendo y riéndose. Kevin decía: "¡Se le aventó a Gonzalo, jajaja!"', { expr: 'angry' });
      await d.say('sofia', 'Yo fui por la maestra Lupita. Pensé que estaban molestando a alguien.', { expr: 'neutral' });
      this.flags.wSofia = true;
    } else {
      await d.say('gonzalo', 'Don Pepe, ¿usted escuchó algo en el baño?', { expr: 'worried' });
      await d.say('pepe', 'Mire, joven. Yo trapeaba aquí afuerita. Oí: "¡Cántate el rap, cántate el rap!" y luego un ¡pum!', { expr: 'neutral', anim: 'crossed' });
      await d.say('pepe', 'Y luego usted gritando como gallina. Eso también lo oí.', { expr: 'smug', anim: 'crossed' });
      await d.say('gonzalo', 'No grité como gallina…', { expr: 'sad' });
      await d.say('pepe', 'Como gallina enojada, pues.', { expr: 'smug', anim: 'crossed' });
      this.flags.wPepe = true;
    }
    const n = ['wDiego', 'wSofia', 'wPepe'].filter((f) => this.flags[f]).length;
    ui.toast(`Testigo interrogado (${n}/3)`);
    d.end();
  }

  private async gonzaloFinale() {
    const d = this.d, g = this.g;
    d.begin();
    this.npcs.script(['directora', 'lupita', 'manuel', 'juan']);
    d.place('gonzalo', V(-1.5, 0, 3.15), Math.PI, 'idle');
    d.place('juan', V(-0.3, 0, 3.6), Math.PI, 'idle');
    d.place('manuel', V(1.1, 0, -9.6), Math.PI, 'sitSad');
    d.place('directora', V(2, 0, -12.0), 0, 'sit');
    d.place('lupita', V(3.7, 0, -9.0), -Math.PI * 0.75, 'crossed');
    await d.shot(V(-0.6, 1.7, 4.8), V(-1.3, 1.3, 1.8), 0);
    await d.say('gonzalo', '(Ahí está… en la dirección. Con la directora.)', { expr: 'worried' });
    audio.play('drama', 1.5);
    await d.say('directora', '…te voy a levantar un reporte. Tus papás tienen que firmarlo.', { name: 'Directora (a lo lejos)' });
    d.comic('REPORTE', V(1.6, 1.25, -10.3), '#ff5a66', 0.55);
    await this.manuelBreakdown(true);
    // Manuel voltea lentamente hacia la ventana
    d.anim('manuel', 'rage');
    d.look('manuel', 'gonzalo');
    await d.shot(V(-0.4, 1.45, 0.6), g.charOf('manuel').headWorld(), 0.3);
    await d.wait(1.0);
    audio.stinger();
    d.comic('!!!', g.charOf('manuel').headWorld().add(V(0, 0.4, 0)), '#ff3b3b', 0.6);
    await d.closeUp('gonzalo', { dur: 0.3, dist: 0.8, side: 0.25 });
    d.expr('gonzalo', 'surprised');
    await d.say('gonzalo', '…Ay, no. Ya la regué.', { expr: 'worried' });
    await d.twoShot('gonzalo', 'juan', 0.4, 2.2, 0.35);
    d.face('juan', 'gonzalo');
    await d.say('juan', 'Sí. La regaste. Con mayúsculas.', { expr: 'bored' });
    await d.say('gonzalo', '¿Crees que me perdone si le invito una torta?', { expr: 'worried' });
    await d.say('juan', 'Yo que tú le invitaba la cooperativa entera.', { expr: 'smug' });
    await d.fade(1, 1200);
    audio.play('none');
    g.charOf('manuel').redTarget = 0;
    d.end();
    g.finishStory('gonzalo');
  }
}
