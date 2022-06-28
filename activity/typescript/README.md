# Actividad Sesión 3

Puedes realizar los ejercicios creando un nuevo proyecto que compile TypeScript o puedes utilizar [el playground de TypeScript](https://www.typescriptlang.org/play). Dentro de **index.ts** tenéis los resultados a los dos primeros ejercicios.

## Ejercicio 1

* Crea una interfaz 'Person' que tenga como atributos 'name', 'age' y 'profession'. Ahora define una arrow function que tenga como parámetro esta interfaz y que devuelva un array con sus propiedades, esta función tiene que tener tipado el parámetro de entrada y el return

```javascript
// return -> ["name", "age", "profession"] 
```

## Ejercicio 2

Crea dos interfaces, una llamada `Car` y otra `Motorcycle`. La primera tendrá las propiedades `tires` (number), `turnOnEngine()` (función que devuelve void) y `pressPedal()` (función que devuelve void).
La segunda tendrá las propiedades `tires` (number), `turnOnEngine()` (función que devuelve void) y `openThrottle()` (función que devuelve void).
Escribe una función que acepte un parámetro que pueda ser `Car` o `Motorcycle` que, primero llame a turnOnEngine, y luego si es Car llame a pressPedal pero si es Motorcycle llame a openThrottle().
Para la comprobación no valdrá `typeof`, necesitaremos hacer uso de [type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates).