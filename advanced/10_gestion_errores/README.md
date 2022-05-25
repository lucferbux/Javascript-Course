# Gestión de errores

> Manejo de errores inesperados

## try..catch

Como hemos podido ver, hay muchas formas de que nuestro código pueda tener errores. El comportamiento general de JavaScript cuando se encuentra un error es parar la ejecución y devolver información acerca del conflicto. Para controlar estos errores en nuestro código existe la sintaxis de `try...catch`.

El constructor de `try...catch` tiene dos bloques principales: `try` donde contendremos el código que puede tener el error y después `catch`, donde reaccionaremos a ese error:

```javascript
try {
    let dog = {
        name: "Seymur",
        age: 12
    }

    dog.breed.subtype;
} catch (err) {
    console.log(err)
}
```

Como podemos ver, el flujo es el siguiente, primero se evalúa el código del bloque `try`. Si todo funciona correctamente se salta el bloque `catch` y se continúa con la ejecución. Por otro lado, si falla esta parte, se ejecutará el código dentro del bloque `catch` y a continuación se reanudará la ejecución. Dentro del bloque `catch` tendremos el **objeto error**, que tendrá varias propiedades como `err.name`, `err.message` o `err.stack` con la información del error capturado.

Hay ciertas características que tenemos que tener presente:

* **`try...catch` solo funciona con errores de ejecución**: Es decir, que sintaxis no válida hará que no se ejecute el bloque `catch`.

```javascript
try {
  {{**}}}
} catch (err) {
  alert("El motor de JavaScript no entenderá este código");
}
```

* **`try...catch` solo funciona de forma síncrona**: Si tenemos código asíncrono en un `try..catch` no será reconocido y cualquier error no pasará al `catch`.

```javascript
try {
  setTimeout(function() {
    variableInventada; // La ejecución parará aquí
  }, 1000);
} catch (err) {
  alert( "no va a llegar" );
}
```

* **`try...catch...finally` ejecutará siempre el último bloque**: Si tenemos código en un `try..catch` independientemente de la ejecución siempre se ejecutará el bloque `finally`.

```javascript
try {
    let dog = {
        name: "Seymur",
        age: 12
    }

    dog.breed
} catch (err) {
    console.log(err);
} finally {
    console.log("Me ejecuto siempre");
}
```

## throw

El operador `throw` genera errores en parte de nuestro código. Esto es importante para tener un mayor control lógico de nuestro código. La sintaxis para declarar errores es la siguiente:

```javascript
let error = new Error("Error por defecto")
let syntaxError = new SyntaxError("Error sintáctico")
...
```

Una vez generado un error podemos lanzar errores en las partes de nuestro código que puedan contener errores de ejecución:

```javascript
let response = `{ "name": "Lucas" }`

try {
    let user = JSON.parse(response);

    if (!user.name || !user.age) {
        throw new SyntaxError("Error, falta alguno de los datos");
    }

    console.log( user.name );
} catch (err) {
    console.log( "Error JSON: " + err.message);
}
```


## Custom errors

Podemos crear nuestros propios errores extendiendo la clase `Error`. Esto permite una clasificación más granular de los errores de nuestro código, permitiendo poder reaccionar de manera diferente dependiendo del error que se ha producido. Vamos a ver algún ejemplo.

```javascript
class MalformedField extends Error {
  constructor(message) {
    super(message);
    this.name = "MalformedField";
  }
}

let response = `{ "name": 23, "age": 28 }`

try {
    let user = JSON.parse(response);

    if (!user.name || !user.age) {
        throw new SyntaxError("Error, falta alguno de los datos");
    }

    if (typeof user.name !== "") {
      throw new MalformedField("Name no es una cadena");
    }

    console.log( user.name );
} catch (err) {
    if (err instanceof MalformedField) {
    console.log("Atributo invalido: " + err.message);
  } else if (err instanceof SyntaxError) { // (*)
    console.log("JSON Syntax Error: " + err.message);
  } else {
    throw err;
  }
}
```
