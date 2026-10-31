import * as THREE from 'three';
import { Character, Anim } from './character';
import type { School, Seat } from '../world/school';

/** Mueve un personaje por una ruta de puntos, siguiendo el suelo. */
export class Mover {
  path: THREE.Vector3[] = [];
  speed = 1.4;
  run = false;
  private resolve: (() => void) | null = null;
  private stuckT = 0;
  private lastPos = new THREE.Vector3();
  arriveAnim: Anim = 'idle';
  faceYaw: number | null = null;
  constructor(public char: Character, public school: School) {}

  get moving() { return this.path.length > 0; }

  go(points: THREE.Vector3[], run = false, arriveAnim: Anim = 'idle'): Promise<void> {
    this.cancel();
    this.path = points.map((p) => p.clone());
    this.run = run;
    this.speed = run ? 3.6 : 1.45;
    this.arriveAnim = arriveAnim;
    this.stuckT = 0;
    this.lastPos.copy(this.char.position);
    if (!this.path.length) return Promise.resolve();
    return new Promise((r) => (this.resolve = r));
  }
  /** Ruta por el grafo de navegación hasta un punto. */
  goNav(target: THREE.Vector3, run = false, arriveAnim: Anim = 'idle', direct = false): Promise<void> {
    const nav = this.school.nav;
    const here = this.char.position;
    if (direct || here.distanceTo(target) < 3 && Math.abs(here.y - target.y) < 1) return this.go([target], run, arriveAnim);
    const a = nav.nearest(here), b = nav.nearest(target);
    const pts = nav.path(a, b);
    // si ya estamos más cerca del segundo punto, omitir el primero
    if (pts.length > 1 && here.distanceTo(pts[1]) < pts[0].distanceTo(pts[1])) pts.shift();
    pts.push(target.clone());
    return this.go(pts, run, arriveAnim);
  }
  cancel() {
    this.path = [];
    const r = this.resolve; this.resolve = null;
    if (r) r();
  }

  update(dt: number) {
    const c = this.char;
    if (!this.path.length) {
      if (this.faceYaw !== null) c.yaw = lerpAngle(c.yaw, this.faceYaw, Math.min(1, dt * 6));
      return;
    }
    const tgt = this.path[0];
    const p = c.position;
    const dx = tgt.x - p.x, dz = tgt.z - p.z;
    const d = Math.hypot(dx, dz);
    const step = this.speed * dt;
    if (d <= Math.max(step, 0.08)) {
      p.x = tgt.x; p.z = tgt.z;
      this.path.shift();
      if (!this.path.length) {
        c.anim = this.arriveAnim; c.speed = 0;
        const r = this.resolve; this.resolve = null; if (r) r();
        return;
      }
    } else {
      p.x += (dx / d) * step; p.z += (dz / d) * step;
      c.yaw = lerpAngle(c.yaw, Math.atan2(dx, dz), Math.min(1, dt * 9));
      c.anim = this.run ? 'run' : 'walk';
      c.speed = this.speed;
    }
    const g = this.school.world.groundAt(p.x, p.z, p.y + 0.2);
    p.y += (g.h - p.y) * Math.min(1, dt * 14);
    // detección de atasco: saltar al siguiente punto
    this.stuckT += dt;
    if (this.stuckT > 2.5) {
      if (p.distanceTo(this.lastPos) < 0.3 && this.path.length) { p.copy(this.path[0]); }
      this.stuckT = 0; this.lastPos.copy(p);
    }
  }
}

export function lerpAngle(a: number, b: number, t: number) {
  let d = b - a;
  d = Math.atan2(Math.sin(d), Math.cos(d));
  return a + d * t;
}

export type Role = 'student' | 'teacher' | 'staff';
export type NpcState = 'idle' | 'toSeat' | 'seated' | 'wander' | 'chat' | 'teach' | 'patrol' | 'watch' | 'post' | 'scripted' | 'flee';

export interface NpcDef {
  id: string;
  role: Role;
  group?: string; // grupo escolar (2A, 1A...)
  seatIndex?: number;
  subject?: string; // materia que imparte
  homeRoom?: string; // salón para profes de otros grupos
  post?: { pos: THREE.Vector3; yaw: number; anim: Anim }; // puesto fijo (guardia, cooperativa)
  lines: string[];
}

