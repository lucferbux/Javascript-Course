console.log("%cVariables", 'color: #3913B8; font-size: 20px;');

console.log("%c1. Declaration", 'color: #229179; font-size: 16px;');

var firstVar = "Hello World";
let secondVar = "I 'm Lucas";
const ID_PERSON = "28934289D";

console.log(firstVar);
console.log(secondVar);
console.log(ID_PERSON);

// declaración en una misma linea
let nombre = 'Lucas', apellido = 'Fernandez', edad = 27;

// declaración "coma first"
let nombre2 = 'Lucas'
    , apellido2 = 'Fernandez'
    , edad2 = 27; 


console.log("%c2. Var vs Let", 'color: #229179; font-size: 16px;');

console.log("%c2.1. Regals de Scope", 'color: #cf694a; font-size: 14px;');

function scopeRules() {
    var hello = "Hello";
    let world = "World";
  
    console.log(hello, world); // Hello World
  
    {
      var name = "Lucas"
      let surname = "Fernandez";
      console.log(name, surname); // Lucas Fernandez
    }
  
    console.log(name); // Lucas
    //console.log(surname); // ReferenceError
    console.log("Reference Error");
}

scopeRules()

console.log("%c2.2. Hoisting", 'color: #cf694a; font-size: 14px;');

// hoisted
console.log(hoisted);
var hoisted = "hoisted";
console.log(hoisted)

// not hoisted
//console.log(notHoisted); //ReferenceError
console.log("Reference Error");
let notHoisted = "not hoisted";
console.log(notHoisted);

console.log("%c2.3. Propiedad Global", 'color: #cf694a; font-size: 14px;');

var globalVar = "Global";
let notGlobalVar = "Not global";

console.log(window.globalVar);
console.log(window.notglobalVar);

console.log("%c2.4. Re-declaración", 'color: #cf694a; font-size: 14px;');

var redeclare = "hello";
var redeclare = "world"; 
console.log(redeclare);

let notRedeclare = "hello"; 
//let notRedeclare = "bar2"; 
console.log("Sintax Error");