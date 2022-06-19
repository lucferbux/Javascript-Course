console.log("%cTypes", 'color: #3913B8; font-size: 20px;');
console.log("%c1. Type annotation", 'color: #229179; font-size: 16px;');
//let student: string = [1, 2, 4]; // TypeScript error
var helloWorld = "Hello world"; // Will compile
function talkFunc(phrase) {
    console.log(phrase);
}
var arrayNum = [1, 2, 3];
//talkFunc(arrayNum); // TypeScript error
talkFunc("Hello world");
console.log("%c2. Categories", 'color: #229179; font-size: 16px;');
// string
var message = "Hello World";
// number
var sum = 2;
// optional
var optional = true;
//any
var anyObject = { name: "Lucas" };
// anyObject.callEmptyMethod(); will fail
// anyObject.otherAttribute; will fail
anyObject = "String";
// array
var numbers = [1, 2, 4];
// function
var func = function (firstArg, secondArg) {
    return firstArg + secondArg;
};
// object
var newObj = { x: 10, y: 4 };
console.log("%c3. Typeof", 'color: #229179; font-size: 16px;');
var newMessage = "Hello World";
console.log(typeof newMessage); // Will return "string"
// Typeof
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
printId("8908sdf");
console.log("%c4. Union Types", 'color: #229179; font-size: 16px;');
/**
* Takes a string and adds "padding" to the left.
* If 'padding' is a string, then 'padding' is appended to the left side.
* If 'padding' is a number, then that number of spaces is added to the left side.
*/
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '".concat(typeof padding, "'."));
}
console.log(padLeft("Hello world", 4)); // returns "    Hello world"
/**
* Takes a string and adds "padding" to the left.
* If 'padding' is a string, then 'padding' is appended to the left side.
* If 'padding' is a number, then that number of spaces is added to the left side.
*/
function padLeftUnion(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '".concat(typeof padding, "'."));
}
console.log(padLeft("Hello world", "        "));
//padLeftUnion("Hello world", boolean); // error as it's not an expected type
console.log("%c5. Type Alias", 'color: #229179; font-size: 16px;');
var myID = "23789s";
var myOtherId = 213432423;
console.log("%c6. Type Assertion", 'color: #229179; font-size: 16px;');
var myCanvas = document.getElementById("container");
