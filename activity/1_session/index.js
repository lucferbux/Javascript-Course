// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
import "./aboutme.js";
debugger;
console.log("Ejercicio 2");

// Ejercicio 3
/*	En un navegador las herramientas de desarrollador sirven para revisar a detalle el código. Específicamente el inspector sirve para examinar y modificar el contenido y también la estructura de la página web. También puede mostrar cómo se el contenido en los diferentes dispositivos.
La consola sirve para depurar el código, imprimir mensajes y probar funcionalidades.*/

// Ejercicio 4
import "./numbers.js";
console.log("Ejercicio 4");

// Ejercicio 5
/* diferencias entre <script> y <script type=”module”>:
- la ejecución de <script> se realiza de forma síncrona, se ejecuta de forma global y por tanto sus 
  variables son globales también. La desventaja es que no permite el uso de nuevas herramientas de ES6.

  Documentación:
  <script>: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
 <script type="module">: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
*/


// Ejercicio 6
const formatter = {
  prefix: "Hello ",
  append: function(text) {
    console.log(this.prefix + text);
  }
};

formatter.append("World"); // Imprime "Hello World"



