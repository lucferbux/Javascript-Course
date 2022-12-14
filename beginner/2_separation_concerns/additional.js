// 2. additional.js
console.log("%c2. additional.js", 'color: #229179; font-size: 16px;');

function externalExecution() {
    console.log("I'm being executed");
}

export { externalExecution };


// Extra, window

console.log("Window property");

var test = function() {
    return this === window;
}

console.log(test());


var testBind = test.bind(window);

console.log(testBind());
