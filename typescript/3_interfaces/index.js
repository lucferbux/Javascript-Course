console.log("%cInterfaces", 'color: #3913B8; font-size: 20px;');
console.log("%c1. Overview", 'color: #229179; font-size: 16px;');
var student = {
    name: "Lucas",
    age: 25,
    college: "ThreePoints",
    bachelor: "Master Full Stack",
    talk: function (phrase) {
        console.log(phrase);
    }
};
student.talk("Hello world");
console.log("%c2. Difference between Interfaces & Type Annotations", 'color: #229179; font-size: 16px;');
var opel = { name: "Opel", id: 123423434 };
console.log(opel.name);
console.log(opel.id);
var mac = { name: "MacBook", model: "Pro" };
console.log(mac.name);
console.log(mac.model);
var iPhone = { brand: "iPhone", model: "13" };
console.log(iPhone.brand);
console.log(iPhone.model);
// Error: Duplicate identifier "Tablet"
// type Tablet = {  
//     model: string
// }
