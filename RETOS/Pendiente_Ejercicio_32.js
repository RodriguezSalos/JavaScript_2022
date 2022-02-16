//Jueves Feb 10
//el pilon

function insertarNombre(nombre) {

    let nombre
  
    if (nombre == "") {
      console.log("El nombre no puede estar vacio");
    } else {
      let opcion = "  " + nombre + " ";
  
      let lista ;
  
      lista += opcion;
      console.log("La lista es: " , lista)
      return("Se ha insertado el nombre");
  
    }
  
  }
  
  console.log(insertarNombre())
  console.log(insertarNombre("Casa"))
  console.log(insertarNombre("Luisa"))
  console.log(insertarNombre('Jose'))