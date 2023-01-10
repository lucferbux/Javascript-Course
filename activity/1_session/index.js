// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
// R// Se ejecuta primero todo el contenido del archivo “aboutme.js” y 
// posteriormente se ejecuta el console.log().

// Ejercicio 3
/**
 *  1. Console: la consola me parece una herramienta que permite hacerle seguimiento a mensajes que nos 
 *      pueden permitir identificar comportamientos esperados o inesperados dentro del codigo.
    2. Network: la pestana de network nos permite identificar claramente los recursos web que la aplicacion 
        esta llamando, tales como servicios o api REST o GraphQL, asi como detalla el contenido tanto del request 
        como del response y su respectivo status code, por ende, esta herramienta nos permite monitorear el 
        comportamiento de la app a la hora de consumir recursos externos.
    3. Aplication: esta herramienta permite identificar si nuestra aplicacion esta utilizando recursos locales
        como cookies, local storage, etc. Por ende, nos permite identificar si nuestra aplicacion esta utilizando
        de manera correcta los recursos locales del cliente, ej: almacenando una cookie que utilizaremos para 
        recordar datos especificos del cliente.
 */

// Ejercicio 4

for(let i = 1; i <= 100; i++) {
    if(i % 7 == 0) {
        console.log(i);
    }
}

// Ejercicio 5

/**
 * Existen varias diferencias relacionadas con la forma de definir una seccion de codigo que va a ejecutar
 * codigo JavaScript:
 * 
 * Si utilizas solo <script>, en cualquier seccion del codigo html podras reutilizar 
 * las variables y funciones de manera global, a diferencia de definir la seccion como type="module", la 
 * cual restringira el uso de los componentes solo al scope de esta seccion.
 * 
 * 
 * Dentro de una seccion del tipo => type="module" se podran importar modulos externos de JS, en cambio en
 * un context <script> esto sera traducidoc como un error de sintaxis.
 * 
 * En una seccion o contexto <script> el uso del "this" sera igual a "window", a diferencia del conexto
 * del tipo type="module", donde el uso del this sera undefined.
 */

// Ejercicio 6
import "./formatter.js";
