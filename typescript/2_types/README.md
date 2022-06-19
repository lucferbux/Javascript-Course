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

```typescript
// string
let message: string = "Hello World";
// number
let sum: number = 2;
// optional
let optional: boolean = true;
```

### Any

Como hemos dicho arriba, TypeSCript cuenta con un tipo especial llamado `any`, que se usa como comodín para evitar la comprobación de tipos. Básicamente cualquier elemento al que se le asigna `any` pasa a comportarse como un elemento JavaScript, al que se le puede asignar cualquier valor independientemente del tipo y así saltarse la comprobación del compilador de TypeScript.

```typescript
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

```typescript
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

## Union Types

TypeScript permite construir nuevos tipos en base a los ya existentes mediante una serie de operadores. Ahora que sabemos construir tipos, vamos a ver como podemos **combinarlos** para conseguir nuevas funcionalidades.

Un `union type` está formado por dos o más tipos, representando valores que pueden cualquier otro tipo, cada uno de estos tipos son los *union's member*.

```typescript
function printPhoneNumber(phoneNumber: number | string) {
  console.log("Your phone number is " + phoneNumber);
}

printPhoneNumber(612389238);
printPhoneNumber("637839489");
// printPhoneNumber({ phone: 613892348}); // Error
```

## Type Aliases

Ahora que conocemos los union types, podemos usarlos cuando queramos, pero hay **una característica muy útil** de TypeScript para no tener que ir escribiendo siempre las uniones. Suponemos que queremos un argumento que tenga de tipos `number | string | boolean`. Cada vez que queramos comprobar este tipo único, deberíamos escribir esta cadena, pudiendo llevar a errores si olvidamos algún tipo.

Es por ello que podemos definir alias para identificar estos union types con un nombre característico que le queramos dar.

```typescript
type ID = number | string | boolean

let myID: ID = "23789s";
let myOtherId: ID = 213432423;
```

Podemos crear también type aliases compuestos, de diferentes anotaciones de tipos, siendo así que podamos crear definiciones enteras de un tipo.

```typescript
type Mail = {
  header: string;
  body: string;
  timestamp: number;
}

function printMail(mail: Mail) {
  console.log(`${mail.header} - ${mail.timestamp}`);
  console.log(`---------------------------------`);
  console.log(`${mail.body}`);
}
```

## Type Assertions

Hay ocasiones en las que tenemos que hacer una conversión de un tipo, bien porque tenía un valor de **any**, bien porque la librería no tiene tipos definidos o que el elemento es genérico, esto por ejemplo en manipulación del DOM es muy común. Es por ello que existen las **type assertions** que permiten hacer un **cast** del tipo de un elemento.

```typescript
const myCanvas = document.getElementById("container") as HTMLDivElement;
```
