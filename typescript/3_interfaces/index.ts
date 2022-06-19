console.log("%cInterfaces", 'color: #3913B8; font-size: 20px;');

console.log("%c1. Overview", 'color: #229179; font-size: 16px;');
interface Person {
    name: string;
    age: number;
    id?: string;
    talk:(string)=>void;
}

interface Student extends Person {
    college: string;
    bachelor: string;
}

const student: Student = {
    name: "Lucas",
    age: 25,
    college: "ThreePoints",
    bachelor: "Master Full Stack",
    talk: function(phrase: string) {
        console.log(phrase);
    }
}

student.talk("Hello world");

console.log("%c2. Difference between Interfaces & Type Annotations", 'color: #229179; font-size: 16px;');

// Extendiendo una Interface
interface Vehicle {
    name: string
}

interface Car extends Vehicle {
    id: number
}

const opel: Car = { name: "Opel", id: 123423434 };
console.log(opel.name);
console.log(opel.id);

// Extendiendo un Type mediante intersecciones

type Computer = {
    name: string
}

type Mac = Computer & {
    model: string
}

const mac: Mac = { name: "MacBook", model: "Pro" };
console.log(mac.name);
console.log(mac.model);


// Añadir nuevos campos a una Interface

interface Phone {
    brand: string
}

interface Phone {
    model: string
}

const iPhone: Phone = { brand: "iPhone", model: "13" };
console.log(iPhone.brand);
console.log(iPhone.model);

// Añadir nuevos campos a una Type (No se puede)

type Tablet = {
    brand: string
}

// Error: Duplicate identifier "Tablet"
// type Tablet = {  
//     model: string
// }