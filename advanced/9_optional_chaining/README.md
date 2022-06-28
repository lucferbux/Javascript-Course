# Optional Chaining

> Acceso de valores

El operador de *optional chaining* o *encadenamiento opcional* `?.` permite acceder al valor de una propiedad encadenada de un objeto sin tener que comprobar que cada valor en esa cadena sea válido.

Para hacernos una idea, el *encadenamiento opcional* `?.` funciona de igual manera que el encadenamiento normal `.` pero permite evitar errores si una referencia es nula (`null` o `undefined`), devolviendo siempre o el valor que buscábamos o `undefined`. Cuando utilizamos este operador para acceder funciones, si no existen, devolverán `undefined`.

```javascript
let dog = {
    name: "Seymur",
    age: 12,
    chip: {
        brand: "Soyner",
        address: "123, 3rd Street, New New York"
    },
    bark: () => {
        console.log("woof")
    }
};

let cat = null;
```

Vamos a ver las distintas combinaciones que podemos obtener con el *encadenamiento opcional* que hace que nuestro código no rompa pese a que estemos accediendo a valores inexistentes.

```javascript
// bad
// cat.name

// good
dog.name // this value exists
cat?.name // optional chain would return undefined

console.log("------------------");

// bad
// dog.lease.color

// good
cat?.lease.brand // this is unsafe, but valid in this context
dog.chip.brand // this value exists
dog.lease?.color // optional chain will avoid exception

console.log("------------------");

// bad
// dog.walk()

// good
dog.bark() // this value exists
dog.walk?.() // optional chain will return undefined when function is executed

console.log("------------------");

// bad
// dog.chip.["owner"]

// good
dog.chip?.["owner"]
```

Como podéis ver hay varias situaciones donde el *encadenamiento opcional* nos evita problemas en la ejecución de nuestro código. El mecanismo principal de este operador es que *cortocircuita* en el primer parámetro inválido y devuelve un valor `undefined`, esto hace que en ejemplos como `cat?.lease.brand` no se produzca un error aunque `lease` no exista, ya que la ejecución se detendrá al intentar acceder a `cat`, que es un valor *indefinido*.

Al final, la sintaxis del *encadenamiento opcional* tiene tres formas diferenciadas:

* `obj?.prop` -> devuelve el valor si existe, si no devuelve `undefined`.
* `obj?.[prop]` -> devuelve el valor si existe, si no devuelve `undefined`.
* `obj.method?.()` -> ejecuta la función `obj.method()` si existe, si no devuelve `undefined`.

Esta sintaxis es muy útil y puede evitar muchos problemas en nuestro código, aún así, es recomendable no usar este operador de forma indiscriminada, porque podría ocultar errores de programación en puntos donde podrían estar ocurriendo.
