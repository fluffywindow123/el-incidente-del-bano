import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { CollisionWorld } from './collision';
import type { Surface } from '../core/audio';

export type MatKind = 'std' | 'tile' | 'glass' | 'emit' | 'metal' | 'wood';

export interface BoxOpts {
  collide?: boolean;
  surface?: Surface;
  cam?: boolean;
  mat?: MatKind;
  shadow?: boolean;
}

function tileTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, 128, 128);
  g.fillStyle = '#e4e4e4'; g.fillRect(0, 0, 64, 64); g.fillRect(64, 64, 64, 64);
  g.strokeStyle = 'rgba(0,0,0,0.12)'; g.lineWidth = 2;
  for (let i = 0; i <= 128; i += 64) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 128); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(128, i); g.stroke(); }
  for (let i = 0; i < 300; i++) { g.fillStyle = `rgba(0,0,0,${Math.random() * 0.04})`; g.fillRect(Math.random() * 128, Math.random() * 128, 2, 2); }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
function woodTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  g.fillStyle = '#fff'; g.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 128; y += 2) { g.fillStyle = `rgba(90,50,10,${0.05 + Math.random() * 0.08})`; g.fillRect(0, y, 128, 1 + Math.random() * 2); }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Builder {
  private buckets = new Map<MatKind, THREE.BufferGeometry[]>();
  private noShadow = new Map<MatKind, THREE.BufferGeometry[]>();
  private col = new THREE.Color();
  constructor(public world: CollisionWorld) {}

  private push(kind: MatKind, g: THREE.BufferGeometry, color: THREE.ColorRepresentation, shadow: boolean) {
    this.col.set(color);
    const n = g.attributes.position.count;
    const arr = new Float32Array(n * 3);
    // ligera variación para dar vida
    const v = 0.96 + Math.random() * 0.06;
    for (let i = 0; i < n; i++) { arr[i * 3] = this.col.r * v; arr[i * 3 + 1] = this.col.g * v; arr[i * 3 + 2] = this.col.b * v; }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    if (g.index) g = g.toNonIndexed();
    const map = shadow ? this.buckets : this.noShadow;
    let b = map.get(kind);
    if (!b) { b = []; map.set(kind, b); }
    b.push(g);
  }

  box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, color: THREE.ColorRepresentation, o: BoxOpts = {}) {
    const w = x1 - x0, h = y1 - y0, d = z1 - z0;
    if (w <= 0 || h <= 0 || d <= 0) return;
    const g = new THREE.BoxGeometry(w, h, d);
    const kind = o.mat ?? 'std';
    if (kind === 'tile' || kind === 'wood') {
      // UV en coordenadas de mundo (1 baldosa = 1 m)
      const uv = g.attributes.uv as THREE.BufferAttribute;
      const pos = g.attributes.position as THREE.BufferAttribute;
      const nor = g.attributes.normal as THREE.BufferAttribute;
      for (let i = 0; i < uv.count; i++) {
        const px = pos.getX(i) + (x0 + x1) / 2, py = pos.getY(i) + (y0 + y1) / 2, pz = pos.getZ(i) + (z0 + z1) / 2;
        const ny = Math.abs(nor.getY(i)), nx = Math.abs(nor.getX(i));
        if (ny > 0.5) uv.setXY(i, px / 1, pz / 1);
        else if (nx > 0.5) uv.setXY(i, pz, py);
        else uv.setXY(i, px, py);
      }
    }
    g.translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
    this.push(kind, g, color, o.shadow ?? true);
    if (o.collide !== false) this.world.add({ x0, y0, z0, x1, y1, z1, surface: o.surface, cam: o.cam });
  }

  /** Caja centrada en (x,z) con base en y. */
  boxC(x: number, y: number, z: number, w: number, h: number, d: number, color: THREE.ColorRepresentation, o: BoxOpts = {}) {
    this.box(x - w / 2, y, z - d / 2, x + w / 2, y + h, z + d / 2, color, o);
  }

  geom(g: THREE.BufferGeometry, color: THREE.ColorRepresentation, kind: MatKind = 'std', shadow = true) {
    // limpiar atributos extra para que el merge sea compatible
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    this.push(kind, g, color, shadow);
  }

  cyl(x: number, y: number, z: number, r: number, h: number, color: THREE.ColorRepresentation, o: BoxOpts & { seg?: number; r2?: number } = {}) {
    const g = new THREE.CylinderGeometry(o.r2 ?? r, r, h, o.seg ?? 12);
    g.translate(x, y + h / 2, z);
    this.geom(g, color, o.mat ?? 'std', o.shadow ?? true);
    if (o.collide) this.world.add({ x0: x - r, y0: y, z0: z - r, x1: x + r, y1: y + h, z1: z + r, surface: o.surface, cam: o.cam });
  }

  sphere(x: number, y: number, z: number, r: number, color: THREE.ColorRepresentation, sx = 1, sy = 1, sz = 1, kind: MatKind = 'std') {
    const g = new THREE.IcosahedronGeometry(r, 1);
    g.scale(sx, sy, sz);
    g.translate(x, y, z);
    this.geom(g, color, kind);
  }

  build(scene: THREE.Scene) {
    const tile = tileTexture();
    const wood = woodTexture();
    const mats: Record<MatKind, THREE.Material> = {
      std: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.82, metalness: 0 }),
      tile: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.35, metalness: 0, map: tile }),
      wood: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0, map: wood }),
      glass: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.35, depthWrite: false }),
      emit: new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0xffffff, emissiveIntensity: 0.9, roughness: 1 }),
      metal: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.3, metalness: 0.7 }),
    };
    const make = (map: Map<MatKind, THREE.BufferGeometry[]>, shadow: boolean) => {
      for (const [kind, list] of map) {
        // trocear en lotes para que el culling funcione mejor
        const chunks = new Map<string, THREE.BufferGeometry[]>();
        for (const g of list) {
          g.computeBoundingBox();
          const c = g.boundingBox!.getCenter(new THREE.Vector3());
          const key = `${Math.floor(c.x / 30)}_${Math.floor(c.z / 30)}`;
          let a = chunks.get(key); if (!a) { a = []; chunks.set(key, a); } a.push(g);
        }
        for (const arr of chunks.values()) {
          const merged = mergeGeometries(arr, false);
          if (!merged) continue;
          merged.computeBoundingSphere();
          const m = new THREE.Mesh(merged, mats[kind]);
          m.castShadow = shadow && kind !== 'glass';
          m.receiveShadow = kind !== 'glass' && kind !== 'emit';
          m.matrixAutoUpdate = false;
          m.updateMatrix();
          scene.add(m);
        }
      }
    };
    make(this.buckets, true);
    make(this.noShadow, false);
    this.buckets.clear(); this.noShadow.clear();
  }
}

