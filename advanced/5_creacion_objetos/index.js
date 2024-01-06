console.log("%cObject Creation", 'color: #3913B8; font-size: 20px;');

// 1. En javascript, un objeto puede ser una función heredada

console.log("%c1. Objeto basado en función", 'color: #229179; font-size: 16px;');

var person = function(name, age) {
    this.name = name;
    this.age = age;
}

var lucas = new person("Lucas", 26);

var maria = new person("Maria", 27);

console.log(lucas);
console.log(maria);

// with name
function Person(name, age){
    this.name = name;
    this.age = age;
}

let person1 = new Person("Lucas", 27);
console.log(person1);

// Adding methods
Person.prototype.info = function() {
    console.log(`Hi I'm ${this.name} and I'm ${this.age}`);
}

person1.info();


// Extension

let personExtended = {
    height: 180,
    ...person1
}

console.log(personExtended);

// 2. Clases

console.log("%c2. Clases", 'color: #229179; font-size: 16px;');

// Class delcaration

// const error_student = new Student("Pepe", 23); // Uncomment this to throw a ReferenceError for hoistin.

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
    }
}

const firstStudent = new Student("Pedro", 22);
firstStudent.displayInfo();

// Class expression

// unnamed

let NewStudent = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
    }
}

console.log(NewStudent.name);

// named

let NewPerson = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
    }
}

console.log(NewPerson.name);

// New Class

class Cat {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    displayInfo() {
        console.log(`miau miau miau miau`);
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(newName) {
        this._name = newName;
    }
}

let snowball = new Cat("Snowball", 7);
console.log(snowball.name);
snowball.name = "Snowball II";
console.log(snowball.name);

// Inheritance

class Vehicle {
    constructor(tires, plate) {
        this._tires = tires;
        this._plate = plate;
    };

    start() {
        console.log("Starting the engine...");
    }

    info() {
        console.log(`${this.constructor.name} with plate: ${this._plate}`)
    }
}

class Car extends Vehicle{
    constructor(plate) {
        super(4, plate);
    }

    turnRadio() {
        console.log("Tunning the radio");
    }
}

let opel = new Car("234lk");

opel.info();
opel.turnRadio();