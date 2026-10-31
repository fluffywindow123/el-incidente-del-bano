import * as THREE from 'three';
import { Builder, makeSign, canvasPlane } from './builder';
import { CollisionWorld } from './collision';
import { NavGraph } from './nav';

export const FH = 3.6; // altura de piso
const WH = 3.3; // altura de muro
const T = 0.3; // grosor de muro

const COL = {
  wall: '#f1e2c4', wallLow: '#3a78b8', trim: '#b4552e', column: '#9a4127', floor: '#d8d0c0', corridor: '#c7b294',
  concrete: '#bfb8ac', grass: '#78b552', court: '#3b8a57', courtB: '#c55a32', line: '#f4f4f0', board: '#1f4a37',
  desk: '#c98b4b', deskTop: '#e7c08b', chairBlue: '#2f62b0', metal: '#5b6370', glass: '#9fd3ff', roof: '#8d8172',
  bathWall: '#d5ecf3', bathTile: '#e8f4f6', stall: '#4f87c4', wood: '#a8672f', shelf: '#7b4a26',
};

export interface Seat { pos: THREE.Vector3; yaw: number; room: string; occupant: string | null; lane: number; }
export interface Room {
  id: string; name: string; floor: number;
  x0: number; x1: number; z0: number; z1: number;
  doorX: number; inNode: number; corridorNode: number;
  seats: Seat[]; teacherPos?: THREE.Vector3; board?: THREE.Mesh; kind: string;
}
export interface MapRect { name: string; x0: number; z0: number; x1: number; z1: number; floor: number; color: string; }

export class Door {
  pivot = new THREE.Group();
  angle = 0;
  wasOpen = false;
  constructor(public hinge: THREE.Vector3, width: number, color: string, public dir = 1) {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(width, 2.25, 0.06), new THREE.MeshStandardMaterial({ color, roughness: 0.6 }));
    panel.position.set(width / 2, 1.125, 0);
    panel.castShadow = true;
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshStandardMaterial({ color: '#d8c070', metalness: 0.8, roughness: 0.3 }));
    knob.position.set(width - 0.12, 1.05, 0.06);
    const knob2 = knob.clone(); knob2.position.z = -0.06;
    const win = new THREE.Mesh(new THREE.PlaneGeometry(width * 0.5, 0.5), new THREE.MeshStandardMaterial({ color: '#bfe3ff', roughness: 0.1 }));
    win.position.set(width / 2, 1.75, 0.035);
    this.pivot.add(panel, knob, knob2, win);
    this.pivot.position.copy(hinge);
  }
  update(dt: number, near: boolean) {
    const target = near ? Math.PI * 0.55 * this.dir : 0;
    this.angle += (target - this.angle) * Math.min(1, dt * 6);
    this.pivot.rotation.y = this.angle;
    const open = near;
    const changed = open !== this.wasOpen;
    this.wasOpen = open;
    return changed;
  }
}

export class School {
  world = new CollisionWorld();
  nav = new NavGraph();
  rooms: Room[] = [];
  doors: Door[] = [];
  mapRects: MapRect[] = [];
  hangouts: number[] = [];
  group = new THREE.Group();
  flag!: THREE.Mesh;
  private b: Builder;
  poi: Record<string, THREE.Vector3> = {};

  constructor(public scene: THREE.Scene) {
    this.b = new Builder(this.world);
    scene.add(this.group);
    this.world.groundSurface = (x, z) => {
      if (z > 48.3) return 'concrete';
      return 'grass';
    };
    this.buildGrounds();
    this.buildMainBuilding();
    this.buildCafeteria();
    this.buildCourts();
    this.buildEntrance();
    this.buildNav();
    const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3();
    this.nav.los = (a, b) => this.world.raycast(tmpA.copy(a).setY(a.y + 1.0), tmpB.copy(b).setY(b.y + 1.0)) >= 0.999;
    this.b.build(scene);
  }

  room(id: string) { const r = this.rooms.find((r) => r.id === id); if (!r) throw new Error(id); return r; }

  // ---------------- utilidades ----------------
  /** Muro a lo largo de X en z fijo, con huecos (puertas/ventanas). */
  private wallX(x0: number, x1: number, z: number, y0: number, color: string, holes: { a: number; b: number; t: 'door' | 'win' }[] = [], low = COL.wallLow, h = WH) {
    const b = this.b;
    holes = [...holes].sort((p, q) => p.a - q.a);
    let x = x0;
    const z0 = z - T / 2, z1 = z + T / 2;
    for (const ho of [...holes, { a: x1, b: x1, t: 'end' as const }]) {
      if (ho.a > x) {
        b.box(x, y0, z0, ho.a, y0 + h, z1, color);
        if (low) b.box(x, y0, z0 - 0.02, ho.a, y0 + 1.0, z1 + 0.02, low, { collide: false });
      }
      if (ho.t === 'door') {
        b.box(ho.a, y0 + 2.3, z0, ho.b, y0 + h, z1, color);
        b.box(ho.a - 0.06, y0, z0 - 0.03, ho.a, y0 + 2.36, z1 + 0.03, COL.trim, { collide: false });
        b.box(ho.b, y0, z0 - 0.03, ho.b + 0.06, y0 + 2.36, z1 + 0.03, COL.trim, { collide: false });
      } else if (ho.t === 'win') {
        b.box(ho.a, y0, z0, ho.b, y0 + 1.0, z1, color);
        if (low) b.box(ho.a, y0, z0 - 0.02, ho.b, y0 + 1.0, z1 + 0.02, low, { collide: false });
        b.box(ho.a, y0 + 2.3, z0, ho.b, y0 + h, z1, color);
        b.box(ho.a, y0 + 1.0, z - 0.03, ho.b, y0 + 2.3, z + 0.03, COL.glass, { mat: 'glass', cam: true });
        // marco y parteluces
        b.box(ho.a, y0 + 0.98, z0 - 0.04, ho.b, y0 + 1.06, z1 + 0.04, COL.trim, { collide: false });
        const n = Math.max(1, Math.round((ho.b - ho.a) / 1.2));
        for (let i = 1; i < n; i++) { const xx = ho.a + ((ho.b - ho.a) * i) / n; b.box(xx - 0.03, y0 + 1, z - 0.05, xx + 0.03, y0 + 2.3, z + 0.05, '#e8e8e8', { collide: false }); }
        b.box(ho.a, y0 + 1.63, z - 0.05, ho.b, y0 + 1.67, z + 0.05, '#e8e8e8', { collide: false });
      }
      x = Math.max(x, ho.b);
    }
  }
  /** Muro a lo largo de Z en x fijo. */
  private wallZ(z0: number, z1: number, x: number, y0: number, color: string, holes: { a: number; b: number; t: 'door' | 'win' }[] = [], low = COL.wallLow, h = WH) {
    const b = this.b;
    holes = [...holes].sort((p, q) => p.a - q.a);
    let z = z0;
    const x0 = x - T / 2, x1 = x + T / 2;
    for (const ho of [...holes, { a: z1, b: z1, t: 'end' as const }]) {
      if (ho.a > z) {
        b.box(x0, y0, z, x1, y0 + h, ho.a, color);
        if (low) b.box(x0 - 0.02, y0, z, x1 + 0.02, y0 + 1.0, ho.a, low, { collide: false });
      }
      if (ho.t === 'door') b.box(x0, y0 + 2.3, ho.a, x1, y0 + h, ho.b, color);
      else if (ho.t === 'win') {
        b.box(x0, y0, ho.a, x1, y0 + 1.0, ho.b, color);
        b.box(x0, y0 + 2.3, ho.a, x1, y0 + h, ho.b, color);
        b.box(x - 0.03, y0 + 1.0, ho.a, x + 0.03, y0 + 2.3, ho.b, COL.glass, { mat: 'glass' });
        b.box(x0 - 0.04, y0 + 0.98, ho.a, x1 + 0.04, y0 + 1.06, ho.b, COL.trim, { collide: false });
      }
      z = Math.max(z, ho.b);
    }
  }
  private sign(text: string, x: number, y: number, z: number, w: number, h: number, rotY = 0, bg = '#1d3b7a', fg = '#fff') {
    const m = makeSign(text, w, h, bg, fg);
    m.position.set(x, y, z); m.rotation.y = rotY;
    this.group.add(m);
    return m;
  }

