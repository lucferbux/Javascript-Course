// Ejercicio 1 
console.log("Ejercicio 1:");
const getObjectProperties = (obj) => {
  return Object.keys(obj);
};

const person = {
  name: "Lucas",
  age: 27,
  profession: "Developer"
};

const propertiesList = getObjectProperties(person);
console.log(propertiesList);
console.log(person);

// Ejercicio 2
console.log("Ejercicio 2:");
console.log(
`Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno.

Estos son algunos ejemplos básicos de los distintos contextos en los que puede encontrarse this en JavaScript:

1. Global Context, en un navegador será window:
   Al ejecutarlo en el programa principal, se refiere al objeto global (en un navegador será window).
   console.log(this === window); // En un navegador, esto sería true

2. Function Context, en una función, "this" se refiere al objeto global:
     function mostrarThis(){console.log(this); }
    // En un navegador:
        mostrarThis() // En este caso, this sería el objeto global
        mostrarThis() === window // true
      En una función en modo estrico, "this" es "undefined":
        function mostrarThisScrict() {return this;}
        mostrarThisScrict() === undefined; // true

3. Method Context:
   this apunta al objeto que contiene el método, al objeto propetario:
      let person = {
           name: "Paco Perez",
          greeting() {
           console.log(Hola, mi nombre es $ {this.name}) //editado para que pueda leerse en console.log, pero faltan simbolos para que funcione
           }
      }
      person.greeting(); // resultado: Hola, mi nombre es Paco Perez. 

    En un método con arrow function, "this" se refiere al contexto de la función.
          var name = "Nombre de var"
          let student = {
            name: "Pepe Navarro",
            greeting:() => {
            console.log(Hello, my name is $ {this.name}) //editado para que pueda leerse, pero faltan simbolos para que funcione
            }
          }
        // This will be Nombre de var as this.name references the global context and name is defined with Lucas
        student.greeting();

4. Constructor Context:
   "this" se refiere a la instancia del objeto creado por el constructor.
      function Persona(nombre) {
       this.nombre = nombre;
      }

const persona1 = new Persona('Juan');
console.log(persona1.nombre); // "this" se refiere a la instancia "persona1"


5. Event Handler Context:
   En el contexto de este manejador de eventos, "this" se refiere al elemento button:
   En <html> <button id="myButton">Click me</button> </html>
      document.getElementById('myButton').addEventListener('click', function() {
      console.log(this.textContent); // Muestra: "Click me"

6. Métodos como call(), bind() o apply(), modifican el valor de this al objeto que enlazan.
Call: Podemos usar call para llamar a una función añadiendo el contexto con algún objeto (y el resto de parámetros)
Apply: El mismo concepto que call pero pasando los parámetros como arrays      
Bind: Devuelve una función con el binding entre el objeto y la función. 
     Se usa por ejemplo para tener contexto del objeto en un callback
`
);

console.log(`¿Qué diferencias hay entre las arrow functions y las function expressions?

Se pueden utilizar para la misma función, pero tienen pequeñas diferencias. 
Sintaxis: 
-Arrow functions tienen una sintaxis más corta y concisa.
-Function expressions utilizan mas palabras por lo que tienden a ser mas largas.

this:
-En arrow functions, this está ligado léxicamente, 
lo que significa que toma el valor del "this" 
del contexto circundante en que la función es definida.
-En function expressions, this es dinámico y depende de cómo se invoca la función.

arguments:
-Arrow functions no tienen su propio objeto arguments.
-Function expressions tienen su propio objeto arguments.

En resumen, arrow functions son más compactas y tienen un comportamiento 
más predecible con respecto a this, y suelen utilizarse a menudo por acciones de una línea y callbacks;
mientras que function expressions ofrecen mayor flexibilidad en ciertos aspectos.`

);
// Ejercicio 3
console.log("Ejercicio 3:");
class InvertirCadena {
  constructor() {
    this.cadenaInvertir = ""; // Atributo que almacena la cadena a invertir
  }
  // Arrow function para invertir la cadena e imprimir el resultado:
  invertirEImprimir = () => {
    if (this.cadenaInvertir === "") {
      throw new Error("La cadena no puede estar vacía.");
    }

    const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
    console.log(cadenaInvertida);
    }
     nuevoMetodo = () => {
    console.log("Este es un nuevo método.");
  }
}