export class NPC {
  mover: Mover;
  state: NpcState = 'idle';
  timer = Math.random() * 3;
  seat: Seat | null = null;
  private lineIdx = 0;
  talkCooldown = 0;
  chatCenter: THREE.Vector3 | null = null;
  watchPoint: THREE.Vector3 | null = null;
  constructor(public def: NpcDef, public char: Character, public school: School) {
    this.mover = new Mover(char, school);
    const shuffled = [...def.lines];
    for (let i = shuffled.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; }
    def.lines = shuffled;
  }
  get id() { return this.def.id; }
  get name() { return this.char.look.name; }
  /** Siguiente línea de charla sin repetir hasta agotar el repertorio. */
  nextLine(): string {
    const l = this.def.lines[this.lineIdx % this.def.lines.length];
    this.lineIdx++;
    return l;
  }
  release() { if (this.seat && this.seat.occupant === this.id) this.seat.occupant = null; this.seat = null; }
}

export type Phase = { kind: 'arrival' | 'class' | 'recess' | 'free' | 'between'; room?: string; subject?: string };

/** IA escolar: máquina de estados con horarios. */
export class NPCManager {
  npcs: NPC[] = [];
  phase: Phase = { kind: 'arrival' };
  playerPos = new THREE.Vector3();
  private groupRooms: Record<string, string> = { '1A': '1A', '3A': '3A', '2B': '2B' };
  constructor(public school: School, public scene: THREE.Scene) {}

  add(def: NpcDef, char: Character, pos: THREE.Vector3, yaw = 0) {
    const n = new NPC(def, char, this.school);
    char.position.copy(pos); char.yaw = yaw;
    this.scene.add(char.root);
    this.npcs.push(n);
    return n;
  }
  get(id: string) { const n = this.npcs.find((n) => n.id === id); if (!n) throw new Error('npc ' + id); return n; }

  setPhase(ph: Phase, instant = false) {
    this.phase = ph;
    for (const n of this.npcs) {
      if (n.state === 'scripted') continue;
      n.release();
      n.timer = instant ? 0 : Math.random() * 2.2;
      n.state = 'idle';
      n.mover.cancel();
      if (instant) this.placeInstant(n);
    }
  }

  /** Coloca al NPC directamente donde debería estar (al cargar partida). */
  placeInstant(n: NPC) {
    const seat = this.seatFor(n);
    if (seat && (this.phase.kind === 'class')) {
      n.char.position.copy(seat.pos); n.char.yaw = seat.yaw; n.char.anim = 'sit'; n.state = 'seated'; seat.occupant = n.id; n.seat = seat; return;
    }
    const tp = this.teacherSpot(n);
    if (tp) { n.char.position.copy(tp.pos); n.char.yaw = tp.yaw; n.state = 'teach'; n.char.anim = 'teach'; return; }
    if (n.def.post) { n.char.position.copy(n.def.post.pos); n.char.yaw = n.def.post.yaw; n.char.anim = n.def.post.anim; n.state = 'post'; return; }
  }

  private roomForGroup(group: string): string | null {
    if (this.phase.kind !== 'class') return null;
    if (group === '2A') return this.phase.room ?? '2A';
    return this.groupRooms[group] ?? null;
  }
  private seatFor(n: NPC): Seat | null {
    if (n.def.role !== 'student' || !n.def.group) return null;
    const roomId = this.roomForGroup(n.def.group);
    if (!roomId) return null;
    const room = this.school.room(roomId);
    const mine = room.seats[(n.def.seatIndex ?? 0) % room.seats.length] ?? null;
    if (!mine || !mine.occupant || mine.occupant === n.id) return mine;
    // alguien (p. ej. el jugador) ocupó su lugar: buscar otro libre
    return room.seats.find((s) => !s.occupant || s.occupant === n.id) ?? null;
  }
  private teacherSpot(n: NPC): { pos: THREE.Vector3; yaw: number } | null {
    if (n.def.role !== 'teacher' || this.phase.kind !== 'class') return null;
    let roomId: string | null = null;
    if (n.def.subject && n.def.subject === this.phase.subject) roomId = this.phase.room ?? '2A';
    else if (n.def.homeRoom) roomId = n.def.homeRoom;
    if (!roomId) return null;
    const r = this.school.room(roomId);
    if (!r.teacherPos) return null;
    return { pos: r.teacherPos, yaw: 0 };
  }