  // ---------------- terreno ----------------
  private buildGrounds() {
    const b = this.b;
    // pasto base
    const grassC = document.createElement('canvas'); grassC.width = grassC.height = 256;
    const g = grassC.getContext('2d')!;
    g.fillStyle = '#7dbb55'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 4000; i++) { const s = Math.random(); g.fillStyle = s < 0.5 ? 'rgba(60,120,40,0.25)' : 'rgba(170,220,110,0.2)'; g.fillRect(Math.random() * 256, Math.random() * 256, 2, 3); }
    const gt = new THREE.CanvasTexture(grassC); gt.wrapS = gt.wrapT = THREE.RepeatWrapping; gt.repeat.set(60, 60); gt.colorSpace = THREE.SRGBColorSpace;
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshStandardMaterial({ map: gt, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;
    this.group.add(ground);

    // pavimento del patio y explanadas
    b.box(-62, -0.1, 8, 64, 0.02, 47.7, COL.concrete, { surface: 'concrete' });
    // juntas del pavimento
    for (let x = -60; x <= 62; x += 4) b.box(x - 0.03, 0.02, 8, x + 0.03, 0.025, 47.7, '#a9a296', { collide: false, shadow: false });
    for (let z = 12; z <= 46; z += 4) b.box(-62, 0.02, z - 0.03, 64, 0.025, z + 0.03, '#a9a296', { collide: false, shadow: false });
    // banda alrededor del edificio (andador trasero)
    b.box(-62, -0.1, -0.5, -40, 0.02, 8, COL.concrete, { surface: 'concrete' });
    b.box(40, -0.1, -0.5, 64, 0.02, 8, COL.concrete, { surface: 'concrete' });
    // líneas de formación en el patio (honores)
    for (let i = 0; i < 6; i++) b.box(-14 + i * 5.6, 0.02, 20, -13.8 + i * 5.6, 0.03, 40, '#f0d040', { collide: false, shadow: false });
    // asta bandera
    b.cyl(5, 0, 31, 0.6, 0.5, '#9a9488', { collide: true, seg: 8 });
    b.cyl(5, 0.5, 31, 0.07, 10, '#d8d8d8', { collide: true, mat: 'metal' });
    const flagC = document.createElement('canvas'); flagC.width = 192; flagC.height = 110;
    const fg = flagC.getContext('2d')!;
    fg.fillStyle = '#006847'; fg.fillRect(0, 0, 64, 110); fg.fillStyle = '#fff'; fg.fillRect(64, 0, 64, 110); fg.fillStyle = '#ce1126'; fg.fillRect(128, 0, 64, 110);
    fg.fillStyle = '#8a5a2b'; fg.beginPath(); fg.ellipse(96, 55, 13, 15, 0, 0, Math.PI * 2); fg.fill();
    const ft = new THREE.CanvasTexture(flagC); ft.colorSpace = THREE.SRGBColorSpace;
    const fgeo = new THREE.PlaneGeometry(3, 1.7, 16, 4);
    this.flag = new THREE.Mesh(fgeo, new THREE.MeshStandardMaterial({ map: ft, side: THREE.DoubleSide, roughness: 0.9 }));
    this.flag.position.set(6.55, 9.6, 31); this.flag.castShadow = true;
    this.flag.userData.base = (fgeo.attributes.position.array as Float32Array).slice();
    this.group.add(this.flag);

    // jardineras con bancas
    const planters: [number, number, number, number][] = [[-27, 32, -24, 44], [24.5, 14, 28, 26], [24.5, 34, 28, 44], [-14, 44.6, -6, 47], [10, 44.6, 18, 47]];
    for (const [x0, z0, x1, z1] of planters) {
      b.box(x0, 0, z0, x1, 0.45, z1, '#a24d2a');
      b.box(x0 + 0.15, 0.45, z0 + 0.15, x1 - 0.15, 0.5, z1 - 0.15, '#4e8f3a', { collide: false });
    }
    // bancas del patio
    const bench = (x: number, z: number, rot: boolean) => {
      const [w, d] = rot ? [0.5, 2] : [2, 0.5];
      b.boxC(x, 0.42, z, w, 0.08, d, COL.wood, { mat: 'wood' });
      b.boxC(x + (rot ? 0 : -0.8), 0, z + (rot ? -0.8 : 0), 0.12, 0.42, 0.12, COL.metal);
      b.boxC(x + (rot ? 0 : 0.8), 0, z + (rot ? 0.8 : 0), 0.12, 0.42, 0.12, COL.metal);
    };
    bench(-22.6, 20, true); bench(-22.6, 30, true); bench(-22.6, 38, true); bench(23.2, 20, true); bench(23.2, 38, true);
    // periódico mural
    b.boxC(-15, 0, 12.5, 4.4, 2.2, 0.2, '#6b3b1d');
    const mural = canvasPlane(4, 1.6, (g, W, H) => {
      g.fillStyle = '#f7efe0'; g.fillRect(0, 0, W, H);
      g.fillStyle = '#c0392b'; g.font = `900 ${H * 0.16}px Bungee, sans-serif`; g.textAlign = 'center'; g.fillText('PERIÓDICO MURAL', W / 2, H * 0.18);
      const notes = ['#ffe066', '#9be7ff', '#ffadad', '#b9fbc0', '#ffd6a5'];
      for (let i = 0; i < 9; i++) { g.fillStyle = notes[i % 5]; g.save(); g.translate(30 + (i % 5) * W / 5.3, H * 0.3 + Math.floor(i / 5) * H * 0.33); g.rotate((Math.random() - 0.5) * 0.2); g.fillRect(0, 0, W / 6, H * 0.28); g.restore(); }
      g.fillStyle = '#333'; g.font = `700 ${H * 0.07}px Nunito, sans-serif`;
      g.fillText('Concurso de cuentos · Feria de ciencias · ¡No corran en los pasillos!', W / 2, H * 0.96);
    });
    mural.position.set(-15, 1.25, 12.62); this.group.add(mural);
    // bebedero
    b.boxC(-8, 0, 9.0, 1.6, 0.9, 0.6, '#b8c4cc', { mat: 'metal' });
    this.poi.fountain = new THREE.Vector3(-8, 0, 9.9);

    this.mapRects.push({ name: 'Patio central', x0: -24, z0: 9, x1: 24, z1: 47, floor: 0, color: '#8d877c' });
  }

  // ---------------- edificio principal ----------------
  private buildMainBuilding() {
    const b = this.b;
    const X0 = -40, X1 = 40, ZB = -14, ZF = 2, ZC = 8;
    // pisos
    b.box(X0, -0.1, ZB, X1, 0.03, ZF, COL.floor, { surface: 'tile', mat: 'tile' });
    b.box(-54, -0.1, ZF, 54, 0.03, ZC, COL.corridor, { surface: 'tile', mat: 'tile' });
    // losa del 2º piso y techo
    b.box(X0, FH - 0.3, ZB, X1, FH, ZC + 0.15, '#e9e2d6', { surface: 'tile', mat: 'tile' });
    b.box(X0 - 0.3, 2 * FH - 0.3, ZB - 0.3, X1 + 0.3, 2 * FH, ZC + 0.6, COL.roof);
    // pretil y franja de color en fachada
    b.box(X0 - 0.3, 2 * FH, ZC + 0.3, X1 + 0.3, 2 * FH + 0.7, ZC + 0.6, COL.trim);
    b.box(X0 - 0.3, FH - 0.32, ZC + 0.15, X1 + 0.3, FH + 0.05, ZC + 0.35, COL.trim, { collide: false });
    // columnas del pasillo (planta baja y alta)
    for (let x = -37; x <= 35; x += 6) {
      b.box(x - 0.25, 0, ZC - 0.25, x + 0.25, FH - 0.3, ZC + 0.25, COL.column);
      b.box(x - 0.2, FH, ZC - 0.2, x + 0.2, 2 * FH - 0.3, ZC + 0.2, COL.column);
    }
    // barandal 2º piso
    b.box(X0, FH, ZC, X1, FH + 1.0, ZC + 0.12, '#e7d7b5');
    b.box(X0, FH + 1.0, ZC - 0.04, X1, FH + 1.08, ZC + 0.16, COL.trim, { collide: false });
    this.world.add({ x0: X0, y0: FH, z0: ZC, x1: X1, y1: FH + 2.2, z1: ZC + 0.12, cam: false });
    // muros traseros y laterales (ambos pisos)
    for (const fl of [0, 1]) {
      const y0 = fl * FH;
      this.wallZ(ZB, ZF + T / 2, X0, y0, COL.wall, [], COL.wallLow);
      this.wallZ(ZB, ZF + T / 2, X1, y0, COL.wall, [], COL.wallLow);
    }
    // escaleras exteriores (oeste y este)
    this.stairs(-54, 1);
    this.stairs(54, -1);

    // definición de salones
    const ground: [string, string, number, number, string][] = [
      ['1A', '1° A', -40, -28, 'class'], ['2A', '2° A', -28, -16, 'class'], ['3A', '3° A', -16, -4, 'class'],
      ['dir', 'DIRECCIÓN', -4, 8, 'dir'], ['maestros', 'SALA DE MAESTROS', 8, 20, 'teachers'],
      ['banoH', 'BAÑO HOMBRES', 20, 26, 'bathH'], ['banoM', 'BAÑO MUJERES', 26, 32, 'bathM'], ['conserje', 'CONSERJERÍA', 32, 40, 'storage'],
    ];
    const upper: [string, string, number, number, string][] = [
      ['lab', 'LABORATORIO', -40, -28, 'lab'], ['comp', 'COMPUTACIÓN', -28, -16, 'comp'], ['biblio', 'BIBLIOTECA', -16, -4, 'library'],
      ['2B', '2° B', -4, 8, 'class'], ['3B', '3° B', 8, 20, 'class'], ['1B', '1° B', 20, 32, 'class'], ['bodega', 'BODEGA', 32, 40, 'storage'],
    ];
    for (const [fl, list] of [[0, ground], [1, upper]] as const) {
      for (const [id, name, x0, x1, kind] of list) this.buildRoom(id, name, fl, x0, x1, kind);
    }
    // letrero grande del colegio en la fachada
    this.sign('COLEGIO GANTE', 0, 2 * FH + 0.35, ZC + 0.62, 9, 0.7, 0, '#b4552e', '#fff3d6');
    this.sign('SECUNDARIA', -24, 2 * FH + 0.35, ZC + 0.62, 4.5, 0.55, 0, '#b4552e', '#fff3d6');
    this.sign('“Saber es servir”', 24, 2 * FH + 0.35, ZC + 0.62, 5, 0.55, 0, '#b4552e', '#fff3d6');
    this.mapRects.push({ name: 'Pasillo', x0: X0, z0: ZF, x1: X1, z1: ZC, floor: 0, color: '#6a6052' });
    this.mapRects.push({ name: 'Pasillo', x0: X0, z0: ZF, x1: X1, z1: ZC, floor: 1, color: '#6a6052' });
    this.mapRects.push({ name: 'Escaleras', x0: -54, z0: ZF, x1: -40, z1: ZC, floor: 0, color: '#9b7b52' });
    this.mapRects.push({ name: 'Escaleras', x0: 40, z0: ZF, x1: 54, z1: ZC, floor: 0, color: '#9b7b52' });
    this.mapRects.push({ name: 'Escaleras', x0: -54, z0: ZF, x1: -40, z1: ZC, floor: 1, color: '#9b7b52' });
    this.mapRects.push({ name: 'Escaleras', x0: 40, z0: ZF, x1: 54, z1: ZC, floor: 1, color: '#9b7b52' });
  }

  private stairs(bottomX: number, dir: number) {
    const b = this.b;
    const n = 14, r = FH / n;
    for (let i = 0; i < n; i++) {
      const xa = bottomX + dir * i, xb = bottomX + dir * (i + 1);
      b.box(Math.min(xa, xb), 0, 2, Math.max(xa, xb), (i + 1) * r, 8, i % 2 ? '#c9b294' : '#bda686', { surface: 'concrete', mat: 'tile' });
    }
    const xa = Math.min(bottomX, bottomX + dir * n), xb = Math.max(bottomX, bottomX + dir * n);
    // barandales inclinados (escalonados para colisión)
    for (let i = 0; i < n; i++) {
      const x0 = bottomX + dir * i, x1 = bottomX + dir * (i + 1);
      const top = (i + 1) * r;
      for (const z of [1.9, 8.1]) b.box(Math.min(x0, x1), top, z - 0.06, Math.max(x0, x1), top + 1.0, z + 0.06, COL.metal, { collide: true, cam: false, shadow: false, mat: 'metal' });
    }
    b.box(xa, -0.01, 1.7, xb, 0.01, 1.8, COL.trim, { collide: false });
  }

  private buildRoom(id: string, name: string, fl: number, x0: number, x1: number, kind: string) {
    const b = this.b;
    const y0 = fl * FH;
    const ZB = -14, ZF = 2;
    const w = x1 - x0;
    const isBath = kind === 'bathH' || kind === 'bathM';
    const doorA = x1 - (isBath ? 4.6 : 2.4), doorB = doorA + 1.4;
    const doorX = (doorA + doorB) / 2;
    const wallC = isBath ? COL.bathWall : COL.wall;
    const low = isBath ? '#7fb6cf' : kind === 'dir' ? '#7a2c2c' : COL.wallLow;
    // muro frontal (pasillo)
    const holes: { a: number; b: number; t: 'door' | 'win' }[] = [{ a: doorA, b: doorB, t: 'door' }];
    if (!isBath && w >= 10) { holes.push({ a: x0 + 1, b: x0 + 4, t: 'win' }); holes.push({ a: x0 + 5, b: x0 + 8.6, t: 'win' }); }
    else if (!isBath) holes.push({ a: x0 + 1, b: x0 + 4, t: 'win' });
    this.wallX(x0, x1, ZF, y0, wallC, holes, low);
    // muro trasero con ventanas
    const back: { a: number; b: number; t: 'door' | 'win' }[] = [];
    if (w >= 10) { back.push({ a: x0 + 0.8, b: x0 + 2.6, t: 'win' }); back.push({ a: x1 - 2.6, b: x1 - 0.8, t: 'win' }); }
    else if (!isBath) back.push({ a: x0 + 1, b: x1 - 1, t: 'win' });
    this.wallX(x0, x1, ZB, y0, wallC, back, low);
    // muro divisorio derecho (excepto en el último)
    if (x1 < 40) this.wallZ(ZB, ZF, x1, y0, wallC, [], low);
    // lámparas
    for (let lx = x0 + 3; lx < x1 - 1; lx += 6) for (const lz of [-10, -4]) b.box(lx - 0.6, y0 + WH - 0.06, lz - 0.15, lx + 0.6, y0 + WH, lz + 0.15, '#fffbea', { mat: 'emit', collide: false, shadow: false });
    // puerta animada
    const door = new Door(new THREE.Vector3(doorA, y0, ZF), 1.4, isBath ? COL.stall : '#7b4a26', 1);
    this.doors.push(door); this.group.add(door.pivot);
    // letrero sobre la puerta
    this.sign(name, doorX, y0 + 2.75, ZF + 0.17, Math.min(3.2, name.length * 0.22 + 0.6), 0.42, 0, isBath ? '#2a7fb8' : kind === 'dir' ? '#7a2c2c' : '#1d3b7a');

    const room: Room = { id, name, floor: fl, x0, x1, z0: ZB, z1: ZF, doorX, inNode: -1, corridorNode: -1, seats: [], kind };
    this.rooms.push(room);
    this.mapRects.push({ name, x0, z0: ZB, x1, z1: ZF, floor: fl, color: isBath ? '#3d7aa0' : kind === 'dir' ? '#8a3a3a' : kind === 'class' ? '#4a5a8a' : '#5a6a5a' });

    const hasDesks = kind === 'class' || kind === 'lab' || kind === 'comp' || kind === 'library';
    if (hasDesks) {
      // pizarrón
      if (kind !== 'library') {
        b.box(x0 + 2.8, y0 + 0.85, ZB + 0.15, x1 - 2.8, y0 + 2.45, ZB + 0.22, '#ddd', { collide: false });
        const board = canvasPlane(w - 5.8, 1.45, (g, W, H) => { g.fillStyle = COL.board; g.fillRect(0, 0, W, H); });
        board.position.set((x0 + x1) / 2, y0 + 1.65, ZB + 0.235);
        this.group.add(board);
        room.board = board;
        this.drawBoard(room, kind === 'lab' ? ['Laboratorio de Ciencias', 'Usa bata y lentes'] : kind === 'comp' ? ['Tecnología', 'No comer cerca de las compus'] : [name, 'Bienvenidos']);
        b.box(x0 + 2.8, y0 + 0.82, ZB + 0.15, x1 - 2.8, y0 + 0.86, ZB + 0.38, '#bbb', { collide: false });
        // escritorio del profe
        b.boxC(x0 + w / 2 + 2.5, y0, ZB + 2.3, 1.6, 0.76, 0.75, '#7b4a26', { mat: 'wood' });
        b.boxC(x0 + w / 2 + 2.5, y0 + 0.76, ZB + 2.3, 1.7, 0.05, 0.8, '#5a3519', { collide: false });
        room.teacherPos = new THREE.Vector3(x0 + w / 2, y0, ZB + 2.1);
        // bandera escolar / reloj
        b.cyl(x1 - 0.6, y0 + 2.3, ZB + 0.25, 0.25, 0.06, '#fff', { seg: 16 });
      }
      // asientos 4x4
      for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
        const cx = x0 + 1.8 + c * 2.4, zr = -9.5 + r * 2.3;
        const seat: Seat = { pos: new THREE.Vector3(cx, y0, zr + 0.55), yaw: Math.PI, room: id, occupant: null, lane: r };
        room.seats.push(seat);
        if (kind === 'class') this.deskChair(cx, y0, zr);
        else if (kind === 'comp') this.computerDesk(cx, y0, zr);
        else if (kind === 'library') { if (c % 2 === 0) this.libTable(cx + 1.2, y0, zr); this.chair(cx, y0, zr + 0.55, '#7b4a26'); }
        else this.chair(cx, y0, zr + 0.55, '#333', true);
      }
      if (kind === 'lab') {
        for (let r = 0; r < 4; r++) {
          const zr = -9.5 + r * 2.3;
          b.box(x0 + 1.0, y0, zr - 0.4, x0 + 9.8, y0 + 0.9, zr + 0.2, '#e8e8e8');
          b.box(x0 + 0.95, y0 + 0.9, zr - 0.45, x0 + 9.85, y0 + 0.96, zr + 0.25, '#222', { collide: false });
          // tubos y matraces
          for (let i = 0; i < 4; i++) {
            const cols = ['#4ef0a0', '#ff6bd5', '#6bc8ff', '#ffd23f'];
            b.cyl(x0 + 1.6 + i * 2.4, y0 + 0.96, zr - 0.2, 0.08, 0.22, cols[(i + r) % 4], { mat: 'emit', seg: 8, r2: 0.03 });
          }
        }
        // esqueleto de anatomía (simplificado) y gabinete
        b.boxC(x1 - 1.0, y0, ZB + 4, 0.9, 2.0, 2.2, '#ccc');
        this.poi.labSkeleton = new THREE.Vector3(x1 - 1.85, y0, ZB + 5.7);
        this.poi.labBench = new THREE.Vector3(x0 + 4.2, y0, -9.5 + 0.55);
        const tabla = canvasPlane(2.2, 1.2, (g, W, H) => {
          g.fillStyle = '#fff'; g.fillRect(0, 0, W, H);
          const cols = ['#ff8a80', '#ffd180', '#ccff90', '#80d8ff', '#ea80fc'];
          for (let i = 0; i < 18; i++) for (let j = 0; j < 7; j++) { if (j < 1 && i > 0 && i < 17) continue; g.fillStyle = cols[(i + j) % 5]; g.fillRect(4 + i * (W - 8) / 18, 14 + j * (H - 20) / 7, (W - 8) / 18 - 2, (H - 20) / 7 - 2); }
          g.fillStyle = '#000'; g.font = `900 ${H * 0.09}px Nunito`; g.fillText('TABLA PERIÓDICA', 8, 11);
        });
        tabla.position.set(x0 + 0.17, y0 + 1.8, -6); tabla.rotation.y = Math.PI / 2; this.group.add(tabla);
      }
      if (kind === 'comp') this.poi.computer = new THREE.Vector3(x0 + 4.2, y0, -7.2 + 0.55);
      if (kind === 'library') {
        for (let i = 0; i < 4; i++) this.bookshelf(x0 + 0.5, y0, -12.5 + i * 2.6, true);
        for (let i = 0; i < 4; i++) this.bookshelf(x0 + 1.6 + i * 2.2, y0, ZB + 0.45, false);
        b.boxC(x1 - 2.2, y0, ZB + 2.5, 2.0, 1.0, 0.8, '#7b4a26', { mat: 'wood' });
        room.teacherPos = new THREE.Vector3(x1 - 2.2, y0, ZB + 1.6);
        this.poi.bookshelf = new THREE.Vector3(x0 + 1.0, y0, -6.0);
      }
      // carteles en las paredes
      if (kind === 'class') {
        const posters = ['Los Niños Héroes', 'Tabla del 7', 'Verbos irregulares', 'Mapa de México'];
        const p = canvasPlane(1.6, 1.1, (g, W, H) => {
          g.fillStyle = ['#ffe9a8', '#c8f0ff', '#ffd0d0', '#d8ffd0'][Math.abs(Math.round(x0)) % 4]; g.fillRect(0, 0, W, H);
          g.fillStyle = '#2a2a2a'; g.font = `900 ${H * 0.13}px Bungee, sans-serif`; g.textAlign = 'center';
          g.fillText(posters[Math.abs(Math.round(x0 / 12)) % 4], W / 2, H * 0.22);
          g.fillStyle = '#555'; for (let i = 0; i < 5; i++) g.fillRect(W * 0.12, H * (0.38 + i * 0.11), W * (0.5 + Math.random() * 0.25), H * 0.04);
        });
        p.position.set(x0 + 0.17, y0 + 1.7, -4); p.rotation.y = Math.PI / 2; this.group.add(p);
      }
    }
    if (kind === 'dir') {
      const cx = x0 + 6;
      b.boxC(cx, y0, -11, 2.4, 0.78, 1.0, '#5a3519', { mat: 'wood' });
      b.boxC(cx, y0 + 0.78, -11, 2.5, 0.05, 1.05, '#3a2210', { collide: false });
      b.boxC(cx - 0.6, y0 + 0.83, -11, 0.4, 0.04, 0.3, '#fff', { collide: false }); // papeles
      b.boxC(cx + 0.7, y0 + 0.83, -11.1, 0.3, 0.25, 0.3, '#2b2b2b', { collide: false }); // teléfono/portalápices
      this.chair(cx, y0, -12.0, '#222', false, 0);
      this.chair(cx - 0.9, y0, -9.6, '#7a2c2c', false, Math.PI);
      this.chair(cx + 0.9, y0, -9.6, '#7a2c2c', false, Math.PI);
      room.seats.push({ pos: new THREE.Vector3(cx - 0.9, y0, -9.6), yaw: Math.PI, room: id, occupant: null, lane: 0 });
      room.seats.push({ pos: new THREE.Vector3(cx + 0.9, y0, -9.6), yaw: Math.PI, room: id, occupant: null, lane: 0 });
      room.seats.push({ pos: new THREE.Vector3(cx, y0, -12.0), yaw: 0, room: id, occupant: null, lane: 0 });
      for (let i = 0; i < 3; i++) b.boxC(x0 + 0.6, y0, -12.5 + i * 0.9, 0.7, 1.4, 0.8, '#8a8f99', { mat: 'metal' });
      // bandera, reconocimientos, banca de espera
      b.cyl(x1 - 1, y0, -13, 0.04, 2.2, '#c9a24a', { mat: 'metal' });
      b.box(x1 - 1, y0 + 1.3, -13.02, x1 - 0.2, y0 + 1.6, -12.98, '#006847', { collide: false });
      b.box(x1 - 1, y0 + 1.6, -13.02, x1 - 0.2, y0 + 1.9, -12.98, '#ffffff', { collide: false });
      b.box(x1 - 1, y0 + 1.9, -13.02, x1 - 0.2, y0 + 2.2, -12.98, '#ce1126', { collide: false });
      for (let i = 0; i < 4; i++) b.box(x0 + 3.5 + i * 1.3, y0 + 1.6, ZB + 0.15, x0 + 4.4 + i * 1.3, y0 + 2.3, ZB + 0.2, i % 2 ? '#e7c35a' : '#d9d9d9', { collide: false });
      b.boxC(x0 + 2, y0, 0.6, 3, 0.45, 0.6, COL.wood, { mat: 'wood' });
      room.teacherPos = new THREE.Vector3(cx, y0, -12.0);
      this.poi.dirDesk = new THREE.Vector3(cx, y0, -11);
      this.poi.dirWindow = new THREE.Vector3(x0 + 2.5, y0, 3.2);
    }
    if (kind === 'teachers') {
      b.boxC(x0 + 6, y0, -6, 6, 0.75, 2, '#6b4426', { mat: 'wood' });
      for (let i = 0; i < 4; i++) { this.chair(x0 + 3.8 + i * 1.5, y0, -7.4, '#333', false, 0); this.chair(x0 + 3.8 + i * 1.5, y0, -4.6, '#333', false, Math.PI); }
      for (let i = 0; i < 4; i++) room.seats.push({ pos: new THREE.Vector3(x0 + 3.8 + i * 1.5, y0, -7.4), yaw: 0, room: id, occupant: null, lane: 0 });
      for (let i = 0; i < 4; i++) room.seats.push({ pos: new THREE.Vector3(x0 + 3.8 + i * 1.5, y0, -4.6), yaw: Math.PI, room: id, occupant: null, lane: 1 });
      for (let i = 0; i < 6; i++) b.boxC(x0 + 1.5 + i * 1.1, y0, ZB + 0.4, 1.0, 1.9, 0.6, '#7e8a99', { mat: 'metal' });
      b.boxC(x1 - 0.7, y0, -2, 0.8, 0.9, 1.6, '#ddd');
      b.boxC(x1 - 0.7, y0 + 0.9, -2.2, 0.3, 0.35, 0.3, '#222', { collide: false }); // cafetera
    }
    if (kind === 'bathH' || kind === 'bathM') {
      // azulejo en piso
      b.box(x0 + T / 2, y0 + 0.03, ZB + T / 2, x1 - T / 2, y0 + 0.04, ZF - T / 2, COL.bathTile, { mat: 'tile', surface: 'tile', collide: true, shadow: false });
      // lavabos en muro oeste
      for (let i = 0; i < 3; i++) {
        const z = -2.6 - i * 1.4;
        b.box(x0 + T / 2, y0 + 0.78, z - 0.4, x0 + 0.75, y0 + 0.9, z + 0.4, '#f4f4f4');
        b.box(x0 + T / 2, y0, z - 0.08, x0 + 0.4, y0 + 0.78, z + 0.08, '#ddd', { collide: false });
        b.box(x0 + 0.16, y0 + 0.9, z - 0.03, x0 + 0.35, y0 + 1.05, z + 0.03, '#c0c0c0', { mat: 'metal', collide: false });
        b.box(x0 + T / 2 + 0.01, y0 + 1.2, z - 0.45, x0 + T / 2 + 0.03, y0 + 2.0, z + 0.45, '#cfe9ff', { mat: 'metal', collide: false });
      }
      // cubículos en el lado este
      for (let i = 0; i < 3; i++) {
        const z0 = ZB + T / 2 + i * 2.2, z1s = z0 + 2.2;
        const sx = x1 - 2.4;
        b.box(sx, y0 + 0.15, z1s - 0.04, x1 - T / 2, y0 + 2.1, z1s + 0.04, COL.stall);
        b.box(sx - 0.04, y0 + 0.15, z0 + 0.1, sx + 0.04, y0 + 2.1, z0 + 0.6, COL.stall);
        b.box(sx - 0.04, y0 + 0.15, z1s - 0.5, sx + 0.04, y0 + 2.1, z1s, COL.stall);
        b.box(sx - 0.02, y0 + 0.15, z0 + 0.6, sx + 0.02, y0 + 2.1, z1s - 0.5, '#5a96d3', { collide: false, cam: false });
        b.boxC(x1 - 0.7, y0, (z0 + z1s) / 2, 0.45, 0.45, 0.6, '#fafafa');
      }
      if (kind === 'bathH') {
        for (let i = 0; i < 2; i++) b.boxC(x0 + 1.4 + i * 1.0, y0 + 0.45, ZB + 0.35, 0.4, 0.6, 0.35, '#f5f5f5');
        this.poi.sink = new THREE.Vector3(x0 + 0.95, y0, -4.0);
        this.poi.bathDoorIn = new THREE.Vector3(doorX, y0, 0.6);
        this.poi.bathDoorOut = new THREE.Vector3(doorX, y0, 4.5);
      }
      // grafiti cómico en un cubículo
      const graf = canvasPlane(1.2, 0.5, (g, W, H) => { g.clearRect(0, 0, W, H); g.fillStyle = '#5a96d3'; g.fillRect(0, 0, W, H); g.fillStyle = '#111'; g.font = `700 ${H * 0.3}px Nunito`; g.fillText(kind === 'bathH' ? 'Vegetta777 >>>' : 'Ari + ??? ♥', 8, H * 0.6); });
      graf.position.set(x1 - 2.45, y0 + 1.4, ZB + 1.6); graf.rotation.y = -Math.PI / 2; this.group.add(graf);
    }
    if (kind === 'storage') {
      for (let i = 0; i < 3; i++) b.boxC(x0 + 1.5 + i * 2.3, y0, ZB + 0.5, 2, 2.2, 0.6, '#7b6a55');
      b.boxC(x0 + 4, y0, -6, 1.2, 0.8, 1.2, '#a88552');
      b.cyl(x1 - 1.4, y0, -3, 0.3, 0.7, '#3a7bd5', { collide: true }); // cubeta
    }
  }

