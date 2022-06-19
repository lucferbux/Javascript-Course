console.log("%cFunciones", 'color: #3913B8; font-size: 20px;');

console.log("%c1. Funciones Declarativs", 'color: #229179; font-size: 16px;');

// Named function
function sumNums(first: number, second: number): number {
  return first + second;
}

const sum = sumNums(4, 5);

// will fail const fail = sumNums(3, "four");

// Anonymous function
let sumMore = function (first: number, second: number): number {
  return first + second;
};

function printHelloWorld(): void {
  console.log("Hello World");
}

function sumThreeNums(first: number, second: number, third?: number) {
  return first + second + (third || 0);
}

function pow(base: number, exponent: number = 10) {
  return base ** exponent;
}

function sumMultipleNums(...rest: number[]) {
  return rest.reduce((p, c) => p + c, 0);
}

console.log("%c1. Funciones Anónimas", 'color: #229179; font-size: 16px;');

const names = ["Alice", "Bob", "Eve"];

names.forEach((s) => {
  //console.log(s.toUppercase()); // Will trigger -> Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
  console.log(s.toUpperCase());
});
