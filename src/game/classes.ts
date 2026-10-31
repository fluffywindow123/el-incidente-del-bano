import * as THREE from 'three';
import type { Game } from '../main';
import { ui } from '../ui/ui';
import { audio } from '../core/audio';
import { FH } from '../world/school';

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

/** Clases interactivas cortas. El jugador ya está sentado en el salón. */
export async function runClass(g: Game, subject: string, roomId: string, teacher: string) {
  const d = g.director;
  const room = g.school.room(roomId);
  const y = room.floor * FH;
  const pc = g.protagonist;
  const other = pc === 'gonzalo' ? 'manuel' : 'gonzalo';
  const name = pc === 'gonzalo' ? 'Gonzalo' : 'Manuel';
  d.begin();
  // acomodar al grupo y al profe
  await d.fade(1, 350);
  for (const n of g.npcs.npcs) {
    if (n.def.group === '2A' && n.state !== 'scripted') g.npcs.placeInstant(n);
  }
  g.npcs.script([teacher]);
  d.place(teacher, V(room.doorX, y, 0.6), Math.PI, 'walk');
  const wide = () => d.shot(V(room.x1 - 0.8, y + 2.7, -12.9), V(room.x0 + 5.5, y + 0.7, -3.5), 0);
  await wide();
  audio.play('class', 1.5);
  await d.fade(0, 400);
  await d.walk(teacher, room.teacherPos!.clone(), false, 'idle');
  d.face(teacher, 0);
  await d.wait(0.3);
  const front = () => d.shot(V(room.x0 + 6.0, y + 1.7, -2.2), V(room.x0 + 6, y + 1.5, -13), 0.8);
  const T = (text: string, o: Parameters<typeof d.say>[2] = {}) => d.say(teacher, text, { anim: 'teach', ...o });
  const P = (text: string, o: Parameters<typeof d.say>[2] = {}) => d.say(pc, text, { anim: 'sit', ...o });
  const raise = () => d.anim(pc, 'sitRaise');
  let score = 0;
  const right = async (txt: string) => { audio.correct(); score++; await T(txt, { expr: 'happy' }); };
  const wrong = async (txt: string) => { audio.wrong(); await T(txt, { expr: 'bored' }); };

  switch (subject) {
    case 'math': {
      g.school.drawBoard(room, ['Matemáticas', '8 × 7 = ?', 'x + 5 = 12']);
      await front();
      await T('Buenos días, jóvenes. Saquen su cuaderno. Y no, Kevin, la calculadora del celular no cuenta.');
      await d.closeUp(teacher, { dur: 0.5 });
      await T(`A ver… ${name}, ¿cuánto es 8 por 7?`, { anim: 'point' });
      await d.closeUp(pc, { dur: 0.4, h: 0.1 });
      const c = await d.choose(['¿56?', '54', '63', '¿Mande?']);
      if (c === 0) { await P('Eh… ¿56?', { expr: 'worried' }); await right('Correcto. Milagrosamente estaba poniendo atención.'); }
      else if (c === 1) { await P('¿54?', { expr: 'worried' }); await wrong('Casi. Le faltaron dos. Como a su tarea, le falta todo.'); }
      else if (c === 2) { await P('¡63!', { expr: 'happy' }); await wrong('Ese es 9 por 7. Se adelantó una tabla, qué ambicioso.'); }
      else { await P('¿Mande?', { expr: 'surprised' }); await wrong('"Mande" no es un número, joven. Es 56. Anótelo.'); }
      g.school.drawBoard(room, ['Matemáticas', 'x + 5 = 12', 'x = ?']);
      await d.closeUp(teacher, { dur: 0.5 });
      await T('Ahora álgebra, para que sufran con estilo. Si x más 5 es igual a 12, ¿cuánto vale x?');
      raise();
      const c2 = await d.choose(['7', '17', '5', 'x vale mucho como persona']);
      if (c2 === 0) await right('Siete. Bien. Hoy no reprueba nadie… todavía.');
      else if (c2 === 3) { await P('x vale mucho como persona.', { expr: 'smug' }); audio.boing(); await T('Muy bonito. Vale 7. Y usted vale un punto menos.', { expr: 'bored' }); }
      else await wrong('No. Vale 7. Se resta 5 de los dos lados, como cuando reparten pizza.');
      await d.closeUp(other, { dur: 0.5 });
      await d.say(other, other === 'manuel' ? '(Ni volteo, ni volteo…)' : '(¿Siete? Yo había puesto un dibujito.)', { anim: 'sitWrite' });
      await front();
      await T('Tarea: páginas 45 a 47. Todas. Sí, también la 46.');
      await d.narrate('Todo el grupo: «¡Nooooo!»', 1.4);
      break;
    }
    case 'espanol': {
      g.school.drawBoard(room, ['Español', '«Luis llegó tarde porque su', 'perro se comió su mochila.»']);
      await front();
      await T('Buenos días, mis niños. Hoy: comprensión lectora. Lean lo del pizarrón.', { expr: 'happy' });
      await d.closeUp(teacher, { dur: 0.5 });
      await T(`${name}, ¿por qué llegó tarde Luis?`, { anim: 'point' });
      await d.closeUp(pc, { dur: 0.4, h: 0.1 });
      const c = await d.choose(['Porque su perro se comió su mochila.', 'Porque se quedó dormido.', 'Porque Luis no existe, maestra.']);
      if (c === 0) await right('¡Exacto! Leer con atención sirve para algo, ¿ven?');
      else if (c === 1) await wrong('Eso te pasa a ti, no a Luis. Fue el perro.');
      else { await P('Porque Luis no existe, maestra. Es un personaje.', { expr: 'smug' }); await T('Filosófico… pero fue el perro.', { expr: 'bored' }); }
      g.school.drawBoard(room, ['Español', '«Ana canta en el baño.»', '¿Cuál es el verbo?']);
      await T('Siguiente. En la oración "Ana canta en el baño", ¿cuál es el verbo?');
      raise();
      const c2 = await d.choose(['canta', 'Ana', 'baño']);
      if (c2 === 0) await right('Muy bien. "Canta" es la acción.');
      else await wrong('No, mi vida. El verbo es "canta". Es lo que hace Ana.');
      await d.closeUp('kevin', { dur: 0.5 });
      await d.say('kevin', 'Maestra, ¡Manuel también canta en el baño! ¡El rap de Vegetta777!', { anim: 'sitRaise', expr: 'smug' });
      await d.say('brayan', 'Jajajaja.', { anim: 'sit', expr: 'happy' });
      await d.closeUp('manuel', { dur: 0.4 });
      await d.say('manuel', '…No es cierto.', { expr: 'angry', anim: 'sitSad' });
      await d.closeUp(teacher, { dur: 0.4 });
      await T('Kevin, el único que va a cantar es usted: la tabla de verbos, de tarea. Completa.', { expr: 'angry' });
      break;
    }
    case 'ciencias': {
      g.school.drawBoard(room, ['Ciencias', 'Reacciones químicas', 'ácido + base → ?']);
      await front();
      await T('Jóvenes, hoy veremos una reacción química. Con cuidado, que el año pasado alguien se quemó las cejas.');
      await d.closeUp(teacher, { dur: 0.5 });
      await T(`${name}, pase a la mesa. ¿Qué mezclamos?`, { anim: 'point' });
      const bench = (g.player.seat?.pos ?? room.seats[0].pos).clone().add(V(0, 1.0, -0.6));
      await d.shot(bench.clone().add(V(1.6, 0.8, 1.6)), bench, 0.8);
      const c = await d.choose(['Vinagre + bicarbonato', 'Agua + agua', 'Todo lo que hay en la mesa']);
      if (c === 0) {
        g.effects.burst(bench, 18, '#f0fff0'); g.effects.burst(bench, 10, '#b9f6ca'); audio.bubble(); audio.bubble();
        d.comic('¡FSSSHHH!', bench.clone().add(V(0, 0.4, 0)), '#80d8ff', 0.6);
        await right('¡Excelente! Una reacción ácido-base. Hace espuma porque libera un gas.');
      } else if (c === 1) {
        await d.wait(0.6);
        await wrong('Felicidades, inventó… el agua. Premio Nobel en camino.');
      } else {
        g.effects.burst(bench, 26, '#ff8a80'); g.effects.burst(bench, 20, '#ffd54f'); audio.thud(); d.shake(0.8);
        d.comic('¡BOOM!', bench.clone().add(V(0, 0.5, 0)), '#ff5a66', 0.8);
        await T('¡NOOO! ¡Mis cejas! …Ah, no, siguen ahí. Siéntese, por favor.', { expr: 'surprised' });
      }
      await d.closeUp(teacher, { dur: 0.5 });
      await T('Pregunta: ¿qué gas se libera cuando mezclamos vinagre y bicarbonato?');
      raise();
      const c2 = await d.choose(['Dióxido de carbono (CO₂)', 'Oxígeno', 'Vapor de Vegetta']);
      if (c2 === 0) await right('Correcto. CO₂. El mismo que exhalan cuando suspiran en mi clase.');
      else if (c2 === 1) await wrong('No. Es dióxido de carbono. El oxígeno lo necesito yo para aguantarlos.');
      else { audio.boing(); await T('¿Vapor de qué? …Es CO₂. Y ya dejen al tal Vegetta.', { expr: 'bored' }); }
      break;
    }
    case 'historia': {
      g.school.drawBoard(room, ['Historia de México', 'Independencia', '¿1810? ¿1910? ¿1521?']);
      await front();
      await T('Bien, jóvenes. Viajemos al pasado. No, Ulises, no en una máquina del tiempo. Con la imaginación.');
      await d.closeUp(teacher, { dur: 0.5 });
      await T(`${name}: ¿en qué año inició la Independencia de México?`, { anim: 'point' });
      await d.closeUp(pc, { dur: 0.4, h: 0.1 });
      const c = await d.choose(['1810', '1910', '1521']);
      if (c === 0) await right('Correcto. El 16 de septiembre de 1810. ¡Viva!');
      else if (c === 1) await wrong('Ese es el inicio de la Revolución. Cien años de diferencia, nada más.');
      else await wrong('Esa es la caída de Tenochtitlan. Va bien… para otro examen.');
      await T('Y díganme: ¿quién dio el Grito de Dolores?');
      raise();
      const c2 = await d.choose(['Miguel Hidalgo', 'Benito Juárez', 'Vegetta777']);
      if (c2 === 0) await right('Don Miguel Hidalgo y Costilla. Muy bien.');
      else if (c2 === 1) await wrong('Juárez es de otra época. Fue Hidalgo.');
      else { audio.boing(); await T('…¿Qué les pasa hoy con ese muchacho? Fue Miguel Hidalgo.', { expr: 'angry' }); }
      await d.closeUp('juan', { dur: 0.5 });
      await d.say('juan', '(Psst… ya casi es receso. Aguanta.)', { anim: 'sitWrite' });
      break;
    }
    case 'ingles': {
      g.school.drawBoard(room, ['English Class', 'Vocabulary', 'baño = ?']);
      await front();
      await T('Good morning, class! Today: vocabulary. Repeat after me: "Good morning, teacher."', { expr: 'happy' });
      await d.narrate('Todo el grupo, sin ganas: «Guuud mooorniiing tiiichaaar.»', 1.6);
      await d.closeUp(teacher, { dur: 0.5 });
      await T(`${name}, how do you say "baño" in English?`, { anim: 'point' });
      await d.closeUp(pc, { dur: 0.4, h: 0.1 });
      const c = await d.choose(['Bathroom', 'Bañathon', 'Batroom']);
      if (c === 0) await right('Very good! Bathroom. Excellent pronunciation.');
      else if (c === 1) await wrong('"Bañathon" sería un maratón de baños. It\'s "bathroom".');
      else await wrong('Almost! Bath-room. Con la lengua entre los dientes: th.');
      g.school.drawBoard(room, ['English Class', '«Él canta una canción»', '= ?']);
      await T('Now translate: "Él canta una canción."');
      raise();
      const c2 = await d.choose(['He sings a song.', 'He sing a song.', 'Él sings a canción.']);
      if (c2 === 0) await right('Perfect! "He sings", con S, because third person.');
      else if (c2 === 1) await wrong('Le faltó la S: "He sings". Don\'t forget the S!');
      else { audio.boing(); await T('Eso es Spanglish, sweetie. "He sings a song."', { expr: 'bored' }); }
      break;
    }
    case 'tecnologia': {
      g.school.drawBoard(room, ['Tecnología', 'Práctica: escribe el nombre', 'de la escuela en Word']);
      await front();
      await T('Prendan sus computadoras. Despacito, que tienen más años que ustedes.');
      d.anim(pc, 'type');
      await d.closeUp(teacher, { dur: 0.5 });
      await T('Práctica rápida: escriban el nombre de la escuela. En mayúsculas. Sin faltas, por favor.');
      const seat = g.player.seat?.pos ?? room.seats[0].pos;
      await d.shot(seat.clone().add(V(0.7, 1.45, 0.5)), seat.clone().add(V(0, 0.9, -0.6)), 0.6);
      const word = ['KeyG', 'KeyA', 'KeyN', 'KeyT', 'KeyE'];
      const ok = await ui.qteSeq('¡ESCRIBE: G-A-N-T-E!', word, 6, 'Teclea las letras en orden');
      audio.keyboard();
      if (ok >= 1) await right('¡Perfecto! Rapidísimo. Ya puede trabajar en una oficina.');
      else await wrong('Escribió "GNATE". Cerca. Muy cerca. Pero no.');
      await d.closeUp(other, { dur: 0.5 });
      if (other === 'manuel') await d.say('manuel', '¡Ay! Se reventó el cartucho de la impresora… ¡tengo las manos todas azules!', { expr: 'surprised', anim: 'sit' });
      else await d.say('gonzalo', '(Ya me anda del baño… aguanta, aguanta…)', { expr: 'worried', anim: 'type' });
      if (pc === 'manuel') {
        await d.closeUp('manuel', { dur: 0.4 });
        await d.say('manuel', '¡Ay! ¡Se reventó el cartucho de la impresora… tengo las manos todas azules!', { expr: 'surprised', anim: 'sit' });
      }
      await d.closeUp(teacher, { dur: 0.4 });
      await T('Bueno, ya casi es hora. Apaguen todo. Y nada de Buscaminas, Diego, te estoy viendo.');
      break;
    }
  }
  await front();
  if (score === 2) ui.toast('⭐ ¡Participación perfecta!');
  else if (score === 1) ui.toast('✔ Participaste en clase');
  else ui.toast('😅 Al menos te presentaste');
  audio.bell();
  await d.narrate('*RIIIIING* — Suena la campana.', 1.2);
  g.npcs.unscript([teacher]);
  audio.play('school', 1.5);
  d.anim(pc, 'sit');
  d.end();
}