  drawBoard(room: Room, lines: string[], color = '#f4f4ec') {
    if (!room.board) return;
    const canvas = room.board.userData.canvas as HTMLCanvasElement;
    const g = canvas.getContext('2d')!;
    const W = canvas.width, H = canvas.height;
    g.fillStyle = COL.board; g.fillRect(0, 0, W, H);
    // borrones de gis
    for (let i = 0; i < 18; i++) { g.fillStyle = 'rgba(255,255,255,0.035)'; g.beginPath(); g.ellipse(Math.random() * W, Math.random() * H, 60 + Math.random() * 80, 20 + Math.random() * 30, Math.random(), 0, Math.PI * 2); g.fill(); }
    g.fillStyle = color; g.textAlign = 'center'; g.textBaseline = 'middle';
    const size = Math.min(H * 0.3, H * 0.75 / lines.length);
    lines.forEach((l, i) => {
      g.font = `${i === 0 ? 900 : 700} ${i === 0 ? size : size * 0.8}px "Comic Sans MS", Nunito, sans-serif`;
      g.fillText(l, W / 2, H / 2 + (i - (lines.length - 1) / 2) * size * 1.1);
    });
    ((room.board.material as THREE.MeshStandardMaterial).map as THREE.Texture).needsUpdate = true;
  }

