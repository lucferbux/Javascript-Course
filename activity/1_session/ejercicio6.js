//Objetos. Almacenan propiedades, que son una dupla de clave-valor
//Donde la clave es una cadena o string y el valor puede ser cualquier otro tipo.

//Declarando el objeto
let formatter = {
  prefix: "Hello",
};

//Funcion que me va a unir
function append(name) {
  console.log(this.prefix, name);
}

// Se grega la función "append" al objeto
formatter.append = append;

//Imprimir la cadena con el argumento "World"
formatter.append("World");
/////////////////////////////////////

//Funcion que pone la minuscula
function toLowerString(nombre) {
  console.log(nombre.toLowerCase());
}

//Se agrega
formatter.toLowerString = toLowerString;

//Se imprime
formatter.toLowerString("I'M OSKARY");
