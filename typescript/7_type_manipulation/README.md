# Manipulación de tipos

## Genéricos

### Overview

Uno de los puntos más importantes dentro de la Ingeniería de Software es crear componentes que sean **robustos** y **reusables**. Es por ello que en esta sección nos centraremos en introducir el concepto de `generics`, que permitirá que nuestro código sea más flexible y reusable. El objetivo principal de los **genéricos** es crear un componente que pueda trabajar con una variedad de tipos en contraposición a funcionar exclusivamente con un sólo tipo, como hemos estado viendo hasta ahora.

Vamos a ver el **genérico** más utilizado y simple en JavaScript: El `array`. En TypeScript un *array* se declara con el tipo `Array`, seguido del tipo que compondrá esta estructura entre los símbolos `< >`. El caso de que sea genérico es que podemos cambiar el tipo entre los símbolos de menor y mayor y la funcionalidad se mantendrá independientemente del tipo.

```javascript
let nums: Array<number> = [1, 3, 4];
```

Vamos a suponer que para una función, vamos a querer devolver el último elemento de un Array:

```javascript
const lastNumber = (arr: Array<number>) => {
    return arr[arr.length - 1];
}

const lNumber = lastNumber([2, 4, 5]);
```

Pero, ¿qué pasa si quisiéramos pasar un array de `strings` como parámetro?. Pues JavaScript va a lanzar un error. Una solución sería usar `union types`, pero tendríamos que contemplar todas las posibilades que pueda abarcar los tipos de array. Es aquí donde entran los **genéricos**.

```javascript
const lastElement = <T>(arr: Array<T>) => {
    return arr[arr.length - 1];
}

const lastElementNumber = lastElement([2, 4, 5]);
const lastElementString = lastElement<string>(['Hello', 'World', '!']); // / Typescript infiere el tipo pero lo puedes indicar
```

En este ejemplo podemos ver que le pasamos un tipo `T`. Esta `T` puede ser cualquier identificador, pero por convenio se suele utilizar esa letra mayúscula para representar un tipo genérico.

Si prestamos atención al ejemplo, podemos ver que el tipo de retorno es inferido por TypeScript y es que no es necesario declararlo explícitamente para que TypeScript pueda adivinar el tipo que vamos a devolver. Además de esto, al hacer la llamada de la función, TypeScript inferirá el tipo del genérico en base al parámetro de entrada, como se **puede ver en el primer ejemplo**.

### Múltiples genéricos

Podemos tener múltiples genéricos como argumentos en una función, en este caso  si queremos tener diferentes argumentos con tipos genéricos. El funcionamiento es el mismo, tener múltiples identificadores separados por comas entre los símbolos de mayor y menor `<X, Y, Z>`, siendo que el nombre del identificador por convenio suele ser una letra mayúscula.

```javascript
const makeString = <X, Y>(x: X, y: Y): string => {
    return `${x} ${y}`;
}

const firstString = makeString(5, "hello");

const secondString = makeString<string, number[]>("Array ->", [1, 2, 3]);
```

Como podéis ver, al igual que en el primer ejemplo, podemos inferir los tipos en la llamada de la función al pasar los argumentos, pero si queremos dejarlos explícitamente marcados podemos hacerlo como en la segunda llamada.

### Valor por defecto

También podemos tener valores por defecto en los genéricos de manera **similar a valores por defecto en parámetros de una función**. Básicamente tenemos que tipar alguno de los genéricos dentro de su declaración, haciendo así que si no se indica el valor, por defecto tengan que ser del tipo declarado.

```javascript
const makeStringDefault = <X, Y = number>(x: X, y: Y): string => {
    return `${x} ${y}`;
}

const fistStringValid = makeStringDefault(5, "hello");

const secondStringValid = makeStringDefault<number[]>([1, 2, 3], 4);

// Will Fail -> const secondStringValid = makeStringDefault<number[]>([1, 2, 3], "hello");
```

Como podemos ver, en el primer ejemplo infiere que el segundo parámetro es un `string`, por lo que convierte el genérico `Y` en un `string`. Por otro lado, si decidimos añadir el tipo explícitamente de uno de los genéricos, el otro quedará cono el tipo number por defecto, por lo que si pasamos un argumento que no sea de ese tipo fallará.

### Añadir restricciones

Ahora vamos a suponer que tenemos una función que acepta un **objeto genérico**, pero tenemos como condición que ese objeto **tenga una serie de parámetros obligatorios**. Vamos a ver como podríamos solventarlo con genéricos.

```javascript
const makeFullName = <T extends {firstName: string, lastName: string}>( obj: T ) => {
    return  {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    };
};

const person1 = makeFullName({firstName: "Lucas", lastName: "Fernandez", age: 28});
const person2 = makeFullName({firstName: "Pedro", lastName: "Ramirez", profession: "Full Stack"});
// Will Fail const personFail = makeFullName({otherName: "Lucas", lastName: "Fernandez", age: 28});
```

Con esto ya vemos un caso de uso bastante potente, intentar replicar este mismo comportamiento con JavaScript requeriría comprobaciones en tiempo real en el cuerpo de la función y excepciones o algún mecanismo similar cuando no se cumplen estas restricciones.

### Interfaces

Podremos usar también usar genéricos en interfaces cuando queremos múltiples tipos con variaciones de atributos de una forma sencilla.

```javascript
interface Message<T> {
    id: string;
    timestamp: number;
    data: T;
}

type MessageNumber = Message<number>;
let messageNumber: MessageNumber = {id: "as8df90asdf", timestamp: 23429342349, data: 23482934092384092384029384293840238};
console.log(messageNumber);

type MessageString = Message<string>;
let messageString: MessageString = {id: "oiausdf989as", timestamp: 38495830989, data: "Hello World"};
console.log(messageString);
```

## Keyof

El operador `keyof` coge como parámetro un tipo objeto y produce una cadena con la unión de sus tipos, por ejemplo:

```javascript
type Point = { x: number; y: number };
type P = keyof Point; // "x" | "y"
let point: P = "x";
```

Si quisiéramos poner otro valor que no fuese `x` o `y` TypeScript se quejaría. En principio no parece muy útil, pero este operador combinado con genéricos puede ayudar en ciertos casos de uso:

```javascript
type Staff = {
  name: string;
  salary: number;
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const developer: Staff = {
  name: "Tobias",
  salary: 100,
};

const nameType = getProperty(developer, "name");
// Compiler error -> const salaryType getProperty(developer, ‘pay’); //Cannot find name 'pay'.(2304)
```

## Typeof

Ahora vamos a ver como usar `typeof` de forma más avanzada. Si os acordáis, este operador devolvía un string con el tipo de una variable o propiedad.

```javascript
let s = "hello";
let n: typeof s = "world";
console.log(n);
```

Pero si combinamos esta funcionalidad con estructuras más avanzadas como [ReturnType<T>](https://www.typescriptlang.org/docs/handbook/utility-types.html), que acepta como parámetro una función y devuelve el tipo de retorno, podemos conseguir cosas como esta:

```javascript
function f() {
    return { x: 10, y: 3 };
}
type PointPredicate = ReturnType<typeof f>;

const pointPredicate: PointPredicate = {x: 10, y: 4};
console.log(pointPredicate);
```

Básicamente podemos conseguir definir tipos con el parámetro de retorno de una función de forma muy sencilla.

## Conditionals

Los condicionales son un paso más para permitir la modificación de nuestro código en base a ciertos parámetros de entrada. Vamos a ver un ejemplo.

```javascript
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string; // En este primer caso se evaluará si Dog extiende a Animal y se asignará number

type Example2 = RegExp extends Animal ? number : string; // Como RegExp no extiende a Animal se asignará el tipo string
```

Como podemos ver se usa la estructura del [operador ternario](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) para decidir si una evaluación se cumple. En el primer caso como el tipo `Dog` extiende del tipo `Animal`, asignaremos el tipo de la izquierda. En el segundo caso al ser la condición falsa se asignará el tipo de la derecha.

Ahora vamos a ver un ejemplo más complejo, supongamos que queremos que una función devuelva un objeto diferente dependiendo del tipo de parámetro de entrada. Con `conditionals` es relativamente sencillo implementar la lógica.

```javascript
interface IdLabel {
    id: number;
    message: string;
    timestamp: number;
}
interface NameLabel {
    name: string;
    message: string;
    timestamp: number;
}

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  if (typeof idOrName === "number") {
    return { id: 1, message: "Hello world", timestamp: 234234234 } as NameOrId<T>;
  } else {
    return { name: "foo", message: "Hello world", timestamp: 234234234 } as NameOrId<T>;
  }
}

let firstLabel = createLabel("typescript");

let secondLabel = createLabel(23);
```
