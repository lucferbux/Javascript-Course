// Ejercicio 1
import { aboutMe } from './aboutme.js';
import { generateNumberBySeven, exampleActivityFour } from './utils.js'
console.log('Ejercicio 1 ----')
console.log(aboutMe());

// Ejercicio 2
console.log("Ejercicio 1");

// Ejercicio 3

const number = 7
generateNumberBySeven(number);

// Ejercicio 4

//Si lo añades dentro de una funcion la declaración globa de i daría error ReferenceError
//Si sacaramos ese for fuera de la función ese campo i 
//hacer global se utilizaría en todo el script

//Solución dentro de una función
exampleActivityFour()

//Solución cambiando la declaración 
for (let i = 0; i < 101; i++) {
    // Solución
}
try {
    console.log(i); // Esto causará un ReferenceError
} catch (e) {
    console.log('Error:', e.message); // Captura y muestra el error
}


// Ejercicio 5

// Ejercicio 6

const formatterProp = {
    prefix: "Hello ",
    append: function(str) {
        console.log(this.prefix + str);
    }
};

formatterProp.__proto__.toLowerString = function(str) {
    console.log(str.toLowerCase());
};



formatterProp.append("World"); 
formatterProp.toLowerString("I’m Jose"); 