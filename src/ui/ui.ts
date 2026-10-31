import type { Input } from '../core/input';
import { audio } from '../core/audio';

const $ = <T extends HTMLElement = HTMLElement>(sel: string) => document.querySelector(sel) as T;

export type SpeakerColor = 'gold' | 'blue' | 'red' | 'green' | 'gray';

interface DialogState {
  full: string; shown: number; resolve: () => void; voice: number; onTalk?: (on: boolean) => void; auto: number; elapsed: number;
}
interface ChoiceState { opts: string[]; sel: number; resolve: (i: number) => void; }
interface QteState {
  mode: 'mash' | 'seq'; keys: string[]; idx: number; need: number; count: number; time: number; total: number; resolve: (ok: number) => void; hits: number;
}

const KEY_LABEL: Record<string, string> = { KeyE: 'E', KeyF: 'F', KeyA: 'A', KeyD: 'D', KeyW: 'W', KeyS: 'S', Space: '␣', KeyQ: 'Q' };

export class UI {
  private dialog: DialogState | null = null;
  private choice: ChoiceState | null = null;
  private qte: QteState | null = null;
  private typeAcc = 0;
  busy() { return !!(this.dialog || this.choice || this.qte); }
  reset() {
    this.dialog = null; this.choice = null; this.qte = null;
    ['#dialog', '#choices', '#qte', '#banner'].forEach((s) => $(s).classList.add('hidden'));
    $('#dialog-text').textContent = '';
    this.cinematic(false);
  }

  // ---------- HUD ----------
  showHUD(on: boolean) { $('#hud').classList.toggle('hidden', !on); }
  setChar(name: string, color: string) {
    $('#hud-char-name').textContent = name;
    $('#hud-char-dot').style.background = color;
    $('#hud-char-dot').style.color = color;
  }
  setClock(text: string, period: string) { $('#hud-clock').textContent = text; $('#hud-period').textContent = period; }
  setMission(title: string, obj: string) {
    const t = $('#hud-mission-title'), o = $('#hud-objective');
    if (o.textContent !== obj) { o.animate([{ transform: 'scale(1.15)', color: '#ffd23f' }, { transform: 'scale(1)', color: '#fff' }], { duration: 600 }); }
    t.textContent = title; o.textContent = obj;
    $('#hud-mission').classList.toggle('hidden', !obj);
  }
  setDistance(text: string) { $('#hud-distance').textContent = text; }
  prompt(text: string | null, key = 'E') {
    const p = $('#prompt');
    if (!text) { p.classList.add('hidden'); return; }
    p.classList.remove('hidden');
    p.innerHTML = `<kbd>${key}</kbd><span>${text}</span>`;
  }
  lockHint(on: boolean) { $('#lock-hint').classList.toggle('hidden', !on); }
  cinematic(on: boolean) { document.body.classList.toggle('cinematic', on); }
  waypoint(x: number, y: number, dist: string | null) {
    const w = $('#waypoint');
    if (dist === null) { w.classList.add('hidden'); return; }
    w.classList.remove('hidden');
    w.style.left = x + 'px'; w.style.top = y + 'px';
    (w.querySelector('.wp-dist') as HTMLElement).textContent = dist;
  }

