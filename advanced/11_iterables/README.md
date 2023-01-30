# Iteración avanzada

> Uso de map, filter, reduce y forech

Ya vimos en la primera sesión como iterar en elementos iterables como **Arrays**. Normalmente con un bucle for podemos realizar casi cualquier operación, pero para existen métodos diseñados específicamente para operaciones pesadas sobre elementos iterables. Vamos a ver algunos de ellos.

## Map

El método `.map()`  iterar todos los elementos de un iterable, retornando un nuevo iterable, dada una determinada función o callback a ejecutar en cada elemento que lo compone.

```javascript
// map([🌽, 🐮, 🐔], cook) => [🍿, 🍔, 🍳]

const iterableArrayMap = [1, 2, 3];
const newArrayMap = iterableArrayMap.map(number => number + 1);
```

Podemos ver que por cada elemento, vamos a realizar una operación, en este caso la suma de 1.

## Filter

El método `.filter()`  retorna un iterable con los elementos que cumplan una condición.


```javascript
// filter([🍿, 🍔, 🍳], isVegetarian) =>  [🍿, 🍳]

const iterableArrayFilter = [10, 20, 30, 40];
const filteredValues = iterableArrayFilter.filter(number => number > 20);
```

## Reduce

El método `.reduce()`  permite "reducir" o "transformar" los elementos de un iterable a un único valor.

```javascript
// reduce([🍿, 🍳], eat) => 💩

const interableArrayReduce = [10, 20, 30];
const total = interableArrayReduce.reduce((accumulator, number) => {
 return accumulator + number;
});
```

## Foreach

Este método, similar al `map()`, ejecutará el callback indicado por cada elemento del interable. La mayor diferencia entre ambos, es que este método no retorna nada, simplemente se limitará a recorrerlo.

```javascript
// map map([🌽, 🐮, 🐔], cook) => [🍿, 🍔, 🍳]

const iterableArrayForEach = [1, 2, 3];
const sumNumbers = (numbers) => number + 1;
const newArrayForEach = iterableArrayForEach.forEach(number => sumNumbers(number));
```
