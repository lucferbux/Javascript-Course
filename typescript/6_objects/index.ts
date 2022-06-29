console.log("%cObjects", "color: #3913B8; font-size: 20px;");

console.log("%c1. Anonymous", "color: #229179; font-size: 16px;");

function greetAnonymous(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
console.log(greetAnonymous({name: "Lucas", age: 28}));

console.log("%c2. Interface", "color: #229179; font-size: 16px;");

interface Person {
  name: string;
  age: number;
}

let person: Person = {name: "Lucas", age: 28};
 
function greetInterface(person: Person) {
  return "Hello " + person.name;
}
console.log(greetInterface(person));

console.log("%c3. Type", "color: #229179; font-size: 16px;");

type PersonType = {
  name: string;
  age: number;
};

let personType: PersonType = {name: "Lucas", age: 28};
 
function greetType(person: PersonType) {
  return "Hello " + person.name;
}

console.log(greetType(personType));