  private chair(x: number, y: number, z: number, color: string, stool = false, yaw = Math.PI) {
    const b = this.b;
    if (stool) { b.cyl(x, y, z, 0.18, 0.62, color, { seg: 8 }); return; }
    b.boxC(x, y + 0.42, z, 0.44, 0.05, 0.42, color, { collide: false });
    const back = Math.cos(yaw) > 0 ? -1 : 1; // respaldo detrás del que se sienta
    b.boxC(x, y + 0.47, z + back * 0.2, 0.44, 0.42, 0.04, color, { collide: false });
    for (const [dx, dz] of [[-0.19, -0.18], [0.19, -0.18], [-0.19, 0.18], [0.19, 0.18]]) b.boxC(x + dx, y, z + dz, 0.035, 0.42, 0.035, COL.metal, { collide: false });
  }
  private deskChair(cx: number, y: number, zr: number) {
    const b = this.b;
    // pupitre con paleta típico
    b.boxC(cx, y + 0.72, zr, 0.75, 0.04, 0.5, COL.deskTop, { collide: false, mat: 'wood' });
    b.boxC(cx, y, zr, 0.7, 0.72, 0.45, COL.desk, { collide: true, cam: false });
    b.boxC(cx, y + 0.5, zr + 0.06, 0.66, 0.14, 0.36, '#6e4a2a', { collide: false });
    this.chair(cx, y, zr + 0.55, COL.chairBlue);
  }
  private computerDesk(cx: number, y: number, zr: number) {
    const b = this.b;
    b.boxC(cx, y, zr, 1.0, 0.74, 0.6, '#d9d9d9', { cam: false });
    b.boxC(cx, y + 0.74, zr - 0.12, 0.5, 0.36, 0.06, '#222', { collide: false });
    b.box(cx - 0.22, y + 0.78, zr - 0.085, cx + 0.22, y + 1.07, zr - 0.08, '#4aa3ff', { mat: 'emit', collide: false, shadow: false });
    b.boxC(cx, y + 0.74, zr + 0.12, 0.45, 0.02, 0.15, '#333', { collide: false });
    b.boxC(cx + 0.38, y, zr - 0.05, 0.18, 0.42, 0.42, '#bbb', { collide: false });
    this.chair(cx, y, zr + 0.55, '#333');
  }
  private libTable(x: number, y: number, z: number) {
    this.b.boxC(x, y, z, 3.4, 0.74, 0.9, '#8a5a2b', { mat: 'wood', cam: false });
  }
  private bookshelf(x: number, y: number, z: number, alongZ: boolean) {
    const b = this.b;
    const [w, d] = alongZ ? [0.5, 2.2] : [2.0, 0.5];
    b.boxC(x, y, z, w, 2.2, d, COL.shelf, { mat: 'wood' });
    const bookCols = ['#c0392b', '#2980b9', '#27ae60', '#f39c12', '#8e44ad', '#16a085', '#d35400'];
    for (let s = 0; s < 4; s++) {
      let o = -((alongZ ? d : w) / 2) + 0.08;
      while (o < (alongZ ? d : w) / 2 - 0.15) {
        const bw = 0.06 + Math.random() * 0.07, bh = 0.3 + Math.random() * 0.12;
        const col = bookCols[Math.floor(Math.random() * bookCols.length)];
        const face = alongZ ? (w / 2 + 0.01) : (d / 2 + 0.01);
        if (alongZ) b.box(x + face - 0.3, y + 0.15 + s * 0.52, z + o, x + face, y + 0.15 + s * 0.52 + bh, z + o + bw, col, { collide: false, shadow: false });
        else b.box(x + o, y + 0.15 + s * 0.52, z + face - 0.3, x + o + bw, y + 0.15 + s * 0.52 + bh, z + face, col, { collide: false, shadow: false });
        o += bw + 0.01;
      }
    }
  }

