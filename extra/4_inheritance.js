console.log("Inheritance");


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        return `Hello ${this.name}`
    }

}

let lucas = new Person("lucas", 26);

console.log(lucas.hello());

function OldPerson(name, age) {
    this.age = age;
    this.name = name;
}

OldPerson.prototype.hello = function() {
    return `Hello ${this.name}`;
}

let lucasOld = new OldPerson("lucas", 26);
console.log(lucasOld.hello());