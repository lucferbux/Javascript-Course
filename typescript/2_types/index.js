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
