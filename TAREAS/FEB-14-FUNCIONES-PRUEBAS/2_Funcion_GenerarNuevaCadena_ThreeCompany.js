/*
2da Tarea: Funcion Three company,, de una cadena ingresada generar una nueva cadena que contenga cada caracter triplicado de la cadena ingresada, ejemplo Yuri como input, YYYuuurrriii como output
*/


// chatAt(i) * separar una letra de una cadena cadena.charAt(*la letra que queremos separa)
var cadena = 'Salo';
//console.log(cadena.length)
// var n = cadena.charAt(1);
//  console.log(n)
 var arreglo = []
 console.log("tamaño de cadena: ", cadena.length)
//


 for(i=0; i < cadena.length; i++){
     var n = cadena.charAt(i);
     arreglo.push(n);
     arreglo.push(n);
     arreglo.push(n);

 }
 console.log(arreglo)
 console.log("tamaño de arreglo: ", arreglo.length)
