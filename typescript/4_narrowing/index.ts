console.log("%cNarrowing", "color: #3913B8; font-size: 20px;");

console.log("%c1. Typeof Narrowing", "color: #229179; font-size: 16px;");

let newMessage = "Hello World";
console.log(typeof newMessage); // Will return "string"

/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

console.log(padLeft("Hello world", 4)); // returns "    Hello world"

/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeftUnion(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

console.log(padLeft("Hello world", "        "));
//padLeftUnion("Hello world", boolean); // error as it's not an expected type

console.log("%c2. Equity Narrowing", "color: #229179; font-size: 16px;");

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // X e Y serán string
    x.toUpperCase();
    y.toLowerCase();
  } else {
    // X podrá ser string o number
    console.log(x);
    // Y podrá ser string o boolean
    console.log(y);
  }
}

example("string", true);

console.log("%c3. In Narrowing", "color: #229179; font-size: 16px;");

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

function getSmallPet(): Fish | Bird {
  return {
    swim: function () {
      console.log("swimming");
    },
  };
}

let pet = getSmallPet();

move(pet);

console.log(
  "%c4. Type Predicate Narrowing",
  "color: #229179; font-size: 16px;"
);

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
