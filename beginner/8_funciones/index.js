console.log("Hello World");

console.log(functionDeclaration())

// Function declaration -> Regular function, it will run at the start of the scope with hoisting

function functionDeclaration() {
    console.log("function declaration");
};

// Function expression -> Anonymous function assigned to a variable

var functionExpression = function() {
    console.log("function expression");
}