import * as THREE from 'three';

interface Particle { m: THREE.Object3D; v: THREE.Vector3; life: number; max: number; grow: number; spin: number; fade: boolean; base: number }

function textTexture(text: string, color: string, stroke: string, font = 'Bungee', size = 128) {
  const c = document.createElement('canvas');
  const g = c.getContext('2d')!;
  g.font = `900 ${size}px ${font}, Arial Black, sans-serif`;
  const w = Math.ceil(g.measureText(text).width) + size * 0.5;
  c.width = w; c.height = size * 1.5;
  g.font = `900 ${size}px ${font}, Arial Black, sans-serif`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = size * 0.14; g.strokeStyle = stroke; g.lineJoin = 'round';
  g.strokeText(text, w / 2, c.height / 2);
  g.fillStyle = color; g.fillText(text, w / 2, c.height / 2);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return { t, aspect: w / c.height };
}

/** Partículas y gráficos de cómic: humo de enojo, nube de pelea, onomatopeyas, iconos. */
export class Effects {
  private parts: Particle[] = [];
  private puffGeo = new THREE.IcosahedronGeometry(0.15, 1);
  private puffMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, transparent: true, opacity: 0.9, flatShading: true });
  private dustMat = new THREE.MeshStandardMaterial({ color: '#efe6d2', roughness: 1, transparent: true, opacity: 0.95, flatShading: true });
  private icons = new Map<string, THREE.Sprite>();
  private cloud: THREE.Group | null = null;
  private cloudT = 0;
  private texCache = new Map<string, { t: THREE.Texture; aspect: number }>();

  constructor(public scene: THREE.Scene) {}

  steam(p: THREE.Vector3) {
    const m = new THREE.Mesh(this.puffGeo, this.puffMat.clone());
    m.position.copy(p).add(new THREE.Vector3((Math.random() - 0.5) * 0.3, 0.1, (Math.random() - 0.5) * 0.3));
    this.scene.add(m);
    this.parts.push({ m, v: new THREE.Vector3((Math.random() - 0.5) * 0.6, 1.4 + Math.random(), (Math.random() - 0.5) * 0.6), life: 0, max: 1.0, grow: 1.8, spin: 2, fade: true, base: 0.6 + Math.random() * 0.5 });
  }

  burst(p: THREE.Vector3, n = 10, color?: string) {
    for (let i = 0; i < n; i++) {
      const mt = this.dustMat.clone(); if (color) mt.color.set(color);
      const m = new THREE.Mesh(this.puffGeo, mt);
      m.position.copy(p);
      this.scene.add(m);
      const a = Math.random() * Math.PI * 2;
      this.parts.push({ m, v: new THREE.Vector3(Math.cos(a) * 2, Math.random() * 1.5, Math.sin(a) * 2), life: 0, max: 0.6 + Math.random() * 0.4, grow: 2, spin: 3, fade: true, base: 0.8 + Math.random() });
    }
  }

  private tex(text: string, color: string, stroke: string) {
    const k = text + color + stroke;
    let v = this.texCache.get(k);
    if (!v) { v = textTexture(text, color, stroke); this.texCache.set(k, v); }
    return v;
  }

  /** Onomatopeya de cómic que salta y se desvanece. */
  comic(text: string, p: THREE.Vector3, color = '#ffd23f', size = 0.9) {
    const { t, aspect } = this.tex(text, color, '#1a1a1a');
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthTest: false }));
    s.renderOrder = 999;
    s.position.copy(p).add(new THREE.Vector3((Math.random() - 0.5) * 0.8, 0.3 + Math.random() * 0.5, (Math.random() - 0.5) * 0.8));
    s.scale.set(size * aspect, size, 1);
    s.material.rotation = (Math.random() - 0.5) * 0.6;
    this.scene.add(s);
    this.parts.push({ m: s, v: new THREE.Vector3(0, 0.8, 0), life: 0, max: 0.9, grow: 0.6, spin: 0, fade: true, base: 1 });
  }

  /** Icono persistente sobre un personaje (!, ?, ♪, 💢). Devuelve id. */
  icon(id: string, text: string, color = '#ffd23f') {
    this.clearIcon(id);
    const { t, aspect } = this.tex(text, color, '#1a1a1a');
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthTest: false }));
    s.renderOrder = 998;
    s.scale.set(0.5 * aspect, 0.5, 1);
    this.scene.add(s);
    this.icons.set(id, s);
    return s;
  }
  placeIcon(id: string, p: THREE.Vector3, t: number) {
    const s = this.icons.get(id);
    if (s) s.position.set(p.x, p.y + 0.55 + Math.sin(t * 4) * 0.06, p.z);
  }
  clearIcon(id: string) {
    const s = this.icons.get(id);
    if (s) { this.scene.remove(s); s.material.dispose(); this.icons.delete(id); }
  }
  clearIcons() { for (const k of [...this.icons.keys()]) this.clearIcon(k); }

  /** Nube de pelea caricaturesca (no gráfica). */
  startCloud(p: THREE.Vector3) {
    this.stopCloud();
    const g = new THREE.Group();
    for (let i = 0; i < 22; i++) {
      const m = new THREE.Mesh(this.puffGeo, this.dustMat);
      const a = (i / 22) * Math.PI * 2;
      m.userData = { a, r: 0.55 + Math.random() * 0.35, y: 0.15 + Math.random() * 1.5, s: 1.1 + Math.random() * 1.1, sp: 3 + Math.random() * 3 };
      g.add(m);
    }
    for (let i = 0; i < 5; i++) {
      const { t, aspect } = this.tex('★', '#ffe14d', '#1a1a1a');
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true }));
      s.scale.set(0.3 * aspect, 0.3, 1);
      s.userData = { a: i * 1.3, r: 0.9, y: 1.9, s: 1, sp: 4, star: true };
      g.add(s);
    }
    g.position.copy(p);
    this.scene.add(g);
    this.cloud = g;
    this.cloudT = 0;
  }
  stopCloud() {
    if (this.cloud) { this.burst(this.cloud.position.clone().add(new THREE.Vector3(0, 0.8, 0)), 16); this.scene.remove(this.cloud); this.cloud = null; }
  }
  get cloudActive() { return !!this.cloud; }
  moveCloud(p: THREE.Vector3) { if (this.cloud) this.cloud.position.lerp(p, 0.1); }

  update(dt: number) {
    for (let i = this.parts.length - 1; i >= 0; i--) {
      const p = this.parts[i];
      p.life += dt;
      const k = p.life / p.max;
      if (k >= 1) {
        this.scene.remove(p.m);
        const mm = (p.m as THREE.Mesh).material as THREE.Material;
        if (mm && mm !== this.dustMat && mm !== this.puffMat) mm.dispose();
        this.parts.splice(i, 1);
        continue;
      }
      p.m.position.addScaledVector(p.v, dt);
      p.v.multiplyScalar(1 - dt * 1.5);
      if ((p.m as THREE.Sprite).isSprite) {
        const s = p.m as THREE.Sprite;
        const pop = k < 0.15 ? k / 0.15 * 1.2 : 1.2 - (k - 0.15) * 0.3;
        const base = s.userData.baseScale ?? (s.userData.baseScale = s.scale.clone());
        s.scale.set(base.x * pop, base.y * pop, 1);
        s.material.opacity = k > 0.6 ? 1 - (k - 0.6) / 0.4 : 1;
      } else {
        const sc = p.base * (1 + k * p.grow);
        p.m.scale.setScalar(sc);
        p.m.rotation.y += p.spin * dt;
        const mt = (p.m as THREE.Mesh).material as THREE.MeshStandardMaterial;
        if (p.fade) mt.opacity = 0.9 * (1 - k);
      }
    }
    if (this.cloud) {
      this.cloudT += dt;
      for (const c of this.cloud.children) {
        const u = c.userData as { a: number; r: number; y: number; s: number; sp: number; star?: boolean };
        const a = u.a + this.cloudT * u.sp;
        const r = u.r + Math.sin(this.cloudT * 7 + u.a) * 0.2;
        c.position.set(Math.cos(a) * r, u.y + Math.sin(this.cloudT * 9 + u.a * 3) * 0.15, Math.sin(a) * r);
        if (!u.star) c.scale.setScalar(u.s * (0.85 + Math.sin(this.cloudT * 11 + u.a) * 0.15));
      }
    }
  }
}
