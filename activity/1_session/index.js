// Ejercicio 1

import "../1_session/aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
console.log("New Breakpoint");

// Ejercicio 3

// Ejercicio 4

// Itera del número 1 al 100
for (let i = 1; i <= 100; i++) {
    // Comprueba si el número actual es divisible por 7
        if (i % 7 === 0) {
    // Si el número es divisible por 7 lo debe imprimir en la consola.
          console.log(i);
        }
      }

// Ejercicio 5

// Ejercicio 6

// Objeto, metodo append y atributo prototype

let formatter = {
    prefix: "Hello ",
    append: function(str) {
      console.log(this.prefix + str);
    }
  };
  
  formatter.__proto__.toLowerString = function(str) {
    console.log(str.toLowerCase());
  };
  
  formatter.append("World"); // Resultado: Hello World
  formatter.toLowerString("I'm Lucas"); // Resultado: i'm lucas