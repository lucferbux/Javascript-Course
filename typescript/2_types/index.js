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
console.log("%c3. Union Types", 'color: #229179; font-size: 16px;');
function printPhoneNumber(phoneNumber) {
    console.log("Your phone number is " + phoneNumber);
}
printPhoneNumber(612389238);
printPhoneNumber("637839489");
// printPhoneNumber({ phone: 613892348}); // Error
console.log("%c4. Type Alias", 'color: #229179; font-size: 16px;');
var myID = "23789s";
var myOtherId = 213432423;
function printMail(mail) {
    var date = new Date(mail.timestamp);
    console.log("".concat(mail.header, " - ").concat(date));
    console.log("---------------------------------");
    console.log("".concat(mail.body));
}
var mail = { header: "Hello Everyone", body: "This is a test email", timestamp: Date.now() };
printMail(mail);
console.log("%c5. Type Assertion", 'color: #229179; font-size: 16px;');
var myCanvas = document.getElementById("container");
