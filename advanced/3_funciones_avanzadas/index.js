console.log("%cFunciones Avanzadas", 'color: #3913B8; font-size: 20px;');

console.log("%c1. Recursión", 'color: #229179; font-size: 16px;');
// Recursión
function cuadrado(base, exponente) {
  if(exponente == 1) {
    return base;
  } else {
    return base * cuadrado(base, exponente - 1)
  }
}

console.log(cuadrado(2, 5));

console.log("%c2. Closure", 'color: #229179; font-size: 16px;');
// Closure
function closureFunc() {
  let name = "Lucas";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

let newFunc = closureFunc();
newFunc();

console.log("%c3. Rest Parameter", 'color: #229179; font-size: 16px;');
// Rest Paramter
function sumAllNumbers(...numbers) {
  let sum = 0;
  for(let i of numbers) {
    sum+=i;
  } 
  return sum;
}
console.log(sumAllNumbers(2, 3, 4, 5));
console.log(sumAllNumbers(1, 1, 1, 1));

// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let sumArr = [...arr1, ...arr2];
console.log(sumArr);
console.log(sumAllNumbers(...sumArr));


console.log("%cArrow Functions", 'color: #3913B8; font-size: 20px;');

console.log("%c1. Declaration", 'color: #229179; font-size: 16px;');
// Declaration

// ES5
var add = function(x, y) {
  return x + y;
};
// ES6
let addShort = (x, y) => { return x + y };
console.log(addShort(1, 2));

let addShorter = (x, y) => x + y 
console.log(addShorter(1, 2));

// One argument
let squareNum = x => x * x;
console.log(squareNum(2));

// No argument
let helloWorld = _ => console.log("Hello World");
helloWorld();

console.log("%c2. Binding", 'color: #229179; font-size: 16px;');

// Binding

let oldFunc = {
  showArgs() {
    console.log(arguments);
  }
};
oldFunc.showArgs(1, 2, 3, 4)


let myFunc = {  
  showArgs : () => { 
  console.log(...arguments); 
 } 
}; 
//myFunc.showArgs(1, 2, 3, 4); // ReferenceError
console.log("ReferenceError");


console.log("%c3. This", 'color: #229179; font-size: 16px;');

// This

let person = {
  name: "Lucas Fernandez",
  thisInArrow: () => {
    console.log("My name (arrow) is " + this.name); // no 'this' binding here
  },
  thisInArrowPassingelement: (nameBind) => {
    console.log("My name (arrow) is " + nameBind); // no 'this' binding here
  },
  thisInRegular() {
    console.log("My name is " + this.name); // 'this' binding works here
  },
};
person.thisInArrow();
person.thisInArrowPassingelement(person.name);
person.thisInRegular();


console.log("%c4. New", 'color: #229179; font-size: 16px;');

// New

function add(x, y) {
  console.log(x + y);
}

new add(2, 3);

let addArrow = (x, y) => {
  console.log(x + y);
};

//new addArrow(2, 3);
console.log("SyntaxError");