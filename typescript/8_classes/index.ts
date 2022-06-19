class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    speak(phrase: string = "Hello World") {
        console.log(phrase);
    }
}

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
