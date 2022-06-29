console.log("%cFunciones", 'color: #3913B8; font-size: 20px;');

console.log("%c1. Funciones Declarativs", 'color: #229179; font-size: 16px;');

// Named function
function sumNums(first: number, second: number): number {
  return first + second;
}

const sum = sumNums(4, 5);
console.log(sum);

// will fail const fail = sumNums(3, "four");

// Anonymous function
let sumMore = function (first: number, second: number): number {
  return first + second;
};

const sumAnother = sumMore(3, 9);
console.log(sumAnother);

function printHelloWorld(): void {
  console.log("Hello World");
}
printHelloWorld();

function sumThreeNums(first: number, second: number, third?: number) {
  return first + second + (third || 0);
}
const sumThree = sumThreeNums(4, 5, 10);
console.log(sumThree);

const sumOptional = sumThreeNums(4, 5);
console.log(sumOptional);


function pow(base: number, exponent: number = 10) {
  return base ** exponent;
}

const powNum = pow(3, 2);
console.log(powNum);

function sumMultipleNums(...rest: number[]) {
  return rest.reduce((p, c) => p + c, 0);
}

const multipleNums = sumMultipleNums(1, 2, 3, 4, 5, 6);
console.log(multipleNums);

console.log("%c2. Funciones Anónimas", 'color: #229179; font-size: 16px;');

const names = ["Alice", "Bob", "Eve"];

names.forEach((s) => {
  //console.log(s.toUppercase()); // Will trigger -> Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
  console.log(s.toUpperCase());
});
