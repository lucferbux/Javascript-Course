# Tipos

En esta sección vamos a ver como TypeScript gestiona los tipos y como podemos usar una de las características más importantes de este lenguaje.

## Type Annotation

La funcionalidad principal de TypeScript es añadir tipos a elementos de JavaScript como variables, funciones, objetos... Para ello, usa la sintaxis `elemento: tipo` para asignar los tipos que hayamos definido. Esto es conocido como **type annotation**. Una vez que un *identificador* es anotado con un tipo, **solo podrá usarse con ese tipo**. Si se usa ese identificador con un tipo diferente, el compilador de TypeScript lanzará un error.

Si no se declara el tipo desde el principio TypeScript lo inferirá automáticamente, aplicando las mismas características que con los tipos explícitos. Si se quiere obviar esta funcionalidad, se puede asignar el tipo **any** a cualquier identificador para usarlo de la forma en la que estamos habituados en JavaScript.

```javascript
let student: string = [1, 2, 4]; // TypeScript error

let helloWorld: any = "Hello world" // Will compile

function talkFunc(phrase: string) {
    console.log(phrase);
}

let phrase = [1, 2, 3];

//talkFunc(phrase); // TypeScript error
talkFunc("Hello world");
```

## Categoría de tipos

### Tipos primitivos

JavaScript tiene tres tipos primitivos: `string`, `number` y `boolean`. Cada uno de ellos tiene un tipo en TypeScript:

* `string`: Representa las cadenas de JavaScript, con valores como `"Hola mundo"`.
* `number`: Corresponde a los números de JavaScript. Como recordaréis, JavaScript no tiene diferentes valores como *int* o *float*, simplemente tenemos `number`.
* `boolean`: Es para los valores booleanos `true` y `false`.

También existen los tipos `String`, `Number` y `Boolean` **con mayúsculas** se refiere a tipos nativos de TypeScript, es legal su uso pero raramente son necesarios.

```javascript
// string
let message: string = "Hello World";
// number
let sum: number = 2;
// optional
let optional: boolean = true;
```

### Any

Como hemos dicho arriba, TypeSCript cuenta con un tipo especial llamado `any`, que se usa como comodín para evitar la comprobación de tipos. Básicamente cualquier elemento al que se le asigna `any` pasa a comportarse como un elemento JavaScript, al que se le puede asignar cualquier valor independientemente del tipo y así saltarse la comprobación del compilador de TypeScript.

```javascript
let anyObject: any = { name: "Lucas" };
anyObject.callEmptyMethod();
anyObject.otherAttribute;
anyObject = "String";
```

### Tipos por referencia

Además de los tipos primitivos, TypeScript soporta tipos por referencia como `arrys`, `objetos` y el tipado de `funciones`.

* `arrays`: Estructura ordenada de elementos. En el caso de querer tener una colección de números (`[1, 2, 3]`), podemos usar tanto la sintaxis `number[]` como `Array<number>`.
* `functions`: Veremos más adelante el tipado de las funciones, pero por ahora podremos poner un ejemplo de la sintaxis. Una definición de función completa sería `let func: (firstArg: number, secondArg: number) => number = function(firstArg: number, secondArg: number): number {return firstArg + secondArg };`.
* `objects`: Quitando los primitivos, es el otro tipo de tipo más común en TypeScript. Hablaremos en siguientes secciones, pero por ahora podemos adelantar la sintaxis `let newObj: { x: number, y: number} = { x: 10, y: 4 }`.

```javascript
// array
let numbers: number[] = [1, 2, 4];
// function
let func: (firstArg: number, secondArg: number) => number = function (
  firstArg: number,
  secondArg: number
): number {
  return firstArg + secondArg;
};
// object
let newObj: { x: number; y: number } = { x: 10, y: 4 };
```

## Tipos especiales

Hay una serie de tipos especiales que no corresponden con ningún tipo de JavaScript, pero que son útiles para describir ciertos comportamientos en TypeScript. Vamos a ver algunos de los más importantes:

### Enum

En TypeScript, las enumeraciones, conocidas como enums, son un tipo de dato que nos permite definir un conjunto de valores constantes con nombres descriptivos. Los enums proporcionan una forma conveniente de trabajar con conjuntos predefinidos de valores en nuestro código.

```javascript
enum Direccion {
  Norte,
  Sur,
  Este,
  Oeste,
}
```

En este ejemplo, hemos definido un enum llamado "Direccion" con cuatro valores posibles: "Norte", "Sur", "Este" y "Oeste". Por defecto, cada valor de un enum está asociado con un número entero, comenzando desde 0 y aumentando en uno para cada valor subsiguiente. Sin embargo, también es posible asignar valores personalizados a los miembros del enum:

