import type * as THREE from 'three';
import { FH, type School, type MapRect } from '../world/school';
import type { NPCManager } from '../chars/npc';

export const floorOf = (y: number) => (y > FH - 0.5 ? 1 : 0);

const SHORT: Record<string, string> = {
  'BAÑO HOMBRES': 'Baño H', 'BAÑO MUJERES': 'Baño M', 'SALA DE MAESTROS': 'Maestros', 'DIRECCIÓN': 'Dirección', 'CONSERJERÍA': 'Conserje',
  'LABORATORIO': 'Lab', 'COMPUTACIÓN': 'Cómputo', 'BIBLIOTECA': 'Biblioteca', 'BODEGA': 'Bodega',
  'Cancha de básquet': 'Básquet', 'Cancha de fútbol': 'Fútbol', 'Patio central': 'Patio', 'Cooperativa': 'Coop.',
};
const shortName = (n: string) => SHORT[n] ?? n;
const TINY: Record<string, string> = { 'Dirección': 'Dir', 'Maestros': 'Prof', 'Baño H': 'H', 'Baño M': 'M', 'Conserje': 'C', 'Cómputo': 'PC', 'Biblioteca': 'Libros', 'Bodega': 'B', 'Básquet': 'Bás', 'Fútbol': 'Fut', 'Gradas': '' };
const HIDE_LABEL = new Set(['Pasillo', 'Escaleras', 'Mesas', 'Entrada', 'Caseta', 'Calle']);
const KEY_COLORS: Record<string, string> = { manuel: '#ff3b4a', gonzalo: '#2f7bff', juan: '#3cb371' };

/** Ajusta el lienzo a su tamaño en pantalla × densidad de pixeles. Devuelve tamaño en px CSS. */
function fit(cv: HTMLCanvasElement): { g: CanvasRenderingContext2D; W: number; H: number } | null {
  const r = cv.getBoundingClientRect();
  if (r.width < 4 || r.height < 4) return null;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
  if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
  const g = cv.getContext('2d')!;
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { g, W: r.width, H: r.height };
}

function roomVisible(r: MapRect, floor: number) { return r.floor === floor; }

function drawRoute(g: CanvasRenderingContext2D, route: THREE.Vector3[], floor: number, P: (x: number, z: number) => [number, number], width: number) {
  if (route.length < 2) return;
  g.save();
  g.lineCap = 'round'; g.lineJoin = 'round';
  const t = performance.now() / 60;
  for (let i = 1; i < route.length; i++) {
    const a = route[i - 1], b = route[i];
    const same = floorOf(a.y) === floor && floorOf(b.y) === floor;
    const stairs = floorOf(a.y) !== floorOf(b.y);
    if (!same && !stairs) continue;
    const [ax, ay] = P(a.x, a.z), [bx, by] = P(b.x, b.z);
    g.strokeStyle = 'rgba(0,0,0,0.45)'; g.lineWidth = width + 3; g.setLineDash([]);
    g.beginPath(); g.moveTo(ax, ay); g.lineTo(bx, by); g.stroke();
    g.strokeStyle = stairs ? '#ffffff' : '#ffd23f'; g.lineWidth = width;
    g.setLineDash([width * 2.2, width * 1.6]); g.lineDashOffset = -t;
    g.beginPath(); g.moveTo(ax, ay); g.lineTo(bx, by); g.stroke();
  }
  g.restore();
}

function playerArrow(g: CanvasRenderingContext2D, x: number, y: number, angle: number, size: number) {
  g.save();
  g.translate(x, y); g.rotate(angle);
  g.fillStyle = '#ffd23f'; g.strokeStyle = '#000'; g.lineWidth = 2;
  g.beginPath(); g.moveTo(0, -size); g.lineTo(size * 0.7, size * 0.75); g.lineTo(0, size * 0.35); g.lineTo(-size * 0.7, size * 0.75); g.closePath();
  g.fill(); g.stroke();
  g.restore();
}

