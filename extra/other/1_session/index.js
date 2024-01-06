// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2

// Se ejecuta antes la llamada al aboutme.js, ya que javascript primero ejecuta el código importado para poder usarlo en el fichero principal.

// Ejercicio 3

for (let i = 0; i < 101; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}

// Ejercicio 4

// for(var i = 0; i < 101; i++) {
//   // Solución
// }
// console.log(i);


// Tendrá valor de 101
// El valor de i es 101 porque es el último valor que se le asigna en el bucle for, y al ser var, es una variable global, por lo que se puede acceder a ella desde fuera del bucle.
// Cambiándolo a let

const alternative = Array.from(Array(101).keys()).filter(
  (number) => number % 7 === 0
); // Alternative
console.log(alternative);

// Ejercicio 5

// La diferencia principal es que <script> es un script tradicional JavaScript y <script type="module"> hace la importación como módulos, esto tiene las siguientes implicaciones:

// - Los módulos son "singletons". Se cargarán y ejecutarán una única vez.
// - Los módulos pueden usar import and export
// - Los módulos se ejecutan siempre en modo estricto.
// - Todos los objetos (clases, constantes, funciones, let o var) son privados a excepción de ser explicitamente exportados.
// - El valor the "this" es undefined en el scope global (no es window).
// - Los módulos se cargan asíncronamente.
// - Los módulos se cargan usando CORS.
// - Los imports se resuelven de forma estática en tiempo de arranque y no dinámicamente en tiempo de ejecución

// Ejercicio 6

function Formatter() {
  this.prefix = "Hello ";
  this.append = function (suffix) {
    console.log(`${this.prefix} ${suffix}`);
  };
}

let formatter = new Formatter();

formatter.append("World");

Formatter.prototype.toLowerString = (message) => {
  console.log(message.toLowerCase());
};

formatter.toLowerString("Hello ALL");
