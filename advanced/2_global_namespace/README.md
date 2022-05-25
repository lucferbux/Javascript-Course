# Namespace

**Namespace** es el término que se refiere al paradigma de programación que proporciona **scope** o alcance a los identificadores (palabras reservadas de variables, funciones, tipos...), para prevenir colisiones entre ellos. Un ejemplo muy claro es cuando declaramos una variable en el cuerpo principal de ejecución y declaramos otra variable con el mismo nombre dentro de una función.

```javascript
let name = "Lucas";

console.log(name);

function displayNewName() {
    let name = "Ricardo";
    console.log(name);
}

displayNewName();
```

## Global Namespace

En JavaScript, el **Namespace Global** representa el bloque global de ejecución. Si estamos ejecutando el programa dentro de un navegador, el **scope global** será `window`. Por otro lado, en **nodeJS** el **scope global** será el módulo en ejecución.

```javascript
console.log(window);
console.log(window === this); // Equal in browse
console.log(this);
```

## Declaración de variables

Cada variable, al declararse en un scope, quedará visible para sus miembros y descendientes. como hemos comentado en el [módulo 3](/beginner/3_variables/README.md) `var` añade la variable al scope global si se encuentra en este entorno, es por ello que podemos demostrar fácilmente la visibilidad de las declaraciones.

```javascript
// Global Scope
var newVariable = "Hello World";
console.log(window.newVariable);

// Function Scope
function myScope() {
    var newName = "Lucas"
    return newName
}

console.log(myScope())
console.log(window.newName); //should be undefined

// Global Scope
console.log("%c5. Creating new variable", 'color: #229179; font-size: 16px;');
var newName = "Lucas Fernandez";
console.log(window.newName); //should be Lucas Fernandez
```
