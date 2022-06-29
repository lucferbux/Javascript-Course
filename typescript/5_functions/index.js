console.log("%cFunciones", 'color: #3913B8; font-size: 20px;');
console.log("%c1. Funciones Declarativs", 'color: #229179; font-size: 16px;');
// Named function
function sumNums(first, second) {
    return first + second;
}
var sum = sumNums(4, 5);
console.log(sum);
// will fail const fail = sumNums(3, "four");
// Anonymous function
var sumMore = function (first, second) {
    return first + second;
};
var sumAnother = sumMore(3, 9);
console.log(sumAnother);
function printHelloWorld() {
    console.log("Hello World");
}
printHelloWorld();
function sumThreeNums(first, second, third) {
    return first + second + (third || 0);
}
var sumThree = sumThreeNums(4, 5, 10);
console.log(sumThree);
var sumOptional = sumThreeNums(4, 5);
console.log(sumOptional);
function pow(base, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(base, exponent);
}
var powNum = pow(3, 2);
console.log(powNum);
function sumMultipleNums() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.reduce(function (p, c) { return p + c; }, 0);
}
var multipleNums = sumMultipleNums(1, 2, 3, 4, 5, 6);
console.log(multipleNums);
console.log("%c2. Funciones Anónimas", 'color: #229179; font-size: 16px;');
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    //console.log(s.toUppercase()); // Will trigger -> Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
    console.log(s.toUpperCase());
});
