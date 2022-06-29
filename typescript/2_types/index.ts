console.log("%cTypes", 'color: #3913B8; font-size: 20px;');

console.log("%c1. Type annotation", 'color: #229179; font-size: 16px;');

//let student: string = [1, 2, 4]; // TypeScript error

let helloWorld: any = "Hello world" // Will compile

function talkFunc(phrase: string) {
    console.log(phrase);
}

let arrayNum = [1, 2, 3];

//talkFunc(arrayNum); // TypeScript error
talkFunc("Hello world");

console.log("%c2. Categories", 'color: #229179; font-size: 16px;');

// string
let message: string = "Hello World";
// number
let sum: number = 2;
// optional
let optional: boolean = true;

//any
let anyObject: any = { name: "Lucas" };
// anyObject.callEmptyMethod(); will fail
// anyObject.otherAttribute; will fail
anyObject = "String";

// array
let numbers: number[] = [1, 2, 4];
// function
let func: (firstArg: number, secondArg: number) => number = function (
  firstArg: number,
  secondArg: number
): number {
  return firstArg + secondArg;
};
// object
let newObj: { x: number; y: number } = { x: 10, y: 4 };

console.log("%c3. Union Types", 'color: #229179; font-size: 16px;');

function printPhoneNumber(phoneNumber: number | string) {
  console.log("Your phone number is " + phoneNumber);
}

printPhoneNumber(612389238);
printPhoneNumber("637839489");
// printPhoneNumber({ phone: 613892348}); // Error

console.log("%c4. Type Alias", 'color: #229179; font-size: 16px;');

type ID = number | string | boolean

let myID: ID = "23789s";
let myOtherId: ID = 213432423;

type Mail = {
  header: string;
  body: string;
  timestamp: number;
}

function printMail(mail: Mail) {
  const date = new Date(mail.timestamp);
  console.log(`${mail.header} - ${date}`);
  console.log(`---------------------------------`);
  console.log(`${mail.body}`);
}

let mail: Mail = { header: "Hello Everyone", body: "This is a test email", timestamp: Date.now() };

printMail(mail);

console.log("%c5. Type Assertion", 'color: #229179; font-size: 16px;');

const myCanvas = document.getElementById("container") as HTMLDivElement;
