# Clases

## Overview

TypeScript utiliza la sintaxis moderna de ES6 para soportar **clases**. Tiene una aproximación más parecida a una orientación de objetos real que JavaScript. Además, como habíamos mencionado antes, una de las ventajas de TypeScript es que podemos usar esta característica en cualquier navegador ya que podrá compilarse a versiones anteriores. En esta sección vamos a ver algunas de las propiedades de las clases en TypeScript.

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(phrase: string = "Hello World") {
    console.log(talk);
  }
}

let person: Person = new Person("Pablo");
```

## Palabras reservadas

### readonly

Podemos utilizar la palabra reservada `readonly` para indicar que un atributo es sólo de lectura.

```javascript
class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
}

const greeter = new Greeter();

console.log(greeter.name);
// This will fail -> g.name = "also not ok";
```

Si intentamos acceder al valor `name` TypeScript lanzará un error de acceso.

### implements

La palabra reservada `implments` permite comprobar si una clase satisface la estructura de una `interface` en concreto.

```javascript
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

// class Ball implements Pingable { //Class 'Ball' incorrectly implements interface 'Pingable'. Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//   pong() {
//     console.log("pong!");
//   }
// }
```

### extends

La palabra reservada `extends` sirve para implementar herencia en TypeScript. Las clases derivadas heredan todas las propiedades y métodos de la clase base, y como no se pueden definir miembros adicionales. O hacer *override* de métodos con `super`.

```javascript
class StudentExtend extends Person {
    constructor(name: string) {
        super(name);
    }
    speak(phrase = "And I want to learn") {
        console.log("I'm a student...");
        super.speak(phrase);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }
    speak(phrase = "And I want to teach") {
        console.log("I'm a teacher...");
        super.speak(phrase);
    }
}

let pepe = new StudentExtend("I'm learning TypeScript");
let juan: Person = new Teacher("I'm teaching new feature");

pepe.speak();
juan.speak("And i love it");
```
