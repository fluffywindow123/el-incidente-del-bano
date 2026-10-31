# EL INCIDENTE DEL BAÑO
*Todo comenzó con el rap de Vegetta777.*

Videojuego 3D en el navegador (Three.js + TypeScript + Vite). Todo el arte, la música y los efectos de sonido se generan por código: no usa archivos externos.

## Cómo jugar
```bash
npm install
npm run dev
```
Abre http://localhost:5173 en Chrome o Safari. Para una versión optimizada: `npm run build && npm run preview`.

**Jugar en línea:** https://fluffywindow123.github.io/el-incidente-del-bano/

Para publicar una nueva versión en GitHub Pages: `npm run deploy` (compila y sube `dist/` a la rama `gh-pages`).

## Controles
| Tecla | Acción |
|---|---|
| WASD | Caminar |
| Mouse | Cámara (haz clic en el juego para capturar el mouse) |
| Shift | Correr |
| Espacio | Saltar / avanzar diálogo |
| E | Interactuar (sentarse, comprar, lavarse las manos…) |
| F | Hablar con personajes |
| 1–4 | Elegir opción de diálogo |
| Esc | Pausa |
| N | Mapa en pantalla: minimapa → mapa grande → apagado |
| + / − | Zoom del minimapa |
| M | Mapa completo (1 / 2 cambia de piso) |
| Tab | Horario y misiones |

## Contenido
- Menú 3D con cámara cinematográfica y selección de personaje: **Gonzalo** (playera azul) y **Manuel** (playera roja).
- Secundaria explorable: entrada con caseta, patio con asta bandera, edificio de 2 pisos con escaleras, 1°/2°/3°, dirección, sala de maestros, laboratorio, computación, biblioteca, baños, cooperativa y canchas.
- ~35 NPC con máquina de estados y horario: llegan, platican, van a clase, se sientan, juegan en las canchas, hacen fila en la cooperativa y reaccionan a la pelea.
- Día escolar de 7:00 a 12:45 con 6 clases interactivas cortas (Matemáticas, Español, Ciencias, Historia, Inglés y Tecnología) y el receso.
- Misión principal **«Todo por un rap»**, desde dos perspectivas:
  - **Gonzalo** no ve el empujón; después interroga a tres testigos para descubrir la verdad.
  - **Manuel** vive el acoso, elige cómo negarse, es empujado, termina en la Dirección con un reporte… y pasa del llanto a la furia.
- La pelea es una nube de caricatura con onomatopeyas y QTE breves; no se recompensa la agresión.
- Guardado automático en `localStorage`, botón Continuar, exploración libre y repetir la historia con el otro protagonista.

## Estructura
- `src/world/` — escuela, colisiones, navegación y ambiente
- `src/chars/` — personajes articulados, elenco, IA de NPC y efectos
- `src/game/` — jugador/cámara, director de cinemáticas, historia y clases
- `src/ui/` — HUD, diálogos, mapa y minimapa
- `src/core/` — entrada, audio sintetizado y guardado
