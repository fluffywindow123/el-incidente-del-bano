import * as THREE from 'three';
import type { Anim, Character, Expr } from '../chars/character';
import { lerpAngle, Mover } from '../chars/npc';
import { LOOKS, speakerColor } from '../chars/cast';
import { ui } from '../ui/ui';
import { audio } from '../core/audio';
import type { Game } from '../main';

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

/** Herramientas para cinemáticas y diálogos escritos como funciones async. */
export class Director {
  active = false;
  private timers: { t: number; r: () => void }[] = [];
  constructor(public game: Game) {}

  update(dt: number) {
    for (let i = this.timers.length - 1; i >= 0; i--) {
      const tm = this.timers[i];
      tm.t -= dt;
      if (tm.t <= 0) { this.timers.splice(i, 1); tm.r(); }
    }
  }
  /** Abandona cualquier cinemática en curso (sus promesas quedan sin resolver). */
  reset() { this.timers = []; this.active = false; this.iconOwners.clear(); ui.reset(); audio.water(false); }
  wait(s: number): Promise<void> { return new Promise((r) => this.timers.push({ t: s, r })); }

  begin(letterbox = true) {
    this.active = true;
    this.game.player.scripted = true;
    this.game.player.mover.cancel();
    this.game.player.vel.set(0, 0, 0);
    if (letterbox) ui.cinematic(true);
    ui.prompt(null);
  }
  end() {
    this.active = false;
    const p = this.game.player;
    p.scripted = false;
    p.mover.cancel();
    p.char.talking = false;
    p.char.lookTarget = null;
    ui.cinematic(false);
    this.game.cam.release();
    // orientar la cámara detrás del jugador
    p.camYaw = p.char.yaw; p.camPitch = 0.22;
  }

  char(id: string): Character { return this.game.charOf(id); }
  mover(id: string): Mover { return id === this.game.protagonist ? this.game.player.mover : this.game.npcs.get(id).mover; }
  name(id: string) { return LOOKS[id]?.name ?? id; }

  /** Diálogo: el personaje mueve la boca mientras habla. */
  async say(id: string | null, text: string, opts: { expr?: Expr; anim?: Anim; auto?: number; name?: string } = {}) {
    const c = id ? this.char(id) : null;
    if (c && opts.expr) c.setExpr(opts.expr);
    const prevAnim = c?.anim;
    if (c && opts.anim) c.anim = opts.anim;
    else if (c && (c.anim === 'idle')) c.anim = 'talk';
    const voice = id ? LOOKS[id]?.voice ?? 260 : 200;
    await ui.say(opts.name ?? (id ? this.name(id) : ''), text, id ? speakerColor(id) : 'gray', voice, (on) => { if (c) c.talking = on; }, opts.auto ?? 0);
    if (c) { c.talking = false; if (!opts.anim && c.anim === 'talk' && prevAnim) c.anim = prevAnim === 'talk' ? 'idle' : prevAnim; }
  }
  /** Narración sin personaje. */
  narrate(text: string, auto = 0) { return ui.say('', text, 'gray', 180, undefined, auto); }
  choose(opts: string[]) { return ui.choose(opts); }

