//import { set } from "lodash";

// Ejercicio 1
function propiedadesObjEnArr(Objeto) {
        return Object.getOwnPropertyNames(Objeto);
}

objEx1 = {
    nombre    : "Juan",
    edad      : "48",
    profesion : "Ingeniero"
};

arreglo = propiedadesObjEnArr(objEx1);
// console.log(arreglo); // Devuelve (3) ['nombre', 'edad', 'profesion']

// Ejercicio 2

// "This" hacer referencia a un Objeto en distintos contextos:
// 1) Window  -- Contexto Global
var yearHoyVar = 2023;
// console.log(this.yearHoyVar);  // Devuelve 2023
// console.log(window.yearHoyVar); // Devuelve 2023 también ==> this == window
// console.log(yearHoyVar);        // Devuelve 2023 contexto global por default


// 2) a Objetos en distintos contextos
//    2.1) Objetos Globales si se referencian dentro de un función sin usar "use strict".

function validaContexto() {
         console.log(this.yearHoyVar); 
}
//console.log(validaContexto()); // Devuelve 2023 ==> "This" dentro de la función hace referencia al Objeto Global donde se encuentra "yearHoyVar" y 
                               // no busca un Objeto Local dentro de la función. De haberlo hecho así hubiera devuelto un "undefined"

//    2.2) se indefine cuando se usa posterior al uso de la clausula "use strict"
function validaContexto2() {
  let Interno = {
    yearHoyVar:2020
  }
  return this.yearHoyVar; 
}
// console.log(validaContexto2()); // Devuelve 2023 ==> "This" dentro de la función hace referencia al Objeto Global donde se encuentra "yearHoyVar" y 

// Se agrega 'use strict'

function validaContexto3() {
  'use strict';
  let Interno = {
    yearHoyVar:2020
  }
  return this.yearHoyVar; 
}
//console.log(validaContexto3()); // Devuelve un Error ya que "this" queda indefinifo producto de la clausula 'use strict' 
                                // ==> la función en sí, no es un valor de contexto para "this"


// 3) En Métodos dentro de un Objeto
//    3.1) "this" hace referencia a Propiedades del Objeto, cuando el Método se define sin emplear "Arrow Function"
var prome=2.0; // define window.promedio = 2.0

alumno = {
    curso:4,
    prome:6.0, // define alumno.promedio = 6.0 
    resultado() {console.log(`su nota promedio es : ${this.prome}`)}
}
// alumno.resultado() // Devuelve "su nota promedio es : 6"

//    3.2) Propiedades del Objeto pero en el Contexto Global, cuando el Método se define con "Arrow Function"
//         se redefine el objeto "alumno" usando ()=> en el Metodo "resultado"
alumno = {
  curso:4,
  prome:6.0, // define alumno.promedio = 6.0 
  resultado:() => {console.log(`su nota promedio es : ${this.prome}`)}
}
//alumno.resultado() // Devuelve "su nota promedio es : 2" --> ()=> establece que "this" apunte al Contexto Global y no del Objeto que aloja al Método.

// 4) En Funciones que reciben un Objeto:
//    4.1) al emplear método call()

function reporta(nota1, nota2) {
         return this.glosa + " : "+ (nota1+nota2)/2;
}

estudiante = {
nombre:"Luis",
glosa:" Ha obtenido un promedio igual a"
};
// console.log(reporta.call(estudiante,4,5));  // => Devuelve "Ha obtenido un promedio igual a : 4.5"


//    4.2) al emplear método apply()

notas = [5,6];
//console.log(reporta.apply(estudiante,notas)); // => Devuelve "Ha obtenido un promedio igual a : 5.5"

//    4.3) al emplear método bind()
testfunc = reporta.bind(estudiante); // Se crea función "testfunc" estableciendo un BIND entre el Objeto "estudiante" y la función "reporta"
                                         // en su interior se utiliza "this" para referencia la "glosa" del objeto "estudiante"
// luego se evalúa la nueva función con distintas notas. Se puede apreciar que no se ingresa el objeto a la función, si las notas,
// y la función devuelve la cadena completa conteniendo el vínculo a la "glosa" del objeto.
testfunc(5,3);   // Devuelve --> ' Ha obtenido un promedio igual a : 4'
testfunc(2,3);   // Devuelve --> ' Ha obtenido un promedio igual a : 2.5'
testfunc(2,5);   // Devuelve --> ' Ha obtenido un promedio igual a : 3.5'


// 5) al elemento que recibe un evento
// ¿?

// Ejercicio 3

InvertirCadena = class {
  constructor(cadenaInvertir) {
      this.cadenaInvertir = ""; //cadena vacia?  o null? 
      }
  invierte = (cadena) => {
     try {
          if (cadena === this.cadenaInvertir || cadena === null || cadena === undefined) throw new Error("Cadena vacia");
          let i = 0;
          function reversa(cad) {  // Función Recursiva
                i = cad.length-1;
                if (i >= 1) {
                   return cad[i] + reversa(cad.slice(0,-1));  
                   }  
                else {
                   return cad[i];
                   }
          }
          return reversa(cadena);
     }
     catch (msg) {
          console.log(msg.message); 
     }
  }
}


//Utilizando OPTIONAL CHAINING es posible anticipar una posible caída del programa y retornar un "undefined" en su defecto.
InvertirCadena.nuevoMetodo?.();



// Ejercicio 4


class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.login();    // La verdad no supe otra forma de invocar la función validadora. Es válido hacerlo así? hay una best practices definida?
  }
  login = () => {
    if (this.username === "admin" && this.password === "passwd") {
        window.alert("User Logged In");
    } else {
        window.alert("User or Password incorrect");
    }
  }
 
};


// Ejercicio 5

buttonLogOk = document.getElementById('loginSuccess');
buttonLogNotOk = document.getElementById('loginFailure');
buttonLogOk.addEventListener('click', (event) => { let login = new Login("admin","passwd"); } );
buttonLogNotOk.addEventListener('click', (event) => { let login = new Login("admin","pass123"); } ); 

// Ejercicio 6


let loginWitUsername = async (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
           if (username === "admin" && password === "passwd") { resolve("Async - User logged in");                     } 
           else                                               {rejected("Async - Error: invalid username or password");}}, 
           2000);
    });
};

buttonAsyncOk    = document.getElementById('loginSuccessAsync');
buttonAsyncNotOk = document.getElementById('loginFailureAsync');
buttonAsyncOk.addEventListener(   'click',(event) => { const logi = loginWitUsername("admin","passwd");
                                                       logi .then( (resolved)=>{ window.alert(resolved); } )
                                                            .catch( (rejected)=>{ window.alert(rejected); } )
                                                     } );
buttonAsyncNotOk.addEventListener('click',(event) => { const logi = loginWitUsername("admin","pass12");
                                                       logi .then( (resolved)=>{ window.alert(resolved); } )
                                                            .catch( (rejected)=>{ window.alert(rejected); } )
                                                     } ); 
//buttonAsyncOk.addEventListener(   'click', loginWitUsername("admin","passwd")
//                                                  .then( (resolved)=>{ window.alert(resolved); } )
//                                                 .catch( (rejected)=>{ window.alert(rejected); } ) );
//buttonAsyncNotOk.addEventListener('click', loginWitUsername("admin","pass123")
//                                                  .then( (resolved)=>{ console.log(resolved); } )
//                                                 .catch( (rejected)=>{ window.alert(rejected); } ) ); 
//logi
//    .then(  (resolve) => { window.alert(resolve); } )
//    .catch( (rejected) => { window.alert(rejected);} ) 
