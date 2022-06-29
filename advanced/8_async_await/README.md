# Async/Await

`async/await` es una sintaxis más cómoda para escribir funciones asíncronas encadenadas. Si tenemos muchas tareas asíncronas relacionadas, es muy posible caer en una pirámide masiva de llamadas con **promesas**. Así es como `async` permite denotar de manera sencilla que una función devolverá una promesa.

```javascript
function regularFunc() {
    return 1;
}
console.log(regularFunc());

async function asyncFunc() {
    return 1;
}
console.log(asyncFunc());
```

Esta promesa se podría resolver como ya hemos visto tradicionalmente, pero hay otra palabra reservada, `await` que permite indicar al interprete que espere a que termine la promesa para desenvolver su valor, sin necesidad del `then` y `catch` **aunque es necesario ejecutarlo dentro de una función asíncrona.

```javascript
async function asyncFuncAwait() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("1. Async/Await --> done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

asyncFuncAwait();
```

La función asíncrona se parará cuando encuentre el `await` y reanudará su ejecución una vez se resuelva la promesa. Es una forma de **syntactic sugar** que mejora la legibilidad con respecto a `promise.then``

## Sintaxis

Ya hemos visto más o menos como se declara, ahora vamos a mostrar algún ejemplo real.

```javascript
let randomNumber = () => {
  return Math.floor(Math.random() * 10);
};

var login = () => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      console.log("%c2. Creación función", 'color: #229179; font-size: 16px;');
      if (randomNumber() !== 0) {
        resolve("Logged");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 100);
  });
};


let req = async () => {
  try {
    let response = await login();
    console.log(response);
  } catch (err) {
    console.log("I'm in exception of async");
    console.log(err);
  }
};

req();
```

### Paso de argumentos

Podemos además añadir argumentos a nuestras llamadas de `async...await`.

```javascript
var loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "lucferbux" && password === "patata") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};

let reqWithCredentials = async (username, password) => {
    try {
        let response = await loginWitUsername(username, password);
        console.log("%c3. Función con parámetros", 'color: #229179; font-size: 16px;');
        console.log(response);
    } catch(err) {
        console.log("%c3. Función con parámetros", 'color: #229179; font-size: 16px;');
        console.log("I'm in exception of async");
        console.log(err);
    }
}

reqWithCredentials("lucferbux", "patata");
```