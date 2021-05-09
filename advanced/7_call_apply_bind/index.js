console.log("%cCall, Apply & Bind", 'color: #3913B8; font-size: 20px;');

// 1. Call
console.log("%c1. Call", 'color: #229179; font-size: 16px;');

var myObj = {
    num: 2
}

var addNumbers = function(num1, num2) {
    return this.num + num1 + num2
}

console.log(addNumbers());

// We can use call to invoke a function attaching the context with some object (and the rest of the parameters)
console.log(addNumbers.call(myObj, 1, 2));


// 2. Apply
// Same concept as call but passing the parameters as an array
console.log("%c2. Apply", 'color: #229179; font-size: 16px;');

let params = [1, 2]

console.log(addNumbers.apply(myObj, params));

// 3. Bind
// Returns a new function with the binding between the object and the function
// Is used for example to have the context of the object in a callback

console.log("%c3. Bind", 'color: #229179; font-size: 16px;');

var otherObj = {
    num1: 5,
    num2: 4
}

var otherFunc = function() {
    return this.num1 + this.num2;
}

var returnedFunc = otherFunc.bind(otherObj);

console.log(returnedFunc());