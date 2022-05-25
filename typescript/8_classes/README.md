# Clases

## Overview

TypeScript utiliza la sintaxis moderna de ES6 para soportar **clases**. Tiene una aproximación más parecida a una orientación de objetos real que JavaScript. Además, como habíamos mencionado antes, una de las ventajas de TypeScript es que podemos usar esta característica en cualquier navegador ya que podrá compilarse a versiones anteriores.

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

class Student extends Person {
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

let pepe = new Student("I'm learning TypeScript");
let juan: Person = new Teacher("I'm teaching new feature");

pepe.speak();
juan.speak("And i love it");

```