export interface MapView {
  school: School;
  player: THREE.Vector3;
  heading: number; // yaw del personaje
  camYaw: number;
  target: THREE.Vector3 | null;
  route: THREE.Vector3[];
  npcs: NPCManager;
}

/**
 * Mapa de toda la escuela con el norte arriba.
 * Se usa en el mapa completo (M) y en el mapa grande en pantalla.
 */
export function drawOverview(cv: HTMLCanvasElement, v: MapView, floor: number, compact: boolean) {
  const f = fit(cv);
  if (!f) return;
  const { g, W, H } = f;
  const minX = -66, maxX = 68, minZ = -22, maxZ = compact ? 56 : 66;
  const pad = compact ? 6 : 12;
  const s = Math.min((W - pad * 2) / (maxX - minX), (H - pad * 2) / (maxZ - minZ));
  const ox = (W - (maxX - minX) * s) / 2, oz = (H - (maxZ - minZ) * s) / 2;
  const X = (x: number) => ox + (x - minX) * s, Z = (z: number) => oz + (z - minZ) * s;
  const P = (x: number, z: number): [number, number] => [X(x), Z(z)];
  g.clearRect(0, 0, W, H);
  g.fillStyle = compact ? 'rgba(63,107,51,0.92)' : '#5f9a45'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#8a8478'; g.fillRect(X(-64), Z(8), 128 * s, 40 * s);
  g.fillStyle = '#3b3d42'; g.fillRect(X(-40), Z(48.5), 90 * s, 16 * s);
  g.strokeStyle = 'rgba(0,0,0,0.35)'; g.lineWidth = 2; g.strokeRect(X(-64), Z(-20), 130 * s, 68 * s);
  // piso de abajo tenue cuando se ve el 2º piso
  for (const r of v.school.mapRects) {
    const vis = roomVisible(r, floor);
    if (!vis && !(floor === 1 && r.floor === 0)) continue;
    g.globalAlpha = vis ? 1 : 0.22;
    g.fillStyle = r.color; g.fillRect(X(r.x0), Z(r.z0), (r.x1 - r.x0) * s, (r.z1 - r.z0) * s);
    g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 1; g.strokeRect(X(r.x0), Z(r.z0), (r.x1 - r.x0) * s, (r.z1 - r.z0) * s);
    g.globalAlpha = 1;
  }
  // etiquetas
  g.textAlign = 'center'; g.textBaseline = 'middle';
  for (const r of v.school.mapRects) {
    if (!roomVisible(r, floor) || HIDE_LABEL.has(r.name)) continue;
    const w = (r.x1 - r.x0) * s;
    let name = compact || w < 60 ? shortName(r.name) : r.name;
    const size = Math.max(compact ? 8 : 9, Math.min(compact ? 11 : 13, w / Math.max(4, name.length * 0.62)));
    g.font = `800 ${size}px Nunito, sans-serif`;
    // en salones angostos usar abreviatura o nada, para que no se encimen
    if (g.measureText(name).width > w + 2) name = TINY[name] ?? '';
    if (!name || g.measureText(name).width > w + 6) continue;
    const cx = X((r.x0 + r.x1) / 2), cz = Z((r.z0 + r.z1) / 2);
    g.lineWidth = 3; g.strokeStyle = 'rgba(0,0,0,0.55)'; g.strokeText(name, cx, cz);
    g.fillStyle = '#fff'; g.fillText(name, cx, cz);
  }
  // personajes
  for (const n of v.npcs.npcs) {
    if (floorOf(n.char.position.y) !== floor) continue;
    const key = KEY_COLORS[n.id];
    g.fillStyle = key ?? (n.def.role === 'student' ? 'rgba(255,255,255,0.6)' : 'rgba(255,210,63,0.85)');
    g.beginPath(); g.arc(X(n.char.position.x), Z(n.char.position.z), key ? (compact ? 3.5 : 4.5) : (compact ? 1.8 : 2.5), 0, Math.PI * 2); g.fill();
  }
  drawRoute(g, v.route, floor, P, compact ? 2.5 : 3.5);
  if (v.target && floorOf(v.target.y) === floor) {
    const pulse = Math.sin(performance.now() / 200) * 2;
    g.strokeStyle = '#ffd23f'; g.lineWidth = 3;
    g.beginPath(); g.arc(X(v.target.x), Z(v.target.z), (compact ? 7 : 10) + pulse, 0, Math.PI * 2); g.stroke();
    g.fillStyle = '#ffd23f'; g.font = `900 ${compact ? 11 : 13}px Nunito`; g.fillText('★', X(v.target.x), Z(v.target.z));
  }
  if (floorOf(v.player.y) === floor) playerArrow(g, X(v.player.x), Z(v.player.z), Math.PI - v.heading, compact ? 7 : 9);
  // brújula
  g.fillStyle = 'rgba(0,0,0,0.5)'; g.beginPath(); g.arc(W - 18, 18, 12, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#ff5a66'; g.font = '900 12px Nunito'; g.fillText('N', W - 18, 18);
  // encabezado de piso y aviso de objetivo en otro piso
  const lab = floor ? '2º PISO' : 'PLANTA BAJA';
  g.font = `900 ${compact ? 10 : 12}px Nunito`; g.textAlign = 'left';
  const tw = g.measureText(lab).width;
  g.fillStyle = 'rgba(0,0,0,0.55)'; g.fillRect(6, 6, tw + 14, compact ? 18 : 22);
  g.fillStyle = '#ffd23f'; g.fillText(lab, 13, compact ? 15 : 17);
  if (v.target && floorOf(v.target.y) !== floor) {
    const msg = floorOf(v.target.y) ? '★ Objetivo en el 2º piso ↑' : '★ Objetivo en planta baja ↓';
    g.font = `800 ${compact ? 10 : 12}px Nunito`;
    const mw = g.measureText(msg).width;
    g.fillStyle = 'rgba(0,0,0,0.6)'; g.fillRect(6, H - (compact ? 24 : 30), mw + 14, compact ? 18 : 22);
    g.fillStyle = '#fff'; g.fillText(msg, 13, H - (compact ? 15 : 19));
  }
  if (!compact) {
    g.font = '700 12px Nunito'; g.textAlign = 'right';
    g.fillStyle = 'rgba(0,0,0,0.55)'; g.fillRect(W - 300, H - 30, 292, 22);
    g.fillStyle = '#fff'; g.fillText('▲ Tú   ★ Objetivo   ┅ Ruta   ● Juan / Gonzalo / Manuel', W - 14, H - 19);
  }
}

/** Minimapa circular que gira con la cámara (adelante = arriba). */
export function drawMinimap(cv: HTMLCanvasElement, v: MapView, zoom: number) {
  const f = fit(cv);
  if (!f) return;
  const { g, W, H } = f;
  const cx = W / 2, cy = H / 2, R = W / 2;
  const fl = floorOf(v.player.y);
  // rotación: adelante de la cámara hacia arriba
  const rot = Math.PI + v.camYaw;
  const c = Math.cos(rot), sn = Math.sin(rot);
  const P = (x: number, z: number): [number, number] => {
    const dx = (x - v.player.x) * zoom, dz = (z - v.player.z) * zoom;
    return [cx + dx * c - dz * sn, cy + dx * sn + dz * c];
  };
  g.clearRect(0, 0, W, H);
  g.save();
  g.beginPath(); g.arc(cx, cy, R, 0, Math.PI * 2); g.clip();
  g.fillStyle = '#3f6b33'; g.fillRect(0, 0, W, H);
  g.save();
  g.translate(cx, cy); g.rotate(rot);
  const tx = (x: number) => (x - v.player.x) * zoom, tz = (z: number) => (z - v.player.z) * zoom;
  g.fillStyle = '#8a8478'; g.fillRect(tx(-64), tz(8), 128 * zoom, 40 * zoom);
  g.fillStyle = '#3b3d42'; g.fillRect(tx(-40), tz(48.5), 90 * zoom, 16 * zoom);
  for (const r of v.school.mapRects) {
    if (r.floor !== fl) continue;
    g.fillStyle = r.color; g.fillRect(tx(r.x0), tz(r.z0), (r.x1 - r.x0) * zoom, (r.z1 - r.z0) * zoom);
    g.strokeStyle = 'rgba(255,255,255,0.3)'; g.lineWidth = 1; g.strokeRect(tx(r.x0), tz(r.z0), (r.x1 - r.x0) * zoom, (r.z1 - r.z0) * zoom);
  }
  g.restore();
  // etiquetas siempre derechas
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `800 ${zoom > 3 ? 11 : 9}px Nunito, sans-serif`;
  for (const r of v.school.mapRects) {
    if (r.floor !== fl || HIDE_LABEL.has(r.name)) continue;
    const [lx, ly] = P((r.x0 + r.x1) / 2, (r.z0 + r.z1) / 2);
    if (Math.hypot(lx - cx, ly - cy) > R - 14) continue;
    const name = shortName(r.name);
    g.lineWidth = 3; g.strokeStyle = 'rgba(0,0,0,0.6)'; g.strokeText(name, lx, ly);
    g.fillStyle = '#fff'; g.fillText(name, lx, ly);
  }
  for (const n of v.npcs.npcs) {
    if (floorOf(n.char.position.y) !== fl) continue;
    const [nx, ny] = P(n.char.position.x, n.char.position.z);
    const key = KEY_COLORS[n.id];
    g.fillStyle = key ?? 'rgba(255,255,255,0.65)';
    g.beginPath(); g.arc(nx, ny, key ? 3.5 : 2, 0, Math.PI * 2); g.fill();
  }
  drawRoute(g, v.route, fl, P, 2.5);
  if (v.target) {
    let [x, y] = P(v.target.x, v.target.z);
    const d = Math.hypot(x - cx, y - cy), lim = R - 10;
    const off = d > lim;
    if (off) { x = cx + ((x - cx) * lim) / d; y = cy + ((y - cy) * lim) / d; }
    g.fillStyle = floorOf(v.target.y) === fl ? '#ffd23f' : '#ffffff'; g.strokeStyle = '#000'; g.lineWidth = 2;
    g.beginPath(); g.arc(x, y, off ? 5 : 6.5, 0, Math.PI * 2); g.fill(); g.stroke();
    if (floorOf(v.target.y) !== fl) { g.fillStyle = '#000'; g.font = '900 9px Nunito'; g.fillText(floorOf(v.target.y) ? '↑' : '↓', x, y + 0.5); }
  }
  g.restore();
  // anillo, norte y piso
  g.strokeStyle = 'rgba(255,255,255,0.45)'; g.lineWidth = 3;
  g.beginPath(); g.arc(cx, cy, R - 1.5, 0, Math.PI * 2); g.stroke();
  const [nx, ny] = (() => { const a = rot - Math.PI / 2; return [cx + Math.cos(a) * (R - 10), cy + Math.sin(a) * (R - 10)]; })();
  g.fillStyle = 'rgba(0,0,0,0.7)'; g.beginPath(); g.arc(nx, ny, 8, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#ff5a66'; g.font = '900 10px Nunito'; g.fillText('N', nx, ny + 0.5);
  g.fillStyle = 'rgba(0,0,0,0.6)'; g.fillRect(cx - 18, H - 22, 36, 15);
  g.fillStyle = '#ffd23f'; g.font = '900 10px Nunito'; g.fillText(fl ? '2º' : 'PB', cx, H - 14);
  playerArrow(g, cx, cy, 0, 8);
}