  // ---------------- cooperativa ----------------
  private buildCafeteria() {
    const b = this.b;
    const x0 = -47, x1 = -33, z0 = 14, z1 = 30, h = 3.4;
    b.box(x0, -0.1, z0, x1, 0.04, z1, '#d9cbb2', { surface: 'tile', mat: 'tile' });
    this.wallX(x0, x1, z0, 0, '#f7d9a8', [], '#c4552f', h);
    this.wallX(x0, x1, z1, 0, '#f7d9a8', [{ a: x0 + 3, b: x0 + 6, t: 'win' }], '#c4552f', h);
    this.wallZ(z0, z1, x0, 0, '#f7d9a8', [], '#c4552f', h);
    // sólo columnas en las esquinas: el frente queda libre para entrar
    for (const z of [z0, z1]) b.boxC(x1, 0, z, 0.35, h, 0.35, COL.column);
    b.box(x0 - 0.3, h, z0 - 0.4, x1 + 1.2, h + 0.35, z1 + 0.4, '#c4552f');
    // mostrador y anaqueles
    b.box(-43.8, 0, 16, -43, 1.05, 28, '#e05a3a');
    b.box(-44, 1.05, 15.9, -42.8, 1.12, 28.1, '#f4f4f4', { collide: false });
    for (let i = 0; i < 3; i++) {
      b.box(x0 + 0.2, 0, 16.5 + i * 4, x0 + 0.8, 2.2, 19.5 + i * 4, '#9a6a3c');
      for (let s = 0; s < 4; s++) for (let k = 0; k < 8; k++) {
        const cols = ['#ff4d4d', '#ffd23f', '#3fa9ff', '#6bdc5b', '#ff8fd0', '#ff9a3c'];
        b.box(x0 + 0.8, 0.25 + s * 0.5, 16.6 + i * 4 + k * 0.36, x0 + 0.95, 0.55 + s * 0.5, 16.9 + i * 4 + k * 0.36, cols[(k + s + i) % 6], { collide: false, shadow: false });
      }
    }
    // refrigerador
    b.box(x0 + 0.2, 0, 27.5, x0 + 1.2, 2.0, 29.5, '#e8f0f8');
    b.box(x0 + 1.2, 0.3, 27.7, x0 + 1.22, 1.9, 29.3, '#9fd3ff', { mat: 'glass', collide: false });
    this.sign('COOPERATIVA', (x0 + x1) / 2 + 3, h + 0.6, z1 + 0.42, 4.5, 0.7, 0, '#e05a3a', '#fff');
    const menu = canvasPlane(1.8, 1.2, (g, W, H) => {
      g.fillStyle = '#222'; g.fillRect(0, 0, W, H); g.fillStyle = '#ffd23f'; g.font = `900 ${H * 0.12}px Bungee`; g.textAlign = 'center'; g.fillText('MENÚ', W / 2, H * 0.15);
      g.fillStyle = '#fff'; g.font = `700 ${H * 0.085}px Nunito`; g.textAlign = 'left';
      ['Torta de jamón ... $25', 'Tostitos preparados ... $30', 'Agua de horchata ... $12', 'Chicharrones ... $15', 'Maruchan ... $20', 'Gansito ... $14'].forEach((l, i) => g.fillText(l, 14, H * (0.32 + i * 0.12)));
    });
    menu.position.set(-46.82, 2.4, 22); menu.rotation.y = Math.PI / 2; this.group.add(menu);
    this.poi.coopCounter = new THREE.Vector3(-42.3, 0, 22);
    this.poi.coopVendor = new THREE.Vector3(-45, 0, 22);
    // mesas afuera bajo toldo
    for (let i = 0; i < 4; i++) {
      const z = 16 + i * 3.6;
      b.boxC(-30, 0, z, 2.6, 0.75, 1.0, '#e8e8e8', { cam: false });
      b.boxC(-30, 0, z - 0.85, 2.6, 0.45, 0.35, '#3a78b8', { cam: false });
      b.boxC(-30, 0, z + 0.85, 2.6, 0.45, 0.35, '#3a78b8', { cam: false });
    }
    for (const [x, z] of [[-32, 14.5], [-28, 14.5], [-32, 29.5], [-28, 29.5]]) b.boxC(x, 0, z, 0.12, 3.0, 0.12, COL.metal, { mat: 'metal' });
    const awning = new THREE.Mesh(new THREE.BoxGeometry(5, 0.08, 15.6), new THREE.MeshStandardMaterial({ color: '#ffcf3a', roughness: 0.8 }));
    awning.position.set(-30, 3.05, 22); awning.castShadow = true; this.group.add(awning);
    this.mapRects.push({ name: 'Cooperativa', x0, z0, x1, z1, floor: 0, color: '#b5562f' });
    this.mapRects.push({ name: 'Mesas', x0: -32, z0: 14.5, x1: -28, z1: 29.5, floor: 0, color: '#c9a23a' });
  }

