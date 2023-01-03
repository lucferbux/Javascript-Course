//Ejercicio 1
//Crea un script en ese fichero con tres variables.
//1 nombre y apellidos, 2 profesión y 3 puesto que querrías desempeñar o el que desempeñas actualmente.

//Variables
let names = "Oskary Sosa";
let profession = "Engineer";
let role = "Operations Manager";

//Template literals
let cadena = `Hello, my name is ${names} and I'm an ${profession}.
I'm studiying for this Master because I would like to work as an ${role}`;

//Muestra en pantalla
console.log(cadena);

export { cadena };
//Importa tu fichero aboutme.js en el fichero index.js
//en la parte del Ejercicio 1 antes del console.log(“Ej 1”).
