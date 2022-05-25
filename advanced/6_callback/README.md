# Callback

Como ya hablamos en su momento en el apartado de [motor, Call Stack y event loop](/beginner/10_call_stack/README.md), JavaScript es un lenguaje de programación mono-hilo. En su momento pusimos el ejemplo del camarero que podía mandar la comanda a cocina y mientras se preparaba, seguir tomando notas hasta que el cocinero le llamase con la comida.

Básicamente **callback** es una función que se ejecuta **después** de que otra función se haya ejecutado, y permite introducir el concepto de asincronía.

Los **callbacks** son muy necesarios debido a que las tareas no deben ser bloqueantes. Si mandáramos una petición de acceso a un servidor, **nuestro programa no debería quedarse bloqueado esperando la respuesta**, tiene que ser responsivo, pudiendo seguir ejecutando tareas y poder reaccionar cuando la respuesta del servidor estuviese disponible.

## Sintaxis

Un callback al final es una función que llama a otra función, por lo que tendremos que declarar una función que tome otra función como argumento.

```javascript
// Callback Function
let myCallback = (callback) => {
    setTimeout(() => {
        callback("1. Callback function ---> logged");
    }, 100);
};

let logUser = (response) => {
    console.log(response);
};

myCallback(logUser);

console.log("This is going to print before...");
```

### Paso de argumentos

Podemos incluir argumentos en nuestro callback si modificamos un poco la función.

```javascript
// Callback Function with arguments
let logError = (error) => {
    console.log(error);
}

let loggingCallback = (login, response, error) => {
    setTimeout(() => {
        if(login === "lucferbux") {
            response("2. Callback with parameters --> User logged")
        } else {
            error("error, username invalid")
        }
    }, 100);
}

loggingCallback("lucferbux", logUser, logError);

console.log("This is going to print before too...");
```
