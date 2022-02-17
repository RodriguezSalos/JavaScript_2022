var personaObject = {
    firstName: 'Jonh',
    lastName: 'Smith',
    age: 34
}

console.log('Objeto persona: ', personaObject)

personaObject['salario'] = 100000;
console.log('Objeto persona: ', personaObject)


//-->PARA IMRPIMIR LAS PROPIEDADES DEL OBJETO #########
for( var member in personaObject){
    if(personaObject.hasOwnProperty(member)){
        console.log("el valor de member: ", member)
        console.log('La proiedad ' + member + 'tiene el valor '+ personaObject[member])
    }
}