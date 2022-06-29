console.log("%cClases", "color: #3913B8; font-size: 20px;");

console.log("%c1. Overview", "color: #229179; font-size: 16px;");

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    speak(phrase: string = "Hello World") {
        console.log(phrase);
    }
}

let person: Person = new Person("Pablo");
console.log(person);


console.log("%c2. Palabras reservadas", "color: #229179; font-size: 16px;");

console.log("-------------- readonly ----------------");
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


console.log("-------------- implements ----------------");

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

console.log("-------------- extends ----------------");

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