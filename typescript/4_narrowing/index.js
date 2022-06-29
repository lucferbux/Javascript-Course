console.log("%cNarrowing", "color: #3913B8; font-size: 20px;");
console.log("%c1. Typeof Narrowing", "color: #229179; font-size: 16px;");
var newMessage = "Hello World";
console.log(typeof newMessage); // Will return "string"
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '".concat(typeof padding, "'."));
}
console.log(padLeft("Hello world", 4)); // returns "    Hello world"
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeftUnion(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '".concat(typeof padding, "'."));
}
console.log(padLeft("Hello world", "        "));
//padLeftUnion("Hello world", boolean); // error as it's not an expected type
console.log("%c2. Equity Narrowing", "color: #229179; font-size: 16px;");
function example(x, y) {
    if (x === y) {
        // X e Y serán string
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        // X podrá ser string o number
        console.log(x);
        // Y podrá ser string o boolean
        console.log(y);
    }
}
example("string", true);
console.log("%c3. In Narrowing", "color: #229179; font-size: 16px;");
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function getSmallPet() {
    return {
        swim: function () {
            console.log("swimming");
        }
    };
}
var pet = getSmallPet();
move(pet);
console.log("%c4. Type Predicate Narrowing", "color: #229179; font-size: 16px;");
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
