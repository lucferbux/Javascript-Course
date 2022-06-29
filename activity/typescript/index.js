// Ejercicio 1
// Ejercicio 2
function sumOrConcatenate(value1, value2) {
    if (typeof value1 === "number" && typeof value2 === "number") {
        return value1 + value2;
    }
    else if (typeof value1 === "string" && typeof value2 === "string") {
        return "".concat(value1, "-").concat(value2);
    }
    else {
        return "".concat(value1, ":").concat(value2);
    }
}
console.log(sumOrConcatenate(4, 3));
console.log(sumOrConcatenate(4, "hello"));
console.log(sumOrConcatenate("hello", "world"));
// Ejercicio 3
