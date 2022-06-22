console.log("%cFunciones", 'color: #3913B8; font-size: 20px;');

// Declaration
console.log("%c1. Declaración", 'color: #229179; font-size: 16px;');
console.log(functionDeclaration())

// Function declaration -> Regular function, it will run at the start of the scope with hoisting

function functionDeclaration() {
    console.log("function declaration");
};

// Expression
console.log("%c2. Expression", 'color: #229179; font-size: 16px;');

// Function expression -> Anonymous function assigned to a variable

var functionExpression = function() {
    console.log("function expression");
}

// Function as a parameter
function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x;
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f,numbers);
  console.log(cube);

// Paso por valor y referencia
console.log("%c2. Paso por valor y referencia", 'color: #229179; font-size: 16px;');

function changeValue(object1) {
    object1.brand = 'Samsung';
    object1.model = 'Galaxy';
}

var myPhone = {brand: 'Apple', model: 'iPhone', year: 2020};
var x, y;

x = myPhone.brand; // x gets the value "Apple"
console.log(x);

changeValue(myPhone);
y = myPhone.brand; // y gets the value "Samsung"
console.log(y);

// Variables locales y variables globales
console.log("%c3. Variables locales y variables globales", 'color: #229179; font-size: 16px;');

let outerVariable = "I'm an outer variable";
let otherVariable = "I'm other outer variable";

function displayMessage() {
    let innerVariable = "I'm an inner variable";

    console.log(innerVariable);
    console.log(outerVariable);

    let otherVariable = "I'm defining an inner variable";
    console.log(otherVariable);
}

displayMessage();

// console.log(innerVariable); This will fail

// Parámetros
console.log("%c3. Parámetros", 'color: #229179; font-size: 16px;');

// normal parameter
function multiply(a, b) {
    b = b ?? 1; // Nullish operator

    return a * b;
}
console.log(multiply(5)); // 5
  
// default parameter
function multiplyDefault(a, b = 1) {
    return a * b;
}

console.log(multiplyDefault(5)); // 5
  
// rest parameter
function multiplyRest(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
}

var arr = multiplyRest(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

// Valores de retorno
console.log("%c3. Valores de retorno", 'color: #229179; font-size: 16px;');

// normal parameter
function multiplyReturn(a, b) {
    if(b !== undefined) {
      return a * b;
    } else {
        return 0;
    }
}
console.log(multiplyReturn(5)); // 0

// return
function returnNothing() { return }

console.log(returnNothing() === undefined);