import * as THREE from 'three';
import type { Character } from '../chars/character';
import { Mover, lerpAngle } from '../chars/npc';
import type { School, Seat } from '../world/school';
import type { Input } from '../core/input';
import { audio } from '../core/audio';

export class Player {
  vel = new THREE.Vector3();
  grounded = true;
  camYaw = Math.PI;
  camPitch = 0.25;
  seat: Seat | null = null;
  scripted = false;
  mover: Mover;
  private stepPhase = 0;
  surface: 'tile' | 'concrete' | 'grass' | 'court' | 'wood' = 'concrete';
  sens = 1;
  invertY = false;

  constructor(public char: Character, public school: School) {
    this.mover = new Mover(char, school);
  }
  get pos() { return this.char.position; }

  sit(seat: Seat) {
    this.seat = seat;
    seat.occupant = 'player';
    this.pos.copy(seat.pos);
    this.char.yaw = seat.yaw;
    this.char.anim = 'sit';
    this.vel.set(0, 0, 0);
  }
  stand() {
    if (!this.seat) return;
    const s = this.seat;
    s.occupant = null;
    this.seat = null;
    // levantarse hacia atrás de la silla (contrario a donde mira)
    this.pos.x -= Math.sin(s.yaw) * 0.75;
    this.pos.z -= Math.cos(s.yaw) * 0.75;
    this.char.yaw = s.yaw + Math.PI;
    this.char.anim = 'idle';
  }

  look(input: Input) {
    const k = 0.0024 * this.sens;
    this.camYaw -= input.mouseDX * k;
    this.camPitch += input.mouseDY * k * (this.invertY ? -1 : 1);
    this.camPitch = Math.max(-0.5, Math.min(1.15, this.camPitch));
    if (input.down('ArrowLeft')) this.camYaw += 0.03;
    if (input.down('ArrowRight')) this.camYaw -= 0.03;
  }

  update(dt: number, input: Input | null, obstacles: THREE.Vector3[]) {
    const c = this.char;
    if (this.scripted) { this.mover.update(dt); c.update(dt); return; }
    if (this.seat) { c.update(dt); return; }
    const world = this.school.world;
    let mx = 0, mz = 0;
    if (input) {
      if (input.down('KeyW')) mz += 1;
      if (input.down('KeyS')) mz -= 1;
      if (input.down('KeyA')) mx += 1;
      if (input.down('KeyD')) mx -= 1;
    }
    const run = !!input && (input.down('ShiftLeft') || input.down('ShiftRight'));
    const len = Math.hypot(mx, mz);
    const speed = run ? 5.2 : 2.4;
    // dirección relativa a la cámara (la cámara mira hacia camYaw)
    const fx = Math.sin(this.camYaw), fz = Math.cos(this.camYaw);
    const rx = Math.cos(this.camYaw), rz = -Math.sin(this.camYaw);
    let dx = 0, dz = 0;
    if (len > 0) { dx = (fx * mz + rx * mx) / len; dz = (fz * mz + rz * mx) / len; }
    const accel = this.grounded ? 14 : 4;
    this.vel.x += (dx * speed - this.vel.x) * Math.min(1, dt * accel);
    this.vel.z += (dz * speed - this.vel.z) * Math.min(1, dt * accel);
    if (input && this.grounded && input.consume('Space')) { this.vel.y = 5.2; this.grounded = false; audio.whoosh(); }
    this.vel.y -= 16 * dt;
    const p = this.pos;
    p.x += this.vel.x * dt; p.z += this.vel.z * dt;
    p.y += this.vel.y * dt;
    world.collide(p, 0.3, 1.6);
    // colisión con personajes
    for (const o of obstacles) {
      if (Math.abs(o.y - p.y) > 1.2) continue;
      const ox = p.x - o.x, oz = p.z - o.z, d2 = ox * ox + oz * oz;
      if (d2 < 0.36 && d2 > 1e-5) { const d = Math.sqrt(d2); p.x += (ox / d) * (0.6 - d); p.z += (oz / d) * (0.6 - d); }
    }
    const g = world.groundAt(p.x, p.z, Math.max(p.y, p.y - this.vel.y * dt), 0.2);
    if (p.y <= g.h + 0.001) {
      if (!this.grounded && this.vel.y < -6) audio.thud();
      p.y = g.h; this.vel.y = 0; this.grounded = true;
    } else if (this.grounded && p.y - g.h < 0.45 && this.vel.y <= 0) {
      p.y = g.h; this.vel.y = 0; // bajar escalones pegado al suelo
    } else this.grounded = false;
    this.surface = g.surface;
    if (p.y < -5) { p.copy(this.school.poi.spawn); this.vel.set(0, 0, 0); }

    const hs = Math.hypot(this.vel.x, this.vel.z);
    if (hs > 0.3) c.yaw = lerpAngle(c.yaw, Math.atan2(this.vel.x, this.vel.z), Math.min(1, dt * 12));
    c.anim = !this.grounded ? 'jump' : hs > 3.6 ? 'run' : hs > 0.3 ? 'walk' : 'idle';
    c.speed = hs * 0.75;
    // pasos
    if (this.grounded && hs > 0.5) {
      this.stepPhase += dt * hs * (run ? 1.05 : 1.4);
      if (this.stepPhase > 1) { this.stepPhase -= 1; audio.step2(this.surface, run); }
    }
    c.update(dt);
  }
}

