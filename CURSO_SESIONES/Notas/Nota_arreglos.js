/*
para agregar arreglo --> push() 
*/
var arreglo = []; //arreglo vacio
console.log(arreglo)
arreglo.push(1)
console.log(arreglo)

//Remover el 1er elemento del arrays -->shift()
var arreglo1 = ['Salo',37,'Rodriguez',true];
console.log(arreglo1) //[ 'Salo', 37, 'Rodriguez', true ]
arreglo1.shift()
console.log(arreglo1) //[ 37, 'Rodriguez', true ]

//Agregar elemento en el 1er lugar del array -->unshift()
var arreglo2 = ['Salo',37,'Rodriguez',true];
console.log("arreglo2 antes del unshift = " , arreglo2) //arreglo2 antes del unshift =  [ 'Salo', 37, 'Rodriguez', true ]
arreglo2.unshift(3)
console.log("arreglo2=" , arreglo2) //arreglo2= [ 3, 'Salo', 37, 'Rodriguez', true ]

//Para tomar un elemento del array --> array[index]
console.log(arreglo1[2])

//Para reasignar algun valor del array --> array[index] = reasignar valor
arreglo1[2] = false
console.log(arreglo1) 
