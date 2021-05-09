console.log("%cFunciones Avanzadas", 'color: #3913B8; font-size: 20px;');

// 1. Función simple

console.log("%c1. Función simple", 'color: #229179; font-size: 16px;');

function sayHello(name) {
  return `Hello ${name}`;
}

console.log(sayHello("Lucas"));

// 2. Función anónima

console.log("%c2. Función anónima", 'color: #229179; font-size: 16px;');

var sayHelloVar = function (name) {
  return `Hello ${name} anonymously`;
};

console.log(sayHelloVar("Lucas"));

// ES6 Arrow Function -> This works different

console.log("%c3. Arrow function", 'color: #229179; font-size: 16px;');

sayHelloModern = (name) => {
  return `Hello ${name} modenr`;
};

console.log(sayHelloModern("Lucas"));

// 4. This keyword

console.log("%c4. This", 'color: #229179; font-size: 16px;');

let person = {
  name: "Lucas Fernandez",
  thisInArrow: () => {
    console.log("My name (arrow) is " + this.name); // no 'this' binding here
  },
  thisInArrowPassingelement: (nameBind) => {
    console.log("My name (arrow) is " + nameBind); // no 'this' binding here
  },
  thisInRegular() {
    console.log("My name is " + this.name); // 'this' binding works here
  },
};
person.thisInArrow();
person.thisInArrowPassingelement(person.name);
person.thisInRegular();


// 4. This context function

console.log("%c5. Function context", 'color: #229179; font-size: 16px;');

// const profile = {
//     firstName: '',
//     lastName: '',
//     setName: function(name) {
//         console.log(this.firstName);
//         let splitName= function(n) {
//             // this will get the global this so it will attach the global context
//             console.log(this);
//             let nameArray = n.split(' ');
//             this.firstName = nameArray[0];
//             this.lastName = nameArray[1];
//         }
//         splitName(name);
//     }
// }

// profile.setName('john doe');


const profile = {
    firstName: '',
    lastName: '',
    setName: function(name) {
        console.log("inside function ->" + this.firstName);
        let splitName = (n) => {
            // As an arrow function, it binds the context of the object
            console.log(this);
            let nameArray = n.split(' ');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }
        splitName(name);
    }
}

profile.setName('john doe');
console.log(profile.firstName);
