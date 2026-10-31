import * as THREE from 'three';
import type { CollisionWorld } from './collision';

export class Environment {
  sun: THREE.DirectionalLight;
  hemi: THREE.HemisphereLight;
  fill: THREE.PointLight;
  private swayUniform = { value: 0 };
  private birds: { g: THREE.Group; l: THREE.Mesh; r: THREE.Mesh; c: THREE.Vector3; rad: number; sp: number; ph: number; h: number }[] = [];
  private clouds: THREE.Group;

  constructor(public scene: THREE.Scene, world: CollisionWorld) {
    scene.background = new THREE.Color('#9fd4ff');
    scene.fog = new THREE.Fog('#cfe6f5', 90, 260);

    // cielo con degradado
    const skyGeo = new THREE.SphereGeometry(400, 32, 16);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: new THREE.Color('#3f8fe6') }, bottom: { value: new THREE.Color('#e9f5ff') }, sunDir: { value: new THREE.Vector3(0.6, 0.35, 0.5).normalize() } },
      vertexShader: 'varying vec3 vW; void main(){ vW = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `uniform vec3 top; uniform vec3 bottom; uniform vec3 sunDir; varying vec3 vW;
        void main(){ float h = clamp(vW.y*1.6+0.1,0.0,1.0); vec3 c = mix(bottom, top, pow(h,0.7));
        float s = max(dot(normalize(vW), sunDir),0.0); c += vec3(1.0,0.85,0.6)*pow(s,40.0)*0.9 + vec3(1.0,0.8,0.5)*pow(s,4.0)*0.15;
        gl_FragColor = vec4(c,1.0); }`,
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    sky.renderOrder = -1;
    scene.add(sky);

    this.hemi = new THREE.HemisphereLight('#dff1ff', '#8a7a5a', 1.35);
    scene.add(this.hemi);
    scene.add(new THREE.AmbientLight('#ffffff', 0.35));
    this.sun = new THREE.DirectionalLight('#fff0d6', 2.6);
    this.sun.position.set(60, 45, 50);
    this.sun.castShadow = true;
    const sc = this.sun.shadow.camera;
    sc.left = -45; sc.right = 45; sc.top = 45; sc.bottom = -45; sc.near = 1; sc.far = 220;
    this.sun.shadow.mapSize.set(4096, 4096);
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.03;
    scene.add(this.sun, this.sun.target);
    // luz de relleno que sigue al jugador en interiores
    this.fill = new THREE.PointLight('#fff4e0', 0, 14, 1.5);
    scene.add(this.fill);

    this.buildTrees(world);
    this.buildBirds();
    this.clouds = this.buildClouds();
  }

  setShadows(q: number, renderer: THREE.WebGLRenderer) {
    renderer.shadowMap.enabled = q > 0;
    this.sun.castShadow = q > 0;
    const s = q >= 2 ? 4096 : 2048;
    if (this.sun.shadow.map && this.sun.shadow.mapSize.x !== s) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null as unknown as THREE.WebGLRenderTarget; }
    this.sun.shadow.mapSize.set(s, s);
  }

  private buildTrees(world: CollisionWorld) {
    const spots: [number, number, number][] = [];
    for (const z of [34.5, 38.5, 42.5]) spots.push([-25.5, z, 1]);
    for (const z of [16, 20, 24, 36, 40]) spots.push([26.2, z, 1]);
    for (let x = -58; x <= 62; x += 8.5) spots.push([x + Math.random() * 2, -18.2 + Math.random() * 0.6, 0.85]);
    for (let z = 14; z <= 44; z += 7) spots.push([-58 + Math.random() * 2, z, 1.1]);
    for (const x of [-30, -20, 22, 36, 46]) spots.push([x, 50.6, 0.9]);
    for (const [x, z] of [[-10, 46], [14, 46], [-60, -4], [60, -6], [44, 11], [-50, 34]]) spots.push([x, z, 0.85]);

    const trunkGeo = new THREE.CylinderGeometry(0.16, 0.24, 2.6, 7); trunkGeo.translate(0, 1.3, 0);
    const trunk = new THREE.InstancedMesh(trunkGeo, new THREE.MeshStandardMaterial({ color: '#7a5233', roughness: 1 }), spots.length);
    const crownGeo = new THREE.IcosahedronGeometry(1, 1);
    const crownMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9, flatShading: true });
    crownMat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = this.swayUniform;
      sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
        vec4 wp = instanceMatrix * vec4(position,1.0);
        float sway = sin(uTime*1.3 + wp.x*0.3 + wp.z*0.2) * 0.12 + sin(uTime*2.7 + wp.x) * 0.04;
        transformed.x += sway * (position.y + 1.0);
        transformed.z += sway * 0.6 * (position.y + 1.0);`);
    };
    const n = spots.length * 3;
    const crown = new THREE.InstancedMesh(crownGeo, crownMat, n);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    const greens = ['#4f9a3a', '#5fae45', '#3f8a35', '#6dbb52', '#7fbf3f'];
    const col = new THREE.Color();
    let ci = 0;
    spots.forEach(([x, z, sc], i) => {
      const base = z > 30 && z < 47 && (x < -24 || x > 24) ? 0.45 : 0;
      m.compose(p.set(x, base, z), q.identity(), s.set(sc, sc, sc));
      trunk.setMatrixAt(i, m);
      world.add({ x0: x - 0.3, y0: 0, z0: z - 0.3, x1: x + 0.3, y1: 3, z1: z + 0.3, cam: false });
      for (let k = 0; k < 3; k++) {
        const ang = (k / 3) * Math.PI * 2 + i;
        const r = (1.5 + Math.random() * 0.5) * sc;
        m.compose(p.set(x + Math.cos(ang) * 0.6 * sc, base + (2.8 + k * 0.5) * sc, z + Math.sin(ang) * 0.6 * sc), q.setFromEuler(new THREE.Euler(Math.random(), Math.random(), 0)), s.set(r, r * 0.85, r));
        crown.setMatrixAt(ci, m);
        crown.setColorAt(ci, col.set(greens[(i + k) % greens.length]));
        ci++;
      }
    });
    trunk.castShadow = crown.castShadow = true;
    trunk.receiveShadow = crown.receiveShadow = true;
    this.scene.add(trunk, crown);
  }

  private buildBirds() {
    const mat = new THREE.MeshStandardMaterial({ color: '#2b2b2b', side: THREE.DoubleSide });
    const wing = new THREE.PlaneGeometry(0.35, 0.14); wing.rotateX(-Math.PI / 2); wing.translate(0.17, 0, 0);
    for (let i = 0; i < 9; i++) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 4), mat); body.scale.set(1, 0.8, 1.8);
      const l = new THREE.Mesh(wing, mat), r = new THREE.Mesh(wing, mat);
      r.scale.x = -1;
      g.add(body, l, r);
      this.scene.add(g);
      this.birds.push({ g, l, r, c: new THREE.Vector3((Math.random() - 0.5) * 60, 0, 20 + (Math.random() - 0.5) * 40), rad: 8 + Math.random() * 14, sp: 0.25 + Math.random() * 0.25, ph: Math.random() * 6, h: 11 + Math.random() * 8 });
    }
  }

  private buildClouds() {
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, flatShading: true, fog: false, emissive: '#ffffff', emissiveIntensity: 0.35 });
    const geo = new THREE.IcosahedronGeometry(1, 1);
    for (let i = 0; i < 16; i++) {
      const c = new THREE.Group();
      for (let k = 0; k < 5; k++) {
        const m = new THREE.Mesh(geo, mat);
        m.position.set((k - 2) * 4 + Math.random() * 2, Math.random() * 2, Math.random() * 3);
        const s = 3 + Math.random() * 3; m.scale.set(s, s * 0.6, s);
        c.add(m);
      }
      const a = Math.random() * Math.PI * 2, r = 140 + Math.random() * 100;
      c.position.set(Math.cos(a) * r, 55 + Math.random() * 35, Math.sin(a) * r);
      c.lookAt(0, c.position.y, 0);
      g.add(c);
    }
    this.scene.add(g);
    return g;
  }

  update(dt: number, t: number, focus: THREE.Vector3, indoors: boolean) {
    this.swayUniform.value = t;
    // sombra que sigue al foco para mayor nitidez
    const snap = 2;
    const fx = Math.round(focus.x / snap) * snap, fz = Math.round(focus.z / snap) * snap;
    this.sun.target.position.set(fx, 0, fz);
    this.sun.position.set(fx + 60, 70, fz + 45);
    this.fill.position.set(focus.x, focus.y + 2.6, focus.z);
    this.fill.intensity += ((indoors ? 22 : 0) - this.fill.intensity) * Math.min(1, dt * 3);
    for (const b of this.birds) {
      const a = t * b.sp + b.ph;
      b.g.position.set(b.c.x + Math.cos(a) * b.rad, b.h + Math.sin(a * 2) * 0.8, b.c.z + Math.sin(a) * b.rad);
      b.g.rotation.y = -a;
      const flap = Math.sin(t * 14 + b.ph) * 0.8;
      b.l.rotation.z = flap; b.r.rotation.z = -flap;
    }
    this.clouds.rotation.y += dt * 0.003;
  }
}
