# Sesión 1

## Ejercicio 1

* Crea un [nuevo fork del proyecto del curso](https://github.com/lucferbux/JavaScript-Course)
* Crea un nuevo archivo llamado `aboutme.js`
* Crea un script en ese fichero con tres variables (elige un nombre descriptivo para cada una). La primera almacenará tu nombre y apellidos, la segunda tu profesión y la tercera el puesto que querrías desempeñar o el que desempeñas actualmente.
* Crea una nueva variable que almacene una cadena, que mediante [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) incluya esta frase con las variables: `Hola, me llamo [variable del nombre] y me dedico a [variable profresión]. Estoy cursando este Máster porque me gustaría trabajar en [variable del puesto]`
* Muestra por pantalla esta última variable.
* Importa tu fichero `aboutme.js` en el fichero `index.js` en la parte del Ejercicio 1 antes del `console.log("Ej 1")`.

## Ejercicio 2

Se requiere un navegador con herramientas de desarrollador:

* Abre el navegador seleccionado y dirígete a la sección de `Actividades/Actividad 1`.
* Abre la sección de *Sources* en las herramientas web, dirígete al fichero aboutme.js que creaste en la sección anterior y añade unos cuantos breakpoints en el script que has creado.
* Añade un breakpoint más en `console.log(“Ej 1”)`.
* ¿Qué se ejecuta antes, la llamada a `console.log()` o el contenido del fichero `aboutme.js`? ¿Por qué?

## Ejercicio 3

* Programa un script que imprima todos los números del 1 al 100 que sean divisibles por 7.

## Ejercicio 4

* Siguiendo el ejemplo anterior, imagina que has usado un bucle como este:

```javascript
for(var i = 0; i < 101; i++) {
    // Solución
}
console.log(i);
```

* ¿Qué valor tendrá la variable `i` al finalizar el bucle? ¿Por qué? ¿Habría alguna forma de evitar que la variable `i` se declare de forma global?

## Ejercicio 5

* ¿Cuáles son las diferencias entre ejecutar un fichero JavaScript en un navegador web en formato `<script>` y en formato `<script type=”module”>`?. Busca documentación para enumerar los principales comportamientos de ambas.

## Ejercicio 6

* Crea un objeto llamado **formatter** con un atributo, que llamaremos *prefix*, que tendrá de valor `“Hello “`, y un método que llamaremos *append*, que imprimirá la concatenación entre el atributo *prefix* y la cadena que pasemos como argumento en el método.

`formatter.append(“World”) // Result: Hello World`

* **Una vez el objeto esté creado** añade mediante el atributo **prototype** (buscad en la documentación) otro método que acepte también un solo argumento e imprima esa misma cadena en minúsculas.

`formatter.toLowerString(“I’m Lucas”) // Result: i’m lucas`

