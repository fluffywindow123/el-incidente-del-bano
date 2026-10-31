import * as THREE from 'three';

export type Anim =
  | 'idle' | 'walk' | 'run' | 'sit' | 'sitWrite' | 'sitRaise' | 'talk' | 'brawl' | 'push' | 'stumble' | 'fallen'
  | 'cry' | 'wipe' | 'rage' | 'wash' | 'type' | 'cheer' | 'point' | 'shrug' | 'crossed' | 'raise'
  | 'restrain' | 'cower' | 'teach' | 'jump' | 'bow' | 'present' | 'whistle' | 'sitSad' | 'phone' | 'eat' | 'dribble';
export type Expr = 'neutral' | 'happy' | 'angry' | 'sad' | 'surprised' | 'cry' | 'furious' | 'smug' | 'worried' | 'bored';
export type HairStyle = 'spiky' | 'side' | 'buzz' | 'curly' | 'long' | 'bun' | 'bald' | 'neat' | 'pony' | 'mohawk';

export interface Look {
  name: string;
  shirt: string;
  pants: string;
  skin: string;
  hair: string;
  hairStyle: HairStyle;
  height?: number;
  female?: boolean;
  skirt?: boolean;
  glasses?: boolean;
  backpack?: string;
  tie?: string;
  adult?: boolean;
  shoes?: string;
  longSleeves?: boolean;
  voice?: number;
  emblem?: boolean;
}

const matCache = new Map<string, THREE.MeshStandardMaterial>();
function mat(color: string, rough = 0.75) {
  const k = color + rough;
  let m = matCache.get(k);
  if (!m) { m = new THREE.MeshStandardMaterial({ color, roughness: rough }); matCache.set(k, m); }
  return m;
}

interface Pose {
  hipY: number; hipRx: number; hipRy: number; hipRz: number;
  spRx: number; spRy: number; spRz: number;
  hdRx: number; hdRy: number; hdRz: number;
  lSx: number; lSz: number; lSy: number; lE: number;
  rSx: number; rSz: number; rSy: number; rE: number;
  lHx: number; lHz: number; lK: number;
  rHx: number; rHz: number; rK: number;
}
const zeroPose = (): Pose => ({ hipY: 0, hipRx: 0, hipRy: 0, hipRz: 0, spRx: 0, spRy: 0, spRz: 0, hdRx: 0, hdRy: 0, hdRz: 0, lSx: 0, lSz: 0.08, lSy: 0, lE: -0.1, rSx: 0, rSz: -0.08, rSy: 0, rE: -0.1, lHx: 0, lHz: 0, lK: 0, rHx: 0, rHz: 0, rK: 0 });

const capsule = (r: number, len: number) => { const g = new THREE.CapsuleGeometry(r, len, 4, 10); g.translate(0, -len / 2 - r * 0.6, 0); return g; };

export class Character {
  root = new THREE.Group();
  private hips = new THREE.Group();
  private spine = new THREE.Group();
  private head = new THREE.Group();
  private lS = new THREE.Group(); private rS = new THREE.Group();
  private lEl = new THREE.Group(); private rEl = new THREE.Group();
  private lH = new THREE.Group(); private rH = new THREE.Group();
  private lKn = new THREE.Group(); private rKn = new THREE.Group();
  private browL!: THREE.Mesh; private browR!: THREE.Mesh;
  private smile!: THREE.Mesh; private mouthO!: THREE.Mesh;
  private eyeL!: THREE.Group; private eyeR!: THREE.Group;
  private tears: THREE.Mesh[] = [];
  private skinMat: THREE.MeshStandardMaterial;
  private baseSkin: THREE.Color;
  private pose = zeroPose();
  private legLen: number;
  anim: Anim = 'idle';
  expr: Expr = 'neutral';
  talking = false;
  speed = 0;
  private phase = Math.random() * 10;
  private t = Math.random() * 10;
  private blinkT = 2 + Math.random() * 3;
  private redness = 0;
  redTarget = 0;
  lookTarget: THREE.Vector3 | null = null;
  private steamT = 0;
  onSteam?: (p: THREE.Vector3) => void;
  animSpeed = 1;
  scale: number;

