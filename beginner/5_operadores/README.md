# Operadores

> Operaciones en JavaScript

Antes de enumerar los distintos operadores, hay cierta terminología que debemos cubrir:

* Un **operando** es el elemento al que los operadores se aplican. Por ejemplo en una suma `2 + 3`, el operador de la izquierda es `2`, el de la derecha es `3` y el operando es `+`

* Un **operador** es unario si tiene un solo operador, como por ejemplo la negación `-3` mientras que es binario si tiene dos operandos, `2 + 3`.

* La **precedencia** de operadores indica el orden de operación. Si en una misma linea de ejecución encontramos diferentes operadores y palabras reservadas, JavaScript los ejecutará en el orden indicado en [esta lista](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table).

## Operadores Aritméticos

Los operadores aritméticos modifican el valor de una variable. Siguen el orden de precedencia antes mencionado.

```javascript
// Operadores Aritméticos
let a = 30;
let b = 50;

// Addition
let add = a + b;
console.log(`add: ${add}`)

// Subtraction
let sub = a - b
console.log(`sub: ${sub}`)

// Multiplication
let mul = a * b
console.log(`mul: ${mul}`)

// Division
let div = a / b
console.log(`div: ${div}`)

// Module
let modd = b % a
console.log(`modd: ${modd}`)

// Exponent
let exp = a**b
console.log(`exp: ${exp}`)
```

## Operadores de Comparación

Comparan valores de ambos lados de la operación y deciden la relación entre ambos.

```javascript
// Operadores de Comparación
a = 30;
b = 50;
let c = '30';

// Equality
let eq = a == b;
console.log(`eq: ${eq}`);

let eq2 = a == c;
console.log(`eq2: ${eq2}`);

// Equality + type
let eq3 = a === c;
console.log(`eq3: ${eq3}`);


// Inequality
let ieq = a != b;
console.log(`ieq: ${ieq}`);

let ieq2 = a != c;
console.log(`ieq2: ${ieq2}`);

// Greater
let gt = a > b;
console.log(`gt: ${gt}`);

// Less
let ls = a < b;
console.log(`ls: ${ls}`);

// Greater or equal
let gteq = a >= b;
console.log(`gteq: ${gteq}`);

// Less or equal
let lseq = a <= b;
console.log(`lseq: ${lseq}`);

console.log(30 > 30);
console.log(30 >= 30);
```

## Operadores de Asignación

Ya hemos visto varias veces estos operadores al declarar variables, aquí vamos a ver algunas de sus propiedades.

```javascript
// Operadores de Asignación
a = 30;
b = 50;

// Assignment (=)
let c = a + b;
console.log(c);

// Addition with assignment
c = 60;
c += a;
console.log(c);

// Subtraction with assignment
c = 60;
c -= a;
console.log(c);

// Multiplication with assignment
c = 60;
c *= a;
console.log(c);

// Division with assignment
c = 60;
c /= a;
console.log(c);
```

## Operadores Lógicos

Estos operadores son utilizados dentro de los controles de flujo que veremos en la siguiente sección. Todos devuelven un tipo lógico (true or false) cuando se realiza la operación.

```javascript
// Operadores Lógicos
a = 30;
b = 50;
c = [20, 30, 70, 80];
let at = true;
let bf = false;

// AND operator
console.log(at && bf);

// OR operator
console.log(at || bf);

// NOT operator
console.log(!at);

console.log("------------")

// Membership
console.log(a in c);

// Not Membership
console.log(!a in c);
```
