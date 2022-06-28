# Funciones (Avanzado)

Siguiendo con lo visto en [el módulo de funciones](/beginner/8_functiones/README.md), vamos a mostrar algunas características bastante peculiares de las funciones tradicionales antes de pasar a los cambios introducidos en **ES6**.

## Conceptos

### Recursión

La **recursión** es un patrón de programación que permite la resolución de una tarea mediante la llamada recursiva de una misma función.

```javascript
function cuadrado(base, exponente) {
  if(exponente == 1) {
    return base;
  } else {
    return base * cuadrado(base, exponente - 1)
  }
}

console.log(cuadrado(2, 5));
```

### Closure

Un **closure** es una función que recuerda sus valores declarados y que puede acceder a ellos después de su ejecución. **Esto no es posible en muchos lenguajes** ya que las variables solo estarán disponibles el tiempo de vida de ejecución de la función.

```javascript
function closureFunc() {
  let name = "Lucas";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

let newFunc = closureFunc();
newFunc();
```

### Rest Parameter y Spread Operator

Muchas funciones en JavaScript soportan un número arbitrario de funciones, es posible indicar en una función (a partir de **ES6**) un número indeterminado de parámetros mediante el **rest parameter**.

```javascript
function sumAllNumbers(...numbers) {
  let sum = 0;
  for(let i of numbers) {
    sum+=i;
  } 
  return sum;
}
console.log(sumAllNumbers(2, 3, 4, 5));
console.log(sumAllNumbers(1, 1, 1, 1));
```

Por otro lado podemos usar el **spread operator** para expandir iterables (entre otras cosas) y poder usarlo como parámetros de una función.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let sumArr = [...arr1, ...arr2];
console.log(sumArr);
console.log(sumAllNumbers(...sumArr));
```

## Arrow Function ES6

Ahora vamos a hablar de las **arrow functions** presentes desde **ES6**. Es una sintaxis mucho más clara que además simplifica la forma en la que las funciones se comportan, asimilándolo a otros lenguajes de programación. Vamos a ver sus características comparándolo con funciones tradicionales.

### 1. Sintaxis

``` javascript
// ES5
var add = function(x, y) {
  return x + y;
};
// ES6
let addShort = (x, y) => { return x + y };
addShort(1, 2);
```

Permite aplicar y reducir las lineas de código de la función hasta llegar a la mínima expresión.

``` javascript
let addShorter = (x, y) => x + y;
addShorter(1, 2);
```

Además, permite incluso eliminar paréntesis si solo hay un argumento, o directamente no incluir argumentos.

```javascript
// One argument
let squareNum = x => x * x;
squareNum(2);

// No argument
let helloWorld = _ => console.log("Hello World");
helloWorld();
```

### 2. Binding de argumentos

Las **arrow functions** no tienen **argument binding**. En el caso de las funciones tradicionales se puede acceder al atributo `arguments` mientras que en arrow functions no:

``` javascript
let oldFunc = {
  showArgs() {
    console.log(arguments);
  }
};
oldFunc.showArgs(1, 2, 3, 4)


let myFunc = {  
  showArgs : () => { 
  console.log(...arguments); 
 } 
}; 
//myFunc.showArgs(1, 2, 3, 4); // ReferenceError
console.log("ReferenceError");
```

### 3. Uso de "this"

Las **arrow functions** no hacen uso de this externo, no funciona el binding, mientras que en las funciones tradicionales sí.

```javascript
let person = {
  name: "Lucas Fernandez",
  thisInArrow: () => {
    console.log("My name (arrow) is " + this.name); // no 'this' binding here
  },
  thisInArrowPassingElement: (nameBind) => {
    console.log("My name (arrow) is " + nameBind); // no 'this' binding here
  },
  thisInRegular() {
    console.log("My name is " + this.name); // 'this' binding works here
  },
};
person.thisInArrow();
person.thisInArrowPassingElement(person.name);
person.thisInRegular();
```

### 4. Palabra reservada "new"

Las funciones tradicionales son **callables()** adn **constructible()**. Mientras que las arrow functions solo **callables()**. Esto significa que mientras que podemos declarar una nueva función tradicional con `new` una arrow function lanzará un error.

```javascript
function add(x, y) {
  console.log(x + y);
}

new add(2, 3);

let addArrow: (x, y) => {
  console.log(x + y);
}

//new addArrow(2, 3);
console.log("SyntaxError");
```

## 5. Duplicación parámetros

Las funciones tradicionales permiten duplicar nombre de parámetros mientras que las arrow function no.

```javascript
function sameParameter(x, x) {

}

// (x, x) => {} // SyntaxError

```