  // ---------------- canchas ----------------
  private buildCourts() {
    const b = this.b;
    b.box(33, 0.02, 14.5, 61, 0.05, 30, COL.courtB, { surface: 'court', shadow: false });
    b.box(33, 0.02, 31, 61, 0.05, 46.5, COL.court, { surface: 'court', shadow: false });
    const line = (x0: number, z0: number, x1: number, z1: number) => b.box(x0, 0.05, z0, x1, 0.06, z1, COL.line, { collide: false, shadow: false });
    // basquet
    line(34, 15.5, 60, 15.6); line(34, 29, 60, 29.1); line(34, 15.5, 34.1, 29.1); line(59.9, 15.5, 60, 29.1); line(46.95, 15.5, 47.05, 29.1);
    // fútbol
    line(34, 32, 60, 32.1); line(34, 45.4, 60, 45.5); line(34, 32, 34.1, 45.5); line(59.9, 32, 60, 45.5); line(46.95, 32, 47.05, 45.5);
    const ring = new THREE.TorusGeometry(1.8, 0.05, 6, 32); ring.rotateX(Math.PI / 2); ring.translate(47, 0.06, 38.75); b.geom(ring, COL.line, 'std', false);
    const ring2 = new THREE.TorusGeometry(1.8, 0.05, 6, 32); ring2.rotateX(Math.PI / 2); ring2.translate(47, 0.06, 22.3); b.geom(ring2, COL.line, 'std', false);
    // aros
    for (const [x, dir] of [[34.6, 1], [59.4, -1]] as const) {
      b.cyl(x - dir * 0.8, 0, 22.3, 0.09, 3.1, '#555', { collide: true, mat: 'metal' });
      b.box(x - 0.05, 2.7, 21.4, x + 0.05, 3.8, 23.2, '#fafafa', { collide: false });
      const hoop = new THREE.TorusGeometry(0.24, 0.025, 6, 16); hoop.rotateX(Math.PI / 2); hoop.translate(x + dir * 0.3, 3.05, 22.3);
      b.geom(hoop, '#ff5a1f', 'std');
    }
    // porterías
    for (const [x, dir] of [[34.2, 1], [59.8, -1]] as const) {
      b.box(x, 0, 37.3, x + 0.12, 2.0, 37.42, '#fff', { mat: 'metal' });
      b.box(x, 0, 40.1, x + 0.12, 2.0, 40.22, '#fff', { mat: 'metal' });
      b.box(x, 1.9, 37.3, x + 0.12, 2.02, 40.22, '#fff', { collide: false, mat: 'metal' });
      b.box(x - dir * 1.0, 0, 37.3, x - dir * 0.98, 1.9, 40.2, '#ddd', { collide: false, mat: 'glass' });
    }
    // gradas
    for (let i = 0; i < 4; i++) b.box(62 + i * 0.7, 0, 16, 65.5, 0.4 + i * 0.4, 44, i % 2 ? '#9aa6b2' : '#8592a0', { surface: 'concrete' });
    this.poi.bleachers = new THREE.Vector3(63.2, 0.8, 30);
    this.poi.ball = new THREE.Vector3(44, 0, 22);
    this.mapRects.push({ name: 'Cancha de básquet', x0: 33, z0: 14.5, x1: 61, z1: 30, floor: 0, color: '#a5532f' });
    this.mapRects.push({ name: 'Cancha de fútbol', x0: 33, z0: 31, x1: 61, z1: 46.5, floor: 0, color: '#2f7a48' });
    this.mapRects.push({ name: 'Gradas', x0: 62, z0: 16, x1: 65.5, z1: 44, floor: 0, color: '#7a8592' });
  }

