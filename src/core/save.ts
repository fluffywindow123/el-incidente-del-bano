export type CharId = 'gonzalo' | 'manuel';

export interface Settings {
  master: number;
  music: number;
  sfx: number;
  sens: number;
  invertY: boolean;
  shadows: number;
  scale: number;
  minimap: boolean;
  mapMode: number; // 0 apagado, 1 minimapa, 2 grande
}

export interface SaveData {
  char: CharId;
  free: boolean;
  step: number;
  minutes: number;
  pos: [number, number, number];
  yaw: number;
  flags: Record<string, boolean>;
  savedAt: number;
}

export interface Meta {
  completed: Partial<Record<CharId, boolean>>;
  lastChar: CharId;
}

const KS = 'eidb.settings', KG = 'eidb.save', KM = 'eidb.meta';

function read<T>(k: string): T | null {
  try { const v = localStorage.getItem(k); return v ? (JSON.parse(v) as T) : null; } catch { return null; }
}
function write(k: string, v: unknown) {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* sin almacenamiento */ }
}

export const defaultSettings: Settings = { master: 0.8, music: 0.55, sfx: 0.9, sens: 1, invertY: false, shadows: 2, scale: 1.5, minimap: true, mapMode: 1 };

export const Store = {
  settings(): Settings { return { ...defaultSettings, ...(read<Settings>(KS) ?? {}) }; },
  saveSettings(s: Settings) { write(KS, s); },
  game(): SaveData | null { return read<SaveData>(KG); },
  saveGame(d: SaveData) { write(KG, d); },
  clearGame() { try { localStorage.removeItem(KG); } catch { /* */ } },
  meta(): Meta { return { completed: {}, lastChar: 'gonzalo', ...(read<Meta>(KM) ?? {}) }; },
  saveMeta(m: Meta) { write(KM, m); },
};
