/*
2da Tarea
Checar los ejemplos con Switch, ejecutarlos y saber que estan haciendo
*/


// Switch
/*1.- En este ejemplo le falta ponerle los break a cada case
-->Sin break el output es : (es decir recorre todos los cases)
Autorizado
Usuario Autorizado
Respuesta Usuario no autorizado

-->Con break el output es:
Autorizado
*/
var rango;
rango = "Coronel";
// rango = "Soldado razo";
// rango = "Comandante";
// rango = "Capitan";
// rango = "General";
// rango = "Soldado Perez";

switch(rango){
    case "Soldado razo":
        console.log("No autorizado")
        break; //Added
    case "Comandante":
        console.log("Necesita autorización de su superior")
        break;//Added
    case "Capitan":
        console.log("Necesita autorización de su superior capitan")
        break;//Added
    case "Coronel":
        console.log("Autorizado")
        break;//Added
    case "General":
        console.log("Usuario Autorizado")
        break;//Added
    default:
        console.log("Respuesta Usuario no autorizado")
        break;
}




//Tarea

/*
1.-En este ejemplo el "switch(this.opciones){" esta demas ya que  no ahi una funcion declarada  o dentro del scope
2.-El switch esta esperando strings no numeros
*/

var opciones;
// opciones = '2'
// opciones = '43'
opciones = '54'
// opciones = '430'
// opciones = 43

switch(opciones){
    case '2':
        console.log("No autorizado")
        break;
    case '43':
        console.log("Necesita autorización")
        break;
    case '54':
        console.log("Autorización requerida")
        break;
    default:
        console.log("Respuesta default: Usuario no autorizado")
        break;
}


/*
1.-En este ejemplo el "this.dealer" esta demas ya que  no ahi una funcion declarada  o dentro del scope
2.-El switch esta esperando strings no numeros
*/


var dealer = 4
//dealer = 5
// dealer = 8
// dealer = 12

console.log("Valor de la variable 'dealer' = ", dealer)
console.log("Switch imprime:")
var x = dealer;
switch (true) {
    case (x < 5):
        console.log("less than five");
        break;
    case (x < 9):
        console.log("between 5 and 8");
        break;
    case (x < 12):
        console.log("between 9 and 11");
        break;
    default:
        console.log("none");
        break;
}


/*
outputs:
Valor de la variable 'dealer' =  4
Switch imprime:
less than five

Valor de la variable 'dealer' =  5
Switch imprime:
between 5 and 8

Valor de la variable 'dealer' =  8
Switch imprime:
between 5 and 8

Valor de la variable 'dealer' =  9
Switch imprime:
between 9 and 11

Valor de la variable 'dealer' =  12
Switch imprime:
none


var dealer = a
             ^
ReferenceError: a is not defined


*/