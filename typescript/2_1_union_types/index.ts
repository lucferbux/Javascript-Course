console.log("%cManipulación de tipos", 'color: #3913B8; font-size: 20px;');

console.log("%c1. Union Types", 'color: #229179; font-size: 16px;');

function printPhoneNumber(phoneNumber: number | string) {
  console.log("Your phone number is " + phoneNumber);
}

printPhoneNumber(612389238);
printPhoneNumber("637839489");
// printPhoneNumber({ phone: 613892348}); // Error

console.log("%c2. Type Alias", 'color: #229179; font-size: 16px;');

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

console.log("%c3. Type Assertion", 'color: #229179; font-size: 16px;');

const myCanvas = document.getElementById("container") as HTMLDivElement;
