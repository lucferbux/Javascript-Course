function talk(phrase: string) {
    console.log(phrase);
}

let student = [1, 2, 3];

//talk(student); // TypeScript error
talk("Hello world");

interface Person {
    name: string;
    age: number;
    id?: string;
    talk: (string) => void;
}

interface Student extends Person {
    college: string;
    bachelor: string;
}

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

// Union types

/**
* Takes a string and adds "padding" to the left.
* If 'padding' is a string, then 'padding' is appended to the left side.
* If 'padding' is a number, then that number of spaces is added to the left side.
*/
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"

/**
* Takes a string and adds "padding" to the left.
* If 'padding' is a string, then 'padding' is appended to the left side.
* If 'padding' is a number, then that number of spaces is added to the left side.
*/
function padLeftUnion(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

padLeftUnion("Hello world", "20");
  //padLeftUnion("Hello world", boolean); // error as it's not an expected type


// type alias
type ID = number | string | boolean

let myID: ID = "23789s";

// type Assertions

const myCanvas = document.getElementById("container") as HTMLDivElement;

// Typeof
function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }