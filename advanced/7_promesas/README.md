# Promesas

Una **promesa** es una implementación más avanzada que `callback` dentro de la asincronía de JavaScript. Es un proxy de un valor que probablemente no se conozca en el momento en el que la promesa se crea. Esto permite que funciones asíncronas devuelvan valores como métodos síncronos. En vez de devolver su valor final, devuelve **una promesa del valor en el futuro**.

Las **promesas** pueden tener tres estados:

* **Pendiente:** `pending`, el estado inicial, no está ni completa ni rechazada.
* **Completa:** `fulfilled`, significa que la operación se ha completado correctamente.
* **Rechazada:** `rejected`, la operación ha fallado.

Una operación pendiente puede o bien **completarse** o **rechazarse** con un error. Cuando ocurre cualquiera de las dos opciones, los operadores asociados por el método `then` de la promesa son ejecutados. Esto permite que no haya condiciones de carrera.

## Sintaxis

Es muy sencillo crear nuevas promesas. También es normal crear **promesas encadenadas** para ir resolviendo distintas tareas asíncronamente, aunque puede dar lugar a **pirámides de la muerte**.

```javascript
let randomNumber = () => {
    return Math.floor(Math.random() * 10);
}


var login = new Promise(function(resolve, rejected) {
    setTimeout(() => {
        console.log("%c1. Creación promesa", 'color: #229179; font-size: 16px;');
        if(randomNumber() !== 0) {
            resolve('Logged');
        } else {
            rejected('Error: invalid username or password')
        }
    }, 100);
})


login
    .then( (resolved) => {
        console.log(resolved);
    })
    .catch( (rejected) => {
        console.log(rejected);
    })

console.log("Run before the promise");
```

### Paso de argumentos

Es posible también añadir argumentos a la función.

```javascript
var loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
        setTimeout(() => {
        // 2. Promesas con argumentos
        console.log("%c2. Promesas con argumentos", 'color: #229179; font-size: 16px;');
        if (username === "lucferbux" && password === "patata") {
            resolve("User logged in");
        } else {
            rejected("Error: invalid username or password");
        }
        }, 100);
    });
};
  

loginWitUsername("lucferbux", "patata")
.then( (resolved) => {
    console.log(resolved);
})
.catch( (rejected) => {
    console.log(rejected);
})
```
