# Tipos de Dato

> Clasificación de tipos en JavaScript

## Introducción

JavaScript tiene dos tipos de variables: tipos primitivos y tipos por referencia.
Cada vez que se crea una variable, se reserva un determinado tamaño de memoria. Además, cuando una variable se copia, su valor en memoria también es copiado.
Al pasar una variable a una función, también crea una copia de la variable

## Tipos primitivos

JavaScript tiene 6 tipos de datos primitivos: `string, number, undefined, null, boolean y symbol`. Estos datos solo pueden almacenar un valor en cada momento, por lo que son inmutables. **Solo se puede cambiar el valor de una variable que almacena un primitivo asignando un nuevo valor**.

### Boolean

* [Referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

El tipo `booleano` representa una entidad lógica que puede tener dos valores: `true` y `false`. Al definir una variable, si el valor es omitido o es `0`, `-0`, `null`, `NaN`, `undefined` o una cadena vacía (`""`), la variable tiene un valor de `false`. En el resto de casos tendrá un valor de `true`.

### Null

* [Referencia](https://developer.mozilla.org/en-US/docs/Glossary/Null)

El tipo `null` tiene exactamente un valor: `null`. Representa la no-existencia o invalidez de una dirección de memoria u objeto. Normalmente es utilizado en variables de referencia aunque en JavaScript su uso principal es primitivo.

### Undefined

* [Referencia](https://developer.mozilla.org/en-US/docs/Glossary/undefined)

Una variable que no ha sido asignada con un valor tiene el valor de `undefined`. No hay que confundirlo con `null`.

### Number

* [Referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

ECMAScript tiene dos tipos de número: `number` y `bigint`. El tipo número tiene una precisión de 64 bits, que varía de entre -(2^53 − 1) y 2^53 − 1. Además los valores representados con coa flotante tienen tres valores simbólicos: `+Infinity`, `-Infinity` y `NaN` (Not a Number).

* [Referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

El tipo **BigInt** es un primitivo numérico que puede representar enteros con una precisión arbitraria. Por lo tanto pueden representar números muy grandes que de otra forma `number`no podría.

### String

* [Referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

String se utiliza para representar información textual. Es un conjunto de "elemento" de 16 bits sin símbolo. Cada elemento en el tipo **String** ocupa una posición. **El primer elemento es el `0` y no el `1`** dentro del índice.

**A diferencia de otros lenguajes como Python o C, las cadenas en JavaScript son inmutables**. Esto significa que una vez creadas no se pueden modificar. Aún así, si pueden crearse otras cadenas y asignarse a la misma variable con operaciones como `String.substr()``

### Symbol

* [Referencia](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)

Un símbolo es un tipo primitivo que puede ser usado como la clave de una propiedad de objeto. En algunos lenguajes de programación se llaman **átomos**.

## Tipos por referencia

Por otro lado, hay un tipo compuesto o `objeto`. Estos objetos almacenan una referencia a un espacio de memoria donde se almacena el valor. Esto permite modificar el valor a lo largo del tiempo y almacenar distintos valores al mismo tiempo.

### Objetos

* [Referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Un objeto es un valor en memoria referenciado por un identificador. En JavaScript los objetos se conocen como una colección de propiedades. JavaScript es un lenguaje orientado a prototipo, donde los objetos almacenan propiedades, que pueden ser añadidas o eliminadas.

Estas propiedades pueden ser valores de cualquier tipo, incluido otros objetos, lo que permite construir estructuras de datos complejas.

### Arrays

* [Referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Los `arrays` son objetos donde hay una relación entre las propiedades de clave entera y la **longitud** de lla propiedad. Además, hereda del objeto `Array.prototype` que añade métodos para manipular datos con índice como `indexOf` o `push`.

Además de arrays hay otras colecciones con clave que han sido añadidas en ES6, como `set` y `weakset` que representan sets y `Map` y `weakmap` que representan mapas de valores.

### Funciones

* [Referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Más adelante veremos funciones en profundidad, básicamente el tipo de `function` permite almacenar funciones en variables, debido a que el constructor de las **funciones** deriva del constructor de `Object`.
