// Audio 100% sintetizado con Web Audio: música original, campana, pasos, ambiente.
export type Surface = 'tile' | 'concrete' | 'grass' | 'court' | 'wood';
export type Track = 'none' | 'menu' | 'school' | 'class' | 'recess' | 'tension' | 'fight' | 'drama' | 'ending';

const midi = (n: number) => 440 * Math.pow(2, (n - 69) / 12);

interface TrackDef {
  bpm: number;
  chords: number[][]; // notas midi por compás
  bass?: string; // 16 pasos: x = nota, . = silencio
  stab?: string;
  drums?: { k: string; s: string; h: string };
  lead?: (number | null)[]; // melodía en 16avos sobre todos los compases (midi)
  leadWave?: OscillatorType;
  pad?: boolean;
  leadVol?: number;
  swing?: number;
}

const C = (root: number, minor = false, seventh = false) => {
  const n = [root, root + (minor ? 3 : 4), root + 7];
  if (seventh) n.push(root + (minor ? 10 : 11));
  return n;
};

function mel(s: string, base = 60): (number | null)[] {
  // notación: dígitos/letras = semitonos sobre base ('0'-'9','a'=10...'n'), '.' silencio, '-' sostener (lo tratamos como silencio)
  const out: (number | null)[] = [];
  for (const ch of s.replace(/\s/g, '')) {
    if (ch === '.' || ch === '-') out.push(null);
    else out.push(base + parseInt(ch, 36));
  }
  return out;
}

const TRACKS: Record<Exclude<Track, 'none'>, TrackDef> = {
  menu: {
    bpm: 112,
    chords: [C(60, false, true), C(57, true, true), C(65, false, true), C(67, false)],
    bass: 'x..x..x.x..x.x..',
    stab: '..x...x...x...x.',
    drums: { k: 'x...x...x...x...', s: '....x.......x..x', h: 'x.x.x.x.x.x.x.x.' },
    lead: mel('7.9.c..e.c.9.7.. 9.7.4..0.4.7.9.. 5.9.c..h.e.c.9.. b.9.7..4.7.b.e..', 60),
    leadWave: 'square', leadVol: 0.05, swing: 0.08,
  },
  school: {
    bpm: 92,
    chords: [C(62, true, true), C(67, false, true), C(60, false, true), C(57, true, true)],
    bass: 'x.....x...x.....',
    stab: '....x.......x...',
    drums: { k: 'x.....x...x.....', s: '....x.......x...', h: '..x...x...x...x.' },
    lead: mel('9...c...e...c... b...7...5.....7. 7...9...c...e... 9.....7...4.....', 62),
    leadWave: 'triangle', leadVol: 0.06, pad: true, swing: 0.12,
  },
  class: {
    bpm: 80,
    chords: [C(60, false, true), C(65, false, true), C(62, true, true), C(67, false)],
    bass: 'x.......x.......',
    lead: mel('c.......e.......  h.......e....... c.......9....... b.......7.......', 60),
    leadWave: 'sine', leadVol: 0.045, pad: true,
  },
  recess: {
    bpm: 124,
    chords: [C(65, false), C(67, false), C(64, true), C(69, true)],
    bass: 'x.xx..x.x.xx..x.',
    stab: '..x...x...x...x.',
    drums: { k: 'x...x...x...x...', s: '....x.......x...', h: 'xxxxxxxxxxxxxxxx' },
    lead: mel('c.c.e.h.e.c.9... e.e.h.j.h.e.c... b.b.e.g.e.b.7... 9.c.e.c.9.7.4...', 60),
    leadWave: 'square', leadVol: 0.04, swing: 0.05,
  },
  tension: {
    bpm: 138,
    chords: [C(57, true), C(57, true), C(53, false), C(52, false)],
    bass: 'x.x.x.x.x.x.x.x.',
    drums: { k: 'x..x..x.x..x..x.', s: '....x.......x...', h: 'x.x.x.x.x.x.x.x.' },
    lead: mel('0..0..3.2..2..0. 0..0..3.7..5..3. 5..5..8.7..5..3. 4..4..7.b..8..4.', 69),
    leadWave: 'sawtooth', leadVol: 0.035,
  },
  fight: {
    bpm: 160,
    chords: [C(52, true), C(55, false), C(50, false), C(52, true)],
    bass: 'xxx.xxx.xx.xxx.x',
    drums: { k: 'x.x.x.x.x.x.x.x.', s: '....x..x....x.xx', h: 'xxxxxxxxxxxxxxxx' },
    lead: mel('0.3.7.3.0.3.8.7. 7.b.e.b.7.b.e.c. 5.9.c.9.5.9.c.e. 0.3.7.c.b.7.3.0.', 64),
    leadWave: 'square', leadVol: 0.04,
  },
  drama: {
    bpm: 62,
    chords: [C(57, true, true), C(53, false, true), C(48, false, true), C(52, false)],
    bass: 'x...............',
    lead: mel('c.......b...9... 9.......7....... 7.......4...7... 8...............', 60),
    leadWave: 'sine', leadVol: 0.06, pad: true,
  },
  ending: {
    bpm: 96,
    chords: [C(60, false, true), C(64, true, true), C(65, false, true), C(67, false, true)],
    bass: 'x.....x.x.......',
    stab: '....x.......x...',
    drums: { k: 'x.......x.......', s: '....x.......x...', h: 'x.x.x.x.x.x.x.x.' },
    lead: mel('c.e.h...e.c..... b.e.g...e.b..... 9.c.h...c.9..... b.e.j...h.e.....', 60),
    leadWave: 'triangle', leadVol: 0.06, pad: true, swing: 0.1,
  },
};

