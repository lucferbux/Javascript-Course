console.log("%cData types", 'color: #3913B8; font-size: 20px;');

// Primitive types
console.log("%c1. Primitive types", 'color: #229179; font-size: 16px;');

let boolVal = true;
console.log(boolVal);
let nullVal = null;
console.log(nullVal);
let undefinedVal = undefined;
console.log(undefinedVal);
let numberVal = 10;
console.log(numberVal);
let stringVal = "Hello";
console.log(stringVal);
let symVal = Symbol();
console.log(symVal);


// Reference types
console.log("%c2. Reference types", 'color: #229179; font-size: 16px;');
let emptyObject = {};
let filledObject = {"name": "lucas", "surname": "fernandez"};
console.log(emptyObject);
console.log(filledObject);

let filledArray = ["one", "two", "three"];
console.log(filledArray);

let funVale = function() {
    return "Hello World";
}
console.log(funVale());


console.log("%c3. Dynamic data types", 'color: #229179; font-size: 16px;');
// Dynamic data types (could change)
let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean
console.log(foo);


// Copying primitive
console.log("%c4. Copying primitive", 'color: #229179; font-size: 16px;');
var a = 13         // assign `13` to `a`
var b = a          // copy the value of `a` to `b`
b = 37             // assign `37` to `b`
console.log(a)     // => 13

// Copying a reference
console.log("%c5. Copying reference", 'color: #229179; font-size: 16px;');
var a = { c: 13 }  // assign the reference of a new object to `a`
var b = a          // copy the reference of the object inside `a` to new variable `b`
b.c = 37           // modify the contents of the object `b` refers to
console.log(a)     // => { c: 37 }