// Instanciar la clase en un objeto llamado invertirCadena
const invertirCadena = new InvertirCadena();

// Establecer la cadena a invertir
invertirCadena.cadenaInvertir = "Hola mundo";

// Llamar a la función para invertir e imprimir la cadena
invertirCadena.invertirEImprimir();



console.log(
`Respondiendo a las preguntas del Ejercicio 3:
1. Ejecuta primero la función sin cambiar cadenaInvertir.
   ¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?
    Se puede hacer que el código no rompa al ejecutarse proporcionando un valor predeterminado a cadenaInvertir en el constructor de la clase. 
    De esta manera, incluso si no se establece explícitamente un valor antes de llamar a invertirEImprimir, la cadena tendrá un valor predeterminado y no estará vacía.
        Modificación en el constructor:
            constructor() {
                this.cadenaInvertir = "Cadena por defecto"; // Valor predeterminado
            }

2. Ahora cambia el valor a cadenaInvertir y vuelve a llamar la función. ¿Cuál es el resultado?
      Si se cambia el valor de cadenaInvertir y se vuelve a llamar a invertirEImprimir, 
      la función imprimirá la cadena invertida del nuevo valor que se ha establecido. 
      Si se cambia cadenaInvertir a otro valor y se vuelve a llamar a la función, 
      se imprimirá la cadena invertida del nuevo valor.

      3. Por último, intenta acceder al siguiente método invertirCadena.nuevoMetodo().
   ¿Cómo podemos hacer para que no de un error?
      En el código proporcionado, no hay ningún método llamado nuevoMetodo definido en la clase InvertirCadena.
      Para evitar un error al intentar acceder a invertirCadena.nuevoMetodo(), 
      se debe definir el método nuevoMetodo en la clase InvertirCadena.
      
      Añadir tras la constante cadenaInvertida, el siguiente código:
          nuevoMetodo = () => {
          console.log("Este es un nuevo método.");}
     
          Y de resultado:
      invertirCadena.nuevoMetodo(); // No dará un error, imprimirá "Este es un nuevo método."
`     
);


// Ejercicio 4
console.log("Ejercicio 4");

class ejercicio4 {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  loginEj4() {
    if (this.username === 'admin' && this.password === 'passwd') {
      alert('Ejercicio 4: User logged in');
    } else {
      alert('Ejercicio 4: User or password incorrect');
    }
  }
}
let logginGood = new ejercicio4('admin', 'passwd');
let logbad = new ejercicio4('pepe', 'bad');
console.log(`Ejemplos de uso:
logginGood.loginEj4(); // Alerta: User logged in
logbad.loginEj4(); // Alerta: User or password incorrect`
);

// Ejercicio 5
// Supongamos que tienes una función llamada 'login' en tu archivo 'tu-archivo.js'
console.log("Ejercicio 5, hay que darle a los botones");
function login(username, password) {
    if (username === 'admin' && password === 'passwd') {
    return 'Ejercicio 5: User logged in';
  } else {
    throw new Error('Ejercicio 5: User or password incorrect');
  }
}

document.getElementById('loginSuccess').addEventListener('click', function () {
  try {
    const result = login('admin', 'passwd');
    alert(result);
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById('loginFailure').addEventListener('click', function () {
  try {
    const result = login('incorrect', 'credentials');
    alert(result); // Esta alerta nunca se mostrará si las credenciales son incorrectas
  } catch (error) {
    alert(error.message);
  }
});




// Ejercicio 6

console.log("Ejercicio 6, hay que darle a los botones Async");
async function loginWithUsername(username, password) {
  return new Promise((resolve, reject) => {
    // Simulación de una petición asíncrona
    setTimeout(() => {
      if (username === 'admin' && password === 'passwd') {
        resolve('Ejercicio 6 Async: User logged in');
      } else {
        reject(new Error('Ejercicio 6 Async: User or password incorrect'));
      }
    }, 1000); // Simulando un tiempo de espera de 1 segundo
  });
}

document.getElementById('loginSuccessAsync').addEventListener('click', async () => {
  try {
    const result = await loginWithUsername('admin', 'passwd');
    alert(result);
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById('loginFailureAsync').addEventListener('click', async () => {
  try {
    const result = await loginWithUsername('incorrect', 'credentials');
    alert(result); // Esta alerta nunca se mostrará si las credenciales son incorrectas
  } catch (error) {
    alert(error.message);
  }
});