  shot(p: THREE.Vector3, l: THREE.Vector3, dur = 0) { return this.game.cam.shot(p, l, dur); }
  /** Primer plano de un personaje. */
  closeUp(id: string, o: { side?: number; dist?: number; h?: number; dur?: number; lookH?: number } = {}) {
    const c = this.char(id);
    const head = c.headWorld();
    const yaw = c.yaw + (o.side ?? 0.35);
    const d = o.dist ?? 1.35;
    const p = head.clone().add(V(Math.sin(yaw) * d, (o.h ?? 0.05), Math.cos(yaw) * d));
    return this.shot(p, head.clone().add(V(0, o.lookH ?? -0.05, 0)), o.dur ?? 0);
  }
  /** Plano sobre el hombro de a mirando a b. */
  overShoulder(a: string, b: string, dur = 0, side = 1) {
    const ca = this.char(a), cb = this.char(b);
    const ha = ca.headWorld(), hb = cb.headWorld();
    const dir = hb.clone().sub(ha).setY(0).normalize();
    const right = V(dir.z, 0, -dir.x).multiplyScalar(side);
    const p = ha.clone().addScaledVector(dir, -0.9).addScaledVector(right, 0.45).add(V(0, 0.15, 0));
    return this.shot(p, hb, dur);
  }
  twoShot(a: string, b: string, dur = 0, dist = 3.2, h = 0.4) {
    const ha = this.char(a).headWorld(), hb = this.char(b).headWorld();
    const mid = ha.clone().add(hb).multiplyScalar(0.5);
    const dir = hb.clone().sub(ha).setY(0).normalize();
    const w = this.game.school.world;
    // probar varios ángulos alrededor del eje perpendicular y quedarse con el más despejado
    let best = mid.clone().add(V(0, h, dist)), bestScore = -1;
    const base = Math.atan2(-dir.x, dir.z);
    for (const off of [0, Math.PI, 0.5, -0.5, Math.PI + 0.5, Math.PI - 0.5, 1.0, -1.0, Math.PI + 1.0, Math.PI - 1.0]) {
      const a = base + off;
      const cand = mid.clone().add(V(Math.cos(a) * dist, h, Math.sin(a) * dist));
      const f = w.raycast(mid, cand);
      const score = f - Math.abs(Math.sin(off)) * 0.15;
      if (score > bestScore + 1e-3) { bestScore = score; best = cand; if (f >= 1 && off === 0) break; }
    }
    const f = w.raycast(mid, best);
    const p = f < 1 ? mid.clone().lerp(best, Math.max(0.25, f - 0.1)) : best;
    return this.shot(p, mid, dur);
  }
  shake(v = 1) { this.game.cam.shake = Math.max(this.game.cam.shake, v); }

  walk(id: string, to: THREE.Vector3, run = false, anim: Anim = 'idle', direct = false) {
    const m = this.mover(id);
    return m.goNav(to, run, anim, direct);
  }
  /** Camino exacto por puntos. */
  path(id: string, pts: THREE.Vector3[], run = false, anim: Anim = 'idle') { return this.mover(id).go(pts, run, anim); }
  place(id: string, p: THREE.Vector3, yaw?: number, anim: Anim = 'idle') {
    const c = this.char(id);
    const m = this.mover(id);
    m.cancel();
    m.faceYaw = yaw ?? null;
    c.position.copy(p);
    if (yaw !== undefined) c.yaw = yaw;
    c.anim = anim;
    if (id === this.game.protagonist) { this.game.player.seat = null; this.game.player.vel.set(0, 0, 0); }
  }
  face(id: string, target: string | THREE.Vector3 | number) {
    const c = this.char(id);
    let yaw: number;
    if (typeof target === 'number') yaw = target;
    else {
      const p = typeof target === 'string' ? this.char(target).position : target;
      yaw = Math.atan2(p.x - c.position.x, p.z - c.position.z);
    }
    this.mover(id).faceYaw = yaw;
    c.yaw = lerpAngle(c.yaw, yaw, 0.35);
  }
  faceNow(id: string, target: string | THREE.Vector3) {
    const c = this.char(id);
    const p = typeof target === 'string' ? this.char(target).position : target;
    c.yaw = Math.atan2(p.x - c.position.x, p.z - c.position.z);
    this.mover(id).faceYaw = c.yaw;
  }
  anim(id: string, a: Anim) { this.char(id).anim = a; }
  expr(id: string, e: Expr) { this.char(id).setExpr(e); }
  look(id: string, target: string | null) { this.char(id).lookTarget = target ? this.char(target).position : null; }
  fade(to: number, ms = 500) { return ui.fade(to, ms); }
  comic(text: string, at: THREE.Vector3, color?: string, size?: number) { this.game.effects.comic(text, at, color, size); }
  icon(id: string, text: string, color?: string) { this.game.effects.icon('ic_' + id, text, color); this.iconOwners.add(id); }
  clearIcon(id: string) { this.game.effects.clearIcon('ic_' + id); this.iconOwners.delete(id); }
  iconOwners = new Set<string>();
  sfx(name: keyof typeof audio & string) { const f = (audio as unknown as Record<string, () => void>)[name]; if (typeof f === 'function') f.call(audio); }
}
