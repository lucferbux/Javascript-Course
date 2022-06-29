console.log("%cManipulación de tipos", "color: #3913B8; font-size: 20px;");

console.log("%c1. Genéricos", "color: #229179; font-size: 16px;");

console.log("-------- overview ----------");

let nums: Array<number> = [1, 3, 4];

const lastNumber = (arr: Array<number>) => {
  return arr[arr.length - 1];
};

const lNumber = lastNumber([2, 4, 5]);
console.log(lNumber);

const lastElement = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

const lastElementNumber = lastElement([2, 4, 5]);
console.log(lastElementNumber);
const lastElementString = lastElement<string>(["Hello", "World", "!"]); // Typescript infiere el tipo pero lo puedes indicar
console.log(lastElementString);

console.log("-------- multiple generics ----------");

const makeString = <X, Y>(x: X, y: Y): string => {
  return `${x} ${y}`;
};

const firstString = makeString(5, "hello");
console.log(firstString);

const secondString = makeString<string, number[]>("Array ->", [1, 2, 3]);
console.log(secondString);

console.log("-------- default values ----------");

const makeStringDefault = <X, Y = number>(x: X, y: Y): string => {
  return `${x} ${y}`;
};

const fistStringValid = makeStringDefault(5, "hello");
console.log(fistStringValid);

const secondStringValid = makeStringDefault<number[]>([1, 2, 3], 4);
console.log(secondStringValid);

// Will Fail -> const secondStringValid = makeStringDefault<number[]>([1, 2, 3], "hello");

console.log("-------- Constraints ----------");

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const person1 = makeFullName({
  firstName: "Lucas",
  lastName: "Fernandez",
  age: 28,
});
console.log(person1);
const person2 = makeFullName({
  firstName: "Pedro",
  lastName: "Ramirez",
  profession: "Full Stack",
});
console.log(person2);
// Will Fail const personFail = makeFullName({otherName: "Lucas", lastName: "Fernandez", age: 28});

console.log("-------- Interfaces ----------");

interface Message<T> {
  id: string;
  timestamp: number;
  data: T;
}

type MessageNumber = Message<number>;
let messageNumber: MessageNumber = {
  id: "as8df90asdf",
  timestamp: 23429342349,
  data: 23482934092384092384029384293840238,
};
console.log(messageNumber);

type MessageString = Message<string>;
let messageString: MessageString = {
  id: "oiausdf989as",
  timestamp: 38495830989,
  data: "Hello World",
};
console.log(messageString);

console.log("%c2. Keyof", "color: #229179; font-size: 16px;");

type Point = { x: number; y: number };
type P = keyof Point; // "x" | "y"
let point: P = "x";

type Staff = {
  name: string;
  salary: number;
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const developer: Staff = {
  name: "Tobias",
  salary: 100,
};

const nameType = getProperty(developer, "name");
console.log(nameType);
// Compiler error -> const salaryType getProperty(developer, ‘pay’); //Cannot find name 'pay'.(2304)

console.log("%c3. Typeof", "color: #229179; font-size: 16px;");

let s = "hello";
let n: typeof s = "world";
console.log(n);

function f() {
    return { x: 10, y: 3 };
}
type PointPredicate = ReturnType<typeof f>;

const pointPredicate: PointPredicate = {x: 10, y: 4};
console.log(pointPredicate);

console.log("%c4. Conditionals", "color: #229179; font-size: 16px;");

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string; // En este primer caso se evaluará si Dog extiende a Animal y se asignará number

type Example2 = RegExp extends Animal ? number : string; // Como RegExp no extiende a Animal se asignará el tipo string


interface IdLabel {
    id: number;
    message: string;
    timestamp: number;
}
interface NameLabel {
    name: string;
    message: string;
    timestamp: number;
}

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  if (typeof idOrName === "number") {
    return { id: 1, message: "Hello world", timestamp: 234234234 } as NameOrId<T>;
  } else {
    return { name: "foo", message: "Hello world", timestamp: 234234234 } as NameOrId<T>;
  }
}

let firstLabel = createLabel("typescript");
console.log(firstLabel);

let secondLabel = createLabel(23);
console.log(secondLabel);