export class Audio {
  ctx: AudioContext | null = null;
  master!: GainNode;
  musicBus!: GainNode;
  sfxBus!: GainNode;
  ambBus!: GainNode;
  noise!: AudioBuffer;
  private trackGain: GainNode | null = null;
  current: Track = 'none';
  private def: TrackDef | null = null;
  private step = 0;
  private nextTime = 0;
  private timer: number | null = null;
  private crowdGain: GainNode | null = null;
  private crowdTarget = 0;
  private babbleT = 0;
  private birdT = 0;
  outdoors = true;
  vol = { master: 0.8, music: 0.55, sfx: 0.9 };

  init() {
    if (this.ctx) { this.ctx.resume(); return; }
    const ctx = new AudioContext();
    this.ctx = ctx;
    this.master = ctx.createGain();
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4;
    this.master.connect(comp).connect(ctx.destination);
    this.musicBus = ctx.createGain(); this.musicBus.connect(this.master);
    this.sfxBus = ctx.createGain(); this.sfxBus.connect(this.master);
    this.ambBus = ctx.createGain(); this.ambBus.connect(this.sfxBus);
    const len = ctx.sampleRate * 2;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.applyVolumes();
    this.startCrowd();
    this.timer = window.setInterval(() => this.schedule(), 25);
  }

  setVolumes(master: number, music: number, sfx: number) {
    this.vol = { master, music, sfx };
    this.applyVolumes();
  }
  private applyVolumes() {
    if (!this.ctx) return;
    this.master.gain.value = this.vol.master;
    this.musicBus.gain.value = this.vol.music * 0.8;
    this.sfxBus.gain.value = this.vol.sfx;
  }

  // ---------- Música ----------
  play(track: Track, fade = 1.2) {
    if (!this.ctx || track === this.current) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    if (this.trackGain) {
      const g = this.trackGain;
      g.gain.cancelScheduledValues(t);
      g.gain.setValueAtTime(g.gain.value, t);
      g.gain.linearRampToValueAtTime(0, t + fade);
      setTimeout(() => g.disconnect(), fade * 1000 + 200);
    }
    this.current = track;
    if (track === 'none') { this.trackGain = null; this.def = null; return; }
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(1, t + fade);
    g.connect(this.musicBus);
    this.trackGain = g;
    this.def = TRACKS[track];
    this.step = 0;
    this.nextTime = t + 0.05;
  }

