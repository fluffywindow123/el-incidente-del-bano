import * as THREE from 'three';
import type { Look } from './character';
import type { NpcDef } from './npc';
import type { SpeakerColor } from '../ui/ui';

// Hoy es "día de civil": nadie trae uniforme, por eso Gonzalo va de azul y Manuel de rojo.
export const LOOKS: Record<string, Look> = {
  gonzalo: { name: 'Gonzalo', shirt: '#2f7bff', pants: '#23262e', skin: '#e0ac69', hair: '#1d1612', hairStyle: 'spiky', backpack: '#ffb300', voice: 250 },
  manuel: { name: 'Manuel', shirt: '#e3262f', pants: '#23262e', skin: '#d29a5c', hair: '#120d0a', hairStyle: 'side', backpack: '#3a3a3a', voice: 230 },
  juan: { name: 'Juan', shirt: '#3cb371', pants: '#4a4a56', skin: '#f1c27d', hair: '#3b2414', hairStyle: 'neat', glasses: true, backpack: '#5c6bc0', voice: 270 },
  brayan: { name: 'Brayan', shirt: '#26262b', pants: '#5c5c66', skin: '#c68642', hair: '#0d0d0d', hairStyle: 'mohawk', voice: 210 },
  kevin: { name: 'Kevin', shirt: '#ff8c1a', pants: '#3b3b44', skin: '#e8b98a', hair: '#2a1a10', hairStyle: 'buzz', voice: 290 },
  ulises: { name: 'Ulises', shirt: '#7a4dd8', pants: '#2e2e36', skin: '#a8703f', hair: '#140c08', hairStyle: 'curly', voice: 240 },
  sofia: { name: 'Sofía', shirt: '#ffd166', pants: '#3a4a7a', skin: '#f1c27d', hair: '#4a2c17', hairStyle: 'pony', female: true, voice: 380 },
  valeria: { name: 'Valeria', shirt: '#f78fb3', pants: '#2f2f3a', skin: '#e0ac69', hair: '#1a1110', hairStyle: 'long', female: true, skirt: true, voice: 400 },
  diego: { name: 'Diego', shirt: '#9e9e9e', pants: '#3e3e48', skin: '#d8a777', hair: '#3a2a1a', hairStyle: 'side', glasses: true, voice: 260 },
  ximena: { name: 'Ximena', shirt: '#80deea', pants: '#444', skin: '#c68642', hair: '#120c0a', hairStyle: 'bun', female: true, voice: 390 },
  fer: { name: 'Fer', shirt: '#aed581', pants: '#33333d', skin: '#f1c27d', hair: '#6a3c1c', hairStyle: 'spiky', voice: 280 },
  andrea: { name: 'Andrea', shirt: '#ce93d8', pants: '#2b2b33', skin: '#ffdbac', hair: '#2a1a0e', hairStyle: 'long', female: true, voice: 410 },
  tonito: { name: 'Toñito', shirt: '#ffab91', pants: '#3a3a3a', skin: '#a8703f', hair: '#0d0806', hairStyle: 'buzz', voice: 300, height: 0.82 },
  // otros grupos
  s1: { name: 'Karla', shirt: '#b39ddb', pants: '#333', skin: '#e0ac69', hair: '#2b1a10', hairStyle: 'pony', female: true, voice: 400, height: 0.85 },
  s2: { name: 'Iván', shirt: '#90a4ae', pants: '#2b2b33', skin: '#c68642', hair: '#120c0a', hairStyle: 'buzz', voice: 280, height: 0.85 },
  s3: { name: 'Pau', shirt: '#ffe082', pants: '#37474f', skin: '#f1c27d', hair: '#5d3a1a', hairStyle: 'long', female: true, voice: 410, height: 0.86 },
  s4: { name: 'Emilio', shirt: '#4db6ac', pants: '#333', skin: '#d8a777', hair: '#1a1a1a', hairStyle: 'curly', voice: 270, height: 0.86 },
  s5: { name: 'Renata', shirt: '#f48fb1', pants: '#2b2b33', skin: '#8d5524', hair: '#0d0806', hairStyle: 'bun', female: true, voice: 390, height: 0.93 },
  s6: { name: 'Mateo', shirt: '#c5e1a5', pants: '#4e342e', skin: '#ffdbac', hair: '#7b4b22', hairStyle: 'neat', voice: 250, height: 0.94 },
  s7: { name: 'Luis', shirt: '#795548', pants: '#222', skin: '#c68642', hair: '#140c08', hairStyle: 'spiky', voice: 240, height: 0.95 },
  s8: { name: 'Dani', shirt: '#fff59d', pants: '#3a3a44', skin: '#e0ac69', hair: '#2a1a10', hairStyle: 'side', voice: 300, height: 0.9 },
  s9: { name: 'Majo', shirt: '#80cbc4', pants: '#2b2b33', skin: '#f1c27d', hair: '#3b2414', hairStyle: 'pony', female: true, voice: 400, height: 0.9 },
  s10: { name: 'Chuyito', shirt: '#bcaaa4', pants: '#333', skin: '#a8703f', hair: '#0d0806', hairStyle: 'mohawk', voice: 270, height: 0.9 },
  // adultos
  ramirez: { name: 'Profe Ramírez', shirt: '#dcd6c4', pants: '#5a4a3a', skin: '#e0ac69', hair: '#9a9a9a', hairStyle: 'bald', glasses: true, tie: '#8b1e1e', adult: true, longSleeves: true, voice: 150 },
  lupita: { name: 'Maestra Lupita', shirt: '#9c6ade', pants: '#3b3b5c', skin: '#e8b98a', hair: '#4a2c17', hairStyle: 'bun', female: true, skirt: true, adult: true, longSleeves: true, voice: 330, height: 0.97 },
  herrera: { name: 'Profe Herrera', shirt: '#fafafa', pants: '#37474f', skin: '#f1c27d', hair: '#d0d0d0', hairStyle: 'curly', glasses: true, adult: true, longSleeves: true, voice: 170 },
  galindo: { name: 'Profe Galindo', shirt: '#8d6e63', pants: '#3e2723', skin: '#c68642', hair: '#6d6d6d', hairStyle: 'neat', adult: true, longSleeves: true, voice: 140, tie: '#2e4a2e' },
  karen: { name: 'Miss Karen', shirt: '#4dd0e1', pants: '#263238', skin: '#ffdbac', hair: '#d9b26a', hairStyle: 'long', female: true, adult: true, voice: 360, height: 0.97 },
  tono: { name: 'Profe Toño', shirt: '#607d8b', pants: '#263238', skin: '#d8a777', hair: '#1a1a1a', hairStyle: 'spiky', glasses: true, adult: true, voice: 190 },
  elena: { name: 'Profa. Elena', shirt: '#a1887f', pants: '#4e342e', skin: '#e0ac69', hair: '#2b1a10', hairStyle: 'long', female: true, adult: true, longSleeves: true, voice: 340, height: 0.96 },
  chuy: { name: 'Profe Chuy', shirt: '#9ccc65', pants: '#33691e', skin: '#a8703f', hair: '#222', hairStyle: 'buzz', adult: true, voice: 160 },
  directora: { name: 'Directora Martínez', shirt: '#3c3c58', pants: '#2a2a3a', skin: '#e8b98a', hair: '#0d0d0d', hairStyle: 'bun', female: true, skirt: true, glasses: true, adult: true, longSleeves: true, voice: 300 },
  beto: { name: 'Don Beto', shirt: '#5d6b3a', pants: '#2e3420', skin: '#a8703f', hair: '#bdbdbd', hairStyle: 'buzz', adult: true, voice: 130 },
  cuca: { name: 'Doña Cuca', shirt: '#ffcc80', pants: '#5d4037', skin: '#c68642', hair: '#9e9e9e', hairStyle: 'bun', female: true, skirt: true, adult: true, voice: 320, height: 0.93 },
  pepe: { name: 'Don Pepe', shirt: '#8a7f6a', pants: '#4a4234', skin: '#8d5524', hair: '#555', hairStyle: 'bald', adult: true, voice: 140 },
};