/** Cámara en tercera persona con suavizado y anti-clipping. */
export class ThirdPersonCam {
  pos = new THREE.Vector3();
  look = new THREE.Vector3();
  dist = 4.0;
  private curDist = 4;
  // modo cinemático
  cine = false;
  private from = { p: new THREE.Vector3(), l: new THREE.Vector3() };
  private to = { p: new THREE.Vector3(), l: new THREE.Vector3() };
  private tw = 0; private twDur = 0;
  private resolve: (() => void) | null = null;
  shake = 0;
  private tmpA = new THREE.Vector3(); private tmpB = new THREE.Vector3();
  follow: { target: () => THREE.Vector3; offset: THREE.Vector3 } | null = null;

  constructor(public camera: THREE.PerspectiveCamera, public school: School) {}

  /** Corte o movimiento de cámara cinemático. */
  shot(p: THREE.Vector3, l: THREE.Vector3, dur = 0): Promise<void> {
    this.cine = true;
    this.follow = null;
    if (this.resolve) { this.resolve(); this.resolve = null; }
    if (dur <= 0) {
      this.pos.copy(p); this.look.copy(l); this.to.p.copy(p); this.to.l.copy(l); this.tw = this.twDur = 0;
      return Promise.resolve();
    }
    this.from.p.copy(this.pos); this.from.l.copy(this.look);
    this.to.p.copy(p); this.to.l.copy(l);
    this.tw = 0; this.twDur = dur;
    return new Promise((r) => (this.resolve = r));
  }
  release() { this.cine = false; this.follow = null; if (this.resolve) { this.resolve(); this.resolve = null; } }

  update(dt: number, player: Player, indoors: boolean) {
    const cam = this.camera;
    if (this.cine) {
      if (this.follow) {
        const t = this.follow.target();
        this.to.l.copy(t); this.to.p.copy(t).add(this.follow.offset);
        this.pos.lerp(this.to.p, Math.min(1, dt * 3)); this.look.lerp(this.to.l, Math.min(1, dt * 4));
      } else if (this.twDur > 0) {
        this.tw = Math.min(this.twDur, this.tw + dt);
        const k = this.tw / this.twDur;
        const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        this.pos.lerpVectors(this.from.p, this.to.p, e);
        this.look.lerpVectors(this.from.l, this.to.l, e);
        if (k >= 1) { this.twDur = 0; if (this.resolve) { const r = this.resolve; this.resolve = null; r(); } }
      }
      cam.position.copy(this.pos);
    } else {
      const head = this.tmpA.copy(player.pos).add(new THREE.Vector3(0, player.seat ? 1.25 : 1.55, 0));
      const want = indoors ? 3.0 : this.dist;
      const yaw = player.camYaw, pitch = player.camPitch;
      const dir = this.tmpB.set(-Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch));
      const ideal = head.clone().addScaledVector(dir, want);
      // hombro: ligero desplazamiento lateral
      ideal.x += Math.cos(yaw) * -0.35; ideal.z += -Math.sin(yaw) * -0.35;
      const frac = this.school.world.raycast(head, ideal);
      const d = Math.max(0.6, want * frac - 0.25);
      this.curDist += (d - this.curDist) * Math.min(1, dt * (d < this.curDist ? 20 : 4));
      const fp = head.clone().addScaledVector(dir, this.curDist);
      fp.x += Math.cos(yaw) * -0.35 * (this.curDist / want); fp.z += -Math.sin(yaw) * -0.35 * (this.curDist / want);
      this.pos.lerp(fp, Math.min(1, dt * 18));
      this.look.lerp(head, Math.min(1, dt * 20));
      cam.position.copy(this.pos);
    }
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 2);
      cam.position.x += (Math.random() - 0.5) * this.shake * 0.15;
      cam.position.y += (Math.random() - 0.5) * this.shake * 0.15;
    }
    cam.lookAt(this.look);
  }
}
