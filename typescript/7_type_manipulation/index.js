var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("%cManipulación de tipos", "color: #3913B8; font-size: 20px;");
console.log("%c1. Genéricos", "color: #229179; font-size: 16px;");
console.log("-------- overview ----------");
var nums = [1, 3, 4];
var lastNumber = function (arr) {
    return arr[arr.length - 1];
};
var lNumber = lastNumber([2, 4, 5]);
console.log(lNumber);
var lastElement = function (arr) {
    return arr[arr.length - 1];
};
var lastElementNumber = lastElement([2, 4, 5]);
console.log(lastElementNumber);
var lastElementString = lastElement(["Hello", "World", "!"]); // Typescript infiere el tipo pero lo puedes indicar
console.log(lastElementString);
console.log("-------- multiple generics ----------");
var makeString = function (x, y) {
    return "".concat(x, " ").concat(y);
};
var firstString = makeString(5, "hello");
console.log(firstString);
var secondString = makeString("Array ->", [1, 2, 3]);
console.log(secondString);
console.log("-------- default values ----------");
var makeStringDefault = function (x, y) {
    return "".concat(x, " ").concat(y);
};
var fistStringValid = makeStringDefault(5, "hello");
console.log(fistStringValid);
var secondStringValid = makeStringDefault([1, 2, 3], 4);
console.log(secondStringValid);
// Will Fail -> const secondStringValid = makeStringDefault<number[]>([1, 2, 3], "hello");
console.log("-------- Constraints ----------");
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
var person1 = makeFullName({
    firstName: "Lucas",
    lastName: "Fernandez",
    age: 28
});
console.log(person1);
var person2 = makeFullName({
    firstName: "Pedro",
    lastName: "Ramirez",
    profession: "Full Stack"
});
console.log(person2);
// Will Fail const personFail = makeFullName({otherName: "Lucas", lastName: "Fernandez", age: 28});
console.log("-------- Interfaces ----------");
var messageNumber = {
    id: "as8df90asdf",
    timestamp: 23429342349,
    data: 23482934092384092384029384293840238
};
console.log(messageNumber);
var messageString = {
    id: "oiausdf989as",
    timestamp: 38495830989,
    data: "Hello World"
};
console.log(messageString);
console.log("%c2. Keyof", "color: #229179; font-size: 16px;");
var point = "x";
function getProperty(obj, key) {
    return obj[key];
}
var developer = {
    name: "Tobias",
    salary: 100
};
var nameType = getProperty(developer, "name");
console.log(nameType);
// Compiler error -> const salaryType getProperty(developer, ‘pay’); //Cannot find name 'pay'.(2304)
console.log("%c3. Typeof", "color: #229179; font-size: 16px;");
var s = "hello";
var n = "world";
console.log(n);
function f() {
    return { x: 10, y: 3 };
}
var pointPredicate = { x: 10, y: 4 };
console.log(pointPredicate);
console.log("%c4. Conditionals", "color: #229179; font-size: 16px;");
function createLabel(idOrName) {
    if (typeof idOrName === "number") {
        return { id: 1, message: "Hello world", timestamp: 234234234 };
    }
    else {
        return { name: "foo", message: "Hello world", timestamp: 234234234 };
    }
}
var firstLabel = createLabel("typescript");
console.log(firstLabel);
var secondLabel = createLabel(23);
console.log(firstLabel);
