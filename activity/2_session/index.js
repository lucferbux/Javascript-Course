// Ejercicio 1
console.error('Ejercicio 1')
let getProps = (obj) => {

  if (obj instanceof Object)
    return Object.keys(obj)

  return ['No es un objeto.', ':(']
}

const test1 = {
  name: 'Andres',
  lastName: 'Ospina',
  age: 31
}

const test2 = {
  name: 'Lucas',
  age: 27,
  profession: 'Developer'
}

const test3 = 3;

let test1Props = getProps(test1)
console.log(test1Props)

let test2Props = getProps(test2)
console.log(test2Props)

let test3Props = getProps(test3)
console.log(test3Props)

// Ejercicio 2
console.error('Ejercicio 2')
console.log('this: scope global--------')
console.log(this)
console.log('this: scope global--------')

function thisFunc() {
  console.log('this: scope funcion--------')
  console.log(this)
  console.log('this: scope funcion--------')
}

thisFunc()

function thisStrictFunc() {
  'use strict';
  console.log('this: scope funcion usando strict--------')
  console.log(this)
  console.log('this: scope funcion usando strict--------')
}

thisStrictFunc()

// Ejercicio 3
console.error('Ejercicio 3')

function InvertirCadena(cadena) {
  this.cadenaInvertir = cadena
}

InvertirCadena.prototype.invertir = (cadena) => {
  if (cadena == '') throw ('No se puede invertir la cadena => Cadena vacia.')
  return InvertirCadena.prototype.invertir(cadena.substring(1)) + cadena.charAt(0);
}

const invertirCadena = new InvertirCadena('hola');
//invertirCadena.invertir(invertirCadena.cadenaInvertir);//Al parecer aun cambiando el valor de cadenaInvertir, la funcion sigue arrojando una excepcion
// invertirCadena.nuevoMetodo()=> genera error puesto que el metodo no existe dentro de la clase InvertirCadena
//invertirCadena.nuevoMetodo?.() // => utilizando el optional chaining podemos intentar ejecutar el metodo sin preocuparnos de que no exista

// Ejercicio 4
console.error('Ejercicio 4')

class LoginForm {
  constructor(username, password) {
    this.username = username
    this.password = password
  }

  login = () => {
    if (this.username === 'admin' && this.password === 'passwd')
      return alert('User logged in!')
    return alert('User or password incorrect!')
  }
}

//Tests para el ejericio 4 (login existoso y no exitoso)
// const login = new LoginForm('admin', 'passwd').login()
// const logbad = new LoginForm('andres', 'ospina').login()

// Ejercicio 5

document.getElementById('loginSuccess').addEventListener('click', (event) => {
  new LoginForm('admin', 'passwd').login()
});

document.getElementById('loginFailure').addEventListener('click', (event) => {
  new LoginForm('andres', 'ospina').login()
});


// Ejercicio 6

document.getElementById('loginSuccessAsync').addEventListener('click', async (event) => {
  await loginWitUsername('admin', 'passwd').then((resolved) => {
    alert(resolved)
  })
});

document.getElementById('loginFailureAsync').addEventListener('click', async (event) => {
  await loginWitUsername('andres', 'ospina').catch((rejected) => {
    alert(rejected)
  })
});

let loginWitUsername = (username, password) => {
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
