//reto el día de hoy a encontrar los “issues” en este pequeño código y ver como se puede mejorar.
console.log("***************************************")
console.log("RETO 1")
console.log("reto el día de hoy a encontrar los “issues” en este pequeño código y ver como se puede mejorar.")

let x = mayorNum(6,6); //<--Faltaba inicializar con valores ya que la funcion requiere esos 2 parametros de entrada

function mayorNum(num1,num2) {
    
    console.log("Valor de num1 = ", num1, " & Valor de num2 = ", num2) //<--se agrega esta linea para imprimir es valor de entrada para las variables num1 & num2

   //remove--> var num2 = 6;

      if (num1 && num2) {
        if (num1 >= num2) {
          if (num1 == num2) {
            console.log("Los numeros son iguales")
          } else {
            console.log("El num1 es mayor")
          }
        } else {
          console.log("El num2 es mayor")
        }
      } else {
        console.log("Uno de los numeros no se relleno")
      }
} 
//console.log(mayorNum(6,9)) <--Marca undefined

console.log("***************************************")
console.log("RETO 2")

let a = getRandomInt(6,9)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  console.log("Valor de a = ", a)
  

  function generarNumeros() {
  
    let elementos;
  
    let opcionesGeneradas = 2;
    console.log("valor de opcionesGeneradas = ", opcionesGeneradas)
  
    for (let i = 0; i < 10; i++) {
      opcionesGeneradas += " " + getRandomInt(1, 100) + " ";
    }
  
    elementos = opcionesGeneradas;
  
    console.log("valor de elementos = ", elementos)
  
  } 
  
 // console.log(generarNumeros())  <--Marca undefined