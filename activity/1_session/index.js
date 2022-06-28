// Ejercicio 1
import {presentation} from './aboutme.js';
console.log(presentation);

console.log("Ejercicio 1");

// Ejercicio 2
//break poitns en la vista de consola 


// Ejercicio 3


// Elements : Muestra el HTM que es renderisado en la paguina actual.
// Console: Muestra el resultado del codigo de la ejecucion de javascript , Errores y mensajes por consola (console.log())
// Resources: Muestra los elementos con que se cargado la pagina actual incluyendo imagenes y archivos HTML y Javascript.



// Ejercicio 4

for (let i = 1 ; i <= 100 ; i++) {
    if (i % 7 ===0){
        console.log(`${i} Es divisible por 7`)
    } 
}

// Ejercicio 5 

// Para el modo de importacion solo <script> se importa solo el codigo de ejecucion de alrchivo , en cambio la importacion con type="module" añande la funcionalidad de modulos de EMS6


// Ejercicio 6

function Formatter() {
    this.prefix = "Hello";
    this.append = function (dato)  {
      console.log("Starting engine...");
      console.log(`${formatter.prefix} ${dato} `);
    }
  };
  const formatter = new Formatter()
  formatter.append("World");

Formatter.prototype.toLowerString = function(dato) {
    console.log(dato.toLowerCase())
};
formatter.toLowerString(`I'am Lucas`);