  // ---------------- entrada y calle ----------------
  private buildEntrance() {
    const b = this.b;
    const WZ = 48;
    // barda perimetral
    const wallH = 2.6;
    b.box(-64, 0, WZ - 0.3, -3.5, wallH, WZ + 0.3, '#e2c79a');
    b.box(3.5, 0, WZ - 0.3, 66, wallH, WZ + 0.3, '#e2c79a');
    b.box(-64, wallH, WZ - 0.35, -3.5, wallH + 0.15, WZ + 0.35, COL.trim, { collide: false });
    b.box(3.5, wallH, WZ - 0.35, 66, wallH + 0.15, WZ + 0.35, COL.trim, { collide: false });
    b.box(-64.3, 0, -20, -63.7, wallH, WZ, '#e2c79a');
    b.box(65.7, 0, -20, 66.3, wallH, WZ, '#e2c79a');
    b.box(-64, 0, -20.3, 66, wallH, -19.7, '#e2c79a');
    // franja azul
    b.box(-64, 0.9, WZ + 0.3, -3.5, 1.3, WZ + 0.32, '#2e6fb5', { collide: false });
    b.box(3.5, 0.9, WZ + 0.3, 66, 1.3, WZ + 0.32, '#2e6fb5', { collide: false });
    // pilares y arco del portón
    b.box(-4.3, 0, WZ - 0.5, -3.3, 4.6, WZ + 0.5, '#b4552e');
    b.box(3.3, 0, WZ - 0.5, 4.3, 4.6, WZ + 0.5, '#b4552e');
    b.box(-4.3, 3.6, WZ - 0.3, 4.3, 4.6, WZ + 0.3, '#b4552e', { collide: false });
    this.sign('COLEGIO GANTE', 0, 4.1, WZ + 0.32, 6.6, 0.8, 0, '#1d3b7a', '#ffe9a8');
    this.sign('COLEGIO GANTE', 0, 4.1, WZ - 0.32, 6.6, 0.8, Math.PI, '#1d3b7a', '#ffe9a8');
    // hojas del portón abiertas (rejas)
    for (const side of [-1, 1]) {
      const gx = side * 3.3;
      for (let i = 0; i < 9; i++) b.box(gx - 0.03, 0, WZ - 0.3 - i * 0.33, gx + 0.03, 2.4, WZ - 0.25 - i * 0.33, '#2f6b3a', { collide: false, mat: 'metal' });
      b.box(gx - 0.05, 2.3, WZ - 3.3, gx + 0.05, 2.4, WZ - 0.25, '#2f6b3a', { mat: 'metal' });
      b.box(gx - 0.05, 0.1, WZ - 3.3, gx + 0.05, 0.2, WZ - 0.25, '#2f6b3a', { collide: false, mat: 'metal' });
      b.box(gx - 0.05, 0, WZ - 3.3, gx + 0.05, 2.4, WZ - 0.25, '#2f6b3a', { collide: true, cam: false, shadow: false, mat: 'glass' });
    }
    // caseta de vigilancia
    b.box(4.5, -0.05, 45.5, 8.3, 0.05, 47.7, '#cfc6b6', { surface: 'tile' });
    b.box(4.5, 0, 45.4, 8.3, 1.0, 45.6, '#e2c79a');
    b.box(4.5, 2.2, 45.4, 8.3, 2.6, 45.6, '#e2c79a');
    b.box(4.5, 1.0, 45.47, 8.3, 2.2, 45.53, COL.glass, { mat: 'glass' });
    b.box(8.2, 0, 45.4, 8.4, 2.6, 47.7, '#e2c79a');
    b.box(4.3, 2.6, 45.2, 8.6, 2.8, 47.9, COL.trim);
    b.boxC(6.4, 0, 46.0, 1.4, 0.75, 0.5, '#7b4a26');
    this.sign('VIGILANCIA', 6.4, 2.45, 45.38, 2.2, 0.3, Math.PI, '#333', '#ffd23f');
    this.poi.guard = new THREE.Vector3(6.4, 0, 46.8);
    // calle, banqueta y casas de enfrente
    b.box(-40, -0.1, WZ + 0.3, 50, 0.12, 51.5, '#c7c2b8', { surface: 'concrete' });
    b.box(-40, -0.1, 51.5, 50, 0.01, 62, '#3b3d42', { surface: 'concrete' });
    for (let x = -38; x < 50; x += 6) b.box(x, 0.01, 56.6, x + 3, 0.02, 56.9, '#f0f0e0', { collide: false, shadow: false });
    b.box(-40, -0.1, 62, 50, 0.12, 64, '#c7c2b8', { surface: 'concrete' });
    const houseCols = ['#f4a261', '#e76f51', '#2a9d8f', '#e9c46a', '#a8dadc', '#f6bd60', '#84a59d'];
    for (let i = 0; i < 9; i++) {
      const x = -38 + i * 10, hh = 4 + (i % 3) * 1.5;
      b.box(x, 0, 64, x + 9.4, hh, 70, houseCols[i % houseCols.length]);
      b.box(x + 1, 0.9, 63.98, x + 3, 2.2, 64, '#9fd3ff', { collide: false, mat: 'glass' });
      b.box(x + 5, 0, 63.98, x + 6.4, 2.3, 64, '#6b3b1d', { collide: false });
      b.box(x - 0.1, hh, 63.8, x + 9.5, hh + 0.3, 70.1, '#ddd', { collide: false });
    }
    // auto estacionado y puesto de tamales
    const car = (x: number, z: number, c: string) => {
      b.box(x - 2, 0.3, z - 0.9, x + 2, 1.1, z + 0.9, c);
      b.box(x - 1.1, 1.1, z - 0.8, x + 1.0, 1.7, z + 0.8, c);
      b.box(x - 1.0, 1.15, z - 0.82, x + 0.9, 1.6, z + 0.82, '#9fd3ff', { collide: false, mat: 'glass' });
      for (const [dx, dz] of [[-1.3, -0.9], [1.3, -0.9], [-1.3, 0.9], [1.3, 0.9]]) b.cyl(x + dx, 0, z + dz, 0.35, 0.2, '#222', { collide: false, seg: 10 });
    };
    car(-14, 53.2, '#d62828'); car(16, 53.2, '#f1faee'); car(28, 60, '#457b9d');
    b.boxC(-8, 0.12, 50.5, 1.6, 0.9, 0.8, '#1e88e5');
    b.cyl(-8, 1.02, 50.5, 0.4, 0.5, '#9e9e9e', { mat: 'metal' });
    this.poi.vendor = new THREE.Vector3(-8, 0.12, 49.6);
    // límites invisibles de la calle
    this.world.add({ x0: -41, y0: 0, z0: 48, x1: -40, y1: 5, z1: 70, cam: false });
    this.world.add({ x0: 50, y0: 0, z0: 48, x1: 51, y1: 5, z1: 70, cam: false });
    this.poi.spawn = new THREE.Vector3(0, 0.12, 58);
    this.mapRects.push({ name: 'Entrada', x0: -4, z0: 47.5, x1: 4, z1: 48.5, floor: 0, color: '#d4a34a' });
    this.mapRects.push({ name: 'Calle', x0: -40, z0: 48.5, x1: 50, z1: 64, floor: 0, color: '#3b3d42' });
    this.mapRects.push({ name: 'Caseta', x0: 4.5, z0: 45.4, x1: 8.4, z1: 47.7, floor: 0, color: '#b4552e' });
  }

