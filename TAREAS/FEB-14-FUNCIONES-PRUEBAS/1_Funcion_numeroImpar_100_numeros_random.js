/*
1era Tarea: Funcion que identifique si un numero es impar o par de una secuencia de numeros del 1 al 100 o con 100 numeros random
min 49  video 04
*/



var arreglo = []; //arreglo vacio
 console.log("Arreglo inicia = ", arreglo)

for (var i = 0; i <= 9; i++) {
    arreglo.push(Math.floor(Math.random()*(100-1))+1)
     
    var lastElement = arreglo[i]

    function parImpar(lastElement){
        if(lastElement % 2 == 0)
            return 'par'
        else
            return 'Impar'
    }
    console.log("elemento agregado es = " , lastElement ,"," , parImpar(lastElement))
}
console.log("Elementos en el arreglo: " , arreglo.length)
console.log("Arreglo termina = ", arreglo)

