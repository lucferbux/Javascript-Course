// Ejercicio 1
import { phase } from "./aboutme.js";

console.log(phase);

console.log("Ejercicio 1");

// Ejercicio 2
    //Se ejecuta primero el contenido del fichero “aboutme.js”, posteriormente de crear la frase se llama a los consoles.log del index.js.

// Ejercicio 3
    /*
    1.	Application: Existe un panel de aplicación el cual permite inspeccionar los recursos que componen su aplicación web. Asimismo, se puede ver qué archivos se cargan y qué cookies y almacenamiento local se utilizan.
    También puede usar el panel de aplicaciones para manipular los datos de la aplicación web. Un ejemplo es para borrar los datos de su aplicación web. Esto borrará todos los datos de su aplicación web, incluidas las cookies, el almacenamiento local y la memoria caché del navegador.
    2.	Security: El panel de Seguridad permite inspeccionar la configuración de seguridad de la página web. También, puede ver qué permisos tiene la página y qué vulnerabilidades de seguridad pueden estar presentes.
    Otra característica importante es que se puede usar el panel de Seguridad para cambiar la configuración de seguridad de su página web.
    3.	Performance: El panel Rendimiento permite ver el rendimiento de la página web. Se puede ver qué recursos consumen tiempo y dónde se producen cuellos de botella. Esto con la idea principal de poder saber de forma mas rápida con solucionar el alto consumo de tiempo.
    Una funcionalidad importante que se puede utilizar en el panel Rendimiento es registrar un perfil de rendimiento. Esto comenzará a registrar información sobre el rendimiento de su página y los recursos establecidos. 

    */


// Ejercicio 4
dividedSevent();
function dividedSevent() {
    for (i = 1; i <= 100; i++) {
        if (i % 7 == 0) {
            console.log(i);
        }
    }
};

// Ejercicio 5
    /*<script type=”module”>
    •	Se utiliza en Javascript en modo estricto, está limitado a ese bloque en específico.
    •	Se pueden importar otros módulos de Javascript en la etiqueta

    <script>
    •	Normal se ejecuta en modo no estricto de forma predeterminada. Tienen un alcance global. Estos están disponibles incluso dentro de las etiquetas de secuencia de comandos del módulo.
    •	No se pueden importar módulos, la declaración de importación arrojará un error de sintaxis.
    */

// Ejercicio 6

const formatter = {
    prefix: 'Hello',
};

append("Master"); //llamada a a la funcion;

// crea una varible con la concateacion de los dos strings
function append(value) {
    var concat = formatter.prefix + ' ' + value;
    console.log(concat);
};