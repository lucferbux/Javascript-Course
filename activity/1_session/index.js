// Ejercicio 1
 import aboutMe from "./aboutme.js";

//const aboutMe = require("./aboutme.js");
console.log("Ejercicio 1:");
console.log(aboutMe());

// Ejercicio 2
console.log("Ejercicio 2:");
console.log(
`En mi código, la llamada a console.log("Ejercicio 1:") se ejecuta después de que se ha cargado y
ejecutado el contenido del fichero aboutme.js. 
Esto se debe a que la importación de módulos en JavaScript es una operación síncrona y bloqueante.

Cuando el motor de JavaScript encuentra la declaración import aboutMe from "./aboutme.js";, 
carga y ejecuta el contenido del fichero aboutme.js 
antes de continuar con el resto del código en index.js.

Por lo tanto, cualquier código en aboutme.js se ejecutará antes que console.log("Ejercicio 1:").
 Sin embargo, hay que tener en cuenta que la función aboutMe()
 no se llama hasta después de console.log("Ejercicio 1:"), 
 por lo que cualquier código dentro de esa función se ejecutará después.`
);

// Ejercicio 3
console.log("Ejercicio 3:");
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// Ejercicio 4
console.log("Ejercicio 4:");

console.log(`Al finalizar el bucle, el valor de i será 101. 
Esto se debe a que el bucle continúa incrementando i hasta que i no es menor que 101.
En la última iteración, i se incrementa a 101, la condición i < 101 ya no se cumple, por lo que el bucle se detiene.
El código console.log(i); después del bucle imprimirá 101.
En cuanto a la segunda pregunta, sí, hay una forma de evitar que la variable i se declare de forma global. 
En lugar de usar var para declarar i, puedes usar let.
La diferencia entre var y let es su alcance: var tiene un alcance de función, mientras que let tiene un alcance de bloque. 
Esto significa que una variable declarada con let solo existe dentro del bloque en el que se declara.
Aquí está el código con let:
         for(let i = 0; i < 101; i++) {
          // Solución
         }
console.log(i); // Esto dará un error: ReferenceError: i is not defined
En este caso, si se intenta acceder a i después del bucle, se obtendrá un error ReferenceError: i is not defined, porque i solo existe dentro del bucle.`
);


// Ejercicio 5
console.log("Ejercicio 5:");
console.log(`La principal diferencia entre ejecutar un archivo JavaScript en un navegador web en formato <script> 
y en formato <script type="module"> radica en cómo se manejan los scripts y cómo se importan y exportan los módulos.

1. - <script>: Este es el método tradicional para incluir scripts en una página web. 
             Los scripts se ejecutan en el ámbito global, lo que significa que las variables 
             y funciones definidas en un script están disponibles en todos los demás scripts de la página. 
             Los scripts se cargan y ejecutan en el orden en que aparecen en el documento HTML.

2. - <script type="module">: Este es un método más reciente introducido con ES6 para incluir scripts que utilizan 
             la sintaxis de módulos de JavaScript. Los módulos tienen su propio ámbito, lo que significa que las variables 
             y funciones definidas en un módulo no están disponibles en el ámbito global a menos que se exporten explícitamente. 
             Los módulos también pueden importar funcionalidades de otros módulos utilizando la sintaxis import.
             Los módulos se cargan de forma asíncrona por defecto, lo que significa que no bloquean 
             la renderización de la página mientras se cargan.

Aquí hay algunas diferencias clave:
- Ámbito: Los scripts regulares tienen un ámbito global, mientras que los módulos tienen un ámbito de módulo. 
        Las variables y funciones definidas en un módulo no están disponibles en el ámbito global a menos que se exporten explícitamente.
 - Importación y exportación: Los módulos pueden utilizar la sintaxis import y export para importar y exportar funcionalidades entre módulos. 
        Los scripts regulares no pueden hacer esto.
- Carga: Los módulos se cargan de forma asíncrona por defecto, lo que significa que no bloquean la renderización de la página mientras se cargan. 
        Los scripts regulares se cargan de forma síncrona, lo que significa que bloquean la renderización de la página mientras se cargan.
- Caché: Los módulos se almacenan en caché después de su primera carga. Los scripts regulares no se almacenan en caché.
-Uso de use strict: Los módulos siempre están en modo estricto, mientras que los scripts regulares requieren 
                    la declaración "use strict" para habilitar el modo estricto.
- Referencias a this: En los módulos, la referencia de nivel superior a this es undefined, 
                      mientras que en los scripts regulares, this se refiere al objeto global window.
-Cors y MIME type: Los módulos son sujetos a la política de CORS y requieren un tipo MIME JavaScript correcto para ser ejecutados.`
);

// Ejercicio 6
console.log("Ejercicio 6:");

let formatter = {
    prefix: "Hello ",
    append: function(str) {
        console.log(this.prefix + str);
    },
    toLowerString: function(str) {
        console.log(str.toLowerCase());
    }
};

formatter.append("World"); // Outputs: Hello World
formatter.toLowerString("I’m Lucas"); // Outputs: i’m lucas

