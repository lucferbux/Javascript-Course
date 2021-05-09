console.log("%cGlobal Namespace", 'color: #3913B8; font-size: 20px;');

// 1. Default root namespace in a browser is window
console.log("%c1. Default namespace", 'color: #229179; font-size: 16px;');
console.log(window);

// 2. Each variable declared is attached in the window
console.log("%c1. Scope of variables", 'color: #229179; font-size: 16px;');
var newVariable = "Hello World";
console.log(window.newVariable);

// 3. The way to avoid collision is create variables in it's own scope (functions...)
console.log("%c3. Avoid collision", 'color: #229179; font-size: 16px;');
function myScope() {
    var newName = "Lucas"
    return newName
}

console.log(myScope())
console.log(window.newName); //should be undefined

// 4.nCreating this variable should change that
console.log("%c4. Creating new variable", 'color: #229179; font-size: 16px;');
var newName = "Lucas Fernandez";
console.log(window.newName); //should be Lucas Fernandez