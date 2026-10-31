import * as THREE from 'three';

export interface NavNode { id: number; p: THREE.Vector3; links: number[]; tag?: string }

/** Grafo de navegación con A*: los NPC sólo caminan por aristas libres de obstáculos. */
export class NavGraph {
  nodes: NavNode[] = [];
  private byTag = new Map<string, number>();

  add(x: number, y: number, z: number, tag?: string): number {
    const id = this.nodes.length;
    this.nodes.push({ id, p: new THREE.Vector3(x, y, z), links: [], tag });
    if (tag) this.byTag.set(tag, id);
    return id;
  }
  link(a: number, b: number) {
    if (a === b) return;
    if (!this.nodes[a].links.includes(b)) this.nodes[a].links.push(b);
    if (!this.nodes[b].links.includes(a)) this.nodes[b].links.push(a);
  }
  chain(...ids: number[]) { for (let i = 1; i < ids.length; i++) this.link(ids[i - 1], ids[i]); }
  tag(t: string): number { const id = this.byTag.get(t); if (id === undefined) throw new Error('nav tag ' + t); return id; }
  has(t: string) { return this.byTag.has(t); }

  /** Comprobación opcional de línea de vista (la asigna la escuela). */
  los: ((a: THREE.Vector3, b: THREE.Vector3) => boolean) | null = null;

  /** Nodo más cercano que se pueda ver desde p (sin muros de por medio). */
  nearest(p: THREE.Vector3): number {
    const cands: { id: number; d: number }[] = [];
    for (const n of this.nodes) {
      const dy = Math.abs(n.p.y - p.y);
      cands.push({ id: n.id, d: n.p.distanceToSquared(p) + (dy > 1.5 ? 400 : 0) });
    }
    cands.sort((a, b) => a.d - b.d);
    if (this.los) {
      for (let i = 0; i < Math.min(10, cands.length); i++) if (this.los(p, this.nodes[cands[i].id].p)) return cands[i].id;
    }
    return cands[0]?.id ?? 0;
  }

  path(from: number, to: number): THREE.Vector3[] {
    if (from === to) return [this.nodes[to].p.clone()];
    const open = new Set<number>([from]);
    const came = new Map<number, number>();
    const g = new Map<number, number>([[from, 0]]);
    const f = new Map<number, number>([[from, this.nodes[from].p.distanceTo(this.nodes[to].p)]]);
    let guard = 0;
    while (open.size && guard++ < 5000) {
      let cur = -1, cf = Infinity;
      for (const o of open) { const v = f.get(o) ?? Infinity; if (v < cf) { cf = v; cur = o; } }
      if (cur === to) {
        const out: THREE.Vector3[] = [];
        let c: number | undefined = cur;
        while (c !== undefined) { out.unshift(this.nodes[c].p.clone()); c = came.get(c); }
        return out;
      }
      open.delete(cur);
      for (const nb of this.nodes[cur].links) {
        const tg = (g.get(cur) ?? Infinity) + this.nodes[cur].p.distanceTo(this.nodes[nb].p);
        if (tg < (g.get(nb) ?? Infinity)) {
          came.set(nb, cur); g.set(nb, tg);
          f.set(nb, tg + this.nodes[nb].p.distanceTo(this.nodes[to].p));
          open.add(nb);
        }
      }
    }
    return [this.nodes[to].p.clone()];
  }
}
