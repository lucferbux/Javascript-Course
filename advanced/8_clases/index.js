console.log("%cES6 Clases", 'color: #3913B8; font-size: 20px;');

// 1. ES 6 Classes
console.log("%c1. Clases", 'color: #229179; font-size: 16px;');
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        return `Hello ${this.name}`
    }

}

var lucas = new person("Lucas", 26);

console.log(lucas.hello());