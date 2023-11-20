// Ejercicio 1
import aboutMeMessage from "./aboutme.js";

console.log("Ejercicio 1");

console.log(aboutMeMessage);

// Ejercicio 2

console.log("Ejercicio 2");

console.log(
  "¿Qué se ejecuta antes, la llamada a console.log() o el contenido del fichero aboutme.js? ¿Por qué? \nEl contenido del fichero aboutme.js se ejecuta primero, ya que el orden de ejecución suele seguir la secuencia en la que se encuentran las líneas de código en el archivo y el flujo \nde ejecución natural del programa, en este caso el import del fichero estaba primero que el console.log (ScreenShots del resultado están en el index.html bajo la sección de este ejercicio)."
);

// Ejercicio 3

import numbers from "./numbers.js";

console.log("Ejercicio 3");

console.log(numbers);

// Ejercicio 4

import i from "./var-let.js";

console.log("Ejercicio 4");

console.log(
  "¿Qué valor tendrá la variable i al finalizar el bucle?\n",
  i,
  "\nPor que es una variable global ya que usamos var para declararla"
);

console.log();

console.log(
  "¿Habría alguna forma de evitar que la variable i se declare de forma global?\nUsando 'let' en vez de 'var' para declararla. Al utilizar let, i ya no sería accesible fuera del bucle y el intento de imprimir i después del bucle resultaría en un error de referencia (i is not defined). "
);
// Ejercicio 5
console.log("Ejercicio 5");

console.log(
  "¿Cuáles son las diferencias entre ejecutar un fichero JavaScript en un navegador web en formato <script> y en formato <script type=”module”>?. Busca documentación para enumerar los principales comportamientos de ambas.\n\n  * <script> (sin tipo especificado)\n\nCarga Sincrónica: Los scripts se cargan y ejecutan de manera síncrona. Esto significa que si hay varios scripts, el navegador los ejecutará en el orden en que se encuentran en el HTML, y el procesamiento de la página se detiene hasta que se complete la ejecución del script. \n\nÁmbito Global: Las variables y funciones declaradas en un script cargado con <script> se añaden al ámbito global (a menos que se utilicen estrategias específicas para evitarlo), lo que puede provocar posibles conflictos entre variables con el mismo nombre en diferentes scripts.\n\nNo hay importaciones/exportaciones: No admite las declaraciones import y export de ES6 para importar o exportar módulos. Esto significa que no se pueden usar módulos ECMAScript nativos, lo que limita la modularidad y reutilización de código.\n\n  * <script type='module'>\n\nCarga Asincrónica: Los scripts tipo módulo (<script type='module'>) se cargan de manera asincrónica por defecto. Esto permite que la página continúe cargándose mientras los módulos se descargan en segundo plano.\n\nÁmbito de Módulo: Los módulos tienen su propio ámbito y no añaden variables o funciones al ámbito global por defecto. Esto ayuda a evitar colisiones de nombres y a mantener la encapsulación del código.\n\nImportaciones/Exportaciones: Admite las declaraciones import y export de ES6 para importar y exportar módulos. Esto facilita la modularidad y reutilización del código, permitiendo la estructuración y organización del código en módulos independientes.\n\nPolítica de CORS: Los scripts de módulos tienen una política de CORS más estricta en comparación con los scripts tradicionales. Los navegadores pueden rechazar la carga de módulos desde orígenes no permitidos por la política de CORS."
);

// Ejercicio 6

console.log("Ejercicio 6");

const formatter = {
  prefix: "Hello ",
  append: function (str) {
    console.log(this.prefix + str);
  },
};

formatter.append("World"); // Result: Hello World

formatter.toLowerString = function (str) {
  console.log(str.toLowerCase());
};

formatter.toLowerString("I’m Kari"); // Result: i’m Kari