  update(dt: number, t: number) {
    for (const n of this.npcs) {
      n.talkCooldown = Math.max(0, n.talkCooldown - dt);
      // ocultar NPC lejanos para rendimiento
      const far = n.char.position.distanceToSquared(this.playerPos) > 70 * 70;
      n.char.root.visible = !far;
      if (n.state !== 'scripted') this.think(n, dt, t);
      n.mover.update(dt);
      if (!far) n.char.update(dt);
    }
    // los NPC de pie se hacen a un lado ("con permiso")
    for (const a of this.npcs) {
      if (a.mover.moving || a.state === 'scripted' || a.state === 'seated' || a.state === 'post' || a.char.anim.startsWith('sit')) continue;
      const p = a.char.position;
      const dx = p.x - this.playerPos.x, dz = p.z - this.playerPos.z, d2 = dx * dx + dz * dz;
      if (d2 < 0.64 && d2 > 1e-4 && Math.abs(p.y - this.playerPos.y) < 1) {
        const d = Math.sqrt(d2);
        p.x += (dx / d) * (0.8 - d) * 0.25; p.z += (dz / d) * (0.8 - d) * 0.25;
        this.school.world.collide(p, 0.28, 1.5);
      }
    }
    // separación suave entre NPC que caminan
    for (let i = 0; i < this.npcs.length; i++) {
      const a = this.npcs[i];
      if (!a.mover.moving || a.state === 'scripted') continue;
      for (let j = 0; j < this.npcs.length; j++) {
        if (i === j) continue;
        const b = this.npcs[j];
        const dx = a.char.position.x - b.char.position.x, dz = a.char.position.z - b.char.position.z;
        const d2 = dx * dx + dz * dz;
        if (d2 < 0.36 && d2 > 1e-4 && Math.abs(a.char.position.y - b.char.position.y) < 1) {
          const d = Math.sqrt(d2);
          a.char.position.x += (dx / d) * (0.6 - d) * 0.3;
          a.char.position.z += (dz / d) * (0.6 - d) * 0.3;
        }
      }
      const dx = a.char.position.x - this.playerPos.x, dz = a.char.position.z - this.playerPos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < 0.49 && d2 > 1e-4) { const d = Math.sqrt(d2); a.char.position.x += (dx / d) * (0.7 - d) * 0.5; a.char.position.z += (dz / d) * (0.7 - d) * 0.5; }
    }
  }

  private think(n: NPC, dt: number, t: number) {
    n.timer -= dt;
    const ph = this.phase;
    const c = n.char;
    if (n.state === 'watch' && n.watchPoint) {
      if (!n.mover.moving) { const a = Math.atan2(n.watchPoint.x - c.position.x, n.watchPoint.z - c.position.z); c.yaw = lerpAngle(c.yaw, a, dt * 5); }
      return;
    }
    if (n.state === 'flee') return;
    if (n.def.post && ph.kind !== 'class' || n.def.post && n.def.role === 'staff') {
      if (n.state !== 'post') {
        n.state = 'post';
        const post = n.def.post!;
        n.mover.goNav(post.pos, false, post.anim).then(() => { c.yaw = post.yaw; });
      }
      return;
    }
    // clases: alumnos a su asiento, profes a su escritorio
    if (ph.kind === 'class') {
      const seat = this.seatFor(n);
      if (seat) {
        if (n.state === 'seated' || n.state === 'toSeat') {
          if (n.state === 'seated' && n.timer < 0) {
            n.timer = 3 + Math.random() * 6;
            const r = Math.random();
            c.anim = r < 0.45 ? 'sitWrite' : r < 0.55 ? 'sitRaise' : r < 0.65 ? 'sitSad' : 'sit';
            c.setExpr(r > 0.9 ? 'bored' : 'neutral');
          }
          return;
        }
        if (n.timer > 0) return;
        n.state = 'toSeat';
        seat.occupant = n.id; n.seat = seat;
        n.mover.goNav(seat.pos, false, 'sit').then(() => {
          if (n.state !== 'toSeat') return;
          n.state = 'seated'; c.yaw = seat.yaw; c.position.copy(seat.pos); n.timer = Math.random() * 4;
        });
        return;
      }
      const tp = this.teacherSpot(n);
      if (tp) {
        if (n.state === 'teach') {
          if (!n.mover.moving) { c.yaw = lerpAngle(c.yaw, tp.yaw, dt * 4); if (n.timer < 0) { n.timer = 3 + Math.random() * 4; c.anim = Math.random() < 0.6 ? 'teach' : 'talk'; c.talking = c.anim === 'talk'; } }
          return;
        }
        if (n.timer > 0) return;
        n.state = 'teach';
        n.mover.goNav(tp.pos, false, 'teach');
        return;
      }
    }
    // maestros fuera de clase: patrullan pasillos o descansan
    if (n.def.role === 'teacher') {
      if (n.timer > 0 || n.mover.moving) return;
      n.timer = 6 + Math.random() * 10;
      if (Math.random() < 0.55) {
        n.state = 'patrol';
        const fl = Math.random() < 0.7 ? 0 : 1;
        const xs = [-35, -20, -5, 10, 25, 35];
        n.mover.goNav(new THREE.Vector3(xs[Math.floor(Math.random() * xs.length)], fl * 3.6, 5), false, 'crossed');
      } else {
        const r = this.school.room('maestros');
        const s = r.seats.find((s) => !s.occupant);
        if (s) {
          n.release(); s.occupant = n.id; n.seat = s; n.state = 'seated';
          n.mover.goNav(s.pos, false, 'sit').then(() => { c.yaw = s.yaw; c.position.copy(s.pos); });
        }
      }
      return;
    }
    // recreo / llegada / tiempo libre: platicar, pasear, cooperativa, canchas
    if (n.timer > 0 || n.mover.moving) {
      if (n.state === 'chat' && n.chatCenter && !n.mover.moving) {
        const a = Math.atan2(n.chatCenter.x - c.position.x, n.chatCenter.z - c.position.z);
        c.yaw = lerpAngle(c.yaw, a, dt * 4);
        if (Math.random() < dt * 0.4) { const r = Math.random(); c.anim = r < 0.4 ? 'talk' : r < 0.5 ? 'shrug' : r < 0.6 ? 'cheer' : r < 0.7 ? 'eat' : 'idle'; c.talking = c.anim === 'talk'; c.setExpr(Math.random() < 0.5 ? 'happy' : 'neutral'); }
      }
      return;
    }
    c.talking = false;
    const nav = this.school.nav;
    const r = Math.random();
    const arrival = ph.kind === 'arrival';
    if (r < 0.5) {
      // unirse a grupo de plática
      const pool = arrival ? this.school.hangouts.filter((h) => nav.nodes[h].p.z > 14 && nav.nodes[h].p.x < 30 && nav.nodes[h].p.x > -24) : this.school.hangouts;
      const hub = nav.nodes[pool[Math.floor((t * 7 + n.def.id.length * 13) % pool.length)]].p;
      const a = Math.random() * Math.PI * 2;
      const p = hub.clone().add(new THREE.Vector3(Math.cos(a) * 1.1, 0, Math.sin(a) * 1.1));
      n.state = 'chat'; n.chatCenter = hub.clone();
      n.timer = 10 + Math.random() * 14;
      n.mover.goNav(p, false, 'talk');
    } else if (r < 0.7 && !arrival) {
      n.state = 'wander';
      n.timer = 6 + Math.random() * 6;
      n.chatCenter = null;
      n.mover.goNav(nav.nodes[nav.tag('coopQueue')].p.clone().add(new THREE.Vector3(Math.random() * 1.5, 0, (Math.random() - 0.5) * 2)), false, 'idle');
    } else if (r < 0.85 && !arrival) {
      n.state = 'wander'; n.chatCenter = null;
      n.timer = 8 + Math.random() * 8;
      const k = new THREE.Vector3(38 + Math.random() * 18, 0, 17 + Math.random() * 11);
      n.mover.goNav(k, Math.random() < 0.5, Math.random() < 0.5 ? 'dribble' : 'cheer');
    } else {
      n.state = 'wander'; n.chatCenter = null;
      n.timer = 4 + Math.random() * 5;
      const h = this.school.hangouts[Math.floor(Math.random() * this.school.hangouts.length)];
      n.mover.goNav(nav.nodes[h].p.clone().add(new THREE.Vector3((Math.random() - 0.5) * 2, 0, (Math.random() - 0.5) * 2)), false, Math.random() < 0.3 ? 'phone' : 'idle');
    }
  }

  /** Todos los NPC cercanos voltean a ver un acontecimiento. */
  watch(point: THREE.Vector3, radius: number, exclude: string[] = []) {
    for (const n of this.npcs) {
      if (exclude.includes(n.id) || n.state === 'scripted') continue;
      if (n.char.position.distanceTo(point) > radius) continue;
      n.state = 'watch'; n.watchPoint = point.clone(); n.mover.cancel();
      n.char.setExpr('surprised'); n.char.anim = Math.random() < 0.4 ? 'point' : 'idle';
    }
  }
  unwatch() {
    for (const n of this.npcs) if (n.state === 'watch') { n.state = 'idle'; n.watchPoint = null; n.char.setExpr('neutral'); n.timer = Math.random() * 2; }
  }
  script(ids: string[]) { for (const id of ids) { const n = this.get(id); n.release(); n.mover.cancel(); n.state = 'scripted'; n.char.talking = false; } }
  unscript(ids: string[]) { for (const id of ids) { const n = this.get(id); if (n.state === 'scripted') { n.state = 'idle'; n.timer = Math.random() * 2; n.char.setExpr('neutral'); } } }
  nearestTalkable(p: THREE.Vector3, maxD = 2.2, allow: (n: NPC) => boolean = () => true): NPC | null {
    let best: NPC | null = null, bd = maxD;
    for (const n of this.npcs) {
      if (n.state === 'flee' || !n.char.root.visible || !allow(n)) continue;
      const d = n.char.position.distanceTo(p);
      if (d < bd && Math.abs(n.char.position.y - p.y) < 1.2) { bd = d; best = n; }
    }
    return best;
  }
}
