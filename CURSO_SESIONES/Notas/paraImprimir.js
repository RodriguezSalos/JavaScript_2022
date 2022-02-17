//Una funcion dentro de una funcion

function ejecutar(algunaFuncion, valor){
    algunaFuncion(valor);
}

function decir(palabra){
    console.log(palabra);
}

ejecutar(decir,'hola');