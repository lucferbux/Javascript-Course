console.log("%cAdvance conditionals", 'color: #3913B8; font-size: 20px;');

console.log("%c1. Ternary operator", 'color: #229179; font-size: 16px;');

const age = 22;

let accessAllowed = (age > 18) ? true : false;

let login;
let password = prompt("Please enter the password", "");

if (password == "patata") {
    login = true;
} else {
    login = false;
}

console.log(login);

let loginShort = (password == "patata") ? true : false;
console.log(loginShort);

console.log("%c2. Optional Chaining", "color: #229179; font-size: 16px;");

let dog = {
  name: "Seymur",
  age: 12,
  chip: {
    brand: "Soyner",
    address: "123, 3rd Street, New New York",
  },
  bark: () => {
    console.log("woof");
  },
};

let cat = null;

// bad
// cat.name

// good
console.log(dog.name); // this value exists
console.log(cat?.name); // optional chain would return undefined

console.log("------------------");

// bad
// dog.lease.color

// good
console.log(cat?.lease.brand); // this is unsafe, but valid in this context
console.log(dog.chip.brand); // this value exists
console.log(dog.lease?.color); // optional chain will avoid exception

console.log("------------------");

// bad
// dog.walk()

// good
dog.bark(); // this value exists
dog.walk?.(); // optional chain will return undefined when function is executed

console.log("------------------");

// bad
// dog.chip.["owner"]

// good
console.log(dog.chip?.["owner"]);

console.log("%c3. Nullish coalescing", 'color: #229179; font-size: 16px;');

let user;

console.log(user ?? "Anonymous");

user = "Lucas";

console.log(user ?? "Anonymous");

console.log((user !== null && user !== undefined) ? user : "Anonymous");