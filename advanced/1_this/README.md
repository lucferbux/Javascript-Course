# This

Si tenéis experiencia previa en programación, os podrá sonar la palabra reservada `this`. En Java, C++, Kotlin tiene la misma sintaxis que en JavaScript, en otros lenguajes como Python o Swift, este mismo concepto se representa con `self`. En todos estos programas la palabra reservada `this`representa la instancia del objeto en ejecución, y puede referenciarse a lo largo de la definición de una clase.

En JavaScript, `this` **funciona un poco diferente**, en parte porque está **orientado a prototipos** en vez de **orientado a clases**. Aquí, `this` no solo se utiliza en objetos, puede utilizarse tanto en los [contextos globales y de función](/advanced/2_global_namespace/README.md) y puede variar dependiendo de si se ejecuta en podo estricto o modo no estricto.

Dependiendo de donde se invoque, puede referirse a los siguientes casos:

* Al ejecutarlo en el programa principal, se refiere al **objeto global** (en un navegador será window).

```javascript

// Global Context
console.log(this === window);

var name = "Lucas";

this.surname = "Fernandez";
```

* En una función, `this` se refiere al **objeto global**.

```javascript
function f1() {
  return this;
}

// En un navegador:
f1() === window; // true
```

* En una función en **modo estricto**, `this` es `undefined`.

```javascript
function f2() {
  'use strict'; // see strict mode
  return this;
}

f2() === undefined; // true
```

* En un método, `this` se refiere al **objeto propietario**.

```javascript
let person = {
    name: "Lucas Fernandez",
    greeting() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

person.greeting();
```

* En un método con **arrow function**, `this` se refiere al contexto de la función.

```javascript
let student = {
    name: "Pepe Navarro",
    greeting:() => {
        console.log(`Hello, my name is ${this.name}`)
    }
}

// This will be lucas as this.name references the global context and name is defined with Lucas
student.greeting();
```

* En un evento, `this` se refiere al **elemento que recive el evento**.

```javascript
function actionButtonReceiver() {
    console.log("Button pressed with->");
    console.log(this);
}

```

* Métodos como `call()`, `bind()` o `apply()`, modifican el valor de `this` al objeto que enlazan.

```javascript
// Call
// Podemos usar call para llamar a una función añadiendo el contexto con algún objeto (y el resto de parámetros)

var myObj = {
    num: 2
}

var addNumbers = function(num1, num2) {
    return this.num + num1 + num2
}

console.log(addNumbers());


console.log(addNumbers.call(myObj, 1, 2));



// Apply
// El mismo concepto que call pero pasando los parámetros como arrays

let params = [1, 2]

console.log(addNumbers.apply(myObj, params));


// Bind

// Devuelve una función con el binding entre el objeto y la función
// Se usa por ejemplo para tener contexto del objeto en un callback

var otherObj = {
    num1: 5,
    num2: 4
}

var otherFunc = function() {
    return this.num1 + this.num2;
}

var returnedFunc = otherFunc.bind(otherObj);

console.log(returnedFunc());
```
