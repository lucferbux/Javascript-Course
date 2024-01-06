# Variables

> Almacenar valores en JavaScript

Una variable es una contenedor para almacenar valores. Tradicionalmente esto se ha hecho con la palabra reservada `var`, pero ES6 introdujo dos nuevas palabras reservadas, `const` y `let`.

El siguiente código muestra como crear una nueva variable:

``` javascript
let variable;
```

Una variable puede almacenar valores, para ello usamos el operador de asignación `=`:

``` javascript
var firstVar = "Hello World";
let secondVar = "I 'm Lucas";
const ID_PERSON = "28934289D";

console.log(firstVar);
console.log(secondVar);
console.log(ID_PERSON);
```

En el ejemplo anterior, la cadena se almacena en un espacio de memoria apuntando a la variable `firstVariable`, así, podremos acceder a este valor siempre que referenciemos a la variable.

Hay muchas formas de declarar una variable, podemos hacer la declaración y asignación en la misma linea, declarar múltiples variables a la vez (aunque no es muy recomendable), usando el estilo "comma-first"...

``` javascript
// declaración y asignación
let firstVariable = "Hola mundo";

// declaración en una misma linea
let nombre = 'Lucas', apellido = 'Fernandez', edad = 27;

// declaración "coma first"
let nombre = 'Lucas'
    , apellido = 'Fernandez'
    , edad = 27; 
```

Todas estas formas hacen teóricamente lo mismo, el uso de cada uno de estos estilos dependerá de la **guía de estilos** a seguir del proyecto.

## Declaración de variables

Hay dos limitaciones importantes en la declaración de Variables en JavaScript:

 1. El nombre solo puede tener letras, dígitos o los símbolos `$` o `_`.
 2. El primer carácter no puede ser un dígito.

Además, JavaScript usa CamelCase en la declaración de variables, así, aunque algunos nombres estén permitidos, no son recomendados por la guía de estilos.

Así tendríamos estos ejemplos válidos y no válidos:

``` javascript
// Variables válidas

let variableCamelCase;
let variable123;

let $ = 1; // También es válido declarar $
let _ = 1; // Igual que si declaras como variable _
console.log($ + _); // Se podrá hacer esta suma

// Variables NO válidas
let variable-invalida;
let 3mendamenteInvalido;

// Variables válidas pero no recomendadas

let snake_case;
let allnamesinsmallcase;

```

Ahora vamos a hablar de las diferencias entre **var**, **let** y **const** ya que a primera vista parece que sirven para lo mismo, pero hay ciertos detalles que las hacen completamente diferentes.

## Var vs Let

`var` y `let` son las dos palabras reservadas en JavaScript para declarar variables. `let` se introdujo en **ES6** para resolver varios de las confusiones que `var` generaba con su comportamiento, que derivaban en muchos bugs.

### Reglas de Scope

La mayor diferencia tiene que ver con las **reglas de scope**, ya veremos más adelante en profundidad el concepto de Scope, básicamente es el entorno encapsulado en que se ejecuta un trozo de código. Las variables declaradas con `var` están delimitadas al **cuerpo de la función** (function scope) mientras que `let`está delimitado al bloque que le rodea, marcado por `{ }` (block scope).

```javascript
function scopeRules() {
    var hello = "Hello";
    let world = "World";
  
    console.log(hello, world); // Hello World
  
    {
      var name = "Lucas"
      let surname = "Fernandez";
      console.log(name, surname); // Lucas Fernandez
    }
  
    console.log(name); // Lucas
    //console.log(surname); // ReferenceError
    console.log("Reference Error");
}

scopeRules()
```

### Hoisting

Hoisting es uno de los términos más confusos en JavaScript, básicamente ya hemos hablado de que JavaScript es un lenguaje interpretado que recorre línea por línea y ejecuta lo que va encontrando, pero la realidad es que recorre línea por línea **dos veces** el programa, una para reservar variables y otras cosas, y la segunda para ejecutar el código. **Hoisting** es el proceso de reservar espacio de memoria para variables y funciones.

En JavaScript, `var` hace que la variable esté `hoisted` (inicializada antes de ser declarada con `undefined`) mientras que `let` lanzará un **ReferenceError** si se llama antes de ser declarado

```javascript
// hoisted
console.log(hoisted);
var hoisted = "hoisted";
console.log(hoisted)

// not hoisted
//console.log(notHoisted); ReferenceError
console.log("Reference Error");
let notHoisted = "not hoisted";
console.log(notHoisted);
```

### Propiedad Global

En el [contexto global](/advanced/2_global_namespace/README.md) `var` creará una propiedad en el objeto global mientras que `let` no.

```javascript
var globalVar = "Global";
let notGlobalVar = "Not global";

console.log(window.globalVar);
console.log(window.notglobalVar);
```

### Re-Declaración

En **modo estricto** `var` permite re-declara variables mientras que `let` lanzará un **SyntaxError**

```javascript
'use strict';
var redeclare = "hello";
var redeclare = "world"; 

let notRedeclare = "hello"; 
//let notRedeclare = "bar2"; 
console.log("Syntax Error");

```

## Const

Las constantes son variables que no pueden cambiar de valor al ser asignadas. Este tipo de declaración es muy útil cuando el valor asignado no debería ser cambiado en ninguna circunstancia en tiempo de ejecución, como por ejemplo constantes matemáticas, colores u otros valores fijos.

``` javascript
const PI = 3.14;
const COLOR_BLUE = "00F";
const COUNTRY_CODE_SPAIN = "ES";
```

### Guía de estilos

Pese a que las variables en JavaScript sigan el estilo de CamelCase, está muy extendido el uso de mayúsculas para declarar constantes, usando la barra baja para separar palabras. Podéis consultar el estilo de la declaración de variables en la [guía de estilos de MDN](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#variables).
