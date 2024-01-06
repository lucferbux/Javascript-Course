console.log("%cIteración avanzada", "color: #3913B8; font-size: 20px;");

console.log("%c1. map", "color: #229179; font-size: 16px;");
// map([🌽, 🐮, 🐔], cook) => [🍿, 🍔, 🍳]

const iterableArrayMap = [1, 2, 3];
const newArrayMap = iterableArrayMap.map((number) => number + 1);
console.log(newArrayMap);

console.log("%c1. filter", "color: #229179; font-size: 16px;");
// filter([🍿, 🍔, 🍳], isVegetarian) =>  [🍿, 🍳]

const iterableArrayFilter = [10, 20, 30, 40];
const filteredValues = iterableArrayFilter.filter((number) => number > 20);
console.log(filteredValues);

console.log("%c1. reduce", "color: #229179; font-size: 16px;");
// reduce([🍿, 🍳], eat) => 💩

const interableArrayReduce = [10, 20, 30];
const total = interableArrayReduce.reduce((accumulator, number) => {
  return accumulator + number;
});
console.log(total);

console.log("%c1. foreach", "color: #229179; font-size: 16px;");
// map map([🌽, 🐮, 🐔], cook) => [🍿, 🍔, 🍳]

const iterableArrayForEach = [1, 2, 3];
const sumNumbers = (number) => {
  console.log(number + 1);
};
const newArrayForEach = iterableArrayForEach.forEach((number) =>
  sumNumbers(number)
);
console.log(newArrayForEach);
