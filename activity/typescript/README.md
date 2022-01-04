# Sesión Extra: Typescript

Puedes realizar los ejercicios creando un nuevo proyecto que compile TypeScript o puedes utilizar [el playground de TypeScript](https://www.typescriptlang.org/play). Dentro de **index.ts** tenéis los resultados a los dos primeros ejercicios.

## Ejercicio 1

* Crea una interfaz 'Person' que tenga como atributos 'name', 'age' y 'profession'. Ahora define una arrow function que tenga como parámetro esta interaz y que devuelva un array con sus propiedades, esta función tiene que tener tipado el parámetro de entrada y el return

```javascript
// return -> ["name", "age", "profession"] 
```

## Ejercicio 2

Crea dos interfaces, una llamada *'Car'* y otra *'Motorcycle'*. La primera tendrá las propiedades tires (number), turnOnEngine() (función que devuelve void) y pressPedal() (funciónn que devuelve void).
La segunda tendrá las propiedades tires (number), turnOnEngine() (función que devuelve void) y openThrottle() (funciónn que devuelve void).
Escribe una función que acepte un parámetro que pueda ser Car o Motorcycle que, primero llame a turnOnEngine, y luego si es Car llame a pressPedal pero si es Motorcycle llame a openThrottle().
Para la comprobación no valdrá typeof, necesitaremos hacer uso de [type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

## Ejercicio 3

En [este repositorio](https://github.com/lucferbux/TypescriptWeatherExample) os dejo un ejemplo de proyecto TypeScript con Webpack, tal y como React usa dentro de su Core.
La rama main contiene el ejercicio resuelto, para que podáis ver su lógica.
En la rama main tenéis los ficheros incompletos, para implementar vuestra versión si queréis resolverlo por vuestra cuenta.
Los pasos a seguir serían los siguientes:

1. Hacer un fork del proyecto.
2. Clonar el repositorio en vuestro ordenador.
3. Hacer *checkout* a una nueva rama de *develop*
4. Desde la rama *develop*, empezar a implementar los cambios.

Las características principales a implementar son todas aquellas que ya están realizadas en la rama *final*, que os puede servir por si os quedáis bloqueados con el desarrollo.

Además de los cambios propuestos, hay muchas características que se podrían implementar:

* try/catch para las excepciones de código o sitios donde probablemente pueda fallar.
* elementos ui como un spinner para indicar que se está haciendo una petición.
* comportamientos ui como bloquear el botón de peticiones cuando se realice una petición.

Y muchas más cosas, os animo a que mejoréis el código.
