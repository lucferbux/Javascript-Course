# Tipos

## Type Annotation

Ya hemos hablado de esto, TypeScript tiene mecanísmos para anotar los tipos de variables, funciones, objetos, etc. que delimitan la asignación de los mismos y aportan funcionalidad extra como autocompletado o errores de tipo en compilación.

Si no se declara el tipo desde el principio TypeScript lo inferirá automáticamente, aplicando las mismas características que con los tipos explícitos. Si se quiere obviar esta funcionalidad se puede usar el tipo **any**

```typescript

function talk(phrase:string) {
    console.log(phrase);
}

let student = [1, 2, 3];

talk(student); // TypeScript error
```

## Union Types

TypeScript tiene también cierta flexibilidad en cuanto a la comprobación de tipos. Es normal que a veces nos encontremos con un argumento de método que espere que el tipo sea `number` o `string`, podemos ver el ejemplo que proporciona TypeScript en su documentación.

```typescript
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"
```

Podríamos dejarlo así y directamente funcionaría, pero ya estaríamos dejando meter más tipos de los debidos y no conformaría una buena dinámica de tipos, es por lo que en estos casos usamos los **union types**

```typescript
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeftUnion(value: string, padding: string|number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

padLeftUnion("Hello world", "20");
padLeftUnion("Hello world", boolean); // error as it's not an expected type
```

Podemos conocer mucho más de esta característica en la [documentación oficial](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types).

## Type Aliases

Ahora que conocemos los union types, podemos usarlos cuando queramos, pero hay **una característica muy útil** de TypeScript para no tener que ir escribiendo siempre las uniones. Suponemos que queremos un argumento que tenga de tipos `number | string | boolean`. Cada vez que queramos comprobar este tipo único, deberíamos escribir esta cadena, pudiendo llevar a errores si olvidamos algún tipo.

Es por ello que podemos definir alias para identificar estos union tipes con un nombre característico que le queramos dar.

```typescript
type ID = number | string | boolean

let myID: ID = "23789s";
```

## Type Assertions

Hay ocasiones en las que tenemos que hacer una conversión de un tipo, bien porque tenía un valor de **any**, bien porque la librería no tiene tipos definidos o que el elemento es genérico, esto por ejemplo en manipulación del DOM es muy común. Es por ello que existen las **type asssertions** que permiten hacer un **cast** del tipo de un elemento.

```typescript
const myCanvas = document.getElementById("container") as HTMLDivElement;
```