  private schedule() {
    if (!this.ctx) return;
    this.updateAmbience();
    if (!this.def || !this.trackGain) return;
    const ctx = this.ctx;
    const def = this.def;
    const spb = 60 / def.bpm / 4;
    while (this.nextTime < ctx.currentTime + 0.12) {
      const s = this.step % 16;
      const bar = Math.floor(this.step / 16) % def.chords.length;
      const chord = def.chords[bar];
      let t = this.nextTime;
      if (def.swing && s % 2 === 1) t += spb * def.swing * 2;
      const out = this.trackGain;
      if (def.pad && s === 0) this.pad(chord, t, spb * 16, out);
      if (def.bass && def.bass[s] === 'x') this.bassNote(midi(chord[0] - 24), t, spb * 1.8, out);
      if (def.stab && def.stab[s] === 'x') chord.forEach((n) => this.pluck(midi(n), t, spb * 1.5, 0.03, 'triangle', out));
      if (def.drums) {
        if (def.drums.k[s] === 'x') this.kick(t, out);
        if (def.drums.s[s] === 'x') this.snare(t, out);
        if (def.drums.h[s] === 'x') this.hat(t, out, s % 4 === 2 ? 0.05 : 0.025);
      }
      if (def.lead) {
        const li = this.step % def.lead.length;
        const n = def.lead[li];
        if (n != null) this.pluck(midi(n), t, spb * 2.2, def.leadVol ?? 0.05, def.leadWave ?? 'triangle', out);
      }
      this.nextTime += spb;
      this.step++;
    }
  }

