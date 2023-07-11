console.log("%cManipulación de tipos", 'color: #3913B8; font-size: 20px;');
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