/** Letrero con texto (textura de canvas). */
export function makeSign(text: string, w: number, h: number, bg = '#1d3b7a', fg = '#ffffff', font = 'Bungee'): THREE.Mesh {
  const c = document.createElement('canvas');
  const scale = 128;
  c.width = Math.max(64, Math.round(w * scale)); c.height = Math.max(32, Math.round(h * scale));
  const g = c.getContext('2d')!;
  g.fillStyle = bg; g.fillRect(0, 0, c.width, c.height);
  g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 6; g.strokeRect(6, 6, c.width - 12, c.height - 12);
  g.fillStyle = fg;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  const lines = text.split('\n');
  let size = c.height * 0.62 / lines.length;
  g.font = `900 ${size}px ${font}, Arial Black, sans-serif`;
  const maxW = Math.max(...lines.map((l) => g.measureText(l).width));
  if (maxW > c.width * 0.88) { size *= (c.width * 0.88) / maxW; g.font = `900 ${size}px ${font}, Arial Black, sans-serif`; }
  lines.forEach((l, i) => g.fillText(l, c.width / 2, c.height / 2 + (i - (lines.length - 1) / 2) * size * 1.15));
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, roughness: 0.7 }));
  return m;
}

/** Textura de canvas genérica (pizarrón, carteles). */
export function canvasPlane(w: number, h: number, draw: (g: CanvasRenderingContext2D, W: number, H: number) => void, emissive = false): THREE.Mesh {
  const c = document.createElement('canvas');
  c.width = Math.round(w * 160); c.height = Math.round(h * 160);
  const g = c.getContext('2d')!;
  draw(g, c.width, c.height);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  const mat = emissive
    ? new THREE.MeshStandardMaterial({ map: t, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: 0.6, roughness: 0.4 })
    : new THREE.MeshStandardMaterial({ map: t, roughness: 0.8 });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  (m as THREE.Mesh & { canvas?: HTMLCanvasElement }).userData.canvas = c;
  return m;
}
