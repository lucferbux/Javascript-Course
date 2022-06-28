console.log("%cOptional Chaining", 'color: #3913B8; font-size: 20px;');

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
