# Introducción

Después de cubrir los principales conceptos de JavaScript, es hora de introducir TypeScript en nuestro *"stack"* tecnológico. No sólo porque en menos de 5 años se haya colocado como el [4º lenguaje más popular entre programadores](https://octoverse.github.com/#top-languages-over-the-years), si no porque añade una serie de funcionalidades extra a JavaScript que pueden mejorar significativamente el desarrollo de nuestros proyectos. 

## Overview

La funcionalidad principal que TypeScript añade con respecto a JavaScript es la **comprobación estática de código**. JavaScript es dinámico, y es por ello que es muy flexible y ágil a la hora de prototipar, el problema es que puedes encontrate con muchos posibles puntos de conflicto:

* Llamada a objetos que no existen

```javascript
objetoSinDefinir.llamadaMetodo();
```

* Parámetros de función de diferentes tipos

```javascript
function iteradorArray(iterador) {
    for (item in iterador) {
        console.log(item);
    }
}

iteradorArray(3);
```

* Atributos que no existen en objetos

```javascript
let person = {name: "Lucas Fernandez", age:27 };

console.log(person.profession);
```

* Imports mal realizados

```javascript
import { Feature } from "incorrect/path";
```

Al ser JavaScript un lenguaje interpretado, todo el código será ejecutado en su entorno (si es web será en el motor del navegador), y estos errores **no aparecerán hasta el tiempo de ejecución**. Eso supone que muchos errores no aparecerán hasta que sean recogidos por tests, por pruebas reales en navegador o incluso peor, **EN PRODUCCIÓN**.

La razón de que TypeScript detecte estos problemas es porque tiene un compilador previo, que transforma el código de TypeScript a JavaScript. Podemos hacer esto mismo simplemente llamando al compilador con ```tsc file.js```.

![TypeScript](/meta/0_16_TypeScript_Console.png)

> [Consola TypeScript Online](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBdw0AiUbYANUcoAAvKAABQETBkBiCSD5a6oWnMACUzIAfKAAN6KEolBCcQTwdwBaDwZjszncyBCgDcigAvsEaRlUAyyKyAEQACRgKog8DI0XNOuCKhwDQ8ZC8iHtzhB7Bo3zcZmY7AYzEg-Fg0HUiQYIL0Ii85oAoqsGIgavpzUkcebwA5UAByYQAOUgEnNQRUAHlvmRdjz+OHjqhHApXNI8KAnN6dKMsPoUAhEDDhFdAxJ7dERAYODjuiw2FxuEESkA)

**TypeScript** es un super-set de JavaScript, esto significa que podemos seguir escribiendo código en JavaScript mientras implementamos nuestro programa, permitiendo ser flexibles en el desarrollo mientras vamos teniendo desde el día 0 las ventajas que proporciona TypeScript, como el **auto-completado**, la **auto-importación de módulos** o la **comprobación de tipos**.

## Instalación

La instalación de TypeScript es muy sencilla, solo es necesario tener [Node](https://nodejs.org/en/) instalado en el sistema. Una vez hecho, simplemente hay que ejecutar el siguiente comando:

```bash
> npm install -g typescript
```

Ahora podemos ejecutar sin ningún problema nuestro código. En este caso, tenemos un fichero llamado `index.ts` que tendremos que compilar a JavaScript, para ello ejecutremos lo siguiente:

```bash
> tsc index.ts
```

Esto generará un fichero llamado ```index.js``` que podrá ser utilizado por el html de la página. **En ningún momento es necesario instalar typescript de forma global, normalmente lo tendremos como parte de una dependencia de nuestro proyecto**

### Ejecución con node

Podremos también ejecutar ficheros de forma global si instalamos lo siguiente en nuestro equipo:

```bash
> npm install -g ts-node
```

Ahora podremos ejecutar nuestros ficheros typescript directamente ejecutando:

```bash
> ts-node index.ts
```

**Tenéis una sección dentro del proyecto llamada playground en la que podéis interactuar y ejecutar ts-node y tsc**

## Algunas Ventajas frente a JavaScript

### Compilación a distintas versiones

Una de las grandes ventajas de TypeScript es que podemos compilar a la versión de JavaScript que elijamos. Todo esto se puede configurar en el fichero [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html), pero también se puede realizar mediante la linea de comandos.

```bash
> tsc index.ts # default execution
> tsc --help # display all the info 
> tsc index.ts -t ES5 # target TS5 code
> tsc index.ts -t ES6 # target TS6 code
> tsc async.ts # Converts ES6 async await to ES5
```

Esto permite utilizar las últimas características de ES6 que vimos, como **arrow functions, optional chaining y nullish operator** pudiendo luego ejecutarlo en navegadores antiguos.

### Tipado estáticos

Al final es la característica estrella de TypeScript es el tipado estático. Esto permite asignar a variables, objetos y funciones de tipos, con los que se comprobará luego en tiempo de compilación si el valor asignado corresponde con la definición inicial **evitando así potenciales errores en ejecución**.

```typescript
let studentName: string;

studentName = 23; // Compiler Error
```

También TypeScript tendrá tipado implícito, esto significa que si no se le añade un tipo pero sí un valor en la declaración, TypeScript inferirá el valor y lo tipará automáticamente.

```typescript
let studentName = "Pepe";

studentName = 23; // Error
```

### Interfaces

Ahora hablaremos más en detenimiento de las **interfaces** en el [siguiente apartado](../3_interfaces/index.html), pero nos sirve para ejemplificar el siguiente punto. Las interfaces permiten comprobar la forma que los valores asignados a las variables deben de tener. Esto también se puede llamar *duck typing* o *structural subtyping* y básicamente permite declarar "contratos" con el resto de tu código o con código externo para seguir un modelo.

```typescript
interface Person {
    name: string,
    age: number
    displayName(): void;
    talk(phrase: string);
    isAdult(): boolean;
};

interface RestResponse {
    persons: [Person],
    insitutionName: string,
    year: number
}
```

Esto permite por ejemplo tener un modelo bien definido para **comunicación rest**, añadir tipos a objetos o argumentos de funciones para tener un correcto control o incluso tener control sobre el parsing JSON de las respuestas a peticiones web.

### Autocompletado

En algunos IDEs como Visusal Studio Code, si descargamos la extensión de TypeScript (o en las versiones más modernas ya viene por defecto), podremos de disfrutar de algunas ventajas muy potentes, como por ejemplo el **autocompletado de objetos o variables** (gracias a la comprobación estática), el **poder auto-importar de otros ficheros automáticamente** o el poder visualizar el tsdoc de un objeto o método comentado.

![TypeScript Autocomplete](/meta/0_17_typescript_autocomplete.png)

### Flexibilidad en la comprobación de tipos

Hay momentos en los que, bien por compatibilidad con otras librerías, bien por la complejidad de los tipos o por alguna otra razón, se quiere obviar los tipos o directamente escribir el código en JavaScript. Esto es posible de distintas maneras.

```typescript
let studentName: any = "Pepe"; // Be careful, use with precaution

studentName = 23; // It will work great
```

Como se puede ver el tipo **any** permite que la variable actúe de la misma manera que en JavaScript. Esto, unido a que podemos seguir usando la sintaxis de JavaScript, nos permite tener cierta flexibilidad a la hora de desarrollar ciertos componentes que pueden ser difíciles de implementar en primer lugar con TypeScript.
