/*
var eName;
eName = 'Salo'

function miNombre(eName){
    return "Hola " + eName;
}

console.log(eName); //imprime la variable
console.log(miNombre); //imprime la funcion como tal
console.log(miNombre(eName)); //imprime el return de la funcion
console.log(miNombre('Omar'))//imprime el return de la funcion
console.log(miNombre(eName='SanNahuel')); //reasignando la variable 'eName' imprime el return de la funcion
*/

/******************+ */
console.log("/*************************** */\n")

//var suma;
function suma(num1,num2){
    return num1 + num2
}

console.log(suma(9,2))

console.log("/***** flecha ******\n/")

var sum2 = (num3,num4) => num3 + num4;
console.log(sum2(9,1))


/******************+ */
console.log("/*************************** */\n")

var cuadrado = a => a * a;
console.log(cuadrado(2))


/******************+ */
console.log("/********funciones con IF */\n")

function checkNumero(numero){
    if(numero === 40){
        console.log('Correcto')
    } else{
        console.log('Incorrecto')
    }
}
//No tiene return por eso es 'undefined' cuando se quiere imprimir en consola
console.log(checkNumero(40));//output= undefinded
checkNumero(40);

console.log("/********funciones con IF-return */\n")
function checkNumero2(numero2){
    if(numero2 === 40){
        return 'Correcto'
    } else{
        return 'Incorrecto'
    }
}

console.log(checkNumero2(40));//imprime
checkNumero2(40); //no imprime nada por que la funcion on tiene console.log, 


/******************+ */
console.log("/*************************** */\n")
console.log("Funcion que diga si un numero es impar o par")

function parImpar(numero3){
    if(numero3 % 2  == 0 )
        return `Numero "${numero3}" es Par`
    else
        return `Numero "${numero3}" NO ES Par`

}
console.log(parImpar(2))
console.log(parImpar(3))
console.log(parImpar(100))
console.log(parImpar(5))
console.log(parImpar(5.2))

