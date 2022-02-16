var a = 1;
let b = 45;
var c = 6;
var d;

d = a + b

console.log(d)
console.log('El resultado de la variable d: ', d)
console.log(`El valo der ${a} + ${b} = `,a + b)

const cinco = 5;
const diez = 10;

console.log("qiunce es " + (cinco + diez) + ' y no ' + (2 * diez + 2));

var numero = 8;
console.log('Variable: ',numero);
console.log("suma: ", numero += 2);
numero/= 2;
console.log("valor de numero es : " , numero);
console.log(numero/=2)
console.log(numero*=25)
numero = 5
console.log(numero %= 10)


let text1 = 'John';
let text2 = 'Smith';
console.log(text1,text2)
let numeros = 123;
console.log(numero)
let text3 = text2 + text1
console.log(text3)

var mycadena = 'alfa'
mycadena +='beto'
console.log(mycadena)

let x = 5 + 5
let y = '5' + 5
let z = 'hello' + 5
console.log(x,y,z)
console.log(typeof x,typeof y,typeof z)

// desestructuracion
var foo = ['one','two','three'];
console.log (foo)

var one = foo[0];
var two = foo[1];
var three = foo[2];
console.log(one,two,three)

var [one,two,three] = foo; //arreglo que se asigna a una variable
console.log([one,two,three]);
console.log([one])
console.log([three])
console.log('12'>2)
console.log('salo' < 2)
//--> Checar si de esta manera se puede re-asignar la pocision del arreglo

console.log('################ NOT')

console.log(!true)
console.log(!false)
console.log(!'gato')

console.log("##############Exercise")
console.log("'gato'&&'perro'="+'gato'&&'perro')

console.log("true &&'perro' ="+ true &&'perro')
console.log(false &&'perro')

console.log('gato'&& true)
console.log('gato'&& false)