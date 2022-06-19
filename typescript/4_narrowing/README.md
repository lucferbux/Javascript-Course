# Narrowing

**Narrowing** es la técnica que tiene TypeScript para comprender un bloque de código especial llamado **type guard** que permite interpolar el valor de un tipo que en principio puede ser ambiguo y así poder implementar múltiples lógicas para diferentes tipos. Existen múltiples **type guards** dependiendo del componentes que vayamos a usar, vamos a ver las más importantes.

## Narrowing mediante "TypeOf"

Typeof es un operador de TypeScript que permite devolver el tipo de una variable o propiedad. Se utiliza en el contexto de una expresión para tener diferentes lógicas asociadas a un tipo en nuestro código. Las cadenas que `typeof` puede devolver son las siguientes:

* `string`
* `number`
* `bigint`
* `bolean`
* `symbol`
* `undefined`
* `object`
* `function`

```typescript
let newMessage = "Hello World";
console.log(typeof newMessage); // Will return "string"
```

Como habíamos visto en la [sección de tipos](../2_types/README.md), un parámetro puede tener múltiples tipos como `number` o `string` gracias a los *Union Types* o el uso de `any`. Podemos usar el operador `typeof` para hacer distintas operaciones al parámetro de entrada de la función.

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

Como veis, al hacer uso del condicional junto al `typeof`, TypeScript infiere automáticamente el valor del parámetro `padding`, haciendo que se comporte como un `number` en el primer condicional y como una `string` en el segundo. Podemos todavía afinar un poco más la función sustituyendo el valor `any` por un atributo con *Union Types*.

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

console.log(padLeft("Hello world", "        "));
padLeftUnion("Hello world", boolean); // error as it's not an expected type
```

## Narrowing mediante equidad

TypeScript también puede usar comparadores de equidad como `===`, `!==`, `==`, `!=` para el *narrowing*.

```typescript
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // X e Y serán string
    x.toUpperCase();
    y.toLowerCase();
  } else {
    // X podrá ser string o number
    console.log(x);
    // Y podrá ser string o boolean
    console.log(y);
  }
}

example("string", true);
```

## Narrowing mediante "In"

JavaScript tiene el operador `in` para determinar si una propiedad determinada existe en un objeto. Este operador también se puede utilizar como `type guard` para determinar a través de atributos o métodos el tipo de una variable.

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

function getSmallPet(): Fish | Bird {
  return {
    swim: function () {
      console.log("swimming");
    },
  };
}

let pet = getSmallPet();

move(pet);
```

## Narrowing usando "Type Predicates"

De momento hemos usado operadores de JavaScript como *Type Guards*. Pero podemos conseguir lo mismo con una función construida con TypeScript. Simplemente tendremos que definir una función cuyo tipo de retorno es un *type predicate*.

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

`pet is Fish` es el *type predicate* en este ejemplo. Un predicado se basa en el esquema `parameterName is Type`, donde `parameterName` debe ser el nombre de un parámetro de la función. Ahora cada vez que se llame esta función, TypeScript aplicará el *narrowing* a la variable que pasemos como parámetro a esa función.

```typescript
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```
