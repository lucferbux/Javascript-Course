console.log("%cThis en JavaScript", "color: #3913B8; font-size: 20px;");

console.log("%c1. Global Context", "color: #229179; font-size: 16px;");
// Global Context
console.log(this === window);

var name = "Lucas";

this.surname = "Fernandez";

console.log("%c2 Función", "color: #229179; font-size: 16px;");
// Función
function f1() {
  return this;
}

// En un navegador:
console.log(f1() === window); // true

console.log("%c3 Función Modo Estricto", "color: #229179; font-size: 16px;");
// Función Modo Estricto
function f2() {
  "use strict"; // see strict mode
  return this;
}

console.log(f2() === undefined); // true

console.log("%c4 Método", "color: #229179; font-size: 16px;");
// Método
let person = {
  name: "Lucas Fernandez",
  greeting() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greeting();

console.log("%c5 Método Arrow Function", "color: #229179; font-size: 16px;");
// Método Arrow Function
let student = {
  name: "Pepe Navarro",
  greeting: () => {
    console.log(`Hello, my name is ${this.name}`); 
  },
};

// This will be lucas as this.name references the global context and name is defined with Lucas
student.greeting();

console.log("%c6 Evento", "color: #229179; font-size: 16px;");
// Evento
function actionButtonReceiver(button) {
  console.log("Button pressed with->");
  console.log(button);
}

console.log("%c6 Call, Apply & Bind", "color: #229179; font-size: 16px;");

console.log("+++++++ call ++++++++");

// Call
// Podemos usar call para llamar a una función añadiendo el contexto con algún objeto (y el resto de parámetros)

var myObj = {
  num: 2,
};

var addNumbers = function (num1, num2) {
  return this.num + num1 + num2;
};

console.log(addNumbers());

console.log(addNumbers.call(myObj, 1, 2));

console.log("+++++++ apply ++++++++");

// Apply
// El mismo concepto que call pero pasando los parámetros como arrays

let params = [1, 2];

console.log(addNumbers.apply(myObj, params));

console.log("+++++++ bind ++++++++");

// Bind

// Devuelve una función con el binding entre el objeto y la función
// Se usa por ejemplo para tener contexto del objeto en un callback

var otherObj = {
  num1: 5,
  num2: 4,
};

var otherFunc = function () {
  return this.num1 + this.num2;
};

var returnedFunc = otherFunc.bind(otherObj);

console.log(returnedFunc());