  constructor(public look: Look) {
    const H = look.height ?? (look.adult ? 1.0 : 0.9);
    this.scale = H;
    this.skinMat = new THREE.MeshStandardMaterial({ color: look.skin, roughness: 0.6 });
    this.baseSkin = new THREE.Color(look.skin);
    const shirt = mat(look.shirt, 0.85), pants = mat(look.pants, 0.85), shoes = mat(look.shoes ?? '#2a2a2a', 0.5);
    const hairM = mat(look.hair, 0.7);
    const skin = this.skinMat;
    const limbSkin = mat(look.skin, 0.6);
    const add = (parent: THREE.Object3D, g: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0, shadow = true) => {
      const mesh = new THREE.Mesh(g, m); mesh.position.set(x, y, z); mesh.castShadow = shadow; parent.add(mesh); return mesh;
    };

    this.legLen = 0.78;
    this.root.add(this.hips);
    this.hips.position.y = this.legLen;
    // pelvis
    add(this.hips, new THREE.CapsuleGeometry(0.15, 0.1, 4, 10).rotateZ(Math.PI / 2), pants, 0, 0.0, 0);
    if (look.skirt) add(this.hips, new THREE.CylinderGeometry(0.17, 0.3, 0.42, 12), pants, 0, -0.16, 0);
    // piernas
    for (const [g, k, side] of [[this.lH, this.lKn, 1], [this.rH, this.rKn, -1]] as const) {
      g.position.set(0.1 * side, -0.02, 0);
      this.hips.add(g);
      add(g, capsule(0.075, 0.24), look.skirt ? limbSkin : pants);
      k.position.y = -0.38;
      g.add(k);
      add(k, capsule(0.065, 0.24), look.skirt ? limbSkin : pants);
      const shoe = add(k, new THREE.BoxGeometry(0.13, 0.08, 0.24), shoes, 0, -0.37, 0.05);
      shoe.geometry.translate(0, 0, 0);
      if (look.skirt) add(k, new THREE.CylinderGeometry(0.068, 0.068, 0.12, 8), mat('#f2f2f2'), 0, -0.3, 0);
    }
    // torso
    this.spine.position.y = 0.05;
    this.hips.add(this.spine);
    const torsoGeo = new THREE.CapsuleGeometry(0.19, 0.24, 4, 12); torsoGeo.scale(1, 1, 0.72); torsoGeo.translate(0, 0.25, 0);
    add(this.spine, torsoGeo, shirt);
    // cuello de la playera
    add(this.spine, new THREE.TorusGeometry(0.075, 0.025, 6, 12).rotateX(Math.PI / 2), shirt, 0, 0.5, 0, false);
    if (look.emblem) add(this.spine, new THREE.CircleGeometry(0.035, 10), mat('#1d3b7a'), 0.08, 0.38, 0.142, false);
    if (look.tie) { const tie = add(this.spine, new THREE.BoxGeometry(0.05, 0.26, 0.02), mat(look.tie), 0, 0.33, 0.145, false); tie.rotation.x = -0.05; }
    if (look.backpack) {
      add(this.spine, new THREE.BoxGeometry(0.3, 0.36, 0.14), mat(look.backpack), 0, 0.28, -0.19);
      add(this.spine, new THREE.BoxGeometry(0.22, 0.14, 0.05), mat(look.backpack, 0.5), 0, 0.18, -0.28, false);
    }
    // brazos
    for (const [s, e, side] of [[this.lS, this.lEl, 1], [this.rS, this.rEl, -1]] as const) {
      s.position.set(0.23 * side, 0.45, 0);
      this.spine.add(s);
      add(s, new THREE.SphereGeometry(0.075, 8, 6), shirt);
      add(s, capsule(0.058, 0.17), shirt);
      e.position.y = -0.27;
      s.add(e);
      add(e, capsule(0.05, 0.16), look.longSleeves ? shirt : limbSkin);
      add(e, new THREE.SphereGeometry(0.058, 8, 6), limbSkin, 0, -0.27, 0.01);
    }
    // cabeza
    this.head.position.y = 0.6;
    this.spine.add(this.head);
    add(this.head, new THREE.CylinderGeometry(0.055, 0.06, 0.1, 8), skin, 0, -0.03, 0);
    const headGeo = new THREE.SphereGeometry(0.205, 20, 16); headGeo.scale(1, 1.06, 0.98);
    add(this.head, headGeo, skin, 0, 0.17, 0);
    // orejas y nariz
    add(this.head, new THREE.SphereGeometry(0.045, 8, 6).scale(0.6, 1, 1), skin, 0.2, 0.16, 0, false);
    add(this.head, new THREE.SphereGeometry(0.045, 8, 6).scale(0.6, 1, 1), skin, -0.2, 0.16, 0, false);
    add(this.head, new THREE.SphereGeometry(0.03, 8, 6).scale(1, 0.9, 1.1), skin, 0, 0.14, 0.2, false);
    // ojos
    const white = mat('#ffffff', 0.3), pupil = mat('#1b1b1b', 0.2);
    const mkEye = (x: number) => {
      const g = new THREE.Group(); g.position.set(x, 0.2, 0.17);
      add(g, new THREE.SphereGeometry(0.042, 12, 8).scale(1, 1.15, 0.6), white, 0, 0, 0, false);
      add(g, new THREE.SphereGeometry(0.024, 10, 8).scale(1, 1.2, 0.6), pupil, 0, -0.003, 0.02, false);
      add(g, new THREE.SphereGeometry(0.007, 6, 4), white, 0.008, 0.01, 0.034, false);
      this.head.add(g);
      return g;
    };
    this.eyeL = mkEye(0.072); this.eyeR = mkEye(-0.072);
    const browM = mat(look.hair === '#f0f0f0' ? '#888' : look.hair, 0.8);
    this.browL = add(this.head, new THREE.BoxGeometry(0.075, 0.018, 0.02), browM, 0.075, 0.27, 0.185, false);
    this.browR = add(this.head, new THREE.BoxGeometry(0.075, 0.018, 0.02), browM, -0.075, 0.27, 0.185, false);
    // boca
    const smileGeo = new THREE.TorusGeometry(0.045, 0.011, 6, 14, Math.PI); smileGeo.rotateZ(Math.PI);
    this.smile = add(this.head, smileGeo, mat('#5a1e1e', 0.5), 0, 0.085, 0.19, false);
    this.mouthO = add(this.head, new THREE.SphereGeometry(0.04, 12, 8).scale(1, 0.8, 0.4), mat('#4a1414', 0.5), 0, 0.07, 0.185, false);
    this.mouthO.visible = false;
    // lágrimas
    for (const x of [0.075, -0.075]) {
      const t = add(this.head, new THREE.SphereGeometry(0.018, 8, 6).scale(0.8, 1.3, 0.8), new THREE.MeshStandardMaterial({ color: '#6ec6ff', emissive: '#2a7fff', emissiveIntensity: 0.4, roughness: 0.1 }), x, 0.15, 0.19, false);
      t.visible = false; this.tears.push(t);
    }
    if (look.glasses) {
      const gm = mat('#222', 0.3);
      for (const x of [0.072, -0.072]) add(this.head, new THREE.TorusGeometry(0.048, 0.008, 6, 16), gm, x, 0.2, 0.2, false);
      add(this.head, new THREE.BoxGeometry(0.05, 0.008, 0.008), gm, 0, 0.21, 0.205, false);
    }
    this.buildHair(look.hairStyle, hairM, add);
    this.root.scale.setScalar(H);
    this.root.traverse((o) => { if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).receiveShadow = false; });
  }

  private buildHair(style: HairStyle, m: THREE.Material, add: (p: THREE.Object3D, g: THREE.BufferGeometry, m: THREE.Material, x?: number, y?: number, z?: number, s?: boolean) => THREE.Mesh) {
    const h = this.head;
    const cap = (scaleY = 1, fwd = 0) => {
      const g = new THREE.SphereGeometry(0.218, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.5);
      g.rotateX(-0.5); // despejar frente y cejas
      g.scale(1, scaleY, 1);
      return add(h, g, m, 0, 0.19, -0.01 + fwd);
    };
    switch (style) {
      case 'spiky': {
        cap(1.05);
        for (let i = 0; i < 9; i++) {
          const a = (i / 9) * Math.PI * 2;
          const cone = add(h, new THREE.ConeGeometry(0.055, 0.17, 6), m, Math.cos(a) * 0.11, 0.38, Math.sin(a) * 0.11 - 0.02);
          cone.rotation.set(Math.sin(a) * 0.7, 0, -Math.cos(a) * 0.7);
        }
        const top = add(h, new THREE.ConeGeometry(0.06, 0.2, 6), m, 0, 0.44, 0.02); top.rotation.x = 0.4;
        const fr = add(h, new THREE.BoxGeometry(0.3, 0.06, 0.08), m, 0, 0.33, 0.16); fr.rotation.x = 0.5;
        break;
      }
      case 'side': {
        cap(1.04);
        // copete de lado, redondeado
        const fr = add(h, new THREE.SphereGeometry(0.15, 14, 10).scale(1.45, 0.42, 0.85), m, 0.05, 0.345, 0.1); fr.rotation.set(0.25, 0, -0.22);
        add(h, new THREE.SphereGeometry(0.1, 12, 8).scale(1.2, 0.55, 1.1), m, -0.1, 0.36, -0.02);
        break;
      }
      case 'buzz': cap(0.92); break;
      case 'neat': {
        cap(1.0);
        const fr = add(h, new THREE.BoxGeometry(0.36, 0.05, 0.1), m, 0, 0.34, 0.15); fr.rotation.x = 0.6;
        break;
      }
      case 'mohawk': {
        cap(0.9);
        for (let i = 0; i < 5; i++) add(h, new THREE.BoxGeometry(0.05, 0.14, 0.08), m, 0, 0.42, 0.12 - i * 0.07);
        break;
      }
      case 'curly': {
        for (let i = 0; i < 22; i++) {
          const a = Math.random() * Math.PI * 2, e = Math.random() * 1.2;
          add(h, new THREE.SphereGeometry(0.07, 8, 6), m, Math.cos(a) * Math.cos(e) * 0.2, 0.2 + Math.sin(e) * 0.2, Math.sin(a) * Math.cos(e) * 0.2 - 0.02);
        }
        break;
      }
      case 'long': case 'pony': case 'bun': {
        cap(1.05);
        const fr = add(h, new THREE.BoxGeometry(0.38, 0.06, 0.1), m, 0, 0.33, 0.15); fr.rotation.x = 0.6;
        if (style === 'long') {
          add(h, new THREE.BoxGeometry(0.42, 0.42, 0.16), m, 0, 0.06, -0.12);
          add(h, new THREE.BoxGeometry(0.08, 0.36, 0.2), m, 0.2, 0.08, 0.0);
          add(h, new THREE.BoxGeometry(0.08, 0.36, 0.2), m, -0.2, 0.08, 0.0);
        } else if (style === 'pony') {
          const p = add(h, new THREE.CapsuleGeometry(0.06, 0.22, 4, 8), m, 0, 0.12, -0.25); p.rotation.x = 0.4;
          add(h, new THREE.TorusGeometry(0.05, 0.015, 6, 10), mat('#ff4fa3'), 0, 0.27, -0.22);
        } else {
          add(h, new THREE.SphereGeometry(0.1, 10, 8), m, 0, 0.38, -0.15);
        }
        break;
      }
      case 'bald': {
        add(h, new THREE.SphereGeometry(0.21, 14, 8, 0, Math.PI * 2, Math.PI * 0.35, Math.PI * 0.25), m, 0, 0.17, -0.01);
        break;
      }
    }
  }

  get position() { return this.root.position; }
  get yaw() { return this.root.rotation.y; }
  set yaw(v: number) { this.root.rotation.y = v; }
  headWorld(out = new THREE.Vector3()) { return this.head.getWorldPosition(out).add(new THREE.Vector3(0, 0.18 * this.scale, 0)); }

  setExpr(e: Expr) { this.expr = e; }

  /** Pose objetivo según la animación. */
  private target(t: number): Pose {
    const p = zeroPose();
    const s = Math.sin, c = Math.cos;
    const breathe = s(t * 2) * 0.012;
    p.hipY = breathe;
    switch (this.anim) {
      case 'idle': {
        p.spRx = 0.02 + s(t * 2) * 0.01; p.hdRx = s(t * 0.7) * 0.03; p.hdRy = s(t * 0.4) * 0.12;
        p.lSz = 0.1; p.rSz = -0.1; p.lSx = s(t * 2) * 0.03; p.rSx = -s(t * 2) * 0.03;
        break;
      }
      case 'walk': case 'run': case 'dribble': {
        const run = this.anim === 'run';
        const ph = this.phase;
        const amp = run ? 0.95 : 0.55;
        p.lHx = -s(ph) * amp; p.rHx = s(ph) * amp;
        p.lK = Math.max(0, s(ph + 1.6)) * (run ? 1.4 : 0.8) + 0.08;
        p.rK = Math.max(0, s(ph + 1.6 + Math.PI)) * (run ? 1.4 : 0.8) + 0.08;
        p.lSx = s(ph) * amp * 0.8; p.rSx = -s(ph) * amp * 0.8;
        p.lE = run ? -1.2 : -0.3; p.rE = run ? -1.2 : -0.3;
        p.hipY = Math.abs(c(ph)) * (run ? 0.06 : 0.03) - (run ? 0.03 : 0.0);
        p.spRx = run ? 0.25 : 0.06; p.spRy = s(ph) * 0.08; p.hipRy = -s(ph) * 0.08;
        p.hdRx = run ? -0.12 : 0;
        if (this.anim === 'dribble') { p.rSx = -0.6 + Math.abs(s(t * 8)) * 0.3; p.rE = -0.6; }
        break;
      }
      case 'jump': {
        p.lHx = -0.5; p.rHx = 0.2; p.lK = 0.9; p.rK = 0.4; p.lSx = -2.4; p.rSx = -2.4; p.lSz = 0.4; p.rSz = -0.4;
        break;
      }
      case 'sit': case 'sitWrite': case 'sitRaise': case 'sitSad': case 'type': {
        p.hipY = -0.31; p.lHx = -1.5; p.rHx = -1.5; p.lK = 1.5; p.rK = 1.5; p.lHz = 0.05; p.rHz = -0.05;
        p.spRx = 0.08;
        p.lSx = -0.6; p.rSx = -0.6; p.lE = -0.9; p.rE = -0.9;
        if (this.anim === 'sit') { p.hdRy = s(t * 0.5) * 0.15; }
        if (this.anim === 'sitWrite') { p.spRx = 0.3; p.hdRx = 0.35; p.rSx = -0.9 + s(t * 9) * 0.06; p.rE = -0.8; p.rSy = s(t * 5) * 0.1; }
        if (this.anim === 'sitRaise') { p.rSx = -2.9; p.rSz = -0.15; p.rE = -0.1; p.spRz = 0.08; p.hdRz = -0.05 + s(t * 6) * 0.03; }
        if (this.anim === 'sitSad') { p.spRx = 0.22; p.hdRx = 0.16; p.lSx = -0.3; p.rSx = -0.3; }
        if (this.anim === 'type') { p.lSx = -0.8 + s(t * 14) * 0.08; p.rSx = -0.8 + s(t * 13 + 1) * 0.08; p.lE = -1.0; p.rE = -1.0; p.hdRx = 0.1; }
        break;
      }
      case 'talk': {
        p.hdRx = s(t * 3) * 0.06; p.hdRy = s(t * 1.3) * 0.12;
        p.rSx = -0.5 + s(t * 2.5) * 0.25; p.rE = -0.9 + s(t * 3) * 0.2; p.rSz = -0.2;
        p.lSx = -0.15 + s(t * 2) * 0.1; p.lE = -0.4; p.lSz = 0.15;
        p.spRy = s(t * 1.2) * 0.06;
        break;
      }
      case 'teach': {
        p.rSx = -1.6 + s(t * 1.5) * 0.4; p.rSz = -0.5; p.rE = -0.4; p.lSx = -0.3; p.lE = -1.3; p.spRy = s(t * 0.8) * 0.3; p.hdRy = s(t * 0.8) * 0.5;
        break;
      }
      case 'point': {
        p.rSx = -1.5; p.rSz = -0.1; p.rE = 0; p.lSz = 0.15; p.spRy = -0.1; p.hdRx = -0.05;
        break;
      }
      case 'present': {
        p.lSx = -1.0; p.rSx = -1.0; p.lSz = 0.6; p.rSz = -0.6; p.lE = -0.4; p.rE = -0.4;
        break;
      }
      case 'shrug': {
        p.lSz = 0.5; p.rSz = -0.5; p.lE = -1.5; p.rE = -1.5; p.lSx = -0.2; p.rSx = -0.2; p.lSy = -0.6; p.rSy = 0.6; p.hdRz = s(t * 2) * 0.1;
        break;
      }
      case 'crossed': {
        p.lSx = -0.5; p.rSx = -0.5; p.lE = -1.9; p.rE = -1.9; p.lSy = 0.9; p.rSy = -0.9; p.lSz = 0.25; p.rSz = -0.25; p.hdRy = s(t * 0.5) * 0.1;
        break;
      }
      case 'raise': {
        p.rSx = -2.95; p.rSz = -0.1; p.rE = -0.05; p.lSz = 0.1; p.spRz = 0.06;
        break;
      }
      case 'cheer': {
        p.lSx = -2.8; p.rSx = -2.8; p.lSz = 0.4 + s(t * 10) * 0.15; p.rSz = -0.4 - s(t * 10) * 0.15; p.hipY = Math.abs(s(t * 6)) * 0.08;
        break;
      }
      case 'whistle': {
        p.lSx = 0; p.rSx = 0; p.lSz = 0.05; p.rSz = -0.05; p.lSy = 0.3; p.rSy = -0.3; p.lE = -0.3; p.rE = -0.3;
        p.hdRx = -0.25; p.hdRy = s(t * 0.9) * 0.5; p.spRy = s(t * 0.9) * 0.1;
        break;
      }
      case 'push': {
        p.lSx = -1.55; p.rSx = -1.55; p.lE = -0.05; p.rE = -0.05; p.lSz = -0.1; p.rSz = 0.1; p.spRx = 0.3; p.lHx = -0.5; p.rHx = 0.4; p.lK = 0.3;
        break;
      }
      case 'stumble': {
        const w = t * 16;
        p.spRx = -0.45; p.hdRx = -0.3; p.lSx = -2.4 + s(w) * 0.8; p.rSx = -2.4 + s(w + 2) * 0.8; p.lSz = 0.8; p.rSz = -0.8;
        p.lHx = s(w * 0.7) * 0.6; p.rHx = -s(w * 0.7) * 0.6; p.lK = 0.4; p.rK = 0.4; p.hipRz = s(w * 0.5) * 0.15;
        break;
      }
      case 'fallen': {
        p.hipY = -0.66; p.hipRx = -1.25; p.lHx = -1.3; p.rHx = -1.0; p.lK = 0.5; p.rK = 0.8;
        p.lSx = -0.4; p.rSx = -0.8; p.lSz = 0.9; p.rSz = -0.9; p.hdRx = 0.6 + s(t * 2) * 0.1;
        break;
      }
      case 'brawl': {
        const w = t * 18;
        p.lSx = -1.6 + s(w) * 1.3; p.rSx = -1.6 + s(w + Math.PI) * 1.3; p.lSz = 0.4 + c(w) * 0.4; p.rSz = -0.4 - c(w) * 0.4;
        p.lE = -0.6 - s(w * 1.3) * 0.5; p.rE = -0.6 - c(w * 1.3) * 0.5;
        p.spRx = 0.2; p.spRy = s(w * 0.5) * 0.4; p.hdRz = s(w * 0.7) * 0.2;
        p.lHx = s(w * 0.8) * 0.5; p.rHx = -s(w * 0.8) * 0.5; p.lK = 0.5; p.rK = 0.5; p.hipY = Math.abs(s(w * 0.8)) * 0.06;
        break;
      }
      case 'restrain': {
        p.lSx = -1.4; p.rSx = -1.4; p.lSz = 0.9 + s(t * 7) * 0.2; p.rSz = -0.9 - s(t * 7) * 0.2; p.lE = -0.2; p.rE = -0.2; p.spRx = 0.15;
        p.lHx = -0.4; p.rHx = 0.3; p.lK = 0.3;
        break;
      }
      case 'cower': {
        p.hipY = -0.08; p.spRx = 0.35; p.lSx = -2.0; p.rSx = -2.0; p.lE = -1.9; p.rE = -1.9; p.lSz = -0.25; p.rSz = 0.25; p.hdRx = 0.3; p.lK = 0.3; p.rK = 0.3; p.lHx = -0.2; p.rHx = -0.2;
        break;
      }
      case 'cry': {
        p.spRx = 0.15; p.hdRx = 0.1 + s(t * 7) * 0.05; p.lSx = -1.2; p.rSx = -1.2; p.lE = -1.7; p.rE = -1.7; p.lSz = -0.05; p.rSz = 0.05;
        p.hipY = -0.31; p.lHx = -1.5; p.rHx = -1.5; p.lK = 1.5; p.rK = 1.5;
        p.spRz = s(t * 7) * 0.03;
        break;
      }
      case 'wipe': {
        p.hipY = -0.31; p.lHx = -1.5; p.rHx = -1.5; p.lK = 1.5; p.rK = 1.5;
        p.spRx = 0.1; p.hdRx = 0.05; p.hdRz = -0.12;
        p.rSx = -2.2; p.rSz = 0.1; p.rE = -2.0 + s(t * 4) * 0.15; p.rSy = 0.4; p.lSx = -0.6; p.lE = -0.9;
        break;
      }
      case 'rage': {
        p.hipY = -0.31; p.lHx = -1.5; p.rHx = -1.5; p.lK = 1.5; p.rK = 1.5;
        p.spRx = -0.05 + s(t * 30) * 0.015; p.hdRx = -0.08; p.hdRz = s(t * 40) * 0.025;
        p.lSx = -0.8; p.rSx = -0.8; p.lE = -1.6; p.rE = -1.6; p.lSz = 0.35; p.rSz = -0.35;
        break;
      }
      case 'wash': {
        p.lSx = -1.0 + s(t * 9) * 0.15; p.rSx = -1.0 - s(t * 9) * 0.15; p.lE = -0.7; p.rE = -0.7; p.lSz = -0.15; p.rSz = 0.15; p.spRx = 0.3; p.hdRx = 0.3;
        break;
      }
      case 'bow': { p.spRx = 0.6; p.hdRx = 0.3; p.lSx = 0.1; p.rSx = 0.1; break; }
      case 'phone': { p.rSx = -1.0; p.rE = -1.4; p.rSz = 0.1; p.hdRx = 0.4; p.lSz = 0.1; break; }
      case 'eat': { p.rSx = -1.1 + Math.max(0, s(t * 2.5)) * 0.6; p.rE = -1.8; p.rSy = 0.4; p.hdRx = 0.05; break; }
    }
    return p;
  }

  update(dt: number) {
    this.t += dt * this.animSpeed;
    const t = this.t;
    if (this.anim === 'walk' || this.anim === 'run' || this.anim === 'dribble') this.phase += dt * Math.max(2, this.speed * (this.anim === 'run' ? 2.3 : 2.9));
    const target = this.target(t);
    const k = Math.min(1, dt * (this.anim === 'brawl' || this.anim === 'stumble' ? 25 : 11));
    const p = this.pose as unknown as Record<string, number>;
    const tg = target as unknown as Record<string, number>;
    for (const key in tg) p[key] += (tg[key] - p[key]) * k;
    const P = this.pose;
    this.hips.position.y = this.legLen + P.hipY;
    this.hips.rotation.set(P.hipRx, P.hipRy, P.hipRz);
    this.spine.rotation.set(P.spRx, P.spRy, P.spRz);
    let hdRy = P.hdRy;
    if (this.lookTarget) {
      const hw = this.root.position;
      const a = Math.atan2(this.lookTarget.x - hw.x, this.lookTarget.z - hw.z) - this.root.rotation.y;
      const na = Math.atan2(Math.sin(a), Math.cos(a));
      hdRy = Math.max(-1.1, Math.min(1.1, na));
    }
    this.head.rotation.set(P.hdRx, hdRy, P.hdRz);
    this.lS.rotation.set(P.lSx, P.lSy, P.lSz); this.rS.rotation.set(P.rSx, P.rSy, P.rSz);
    this.lEl.rotation.x = P.lE; this.rEl.rotation.x = P.rE;
    this.lH.rotation.set(P.lHx, 0, P.lHz); this.rH.rotation.set(P.rHx, 0, P.rHz);
    this.lKn.rotation.x = P.lK; this.rKn.rotation.x = P.rK;
    this.updateFace(dt, t);
  }

  private updateFace(dt: number, t: number) {
    // parpadeo
    this.blinkT -= dt;
    let eyeY = 1;
    if (this.blinkT < 0) { eyeY = 0.1; if (this.blinkT < -0.12) this.blinkT = 2 + Math.random() * 4; }
    let bL = 0, bR = 0, browY = 0.27;
    let smileVis = true, smileFlip = false, smileSX = 1, mouthOpen = 0;
    switch (this.expr) {
      case 'happy': smileSX = 1.3; browY = 0.285; break;
      case 'angry': bL = 0.45; bR = -0.45; smileFlip = true; browY = 0.255; break;
      case 'furious': bL = 0.65; bR = -0.65; smileVis = false; mouthOpen = 0.6 + Math.sin(t * 30) * 0.1; browY = 0.25; eyeY = Math.min(eyeY, 0.6); break;
      case 'sad': bL = -0.4; bR = 0.4; smileFlip = true; smileSX = 0.8; break;
      case 'cry': bL = -0.5; bR = 0.5; smileVis = false; mouthOpen = 0.5 + Math.sin(t * 8) * 0.2; eyeY = Math.min(eyeY, 0.35); break;
      case 'surprised': browY = 0.3; smileVis = false; mouthOpen = 0.8; eyeY = Math.max(eyeY, 1.25); break;
      case 'smug': bL = 0.15; bR = -0.35; smileSX = 1.1; browY = 0.28; break;
      case 'worried': bL = -0.3; bR = 0.3; smileFlip = true; smileSX = 0.6; browY = 0.285; break;
      case 'bored': eyeY = Math.min(eyeY, 0.55); smileSX = 0.7; smileFlip = false; break;
    }
    if (this.talking && mouthOpen === 0) {
      const o = Math.max(0, Math.sin(t * 17) * 0.5 + Math.sin(t * 11) * 0.4);
      if (o > 0.15) { mouthOpen = o * 0.7; smileVis = false; }
    }
    this.eyeL.scale.y = this.eyeR.scale.y = eyeY;
    this.browL.rotation.z = bL; this.browR.rotation.z = bR;
    this.browL.position.y = this.browR.position.y = browY;
    this.smile.visible = smileVis;
    this.smile.rotation.z = smileFlip ? Math.PI : 0;
    this.smile.position.y = smileFlip ? 0.055 : 0.085;
    this.smile.scale.set(smileSX, 1, 1);
    this.mouthO.visible = mouthOpen > 0.05;
    this.mouthO.scale.set(0.8 + mouthOpen * 0.3, 0.3 + mouthOpen, 1);
    // lágrimas
    const crying = this.expr === 'cry' || this.anim === 'cry';
    for (let i = 0; i < 2; i++) {
      const tr = this.tears[i];
      tr.visible = crying;
      if (crying) { const ph = (t * 0.9 + i * 0.5) % 1; tr.position.y = 0.17 - ph * 0.14; tr.position.z = 0.19 + ph * 0.02; tr.scale.setScalar(1 - ph * 0.4); }
    }
    // rostro enrojecido
    this.redTarget = this.expr === 'furious' ? Math.max(this.redTarget, 1) : this.redTarget;
    this.redness += (this.redTarget - this.redness) * Math.min(1, dt * 0.8);
    this.skinMat.color.copy(this.baseSkin).lerp(new THREE.Color('#ff2a1a'), this.redness * 0.8);
    this.skinMat.emissive.setRGB(this.redness * 0.35, 0, 0);
    if (this.redness > 0.6 && this.onSteam) {
      this.steamT -= dt;
      if (this.steamT < 0) { this.steamT = 0.12; this.onSteam(this.headWorld()); }
    }
  }

  resetFace() { this.redTarget = 0; this.redness = 0; this.expr = 'neutral'; this.skinMat.color.copy(this.baseSkin); this.skinMat.emissive.setRGB(0, 0, 0); }
}
