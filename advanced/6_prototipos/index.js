console.log("%cPrototipos", 'color: #3913B8; font-size: 20px;');

// 1. Creación de un objeto vacío
console.log("%c1. Creación objeto vacío", 'color: #229179; font-size: 16px;');
var person = function() {}

// 2. Añadir nuevo atributo con "Object.prototype"
person.prototype.name = 'n/a';
person.prototype.age = 0;

// Ahora al crear un nuevo objeto, estará vacío pero con dos atributos por defecto

var janeDoe = new person();

console.log(janeDoe);
console.log(janeDoe.name);
console.log(janeDoe.age);

person.prototype.hello = function () {
    return `Hello ${this.name}`;
}

console.log(janeDoe.hello());
