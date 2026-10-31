import * as THREE from 'three';
import type { Surface } from '../core/audio';

export interface Box {
  x0: number; y0: number; z0: number;
  x1: number; y1: number; z1: number;
  surface?: Surface;
  cam?: boolean; // bloquea cámara
}

const CELL = 2;
export const STEP = 0.4;

export class CollisionWorld {
  boxes: Box[] = [];
  private grid = new Map<number, Box[]>();
  groundSurface: (x: number, z: number) => Surface = () => 'grass';

  private key(ix: number, iz: number) { return (ix + 500) * 1000 + (iz + 500); }

  add(b: Box) {
    if (b.cam === undefined) b.cam = true;
    this.boxes.push(b);
    const ix0 = Math.floor(b.x0 / CELL), ix1 = Math.floor(b.x1 / CELL);
    const iz0 = Math.floor(b.z0 / CELL), iz1 = Math.floor(b.z1 / CELL);
    for (let ix = ix0; ix <= ix1; ix++) for (let iz = iz0; iz <= iz1; iz++) {
      const k = this.key(ix, iz);
      let arr = this.grid.get(k);
      if (!arr) { arr = []; this.grid.set(k, arr); }
      arr.push(b);
    }
  }

  private query(x0: number, z0: number, x1: number, z1: number, out: Set<Box>) {
    const ix0 = Math.floor(x0 / CELL), ix1 = Math.floor(x1 / CELL);
    const iz0 = Math.floor(z0 / CELL), iz1 = Math.floor(z1 / CELL);
    for (let ix = ix0; ix <= ix1; ix++) for (let iz = iz0; iz <= iz1; iz++) {
      const arr = this.grid.get(this.key(ix, iz));
      if (arr) for (const b of arr) out.add(b);
    }
    return out;
  }
  private tmp = new Set<Box>();

  /** Altura del suelo bajo (x,z) que el personaje puede pisar desde altura y. */
  groundAt(x: number, z: number, y: number, r = 0.15): { h: number; surface: Surface } {
    let h = 0;
    let surface: Surface = this.groundSurface(x, z);
    this.tmp.clear();
    for (const b of this.query(x - r, z - r, x + r, z + r, this.tmp)) {
      if (x + r > b.x0 && x - r < b.x1 && z + r > b.z0 && z - r < b.z1 && b.y1 <= y + STEP && b.y1 > h) {
        h = b.y1;
        surface = b.surface ?? 'tile';
      }
    }
    return { h, surface };
  }

  /** Empuja un cilindro fuera de las cajas sólidas (sólo plano XZ). */
  collide(p: THREE.Vector3, r: number, height: number) {
    this.tmp.clear();
    const set = this.query(p.x - r - 0.1, p.z - r - 0.1, p.x + r + 0.1, p.z + r + 0.1, this.tmp);
    for (let iter = 0; iter < 2; iter++) {
      for (const b of set) {
        if (b.y0 >= p.y + height || b.y1 <= p.y + STEP) continue;
        const cx = Math.max(b.x0, Math.min(p.x, b.x1));
        const cz = Math.max(b.z0, Math.min(p.z, b.z1));
        const dx = p.x - cx, dz = p.z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 < r * r) {
          if (d2 > 1e-8) {
            const d = Math.sqrt(d2);
            p.x += (dx / d) * (r - d);
            p.z += (dz / d) * (r - d);
          } else {
            // centro dentro de la caja: salir por el lado más cercano
            const pen = [p.x - b.x0, b.x1 - p.x, p.z - b.z0, b.z1 - p.z];
            const m = Math.min(...pen);
            if (m === pen[0]) p.x = b.x0 - r; else if (m === pen[1]) p.x = b.x1 + r;
            else if (m === pen[2]) p.z = b.z0 - r; else p.z = b.z1 + r;
          }
        }
      }
    }
  }

  /** ¿El segmento a→b cruza alguna caja de cámara? Devuelve fracción [0,1]. */
  raycast(a: THREE.Vector3, b: THREE.Vector3): number {
    this.tmp.clear();
    const set = this.query(Math.min(a.x, b.x), Math.min(a.z, b.z), Math.max(a.x, b.x), Math.max(a.z, b.z), this.tmp);
    let best = 1;
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
    for (const bx of set) {
      if (!bx.cam) continue;
      let t0 = 0, t1 = best;
      const axes: [number, number, number, number][] = [[a.x, dx, bx.x0, bx.x1], [a.y, dy, bx.y0, bx.y1], [a.z, dz, bx.z0, bx.z1]];
      let ok = true;
      for (const [o, d, mn, mx] of axes) {
        if (Math.abs(d) < 1e-9) { if (o < mn || o > mx) { ok = false; break; } continue; }
        let ta = (mn - o) / d, tb = (mx - o) / d;
        if (ta > tb) [ta, tb] = [tb, ta];
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
        if (t0 > t1) { ok = false; break; }
      }
      if (ok && t0 < best) best = t0;
    }
    return best;
  }
}
