/*
Jueves Feb 10
 les dejo este otro ejercicio, no imprime nada, su tarea es hacer que regrese los números que genera, sin usar console.log.
*/



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generarNumeros() {

  let elementos;

  let opcionesGeneradas = "";

  for (let i = 0; i < 10; i++) {
    opcionesGeneradas += " " + getRandomInt(1, 100) + " ";
  }

  elementos = opcionesGeneradas;


}

console.log(generarNumeros())