export const COLORS: Record<string, SpeakerColor> = { gonzalo: 'blue', manuel: 'red', juan: 'green' };
export function speakerColor(id: string): SpeakerColor {
  if (COLORS[id]) return COLORS[id];
  return LOOKS[id]?.adult ? 'gray' : 'gold';
}

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

export function npcDefs(protagonist: 'gonzalo' | 'manuel'): (NpcDef & { start: THREE.Vector3 })[] {
  const list: (NpcDef & { start: THREE.Vector3 })[] = [
    { id: 'juan', role: 'student', group: '2A', seatIndex: 4, start: V(6.5, 0, 28.5), lines: [
      '¿Viste el partido de ayer? Yo tampoco, me dormí.',
      'Dicen que el Profe Ramírez nunca ha faltado. Ni cuando tembló.',
      'Hoy es día de civil y Kevin vino con la misma playera de siempre.',
      'Si me ves corriendo, no preguntes. Sólo corre también.',
      'Me late que hoy va a ser un día tranquilo. ¿Qué podría pasar?',
    ] },
    { id: 'brayan', role: 'student', group: '2A', seatIndex: 12, start: V(-10, 0, 36), lines: [
      '¿Qué me ves? Ah, nada, ya.', 'Yo soy el que más sabe de Free Fire de toda la escuela.', 'La neta la escuela está bien aburrida.',
    ] },
    { id: 'kevin', role: 'student', group: '2A', seatIndex: 13, start: V(-11, 0, 37), lines: [
      'Jajaja. No sé de qué me río, pero jajaja.', '¿Ya escuchaste el rap de Vegetta777? Está bien épico.', 'Brayan dice que somos un "escuadrón". Yo nomás lo sigo.',
    ] },
    { id: 'ulises', role: 'student', group: '2A', seatIndex: 14, start: V(-9, 0, 37.5), lines: [
      'Shhh, estoy pensando.', 'Yo no hice nada. ¿De qué estábamos hablando?', '¿Tienes chicle? ¿No? Ok.',
    ] },
    { id: 'sofia', role: 'student', group: '2A', seatIndex: 1, start: V(-2, 0, 22), lines: [
      'Estoy organizando la kermés. ¿Quieres comprar boletos? Es broma, ¡pero cómpralos!', 'Me encanta Español. La Maestra Lupita lee bien bonito.', '¿Tú también sientes que el receso dura cinco minutos?',
    ] },
    { id: 'valeria', role: 'student', group: '2A', seatIndex: 2, start: V(-1, 0, 23), lines: [
      'Ximena y yo vamos a hacer un TikTok en el patio. No salgas.', '¿Ya viste que la cooperativa tiene Gansitos otra vez?', 'Mi mamá dice que en sus tiempos la escuela era más difícil. Lo dudo.',
    ] },
    { id: 'diego', role: 'student', group: '2A', seatIndex: 8, start: V(12, 0, 16), lines: [
      'Estoy leyendo un libro de dinosaurios. Bueno, viendo los dibujos.', 'La computadora 7 del salón de cómputo tiene Buscaminas. No le digas a nadie.', 'Una vez me quedé encerrado en el baño una hora. Fue mi mejor hora.',
    ] },
    { id: 'ximena', role: 'student', group: '2A', seatIndex: 3, start: V(-1.5, 0, 21.5), lines: [
      '¿Te sabes la tabla del 7? Yo tampoco. Somos un equipo.', 'Hoy hay examen de Historia… o era mañana. Ya no sé.', '¡Me gusta tu playera!',
    ] },
    { id: 'fer', role: 'student', group: '2A', seatIndex: 9, start: V(40, 0, 22), lines: [
      '¿Una reta de básquet en el receso?', 'Si encesto desde media cancha me invitas una torta.', 'Toñito siempre gana en fut. Es chiquito pero rápido.',
    ] },
    { id: 'andrea', role: 'student', group: '2A', seatIndex: 10, start: V(10, 0, 24), lines: [
      'Estoy a dos materias de convertirme en leyenda.', 'La bandera se ve bien bonita hoy, ¿no?', 'Doña Cuca me fía. Es porque soy encantadora.',
    ] },
    { id: 'tonito', role: 'student', group: '2A', seatIndex: 11, start: V(42, 0, 24), lines: [
      'No soy chiquito, soy compacto.', '¡Gol! Bueno, no ahorita. Pero hace rato sí.', 'Mi hermano estudió aquí y dice que el baño de abajo está embrujado.',
    ] },
    { id: 's1', role: 'student', group: '1A', seatIndex: 0, start: V(-18, 0, 30), lines: ['Soy de primero. Todo es enorme aquí.', '¿Dónde queda el laboratorio? Llevo tres vueltas.'] },
    { id: 's2', role: 'student', group: '1A', seatIndex: 1, start: V(-17, 0, 31), lines: ['Los de tercero dan miedo.', 'Me perdí buscando el salón de computación.'] },
    { id: 's3', role: 'student', group: '1A', seatIndex: 5, start: V(-19, 0, 29), lines: ['¿Ustedes también tienen al Profe Ramírez? Pobres.', 'Me gusta el receso. Es mi materia favorita.'] },
    { id: 's4', role: 'student', group: '1A', seatIndex: 6, start: V(-16, 0, 29.5), lines: ['Traje torta de tamal. Nutrición avanzada.', '¿Ya te sabes el himno completo? Yo hasta la segunda estrofa.'] },
    { id: 's5', role: 'student', group: '3A', seatIndex: 0, start: V(15, 0, 40), lines: ['Ya casi salgo de la secu. Los voy a extrañar… no.', 'En tercero todo es exámenes y guía de COMIPEMS.'] },
    { id: 's6', role: 'student', group: '3A', seatIndex: 1, start: V(16, 0, 41), lines: ['Cuando yo estaba en segundo, era leyenda. Ahora soy mito.', 'Un consejo: nunca entres al baño cuando hay bolita.'] },
    { id: 's7', role: 'student', group: '3A', seatIndex: 2, start: V(14, 0, 41), lines: ['¿Juegas fut? Nos falta portero.', 'El conserje Don Pepe sabe todos los chismes de la escuela.'] },
    { id: 's8', role: 'student', group: '2B', seatIndex: 0, start: V(50, 0, 38), lines: ['Somos del 2° B. Los mejores, obvio.', '¿Ustedes también tienen examen sorpresa? Ya no sería sorpresa.'] },
    { id: 's9', role: 'student', group: '2B', seatIndex: 1, start: V(51, 0, 39), lines: ['Me gusta el salón de arriba, hay mejor vista.', '¿Viste las palomas del patio? Una me robó una papa.'] },
    { id: 's10', role: 'student', group: '2B', seatIndex: 2, start: V(49, 0, 37), lines: ['¡Pásala, pásala!', 'No me hables, estoy concentrado en ganar.'] },
    // profesores
    { id: 'ramirez', role: 'teacher', subject: 'math', start: V(14, 0, -6), lines: ['Las matemáticas están en todo, joven. Hasta en el receso: 30 minutos menos lo que tarda en llegar.', 'No corra en los pasillos.', '¿Hizo la tarea? No me conteste, ya lo sé.'] },
    { id: 'lupita', role: 'teacher', subject: 'espanol', start: V(-20, 0, 5), lines: ['Leer te lleva a otros mundos. Y a pasar el examen.', 'Esa ortografía, por favor.', 'Nada de groserías en mi pasillo.'] },
    { id: 'herrera', role: 'teacher', subject: 'ciencias', start: V(-34, 3.6, 5), lines: ['La ciencia es curiosidad con bata.', 'No toques ese frasco. Ni ese. Mejor no toques nada.'] },
    { id: 'galindo', role: 'teacher', subject: 'historia', start: V(12, 0, -4), lines: ['Quien no conoce su historia, está condenado a repetir el examen.', 'En mis tiempos, el receso se ganaba.'] },
    { id: 'karen', role: 'teacher', subject: 'ingles', start: V(16, 0, -7), lines: ['Good morning! ¿Ya viste el vocabulario?', 'Practice makes perfect. Y la tarea también.'] },
    { id: 'tono', role: 'teacher', subject: 'tecnologia', start: V(-22, 3.6, 5), lines: ['¿Ya intentaste apagarla y prenderla otra vez?', 'Nada de jueguitos en las compus. Bueno, Buscaminas sí.'] },
    { id: 'elena', role: 'teacher', homeRoom: '1A', start: V(-34, 0, -11), lines: ['Los de primero son muy tiernos. Y muy ruidosos.'] },
    { id: 'chuy', role: 'teacher', homeRoom: '3A', start: V(-10, 0, -11), lines: ['¡A formarse para los honores el lunes!', 'Educación Física es vida.'] },
    { id: 'directora', role: 'staff', start: V(2, 0, -12), post: { pos: V(2, 0, -12.0), yaw: 0, anim: 'sit' }, lines: ['Buenos días. ¿Necesitas algo de la dirección?', 'Esta escuela tiene reglas. Y yo las conozco todas.'] },
    { id: 'beto', role: 'staff', start: V(6.4, 0, 46.8), post: { pos: V(6.4, 0, 46.8), yaw: Math.PI, anim: 'crossed' }, lines: ['Buenos días, joven. Pásele.', 'Aquí nadie entra sin credencial. Bueno, usted sí, ya lo conozco.', 'Treinta años cuidando esta puerta.'] },
    { id: 'cuca', role: 'staff', start: V(-45, 0, 22), post: { pos: V(-45, 0, 22), yaw: Math.PI / 2, anim: 'idle' }, lines: ['¿Qué va a llevar, mijo?', 'Las tortas de hoy están bien buenas.', 'No hay fiado. Bueno… depende.'] },
    { id: 'pepe', role: 'staff', start: V(36, 0, 5), post: { pos: V(36.5, 0, 4.5), yaw: Math.PI, anim: 'crossed' }, lines: ['Yo limpio, yo escucho, yo sé todo.', 'Cuidado, está mojado el piso.', 'En esta escuela pasan cosas, joven. Muchas cosas.'] },
  ];
  // el compañero del protagonista también es un NPC
  const other = protagonist === 'gonzalo' ? 'manuel' : 'gonzalo';
  list.unshift({
    id: other, role: 'student', group: '2A', seatIndex: other === 'gonzalo' ? 5 : 6, start: V(other === 'gonzalo' ? 8 : -6, 0, other === 'gonzalo' ? 20 : 34),
    lines: other === 'gonzalo'
      ? ['¡Quiubo, Manuel! ¿Qué onda?', 'Hoy me siento con suerte. No sé por qué.', 'Si me ves distraído es porque estoy pensando en la torta del receso.']
      : ['Hola, Gonzalo.', '…Sólo quiero que este día pase tranquilo.', 'No me gusta mucho la bolita de Brayan.'],
  });
  return list;
}

export const PLAYER_SEAT: Record<'gonzalo' | 'manuel', number> = { gonzalo: 5, manuel: 6 };
