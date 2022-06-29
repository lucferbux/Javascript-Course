# Funciones

## Funciones declarativas

Como ya hemos visto en la [sesión 1](../../beginner/8_funciones/README.md), las funciones son el principal medio para pasar datos en JavaScript. Con TypeScript podremos especificar los tipos de los parámetros de entrada y salida de las funciones.

```javascript
// Named function
function sumNums(first: number, second: number): number {
  return first + second;
}

const sum = sumNums(4, 5);

// will fail const fail = sumNums(3, "four");

// Anonymous function
let sumMore = function (first: number, second: number): number {
    return first + second;
}
const sumAnother = sumMore(3, 9);
```

Como podemos ver, podemos asociar tipos tanto a los parámetros de entrada como en el valor de retorno. Si no se indica, **TypeScript inferirá el valor de retorno en base a el cuerpo de la función**, así que no es completamente necesario en todas las ocasiones.

En TypeScript nos podemos encontrar los mismos casos que en JavaScript, como pueden ser **funciones sin retorno**, **parámetros opcionales**, **parámetros por defecto**, **parámetros rest**...

```javascript
function printHelloWorld(): void {
    console.log('Hello World');
}
printHelloWorld();

function sumThreeNums(first: number, second: number, third?: number) {
    return first + second + (third || 0);
}

const sumThree = sumThreeNums(4, 5, 10);

const sumOptional = sumThreeNums(4, 5);

function pow(base: number, exponent: number = 10){
    return base ** exponent;
}

const powNum = sumThreeNums(3, 2);

function sumMultipleNums(...rest: number[]) {
  return rest.reduce((p, c) => p + c, 0);
}

const multipleNums = sumMultipleNums(1, 2, 3, 4, 5, 6);
```

## Funciones anónimas

Por otro lado, en **funciones anónimas** TypeScript intentará también asignar tipos a los parámetros de entrada dependiendo del contexto. Esto es llamado *tipado contextual* ya que usa el contexto de ejecución para inferir los tipos.

```javascript
const names = ["Alice", "Bob", "Eve"];

names.forEach((s) => {
  console.log(s.toUpperCase()); // Will trigger -> Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```
