// Teclado + mouse con pointer lock.
export class Input {
  keys = new Set<string>();
  pressed = new Set<string>(); // presionadas este frame
  mouseDX = 0;
  mouseDY = 0;
  clicked = false;
  locked = false;
  private el: HTMLElement;

  constructor(el: HTMLElement) {
    this.el = el;
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab' || e.code === 'Space') e.preventDefault();
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
    window.addEventListener('mousemove', (e) => {
      if (this.locked) {
        this.mouseDX += e.movementX;
        this.mouseDY += e.movementY;
      }
    });
    window.addEventListener('mousedown', () => (this.clicked = true));
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.el;
    });
  }

  lock() {
    if (!this.locked) {
      try {
        const p = this.el.requestPointerLock() as unknown as Promise<void> | undefined;
        if (p && typeof (p as Promise<void>).catch === 'function') (p as Promise<void>).catch(() => {});
      } catch { /* ignorar */ }
    }
  }
  unlock() {
    if (document.pointerLockElement) document.exitPointerLock();
  }
  down(code: string) { return this.keys.has(code); }
  hit(code: string) { return this.pressed.has(code); }
  consume(code: string) { const h = this.pressed.has(code); this.pressed.delete(code); return h; }
  endFrame() {
    this.pressed.clear();
    this.mouseDX = 0;
    this.mouseDY = 0;
    this.clicked = false;
  }
}
