const courses = [
  { tag: "Course 1 · UT Austin · edX · Free to audit", title: "Embedded Systems: Shape The World, Microcontroller Input/Output", body: "The University of Texas at Austin offers this as a self-paced course on edX with free access to the content. It starts from the fundamentals: number representation, the ARM Cortex M processor, voltage, current, and Ohm's law, and digital logic from transistors to flip-flops. From there it introduces C programming and microcontroller input and output, with labs ranging from switching an LED to building a virtual pacemaker, each completed first in simulation and then on real hardware. Listed at 4.5 stars from 15 reviews." },
  { tag: "Course 2 · MIT · 6.622 · Free", title: "Power Electronics, Prof. David Perreault", body: "MIT offers its complete Power Electronics course online for free through OpenCourseWare: 38 videos from the Spring 2023 run. It covers the modelling, analysis, design, and control of circuits for energy conversion, including DC to DC converters, rectifiers, and inverters. You learn how switching converters are described mathematically with averaged models, how feedback control keeps their output stable, and what role magnetic components and power semiconductors play. Lecture 1, Introduction to Power Electronics, has 2.5 million views." },
  { tag: "Course 3 · TU/e Eindhoven · Coursera · Paid tier", title: "RF and millimeter-Wave Circuit Design", body: "Eindhoven University of Technology offers this master level course on RF and mmWave circuit design, taught by Carlos Mendes, Jr. and one more instructor, with 26,649 already enrolled. It begins with wireless system design and the derivation of RF specifications, then moves through the main transceiver building blocks: low noise amplifiers, power amplifiers, mixers, oscillators, and PLL frequency synthesizers. Each block comes with a design lab with simulation files, step by step procedures, and recorded data of real circuits. Note: the course card says 'Included with Coursera PLUS', so this one is not free the way the other two are." },
];

const levels = [
  { tag: "Start here", title: "UT Austin is the beginner door", body: "It assumes nothing: numbers, voltage, Ohm's law and logic first, then C and real hardware labs. If you have never touched a microcontroller, this is the one." },
  { tag: "Step up", title: "MIT 6.622 is a full university course", body: "Graduate-style power electronics with real maths: averaged models, feedback control, magnetics. Free in full, but it expects an electrical engineering background." },
  { tag: "Deep end", title: "TU/e is master level, and paid", body: "RF and mmWave design is a specialism inside a specialism, and the course sits behind Coursera Plus. Worth it if wireless hardware is your direction, not a starting point." },
];

function card(item) {
  const el = document.createElement("article");
  el.className = "card";
  const count = document.createElement("div");
  count.className = "count";
  count.textContent = item.tag;
  const h = document.createElement("h3");
  h.textContent = item.title;
  const p = document.createElement("p");
  p.textContent = item.body;
  el.append(count, h, p);
  return el;
}

document.getElementById("courses").replaceChildren(...courses.map(card));
document.getElementById("levels").replaceChildren(...levels.map(card));
