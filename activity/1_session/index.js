// Ejercicio 1
import aboutMe from "../../aboutMe.js"
console.log("%cEjercicio 1", "color: red;");

// Ejercicio 2
console.log("Se ejecuta primero el contenido del fichero aboutme.js y por último el console.log")
console.log("%cEjercicio 2", "color: red;");

// Ejercicio 3
console.log('%cModo de diseño adaptable:', 'font-weight: 700; text-decoration: underline', 'Hacer el testeo del frontend emulando dispositivos de diferentes tamaños en el navegador.')
console.log('%cPanel de almacenamiento:', 'font-weight: 700; text-decoration: underline', 'Agregar, modificar y eliminar caché, cookies, bases de datos y datos de sesión.')
console.log('%cEditor de estilos:', 'font-weight: 700; text-decoration: underline', 'Editar y administrar todas las hojas de estilo CSS dentro del navegador.')

console.log("%cEjercicio 3", "color: red;");

// Ejercicio 4
const numbers = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 7 == 0) {
            console.log(i);
        }
    }
}
numbers()
console.log("%cEjercicio 4", "color: red;");
// Ejercicio 5
console.log('El <script> normal necesita que le especifiquen el uso estricto mientras que <script type="module"> ya se ejecuta en modo estricto.')
console.log('<script type="module"> tiene su propio scope mientras que el scope del <script> normal es global.')
console.log('<script type="module"> puede importar modulos externos (import { someModule } from "./js/modules") mientras que el <script> normal mostraria un error de sintaxis.')
console.log('<script type="module"> puede usar el atributo async (<script type="module" async>) mientras que el <script> normal solo puede usar async con archivos JS externos.')
console.log("%cEjercicio 5", "color: red;");

// Ejercicio 6 
const Formatter = function (prefix, append) {
    this.prefix = prefix,
        this.append = append
}


const formatter = new Formatter("Hello ", function (word) {
    formatter.prefix += word 
});

formatter.append("World")
console.log(formatter.prefix)

Formatter.prototype.toLowerCase = (word) => {
    const result = word.toLowerCase() 
    console.log(result)
    return result
}


formatter.toLowerCase("Soy Oscar")

console.log("%cEjercicio 6", "color: red;");