  toast(text: string, ms = 3200) {
    const el = document.createElement('div');
    el.className = 'toast'; el.textContent = text;
    $('#notify').appendChild(el);
    audio.pop();
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 450); }, ms);
  }
  banner(kicker: string, title: string, sub = '', red = false, ms = 3200): Promise<void> {
    const b = $('#banner');
    b.classList.remove('hidden'); b.classList.toggle('red', red);
    (b.querySelector('.banner-kicker') as HTMLElement).textContent = kicker;
    (b.querySelector('.banner-title') as HTMLElement).textContent = title;
    (b.querySelector('.banner-sub') as HTMLElement).textContent = sub;
    b.style.animation = 'none'; void b.offsetWidth; b.style.animation = '';
    return new Promise((r) => setTimeout(() => { b.classList.add('hidden'); r(); }, ms));
  }

  fade(to: number, ms = 500): Promise<void> {
    const f = $('#fade');
    f.style.transition = `opacity ${ms}ms ease`;
    f.style.opacity = String(to);
    return new Promise((r) => setTimeout(r, ms + 30));
  }

  // ---------- Diálogo ----------
  say(name: string, text: string, color: SpeakerColor = 'gold', voice = 260, onTalk?: (on: boolean) => void, auto = 0): Promise<void> {
    if (this.dialog) this.dialog.resolve();
    const nameEl = $('#dialog-name');
    nameEl.textContent = name; nameEl.className = color === 'gold' ? '' : color;
    nameEl.style.display = name ? '' : 'none';
    const txt = $('#dialog-text');
    txt.textContent = '';
    const shout = text === text.toUpperCase() && /[A-ZÁÉÍÓÚÑ]{3}/.test(text);
    txt.classList.toggle('shout', shout);
    $('#dialog').classList.remove('hidden');
    onTalk?.(true);
    return new Promise((resolve) => {
      this.dialog = { full: text, shown: 0, voice, onTalk, auto, elapsed: 0, resolve: () => { onTalk?.(false); resolve(); } };
    });
  }
  hideDialog() { $('#dialog').classList.add('hidden'); }

  choose(opts: string[]): Promise<number> {
    const c = $('#choices');
    c.innerHTML = '';
    c.classList.remove('hidden');
    opts.forEach((o, i) => {
      const b = document.createElement('button');
      b.innerHTML = `<span class="k">${i + 1}</span>${o}`;
      b.style.animationDelay = `${i * 60}ms`;
      b.onmouseenter = () => { this.selectChoice(i); audio.hover(); };
      b.onclick = (e) => { e.stopPropagation(); this.pickChoice(i); };
      c.appendChild(b);
    });
    return new Promise((resolve) => { this.choice = { opts, sel: 0, resolve }; this.selectChoice(0); });
  }
  private selectChoice(i: number) {
    if (!this.choice) return;
    this.choice.sel = i;
    [...$('#choices').children].forEach((b, k) => b.classList.toggle('sel', k === i));
  }
  private pickChoice(i: number) {
    if (!this.choice) return;
    const r = this.choice.resolve;
    this.choice = null;
    $('#choices').classList.add('hidden');
    audio.confirm();
    r(i);
  }

  // ---------- QTE ----------
  qteMash(title: string, key: string, presses: number, time: number, hint: string): Promise<number> {
    return this.startQte({ mode: 'mash', keys: [key], need: presses, time, total: time, hint, title });
  }
  qteSeq(title: string, keys: string[], time: number, hint: string): Promise<number> {
    return this.startQte({ mode: 'seq', keys, need: keys.length, time, total: time, hint, title });
  }
  private startQte(o: { mode: 'mash' | 'seq'; keys: string[]; need: number; time: number; total: number; hint: string; title: string }): Promise<number> {
    $('#qte').classList.remove('hidden');
    $('#qte-title').textContent = o.title;
    $('#qte-hint').textContent = o.hint;
    $('#qte-key').textContent = KEY_LABEL[o.keys[0]] ?? o.keys[0].replace('Key', '');
    ($('#qte-fill') as HTMLElement).style.width = '0%';
    return new Promise((resolve) => { this.qte = { ...o, idx: 0, count: 0, hits: 0, resolve }; });
  }

  update(dt: number, input: Input) {
    if (this.dialog) {
      const d = this.dialog;
      d.elapsed += dt;
      if (d.shown < d.full.length) {
        this.typeAcc += dt * 55;
        let blip = false;
        while (this.typeAcc >= 1 && d.shown < d.full.length) {
          d.shown++; this.typeAcc -= 1;
          const ch = d.full[d.shown - 1];
          if (/[a-záéíóúñ]/i.test(ch) && d.shown % 3 === 0) blip = true;
        }
        if (blip) audio.voice(d.voice);
        $('#dialog-text').textContent = d.full.slice(0, d.shown);
        if (d.shown >= d.full.length) d.onTalk?.(false);
      }
      const adv = input.consume('Space') || input.consume('Enter') || input.consume('KeyE') || input.consume('KeyF') || input.clicked;
      if (adv) {
        if (d.shown < d.full.length) { d.shown = d.full.length; $('#dialog-text').textContent = d.full; d.onTalk?.(false); }
        else { this.dialog = null; this.hideDialog(); audio.click(); d.resolve(); }
      } else if (d.auto && d.shown >= d.full.length && d.elapsed > d.auto) {
        this.dialog = null; this.hideDialog(); d.resolve();
      }
      input.clicked = false;
    }
    if (this.choice) {
      const c = this.choice;
      for (let i = 0; i < c.opts.length; i++) if (input.consume('Digit' + (i + 1))) { this.pickChoice(i); return; }
      if (input.consume('KeyW') || input.consume('ArrowUp')) { this.selectChoice((c.sel + c.opts.length - 1) % c.opts.length); audio.hover(); }
      if (input.consume('KeyS') || input.consume('ArrowDown')) { this.selectChoice((c.sel + 1) % c.opts.length); audio.hover(); }
      if (input.consume('Enter') || input.consume('Space') || input.consume('KeyE')) this.pickChoice(c.sel);
    }
    if (this.qte) {
      const q = this.qte;
      q.time -= dt;
      const keyEl = $('#qte-key');
      const want = q.keys[q.mode === 'seq' ? q.idx : 0];
      if (input.consume(want)) {
        q.count++; q.hits++;
        keyEl.classList.add('hit'); setTimeout(() => keyEl.classList.remove('hit'), 80);
        audio.whoosh();
        if (q.mode === 'seq') { q.idx++; if (q.idx < q.keys.length) keyEl.textContent = KEY_LABEL[q.keys[q.idx]] ?? q.keys[q.idx].replace('Key', ''); }
      }
      ($('#qte-fill') as HTMLElement).style.width = `${Math.min(100, (q.count / q.need) * 100)}%`;
      if (q.count >= q.need || q.time <= 0) {
        this.qte = null;
        $('#qte').classList.add('hidden');
        q.resolve(q.hits / q.need);
      }
    }
  }

  // ---------- Pantallas ----------
  screen(id: string, on: boolean) { $('#' + id).classList.toggle('hidden', !on); }
  isOpen(id: string) { return !$('#' + id).classList.contains('hidden'); }
}

export const ui = new UI();