```javascript
enum DiaSemana {
  Lunes = 1,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo,
}
```

En este ejemplo, hemos asignado valores numéricos explícitos al enum "DiaSemana", comenzando desde 1.

#### Uso de enums

Una vez que hemos definido un enum, podemos utilizarlo en nuestro código para representar conjuntos específicos de valores. Podemos acceder a los valores del enum utilizando la notación de punto:

```javascript
let direccionActual: Direccion = Direccion.Norte;
console.log(direccionActual); // Imprime: 0

direccionActual = Direccion.Sur;
console.log(direccionActual); // Imprime: 1
```

En este ejemplo, hemos declarado una variable llamada "direccionActual" de tipo "Direccion" y la hemos inicializado con el valor "Norte". Luego, cambiamos su valor a "Sur". Al imprimir la variable, obtenemos los valores numéricos asociados a cada miembro del enum.

#### Enums con valores de cadena

En TypeScript, los enums también pueden tener valores de cadena. Esto es útil cuando necesitamos representar un conjunto de valores que no son numéricos. Por ejemplo:

```javascript
enum DiaSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miercoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sabado",
  Domingo = "Domingo",
}
```

En este ejemplo, hemos definido un enum llamado "DiaSemana" con siete valores posibles: "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" y "Domingo". Cada uno de estos valores es una cadena de texto.

#### Beneficios de los enums

Los enums proporcionan varios beneficios en el desarrollo de software. Algunas ventajas clave incluyen:

* Legibilidad y mantenibilidad: Al utilizar enums, podemos asignar nombres descriptivos a valores constantes, lo que hace que nuestro código sea más legible y comprensible.

* Autocompletado y validación: Los IDE y las herramientas de desarrollo pueden ofrecer autocompletado y validación cuando utilizamos enums, lo que nos ayuda a evitar errores de escritura y a trabajar más eficientemente.

* Tipo seguro: Los valores de un enum están fuertemente tipados, lo que significa que no podemos asignar valores que no estén definidos en el enum. Esto nos ayuda a evitar errores sutiles y garantiza un código más robusto.

En resumen, los enums en TypeScript nos permiten definir conjuntos de valores constantes con nombres descriptivos, lo que mejora la legibilidad, el mantenimiento y la seguridad de nuestro código. Su uso es especialmente útil cuando necesitamos trabajar con opciones predefinidas y limitadas en nuestro programa.

### Unknown y never

En TypeScript, existen dos tipos especiales: 'unknown' y 'never'. Estos tipos pueden resultar confusos al principio, pero entender su uso adecuado es fundamental para escribir código más seguro y robusto. Veamos en qué consisten cada uno de ellos:

#### Unknown

El tipo 'unknown' representa un valor desconocido. Es similar al tipo 'any', pero con restricciones más estrictas. Cuando una variable se declara con el tipo 'unknown', no se puede realizar ninguna operación directa en ella sin antes realizar una comprobación o una conversión de tipo explícita.

```javascript
let userInput: unknown;

// Ejemplo de comprobación de tipo
if (typeof userInput === 'string') {
  console.log(userInput.toUpperCase());
}

// Ejemplo de conversión de tipo
let username = userInput as string;
console.log(username.toUpperCase());
```

Como se muestra en el ejemplo, antes de operar con una variable de tipo 'unknown', debemos verificar su tipo o realizar una conversión de tipo adecuada. Esto garantiza que no se realicen operaciones no válidas y evita errores en tiempo de ejecución.

#### Never

El tipo 'never' representa un valor que nunca puede ocurrir. Se utiliza principalmente en dos contextos: para indicar que una función nunca debe retornar un valor o para especificar un tipo que no tiene valores posibles.

```javascript
// Función que lanza una excepción y nunca retorna un valor
function throwError(message: string): never {
  throw new Error(message);
}

// Función que tiene un bucle infinito y nunca termina
function infiniteLoop(): never {
  while (true) {
    console.log('¡Este bucle nunca termina!');
  }
}

// Variable de tipo 'never' que no puede tener valores
let unreachable: never;
unreachable = 10; // Error, 'never' no puede tener valores asignados
```

El tipo 'never' es útil para indicar de manera explícita que ciertos escenarios no son posibles en nuestro código. Por ejemplo, una función que lanza una excepción nunca retornará un valor válido, por lo que su tipo de retorno se define como 'never'.

En resumen, los tipos 'unknown' y 'never' son herramientas poderosas en TypeScript que nos ayudan a fortalecer la seguridad y claridad de nuestro código. El uso adecuado de estos tipos puede evitar errores comunes y mejorar la legibilidad de nuestro programa.
