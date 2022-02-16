//¿Qué hace esto?

//******************************** */
console.log("1.- If \"time\"")
console.log("En este If se arroja un mensaje dependiente del valor de time")
console.log("\"Good Morning\" Si el valor de time es menor de 10")
console.log("\"Good day\" Si el valor de time es menor de 20")
console.log("\"Good evening\" cuando no se cumpla  con las 2 condiciones previas")

let time = 6
console.log("Time = " , time)
if (time < 10) {
    greeting = "Good morning";
    console.log(greeting)   
  } else if (time < 20) {
    greeting = "Good day";
    console.log(greeting)
  } else {
    greeting = "Good evening";
    console.log(greeting)
  }
  console.log("\n")
//******************************** */
  console.log("2.-IF \"Last\"")
  console.log("1.-En este If si la variable \"last\" tiene valor de '0' :")
  console.log("2.-Se ingresa a la siguiente condicion")
  console.log("3.-Si \"variable\" es igual a '5' entonces a \"variable2\" es igual a '7' ")
  console.log("\n")

  let last = 0
  let variable = 5 
  
  console.log("last = ",last)
  console.log("variable = ",variable)

  if (last=0){
      console.log("El valor de last es : ", last)
      if (variable =5){
          variable2 = 7
      }
  }else{
      console.log("El valor de \"Last\" no es cero :/")
  }
  console.log("\n")
//******************************** */
console.log("3.-IF \"BarProp-AND\"")
let num = 2
let num2 = 10
let foo = 10
let BarProp = 2

console.log("Before If :")
console.log("num = " , num)
console.log("num2 = " , num2)
console.log("foo = " , foo)
console.log("BarProp = " , BarProp)

/* interface BarProp {
    readonly visible: boolean;
} */

/* declare var BarProp: {
    prototype: BarProp;
    new(): BarProp;
}; */

//BarProp es un objeto. 
//BarProp es una funcion que se usa e typescript 

if( num <= num2 && foo > BarProp){
        num = 8
        console.log("If-num = ",num)
  }else{
      console.log("Condicion no cumplida")
  }

  console.log("\n")
  console.log("4.-IF \"BarProp-OR\"")
  if(num <= num2 || foo > BarProp){
    num = 8
    console.log("If - num = ",num)
}else{
    console.log("Condicion no cumplida")
}
//******************************** */
console.log("5.-IF \"TRUE\"")

if(true){
    num = 8
    console.log("If true - num = ",num)
}

console.log("\n")
console.log("6.-IF \"NOT TRUE\"")

var notTrue =  false
if(notTrue){
    num = 8
    console.log("If notTrue - num = ",num)
}

console.log("\n")
console.log("7.-IF \"!NOT TRUE\"")
if(!notTrue){
    num = 8
    console.log("If !notTrue - num = ",num)
}