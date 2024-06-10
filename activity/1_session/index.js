// Ejercicio 1
import {  aboutMe } from "./aboutme";
console.log("🎈 Ejercicio 1");

console.log(aboutMe);

// Ejercicio 2
console.log("🎈 Ejercicio 2");
const myAnswer =  "El orden de ejecución es debido a cómo funciona la importación de modulos en JavaScript y/o" +
    " TypeScript. El contenido en aboutme.js se ejecuta antes que la llamada del console.log('Ejercicio 1'); en el index.js"
console.log(myAnswer);

// Ejercicio 3
console.log("🎈 Ejercicio 3")
/**
 * Divisible by 7 with for
 */
for (let i = 1; i <=100; i++){
    if(i % 7 === 0){
        console.log(i);
    }
};

// Ejercicio 4
console.log("🎈 Ejercicio 4");
const myAnwer4 = "Al finalizar el bucle el valor de i sera 101, esto es porque se declara de forma global con " +
    "var y para que no se declare fuera del bloque se tiene que declarar con let, asi no existirá fuera de ella el valor" +
    " que tendria es de 100"
console.log(myAnwer4);

// Ejercicio 5
console.log("🎈 Ejercicio 5");
/**
 * ¿Cuáles son las diferencias entre ejecutar un fichero JavaScript en un navegador web en formato <script> y
 * en formato <script type=”module”>?. Busca documentación para enumerar los principales comportamientos de ambas.
 * */

const myAnswer5 = `La diferencia entre ejecutar un script solo con <script> es que al momento de importarlo en el
    html se ejecuta hasta la linea en la que llega a esa etiqueta <script>. Mientras el que <script type='module'>
    se puede ejecutar asincronamente en el navegador sin alterar las variables que esta en la etiqueta <script>. 
    a su vez solo se ejecuta una vez el tipo module en el navegador.`;

/**
 * https://es.javascript.info/modules-intro
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 * https://desarrolloweb.com/articulos/es6-modules.html
 * */

console.log(myAnswer5);


// Ejercicio 6
console.log("🎈 Ejercicio 6");
/**
 *     • Crea un objeto llamado formatter con un atributo, que llamaremos “prefix”, que tendrá de valor “Hello “,
 *     y un método que llamaremos “append”, que imprimirá la concatenación entre el atributo “prefix” y la cadena que
 *     pasemos como argumento en el método. formatter.append(“World”) // Result: Hello World
 *     • Ahora añade mediante el atributo prototype otro método que acepte también un solo argumento e imprima esa misma
 *     cadena en minúsculas. formatter.toLowerString(“I’m Lucas”) // Result: i’m lucas
 * */

const formatter = {
    prefix: "Hello ",
    append: function (append){
        console.log(this.prefix + append);
    }
}

const name = {
    function(string){
        console.log(string.toLowerCase());
    }
}

formatter.append("World");
name.function("I’m César Ibarra");

