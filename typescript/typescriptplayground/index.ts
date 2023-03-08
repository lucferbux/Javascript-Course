console.log("----- Ej 1 -------")

interface Person {
    name: string;
    age: number;
    profession: string;
}

const listProperties = (person: Person): Array<number|string> => {
    //return Object.values(person);
    return Object.keys(person).map((element) => person[element as keyof Person]);
}

const paco: Person = {
    name: "Paco",
    age: 45,
    profession: "Architect"
}

console.log(listProperties(paco));


console.log("----- Ej 2 -------")

type stringOrNumber = number | string;

const sumOrConcatenate = (value1: stringOrNumber, value2: stringOrNumber): stringOrNumber => {
    if(typeof value1 === "string" && typeof value2 === "string" ) {
        return `${value1}-${value2}`;
    } else if(typeof value1 === "number" && typeof value2 === "number" ) {
        return value1 + value2;
    } else {
        return `${value1}+${value2}`
    }
}

console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate(4, "hello")); // 4+hello 
console.log(sumOrConcatenate("hello", 4)); // 4+hello 
console.log(sumOrConcatenate("hello", "world")); //hello-world

console.log("----- Ej 3 -------")

interface Car {
    tires: Number;
    turnOnEngine(): void;
    pressPedal(): void;
}

interface Motorcycle {
    tires: Number;
    turnOnEngine(): void;
    openThrottle(): void
}

interface Patinente {
    tires: Number;
    turnOnEngine(): void;
    break(): void
}

function isCar(vehicle: Car | Motorcycle | Patinente): vehicle is Car {
    return (vehicle as Car).pressPedal !== undefined;
}

function isMotorcycle(vehicle: Car | Motorcycle | Patinente): vehicle is Motorcycle {
    return (vehicle as Motorcycle).openThrottle !== undefined;
}

function drive(vehicle: Car | Motorcycle | Patinente): void {
    vehicle.turnOnEngine();

    if(isCar(vehicle)) {
        vehicle.pressPedal();
    } else if (isMotorcycle(vehicle)) {
        vehicle.openThrottle();
    } else {
        vehicle.break();
    }
}

console.log("----- Ej 4 -------")


function removeFirstEntry<T extends string|number>(arr: T[]): T[] {
    return arr.splice(1);
}


const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
//const newUnsupportedArray = removeFirstEntry(unsupportedArray); // --> will fail

console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];