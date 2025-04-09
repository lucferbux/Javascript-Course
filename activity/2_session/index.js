import { thisInStrictMode } from './strict_mode.example.js';
// Ejercicio 1
//? Escribe una arrow function que tome como entrada un objeto y devuelva una 
//? lista con sus propiedades. Solo puede tener como entrada un objeto y el tipo de vuelta tiene que ser un array.

const person = {
  name: "Lucas",
  age: 27,
  profession: "Developer",
}
const objectProperties = (obj) => {
  return Object.keys(obj);
}
console.log('Ejercicio 1');
console.log(objectProperties(person));
// Ejercicio 2
//? 1) Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno.
//? 2) ¿Qué diferencias hay entre las arrow functions y las function expressions?

//* 1)
console.log('Ejercicio 2 \n 1) valores de this:');
console.log('El valor de this puede variar en 7 contextos distintos:');
console.log('1. Global Context: this es igual a window');
function globalContext() {
  console.log('this en global context:', this); // mostrará undefined en el navegador
}
globalContext();
console.log('2. En un objeto (object method): this es igual al objeto que contiene el método');
const obj = {
  name: 'Lucas',
  sayName: function () {
    console.log('this en object method (mostrará el nombre):', this.name);
  }
}
obj.sayName();
console.log('3. En un constructor (new keyword): this es igual a la instancia del objeto');
class Person {
  constructor(name) {
    this.name = name;
    console.log('this en constructor (mostrará el nombre):', this.name);
  }
}
const lucas = new Person('Lucas en el Constructor');
console.log('4. En contexto de Strict Mode: this es igual a undefined');
thisInStrictMode();

console.log('5. En un evento del DOM: this es igual al elemento que disparó el evento (Pincha en el botón)');
document.getElementById('thisInDOM').addEventListener('click', function () {
  console.log('this en evento del DOM:', this);
});

console.log('6. Usando call, apply o bind: this es igual al objeto pasado como argumento');
function sayName() {
  console.log('this en call, apply o bind:', this.name);
}
const userCall = {
  name: 'Lucas en call'
}

const userApply = {
  name: 'Lucas en apply'
}

const userBind = {
  name: 'Lucas en Bind'
}

sayName.call(userCall);
sayName.bind(userBind)() //en este case se aplican los parentesis para que se ejecute la función;
sayName.apply(userApply);

console.log('7. En una arrow function: this es igual al valor de this en el contexto en el que se creó la función');

const objArrowFunct = {
  name: 'Dave',
  greet: () => {
    console.log(this);
  }
};
objArrowFunct.greet(); // undefined - this se refiere al contexto léxico, no al objeto obj

//* 2)
console.log('Ejercicio 2 \n 2) Diferencias entre arrow functions y function expressions:');
console.log(`Las arrow functions no tienen su propio this, lo heredan del contexto léxico dondefueron heredados; 
arguments, super o new.target. No se pueden utilizar como constructores y no tienen prototype.`);
console.log('Ejemplo:');
function PersonInFunct(name) {
  this.name = name;
}
const lucasFunction = new PersonInFunct('Lucas en Function');
console.log('Function expression:', lucasFunction);
const PersonArrow = (name) => {
  this.name = name;
}
// const lucasArrow = new PersonArrow('Lucas');
// console.log('Arrow function:', lucasArrow); // Uncaught TypeError: PersonArrow is not a constructor


// Ejercicio 3
// ? Crea una clase a la que llamaremos "InvertirCadena" con las siguientes propiedades:
// ? Un atributo llamado cadenaInvertir que sea una cadena vacía.
// ? Una función en formato arrow function, que tome el atributo cadenaInvertir e imprima en pantalla el resultado invertido. Ej "Hola mundo" quedaría "odnum aloH".
// ? Si el parámetro de la cadena cadenaInvertir es vacío, lance un error (throw). Ej. "". throw error.
// ? Ahora instancia la clase en un objeto que llamaremos invertirCadena.

class InvertirCadena {
  cadenaInvertir = '';
  invertirCadena = () => {
    if (this.cadenaInvertir === '') {
      throw new Error('Error: cadena vacía');
    }
    return this.cadenaInvertir.split('').reverse().join('');
  }
}
//* Instancia de la clase
const invertirCadena = new InvertirCadena();

//* Asignación de la cadena a invertir
invertirCadena.cadenaInvertir = 'Hola mundo';
console.log('Ejercicio 3');
console.log('Cadena No Vacia ===> ', invertirCadena.invertirCadena()); // odnum aloH

//* Asignación de la cadena vacía
invertirCadena.cadenaInvertir = '';
try {
  //? ¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?.
  console.log('Para que nuestro código no se rompa, podemos manejar el error con un try catch');
  console.log('Cadena Vacia ===> ', invertirCadena.invertirCadena());
}
catch (error) {
  console.log(error.message);
}

//? Por último, intenta acceder al siguiente método invertirCadena.nuevoMetodo(). ¿Cómo podemos hacer para que no de un error?
console.log('Para que no de un error, podemos utilizar un try catch');
try {
  invertirCadena.nuevoMetodo();
}
catch (error) {
  console.log(error.message);
}

// Ejercicio 4
//? Crea una clase con el formato ES6. Esta clase va a tener dos atributos, username y password y un  
//? método login() que compruebe que username tiene el valor admin y password el valor passwd y en caso positivo, 
//? lance una alerta diciendo que el usuario esté logeado, en caso contrario, que diga que el usuario o la contraseña son incorrectas.

class Login {
  username = '';
  password = '';

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  loginUser() {
    if (this.username === 'admin' && this.password === 'passwd') {
      alert('user logged In')
    }else {
      alert('User or password incorrect');
    }
  }
}

const login = new Login('admin', 'passwd');
const badLogin = new Login('pepe', 'badpassword');

console.log('Ejercicio 4 \n descomentar para probar el ejercicio 4');
// login.loginUser()
// badLogin.loginUser()

// Ejercicio 5
//? Crea dos clickListener, para los botones con id loginSuccess y loginFailure. 
//? En el primero crearemos un objeto login que sea correcto y llamaremos a la función para que de el resultado correcto. 
//? En el segundo crearemos un objeto login con parámetros incorrectos y llamaremos a login para que falle.

document.getElementById('loginSuccess').addEventListener('click', function () {
  const login = new Login('admin', 'passwd');
  login.loginUser();
});
document.getElementById('loginFailure').addEventListener('click', function () {
  const login = new Login('pepe', 'badpassword');
  login.loginUser();
});

// Ejercicio 6
//? Añadir asincronía al resto de botones
//? Crea dos clickListener, para los botones con id loginSuccessAsync y loginFailureAsync. 
//? En el primero llamaremos a la función loginWitUsername para que de el resultado correcto. 
//? En el segundo llamaremos a la función con parámetros incorrectos. 

let loginWithUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};

// Botón para login exitoso
document.getElementById('loginSuccessAsync').addEventListener('click', async () => {
  try {
    const result = await loginWithUsername('admin', 'passwd');
    alert(result); // Imprime: "User logged in"
  } catch (error) {
    alert(error); // Esto no debería ocurrir en este caso
  }
});

// Botón para login fallido
document.getElementById('loginFailureAsync').addEventListener('click', async () => {
  try {
    const result = await loginWithUsername('pepe', 'badpassword');
    alert(result); // Esto no debería ocurrir en este caso
  } catch (error) {
    alert(error); // Imprime: "Error: invalid username or password"
  }
});
