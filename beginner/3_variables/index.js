console.log("Variables");


console.log("-------- var ---------");
// hoisting, variable is defined but not asigned, so undefined
console.log(greeter);

var greeter = "hey hi";

// variable now defined
console.log(greeter);

var times = 4;

if (times > 3) {
    // overriding variable within the scope
    var greeter = "say Hello instead"; 
}

console.log(greeter) // "say Hello instead"


console.log("-------- let -------------");

let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"