// Ejercicio 1
//? Quién soy y qué hago
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
//? ¿En qué orden se ejecutan los scripts? ¿Por qué?
console.log("Puse dos breakpoints en aboutme.js, uno en la línea 3 (fullName) y otro en la línea 7 (console.log).");
console.log("Y uno en este archivo en la línea 2.");
console.log("Primero se detuvo en las líneas 3 y 7 de aboutme.js, luego en la línea 2 de este archivo");
console.log("Esto se debe a que index.js importa aboutme.js, por lo que se ejecuta primero el código de aboutme.js y luego el de index.js");
console.log("Debido a que JS es un lenguaje interpretado, se ejecuta línea por línea y lo primero que se encuentra, es el import de aboutme.js");

// Ejercicio 3
//? Números divisibles por 7 del 1 al 100
const divisibleBy7 = [];
for (let number = 1; number <= 100; number++) {
    if (number % 7 === 0) {
        divisibleBy7.push(number);
    }
}
console.log(`Números divisibles por 7 del 1 al 100: \n ${divisibleBy7.join(" | ")} `);

// Ejercicio 4
/**
 * 
 * Siguiendo el ejemplo anterior, imagina que has usado un bucle como este:
        for(var i = 0; i < 101; i++) {
            // Solución
        }
        console.log(i);
 * ¿Qué valor tendrá la variable i al finalizar el bucle? ¿Por qué? 
 * ¿Habría alguna forma de evitar que la variable i se declare de forma global?
 *
*/

console.log("El valor de la variable i al finalizar el bucle también será 100");
console.log("Debido a que la variable i indica que sea menor a 101, por lo que el bucle se ejecutará hasta que i sea 100");
console.log("Para evitar que la variable i se declare de forma global, \n se puede declarar con let en lugar de var. Rev ES6 introdujo let y const para declarar variables, let es una variable de bloque, por lo que solo existe dentro del bloque en el que se declara.");

// Ejercicio 5

//? ¿Cuáles son las diferencias entre ejecutar un fichero JavaScript en un navegador web en formato <script> y en formato <script type=”module”>?.

console.table([
    {
        "Formato <script>": "No se puede usar import ni export",
        "Formato <script type='module'>": "Se puede usar import y export",
    },
    {
        "Formato <script>": "Variables globales",
        "Formato <script type='module'>": "Variables de bloque",
    },
    {
        "Formato <script>": "Carga de forma síncrona",
        "Formato <script type='module'>": "Carga de forma asíncrona",
    }
]);

// Ejercicio 6
//? Trabajo con objetos
let formatter = { prefix: 'Hello' };

formatter.append = function (string) {
    return `${this.prefix} ${string}`;
};

console.log(formatter.append('World'));

//? Una vez el objeto esté creado añade mediante el atributo prototype 
//? otro método que acepte también un solo argumento e imprima esa misma cadena en minúsculas.

formatter.toLowerString = function (string) {
    return string.toLowerCase();
};

console.log(formatter.toLowerString("Hi I'm Christian!"));