  // ---------------- navegación ----------------
  private buildNav() {
    const n = this.nav;
    // pasillos: z = 5, ambos pisos
    const corridor: Record<number, number[]> = { 0: [], 1: [] };
    for (const fl of [0, 1]) {
      const y = fl * FH;
      const xs = new Set<number>([-39, 39]);
      for (const r of this.rooms) if (r.floor === fl) xs.add(r.doorX);
      const sorted = [...xs].sort((a, b) => a - b);
      const ids = sorted.map((x) => n.add(x, y, 5, `c${fl}_${x.toFixed(1)}`));
      n.chain(...ids);
      corridor[fl] = ids;
      for (const r of this.rooms) if (r.floor === fl) {
        r.corridorNode = ids[sorted.indexOf(r.doorX)];
        this.roomNav(r);
      }
    }
    // escaleras
    const wTop = n.add(-39.5, FH, 5), wBot = n.add(-55.5, 0, 5, 'stairW');
    const eTop = n.add(39.5, FH, 5), eBot = n.add(55.5, 0, 5, 'stairE');
    n.link(wTop, corridor[1][0]); n.link(wTop, wBot);
    n.link(eTop, corridor[1][corridor[1].length - 1]); n.link(eTop, eBot);
    // franja frente al edificio (z = 10.5)
    const stripXs = [-55.5, -39, ...this.rooms.filter((r) => r.floor === 0).map((r) => r.doorX), 39, 55.5].sort((a, b) => a - b);
    const strip = stripXs.map((x) => n.add(x, 0, 10.5, `s_${x.toFixed(1)}`));
    n.chain(...strip);
    n.link(wBot, strip[0]); n.link(eBot, strip[strip.length - 1]);
    for (let i = 0; i < corridor[0].length; i++) {
      const p = n.nodes[corridor[0][i]].p;
      const sIdx = stripXs.indexOf(p.x);
      if (sIdx >= 0) n.link(corridor[0][i], strip[sIdx]);
    }
    // patio
    const px = [-20, -10, 0, 10, 20], pz = [16, 26, 36, 44];
    const grid: number[][] = px.map((x) => pz.map((z) => { const id = n.add(x, 0, z, `p_${x}_${z}`); this.hangouts.push(id); return id; }));
    for (let i = 0; i < px.length; i++) for (let j = 0; j < pz.length; j++) {
      if (i > 0) n.link(grid[i][j], grid[i - 1][j]);
      if (j > 0) n.link(grid[i][j], grid[i][j - 1]);
    }
    // conectar patio con franja
    for (let i = 0; i < px.length; i++) {
      let best = strip[0], bd = Infinity;
      for (const s of strip) { const d = Math.abs(n.nodes[s].p.x - px[i]); if (d < bd) { bd = d; best = s; } }
      n.link(grid[i][0], best);
    }
    // entrada y calle
    const gate = n.add(0, 0, 48, 'gate');
    const street = n.add(0, 0.12, 55, 'street');
    n.link(gate, grid[2][3]); n.link(gate, street);
    const streetW = n.add(-20, 0.12, 55), streetE = n.add(20, 0.12, 55);
    n.link(street, streetW); n.link(street, streetE);
    // cooperativa
    // el pasillo entre las mesas está en z ≈ 21.4
    const coopOut = n.add(-26, 0, 21.4, 'coopOut');
    const coopIn = n.add(-41.5, 0, 21.8, 'coopCounter');
    const tablesN = n.add(-27.2, 0, 18.5, 'tablesN'), tablesS = n.add(-27.2, 0, 25.6, 'tablesS');
    n.link(coopOut, grid[0][0]); n.link(coopOut, grid[0][1]); n.link(coopOut, coopIn);
    n.link(coopOut, tablesN); n.link(coopOut, tablesS); n.link(tablesN, tablesS);
    const coopQ = n.add(-38, 0, 21.4, 'coopQueue'); n.link(coopQ, coopIn); n.link(coopQ, coopOut);
    this.hangouts.push(tablesN, tablesS, coopQ);
    // canchas
    const cx = [38, 48, 56], cz = [18, 28, 38, 44];
    const cg = cx.map((x) => cz.map((z) => { const id = n.add(x, 0, z, `k_${x}_${z}`); this.hangouts.push(id); return id; }));
    for (let i = 0; i < cx.length; i++) for (let j = 0; j < cz.length; j++) {
      if (i > 0) n.link(cg[i][j], cg[i - 1][j]);
      if (j > 0) n.link(cg[i][j], cg[i][j - 1]);
    }
    const courtGate = n.add(30, 0, 29, 'courtGate');
    n.link(courtGate, grid[4][1]); n.link(courtGate, grid[4][2]); n.link(courtGate, cg[0][1]); n.link(courtGate, cg[0][2]);
    n.link(cg[0][0], strip[strip.length - 2]);
    const bleach = n.add(61.3, 0, 30, 'bleachers'); n.link(bleach, cg[2][1]); n.link(bleach, cg[2][2]);
    // fuente y periódico mural
    const fountainN = n.add(-8, 0, 10.5); n.link(fountainN, strip[stripXs.findIndex((x) => x > -8)]); n.link(fountainN, strip[stripXs.findIndex((x) => x > -8) - 1]);
    this.hangouts.push(fountainN);
  }

  private roomNav(r: Room) {
    const n = this.nav;
    const y = r.floor * FH;
    const inN = n.add(r.doorX, y, 0.8, `in_${r.id}`);
    n.link(inN, r.corridorNode);
    r.inNode = inN;
    if (r.seats.length && (r.kind === 'class' || r.kind === 'lab' || r.kind === 'comp' || r.kind === 'library')) {
      const aisleX = r.x0 + 10.6;
      const lanes: number[] = [];
      for (let row = 3; row >= 0; row--) {
        const zr = -9.5 + row * 2.3;
        lanes.push(n.add(aisleX, y, zr + 1.3, `aisle_${r.id}_${row}`));
      }
      const front = n.add(aisleX, y, -11.6, `front_${r.id}`);
      n.chain(inN, ...lanes, front);
      const tFront = n.add(r.x0 + 6, y, -11.6, `teacher_${r.id}`);
      n.link(front, tFront);
      r.seats.forEach((s, i) => {
        const row = Math.floor(i / 4);
        const laneNode = lanes[3 - row];
        const lp = n.add(s.pos.x, y, n.nodes[laneNode].p.z, `lane_${r.id}_${i}`);
        n.link(lp, laneNode);
        // las posiciones de carril del mismo renglón se conectan entre sí
        const seatN = n.add(s.pos.x, y, s.pos.z, `seat_${r.id}_${i}`);
        n.link(lp, seatN);
      });
      for (let row = 0; row < 4; row++) {
        const ids = [0, 1, 2, 3].map((c) => n.tag(`lane_${r.id}_${row * 4 + c}`));
        n.chain(...ids);
      }
    } else if (r.kind === 'dir') {
      const mid = n.add(r.doorX, y, -6, `mid_${r.id}`);
      const desk = n.add(r.x0 + 6, y, -8.6, `desk_${r.id}`);
      const behind = n.add(r.x0 + 7.6, y, -12.0, `behind_${r.id}`);
      const bench = n.add(r.x0 + 2, y, 1.2, `bench_${r.id}`);
      n.chain(inN, mid, desk); n.link(mid, behind); n.link(inN, bench);
      r.seats.forEach((s, i) => { const id = n.add(s.pos.x, y, s.pos.z, `seat_${r.id}_${i}`); n.link(id, i < 2 ? desk : behind); });
    } else if (r.kind === 'teachers') {
      const mid = n.add(r.doorX, y, -3, `mid_${r.id}`);
      const a = n.add(r.x0 + 3, y, -3, `ta_${r.id}`);
      const bN = n.add(r.x0 + 3, y, -8.6, `tb_${r.id}`);
      n.chain(inN, mid, a, bN);
      r.seats.forEach((s, i) => {
        const id = n.add(s.pos.x, y, s.pos.z, `seat_${r.id}_${i}`);
        const lz = i < 4 ? -8.6 : -3.4;
        const ln = n.add(s.pos.x, y, lz, `lane_${r.id}_${i}`);
        n.link(id, ln);
        n.link(ln, i < 4 ? bN : a);
      });
    } else if (r.kind === 'bathH' || r.kind === 'bathM') {
      const mid = n.add(r.doorX, y, -3.5, `mid_${r.id}`);
      const sink = n.add(r.x0 + 0.95, y, -4.0, `sink_${r.id}`);
      const stall = n.add(r.x1 - 1.0, y, -12.8, `stall_${r.id}`);
      const back = n.add(r.doorX, y, -11.5, `back_${r.id}`);
      n.chain(inN, mid, sink); n.chain(mid, back, stall);
    } else {
      const mid = n.add(r.doorX, y, -4, `mid_${r.id}`);
      n.link(inN, mid);
    }
  }

  update(dt: number, t: number, actors: THREE.Vector3[], onDoor: () => void) {
    // ondear bandera
    const pos = this.flag.geometry.attributes.position as THREE.BufferAttribute;
    const base = this.flag.userData.base as Float32Array;
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3] + 1.5;
      pos.setZ(i, Math.sin(x * 2.2 - t * 4) * 0.12 * x);
      pos.setY(i, base[i * 3 + 1] - x * x * 0.01);
    }
    pos.needsUpdate = true;
    this.flag.geometry.computeVertexNormals();
    // puertas
    for (const d of this.doors) {
      let near = false;
      for (const a of actors) {
        if (Math.abs(a.y - d.hinge.y) < 1.5 && Math.abs(a.x - (d.hinge.x + 0.7)) < 1.4 && Math.abs(a.z - d.hinge.z) < 1.6) { near = true; break; }
      }
      if (d.update(dt, near) && near) onDoor();
    }
  }

  /** Nombre de zona para la HUD/minimapa. */
  zoneAt(p: THREE.Vector3): string {
    const fl = p.y > FH - 0.5 ? 1 : 0;
    for (const r of this.rooms) if (r.floor === fl && p.x > r.x0 && p.x < r.x1 && p.z > r.z0 && p.z < r.z1) return r.name;
    if (p.z > 48.3) return 'Calle';
    if (p.z > 2 && p.z < 8 && p.x > -40 && p.x < 40) return fl ? 'Pasillo 2º piso' : 'Pasillo';
    if (p.x < -33 && p.x > -47 && p.z > 14 && p.z < 30) return 'Cooperativa';
    if (p.x > 32) return 'Canchas';
    if (p.z > 8) return 'Patio central';
    return 'Colegio Gante';
  }
  isIndoors(p: THREE.Vector3) {
    if (p.x > -40 && p.x < 40 && p.z > -14 && p.z < 2) return true;
    if (p.x < -33 && p.x > -47 && p.z > 14 && p.z < 30) return true;
    return false;
  }
}
