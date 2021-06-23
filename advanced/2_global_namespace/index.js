console.log("%cNamespace", 'color: #3913B8; font-size: 20px;');

// 1. Namespace in JavaScript
console.log("%c1. Namespace", 'color: #229179; font-size: 16px;');
let name = "Lucas";

console.log(name);

function displayNewName() {
    let name = "Ricardo";
    console.log(name);
}

displayNewName();

// 2. Default root namespace in a browser is window
console.log("%c2. Global namespace", 'color: #229179; font-size: 16px;');
console.log(window);
console.log(window === this); // Equal in browse
console.log(this);

// 3. Each variable declared is attached in the window
console.log("%c3. Scope of variables", 'color: #229179; font-size: 16px;');
var newVariable = "Hello World";
console.log(window.newVariable);

// 4. The way to avoid collision is create variables in it's own scope (functions...)
console.log("%c4. Avoid collision", 'color: #229179; font-size: 16px;');
function myScope() {
    var newName = "Lucas"
    return newName
}

console.log(myScope())
console.log(window.newName); //should be undefined

// 5.Creating this variable should change that
console.log("%c5. Creating new variable", 'color: #229179; font-size: 16px;');
var newName = "Lucas Fernandez";
console.log(window.newName); //should be Lucas Fernandez