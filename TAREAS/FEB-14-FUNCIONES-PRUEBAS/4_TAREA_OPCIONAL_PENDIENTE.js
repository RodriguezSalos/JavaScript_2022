/*
Tareas opcionales:
1era: Funcion de Palindromos, identificar que si una cadena ingresada es un palindromo o no, ejemplo Ana ----> Es un palindromo, Carro ----> No es un palindromo

*/
//TAREA: Palindromo "ana, "oso, "casa"
/*
input output
casa    No es palindromo
oso     Si es palindroo
ana     Si es un palindromo
*/




/*
2da: Funcion Una manzana para NOMBRE y una manzana para mi, 
ejemplo: Si un nombre es ingresado, imprimir Una manzana para NOMBRE y una manzana para mi, si no es ingresado, imprimir Una manzana para TI y una manzana para mi

input output
Marcia una manzada para Marcia  y otra para mi
Paco una manzana para Paco y otra para mi
"" una manzana para Ti y otra para mi
*/

var manzana = (nombre = "Ti")=> `Una manzana para ${nombre} y otra para mi`
console.log(manzana("Marcia"))
console.log(manzana("Paco"))
console.log(manzana())

//3era: Utilizando un for crear 10 propiedades para un objeto