  private env(g: GainNode, t: number, a: number, peak: number, dur: number) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  }
  private pluck(f: number, t: number, dur: number, vol: number, wave: OscillatorType, out: AudioNode) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator(); o.type = wave; o.frequency.value = f;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(f * 6, t); lp.frequency.exponentialRampToValueAtTime(f * 1.5, t + dur);
    const g = ctx.createGain(); this.env(g, t, 0.008, vol, dur);
    o.connect(lp).connect(g).connect(out);
    o.start(t); o.stop(t + dur + 0.05);
  }
  private pad(notes: number[], t: number, dur: number, out: AudioNode) {
    const ctx = this.ctx!;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.035, t + dur * 0.3);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1200;
    lp.connect(g).connect(out);
    for (const n of notes) for (const det of [-6, 6]) {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = midi(n); o.detune.value = det;
      o.connect(lp); o.start(t); o.stop(t + dur + 0.1);
    }
  }
  private bassNote(f: number, t: number, dur: number, out: AudioNode) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
    const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = f / 2;
    const g = ctx.createGain(); this.env(g, t, 0.01, 0.16, dur);
    o.connect(g); o2.connect(g); g.connect(out);
    o.start(t); o2.start(t); o.stop(t + dur + 0.05); o2.stop(t + dur + 0.05);
  }
  private kick(t: number, out: AudioNode) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.15);
    const g = ctx.createGain(); this.env(g, t, 0.003, 0.35, 0.22);
    o.connect(g).connect(out); o.start(t); o.stop(t + 0.25);
  }
  private noiseHit(t: number, dur: number, vol: number, type: BiquadFilterType, freq: number, out: AudioNode, q = 1) {
    const ctx = this.ctx!;
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); this.env(g, t, 0.002, vol, dur);
    src.connect(f).connect(g).connect(out);
    src.start(t, Math.random()); src.stop(t + dur + 0.05);
  }
  private snare(t: number, out: AudioNode) { this.noiseHit(t, 0.16, 0.16, 'highpass', 1800, out); }
  private hat(t: number, out: AudioNode, v: number) { this.noiseHit(t, 0.04, v, 'highpass', 7000, out); }

  // ---------- Efectos ----------
  private get now() { return this.ctx ? this.ctx.currentTime : 0; }

  bell(duration = 2.6) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = this.now;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.22, t + 0.05);
    g.gain.setValueAtTime(0.22, t + duration);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration + 0.8);
    // timbre de campana eléctrica: parciales inarmónicos con trémolo rápido
    const trem = ctx.createGain();
    const lfo = ctx.createOscillator(); lfo.frequency.value = 22;
    const lfoG = ctx.createGain(); lfoG.gain.value = 0.5;
    lfo.connect(lfoG).connect(trem.gain); trem.gain.value = 0.5;
    trem.connect(g).connect(this.sfxBus);
    for (const [f, v] of [[1180, 1], [2650, 0.5], [3720, 0.3], [5100, 0.15]]) {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const og = ctx.createGain(); og.gain.value = v * 0.4;
      o.connect(og).connect(trem); o.start(t); o.stop(t + duration + 1);
    }
    lfo.start(t); lfo.stop(t + duration + 1);
  }

  step2(surface: Surface, run: boolean) {
    if (!this.ctx) return;
    const t = this.now;
    const v = (run ? 0.12 : 0.07);
    switch (surface) {
      case 'grass': this.noiseHit(t, 0.09, v * 0.9, 'bandpass', 900, this.sfxBus, 0.7); break;
      case 'tile': this.noiseHit(t, 0.05, v * 1.1, 'bandpass', 3200, this.sfxBus, 1.5); this.tone(220, t, 0.03, v * 0.3, 'triangle'); break;
      case 'wood': this.noiseHit(t, 0.06, v, 'bandpass', 600, this.sfxBus, 1.2); this.tone(140, t, 0.05, v * 0.5, 'sine'); break;
      case 'court': this.noiseHit(t, 0.05, v, 'bandpass', 2000, this.sfxBus, 2); break;
      default: this.noiseHit(t, 0.07, v, 'bandpass', 1500, this.sfxBus, 0.9);
    }
  }
  private tone(f: number, t: number, dur: number, vol: number, wave: OscillatorType = 'sine', slideTo?: number) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator(); o.type = wave; o.frequency.setValueAtTime(f, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    const g = ctx.createGain(); this.env(g, t, 0.005, vol, dur);
    o.connect(g).connect(this.sfxBus); o.start(t); o.stop(t + dur + 0.05);
  }
  door() {
    if (!this.ctx) return;
    const t = this.now;
    this.tone(180, t, 0.35, 0.05, 'sawtooth', 320);
    this.noiseHit(t + 0.32, 0.12, 0.12, 'lowpass', 400, this.sfxBus);
  }
  click() { if (this.ctx) this.tone(900, this.now, 0.05, 0.08, 'square', 1300); }
  hover() { if (this.ctx) this.tone(600, this.now, 0.04, 0.04, 'triangle', 700); }
  confirm() { if (!this.ctx) return; const t = this.now; this.tone(660, t, 0.1, 0.09, 'square'); this.tone(990, t + 0.08, 0.18, 0.09, 'square'); }
  correct() { if (!this.ctx) return; const t = this.now; [72, 76, 79, 84].forEach((n, i) => this.tone(midi(n), t + i * 0.08, 0.2, 0.08, 'triangle')); }
  wrong() { if (!this.ctx) return; const t = this.now; this.tone(220, t, 0.25, 0.1, 'sawtooth', 150); this.tone(160, t + 0.22, 0.4, 0.1, 'sawtooth', 100); }
  boing() { if (this.ctx) this.tone(200, this.now, 0.35, 0.1, 'sine', 600); }
  whoosh() { if (this.ctx) { const t = this.now; this.noiseHit(t, 0.25, 0.12, 'bandpass', 1200, this.sfxBus, 0.6); } }
  bonk() { if (!this.ctx) return; const t = this.now; this.tone(320, t, 0.12, 0.14, 'square', 120); this.noiseHit(t, 0.08, 0.12, 'lowpass', 800, this.sfxBus); }
  thud() { if (!this.ctx) return; const t = this.now; this.tone(90, t, 0.25, 0.25, 'sine', 40); this.noiseHit(t, 0.15, 0.18, 'lowpass', 300, this.sfxBus); }
  water(on: boolean) {
    if (!this.ctx) return;
    if (on && !this.waterSrc) {
      const ctx = this.ctx;
      const src = ctx.createBufferSource(); src.buffer = this.noise; src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2500; f.Q.value = 0.5;
      const g = ctx.createGain(); g.gain.value = 0.06;
      src.connect(f).connect(g).connect(this.sfxBus); src.start();
      this.waterSrc = src;
    } else if (!on && this.waterSrc) { this.waterSrc.stop(); this.waterSrc = null; }
  }
  private waterSrc: AudioBufferSourceNode | null = null;
  gasp() { if (this.ctx) { const t = this.now; this.noiseHit(t, 0.3, 0.1, 'bandpass', 1800, this.sfxBus, 3); this.tone(500, t, 0.3, 0.03, 'sine', 800); } }
  sob() { if (!this.ctx) return; const t = this.now; for (let i = 0; i < 3; i++) this.tone(420 - i * 30, t + i * 0.22, 0.18, 0.05, 'triangle', 330 - i * 30); }
  rage() { if (!this.ctx) return; const t = this.now; this.tone(80, t, 1.5, 0.12, 'sawtooth', 160); this.noiseHit(t, 1.4, 0.06, 'lowpass', 500, this.sfxBus); }
  stinger() { if (!this.ctx) return; const t = this.now; [57, 60, 63, 66].forEach((n) => this.tone(midi(n), t, 1.4, 0.05, 'sawtooth')); this.kick(t, this.sfxBus); }
  dun() { if (!this.ctx) return; const t = this.now; [45, 52].forEach((n, i) => { this.tone(midi(n), t + i * 0.35, 0.9, 0.12, 'sawtooth'); this.kick(t + i * 0.35, this.sfxBus); }); }
  pop() { if (this.ctx) this.tone(500, this.now, 0.08, 0.08, 'sine', 1200); }
  type() { if (this.ctx) this.noiseHit(this.now, 0.02, 0.025, 'highpass', 4000, this.sfxBus); }
  voice(pitch: number) {
    // "balbuceo" estilizado para diálogos
    if (!this.ctx) return;
    const t = this.now;
    const f = pitch * (0.9 + Math.random() * 0.25);
    this.tone(f, t, 0.06, 0.035, 'square', f * (0.85 + Math.random() * 0.3));
  }
  chalk() { if (this.ctx) this.noiseHit(this.now, 0.12, 0.05, 'bandpass', 5000, this.sfxBus, 4); }
  bubble() { if (!this.ctx) return; const t = this.now; this.tone(400, t, 0.1, 0.05, 'sine', 900); this.tone(600, t + 0.1, 0.1, 0.04, 'sine', 1200); }
  keyboard() { if (!this.ctx) return; const t = this.now; for (let i = 0; i < 6; i++) this.noiseHit(t + i * 0.06 + Math.random() * 0.03, 0.02, 0.05, 'highpass', 3000, this.sfxBus); }

  // ---------- Ambiente ----------
  private startCrowd() {
    const ctx = this.ctx!;
    const src = ctx.createBufferSource(); src.buffer = this.noise; src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 700; f.Q.value = 0.8;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.3;
    const lfoG = ctx.createGain(); lfoG.gain.value = 250;
    lfo.connect(lfoG).connect(f.frequency); lfo.start();
    const g = ctx.createGain(); g.gain.value = 0;
    src.connect(f).connect(g).connect(this.ambBus); src.start();
    this.crowdGain = g;
  }
  setCrowd(level: number) { this.crowdTarget = level; }
  private updateAmbience() {
    if (!this.ctx || !this.crowdGain) return;
    const g = this.crowdGain.gain;
    g.value += (this.crowdTarget * 0.05 - g.value) * 0.05;
    const t = this.ctx.currentTime;
    if (this.crowdTarget > 0.05 && t > this.babbleT) {
      this.babbleT = t + 0.08 + Math.random() * (0.5 / this.crowdTarget);
      const f = 180 + Math.random() * 260;
      const o = this.ctx.createOscillator(); o.type = 'triangle'; o.frequency.setValueAtTime(f, t); o.frequency.linearRampToValueAtTime(f * (0.8 + Math.random() * 0.5), t + 0.12);
      const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 1.5;
      const gg = this.ctx.createGain(); this.env(gg, t, 0.02, 0.012 * this.crowdTarget, 0.15);
      o.connect(bp).connect(gg).connect(this.ambBus); o.start(t); o.stop(t + 0.2);
    }
    if (this.outdoors && t > this.birdT) {
      this.birdT = t + 2 + Math.random() * 6;
      const base = 2200 + Math.random() * 1600;
      for (let i = 0; i < 2 + Math.floor(Math.random() * 3); i++) {
        const tt = t + i * 0.13;
        const o = this.ctx.createOscillator(); o.type = 'sine';
        o.frequency.setValueAtTime(base, tt); o.frequency.exponentialRampToValueAtTime(base * 1.4, tt + 0.07);
        const gg = this.ctx.createGain(); this.env(gg, tt, 0.01, 0.015, 0.09);
        o.connect(gg).connect(this.ambBus); o.start(tt); o.stop(tt + 0.12);
      }
    }
  }
}

export const audio = new Audio();
