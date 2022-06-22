console.log("%cObjetos", 'color: #3913B8; font-size: 20px;');

// Definición
console.log("%c1. Definición", 'color: #229179; font-size: 16px;');

let student = new Object();
let user = {};
let me = {name: "Lucas", age: 27};

console.log(student);
console.log(user);
console.log(me);

// Propiedades
console.log("%c2. Propiedades", 'color: #229179; font-size: 16px;');

// Accesing properties
console.log(me.name);
console.log(me.age);

// Creating properties
me.profession = "Full Stack";
console.log(me);

// Deleting properties
delete me.profession;

console.log(me);

// multiword properties

let multiword = {
    "new variable": "Hello world"
}

// multiword.new variable // Access error
console.log(multiword["new variable"]);

multiword["other variable"] = "I'm Lucas";

console.log(multiword);

// Orientación a prototipos
console.log("%c3. Orientación a prototipos", 'color: #229179; font-size: 16px;');

// 1. Creación de un objeto vacío
var person = function() {}
console.log(person);

// 2. Añadir nuevo atributo con "Object.prototype"
person.prototype.name = 'n/a';
person.prototype.age = 0;

console.log(person);

// Ahora al crear un nuevo objeto, estará vacío pero con dos atributos por defecto

var janeDoe = new person();

console.log(janeDoe);
console.log(janeDoe.name);
console.log(janeDoe.age);

person.prototype.hello = function () {
    return `Hello ${this.name}`;
}

console.log(janeDoe.hello());

// Object inheritance
console.log("+++++ creating vehicle +++++++++");

let vehicle = {
    tires: 4,
    start: function() {
        console.log("Starting engine...");
        console.log(vehicle.tires);
    }
}

vehicle.start();

console.log("+++++ creating car +++++++++");

let car = Object.create(vehicle);

car.start();

car.stop = function() {
    console.log("Stop the engine...");
}

console.log(vehicle);
console.log(car);

// Desestructuración de objetos
console.log("%c4. Desestructuración de objetos ", 'color: #229179; font-size: 16px;');
let teacher = {
    name: 'Lucas',
    age: 25,
    nationality: 'spanish'
};
console.log(person);

let nameTeacher = teacher.name;
let nationalityTeacher = teacher.nationality;
console.log(nameTeacher);
console.log(nationalityTeacher); 

// 1. Property to variable
const { age } = teacher;
console.log(age);

// 2. Multiple properties
const { name, nationality } = teacher;
console.log(name);
console.log(nationality);

// 3. Wrong desttructuring
const { invented } = teacher;
console.log(invented);

// 4. Default value
const { other = "I have a value! " } = teacher;

// 5. Alias
const { age: agePerson } = teacher;
console.log(agePerson);