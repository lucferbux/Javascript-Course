# Narrowing

## Typeof

El operador typeof permite comprobar si el tipo de una variable corresponde a uno de los valores. Esto sirve para modificar la funcionalida de nuestro código dependiendo de el valor de un elemento. Para más información sobre tipos extendidos, la [guía de TypeScript](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html) cuenta con mucha información.

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```
