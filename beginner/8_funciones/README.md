# Funciones

> Funciones clásicas

Las funciones son uno de los elementos más importantes en casi cualquier lenguaje de programación. Una función permite **definir una serie de acciones que pueden reutilizarse a lo largo del código**. Esto es debido a que una función puede llamarse cuantas veces se quiera a lo largo de un programa.

Ya hemos visto varias funciones a lo largo del curso como `console.log()`, `alert()` o `prompt()`. Al final estas funciones están definidas en algún lugar y podemos llamarlas cuando las necesitamos.

## Definición

Una función se declara con la palabra reservada `function` seguida de lo siguiente:

1. El nombre de la función.
2. Una lista de parámetros de la función, acotados por paréntesis y separados por comas.
3. El cuerpo de la función, acotado por llaves `{ ... }` con la posibilidad de retorno de un valor con `return`

```pseudocode
function name(parameter1, parameter2) {
    ...body...
}
```

En JavaScript sería algo parecido a esto:

```javascript
function square(number) {
    return number * number
}
```

## Function expressions

Además de la forma mencionada arriba, las funciones se pueden crear mediante una **function expression**. Estas funciones **pueden ser anónimas**, no tener un nombre, pero poder asignarse a variables. Este método es muy útil para pasar funciones como argumentos. Así, la diferencia entre una `function expression` y una `function declaration`, es que estas últimas se declararán de manera normal y luego podrán ser llamadas invocando su definición mientras que las primeras necesitarán ser  asignadas a una variable para poder ser instanciadas.

```javascript
// Function expression
const square = function(number) { return number * number }
var x = square(4) // x gets the value 16

// Function as a parameter
function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {
   return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log(cube);
```

## Paso por valor o referencia

Todos los parámetros **de tipos no primitivos** (objetos, arrays, funciones) en JavaScript se **pasan por referencia**. Esto significa que si cambias el valor dentro de una función también cambiará fuera de ella, y es un error muy común que se comete en programación.

Visualmente se puede diferenciar el paso de parámetros de valor y de referencia con este gif:

![Value vs reference](https://www.mathwarehouse.com/programming/images/pass-by-reference-vs-pass-by-value-animation.gif)

Como podemos observar, al pasar por referencia, si cambiamos el valor interno en la función cambiará en la variable externa, en cambio si la cambiamos al pasar la variable por valor no cambia en la variable externa.

Esto se puede ver también en código:

```javascript
function changeValue(object1) {
    object1.brand = 'Samsung';
    object1.model = 'Galaxy';
}

var myPhone = {brand: 'Apple', model: 'iPhone', year: 2020};
var x, y;

x = myPhone.brand; // x gets the value "Apple"
console.log(x);

changeValue(myPhone);
y = myPhone.brand; // y gets the value "Samsung"
console.log(y);
```

## Variables Locales y Variables Globales

Una variable declarada en una función es solo visible dentro de esa función, pero dentro de las funciones se puede acceder a variables externas. Además, si se declara una variable interna de una función con el nombre de una variable externa, está **hará sombra** a la variable exterior.

```javascript
let outerVariable = "I'm an outer variable";
let otherVariable = "I'm other outer variable";

function displayMessage() {
    let innerVariable = "I'm an inner variable";

    console.log(innverVariable);
    console.log(outerVariable);

    let otherVariable = "I'm defining an inner variable";
    console.log(otherVariable);
}

displayMessage();

// console.log(innerVariable); This will fail
```

## Parámetros

Podemos pasar cualquier dato arbitrario a nuestra función usando parámetros (también llamados argumentos de funciones). En ES6 se introdujeron dos nuevas formas de declarar parámetros:

* **Parámetros por defecto** -> Permiten declarar un valor por defecto por si no se pasa ningún valor en la llamada de la función.
* **Parámetros rest** -> Permite representar un número indefinido de parámetros.

```javascript
// normal parameter
function multiply(a, b) {
  b = b ?? 1; // Nullish operator

  return a * b;
}
console.log(multiply(5)); // 5

// default parameter
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5

// rest parameter
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Valores de retorno

Una función puede devolver un valor como resultado de su llamada. Ya lo hemos visto en la función anterior:

```javascript
// normal parameter
function multiply(a, b) {
  b = b ?? 1; // Nullish operator

  return a * b;
}
console.log(multiply(5)); // 5
```

La palabra reservada `return` puede aparecer en cualquier punto de la función. En el momento que se ejecuta, la función para y el valor es devuelto en la llamada del código.
Pero es posible que haya declarado `return` varias veces:

```javascript
// normal parameter
function multiply(a, b) {
  if(b !== undefined) {
    return a * b;
  } else {
      return 0;
  }
}
console.log(multiply(5)); // 0
```

Es posible llamar a `return` sin devolver un valor, en ese caso se devuelve `undefined`:

```javascript
function returnNothing() { return }

console.log(returnNothing() === undefined);
```

## Estilo

Si queréis conocer las reglas de estilo para funciones, podéis dirigiros a la [guía de estilos de MDN](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#functions_and_objects).
