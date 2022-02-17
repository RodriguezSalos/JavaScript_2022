/*
1era Tarea: Funcion que identifique si un numero es impar o par de una secuencia de numeros del 1 al 100 o con 100 numeros random
min 49  video 04
*/


var arreglo = []; //arreglo vacio
 console.log(arreglo)

for (var i = 0; i <= 100; i++) {
    arreglo.push(i);
    
    function parImpar(i){
        if(i % 2 == 0)
            return 'par'
        else
            return 'Impar'
    }
    console.log("elemento agregado es = " , i ,  "," ,  parImpar(i))
}
//console.log("arreglo = " , arreglo , "\n")