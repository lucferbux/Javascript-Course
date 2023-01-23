// Ejercicio 1
console.error('Ejercicio 1---------------------------------------------------------')
interface Person {
    name: string,
    age: number,
    profession: string
}

type P = keyof Person
type stringOrNumber = string | number;

const personProps = (person: Person): stringOrNumber[] => {

    const personCopy = person;
    const propsNames = Object.keys(person)

    let propsValues: stringOrNumber[] = []

    propsNames.forEach(prop => {
        const property: P = prop as keyof Person
        const propValue = getProperty(personCopy, property)
        propsValues.push(propValue);
    });

    return propsValues;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const test1Ej1: Person = {
    name: 'Andres Felipe Ospina Lenis',
    age: 31,
    profession: 'Backend dev'
}

const personValues = personProps(test1Ej1);
console.log(personValues)

// Ejercicio 2
console.error('Ejercicio 2---------------------------------------------------------')

function sumOrConcatenate(x: stringOrNumber, y: stringOrNumber): stringOrNumber {

    if (typeof x === 'number' && typeof y === 'number') return x + y;
    else if (typeof x === 'string' && typeof y === 'string') return `${x}-${y}`;
    else return `${x}:${y}`
}

console.log(sumOrConcatenate(4, 3));
console.log(sumOrConcatenate(4, "hello"));
console.log(sumOrConcatenate("hello", "world"));

// Ejercicio 3
console.error('Ejercicio 3---------------------------------------------------------')

interface Car {
    tires: number;
    turnOnEngine(): void;
    pressPedal(): void;
}

interface Motorcycle {
    tires: number;
    turnOnEngine(): void;
    openThrottle(): void;
}

function startDriving(conveyance: Car | Motorcycle) {

    conveyance.turnOnEngine()

    if (isCar(conveyance)) {
        conveyance.pressPedal()
    } else {
        conveyance.openThrottle()
    }
}

function isCar(conveyance: Car | Motorcycle): conveyance is Car {
    return (conveyance as Car).pressPedal !== undefined;
}

const car: Car = {
    tires: 2,
    pressPedal(): void {
        console.log('El carro esta arrancando...')
    },
    turnOnEngine(): void {
        console.log('El carro se encendio...')
    }
}
//Test 1 Ejercicio 3
startDriving(car)

const bike: Motorcycle = {
    tires: 2,
    openThrottle(): void {
        console.log('La moto esta arrancando...')
    },
    turnOnEngine(): void {
        console.log('La moto se encendio...')
    }
}
//Test 2 Ejercicio 3
startDriving(bike)


// Ejercicio 4
console.error('Ejercicio 4---------------------------------------------------------')

type StringsNumbersArr = Array<string | number>

function removeFirstEntry<T>(arr: StringsNumbersArr): StringsNumbersArr {
    arr.shift();
    return arr;
}

const arr1 = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer']
const test1Ej4 = removeFirstEntry(arr1)
console.log(test1Ej4)

const arr2 = [1, 2, 3, 4, 5, 6, 7]
const test2Ej4 = removeFirstEntry(arr2)
console.log(test2Ej4)

const arr3 = ['Hello', 'I', 'have', 3, 'tasks']
const test3Ej4 = removeFirstEntry(arr3)
console.log(test3Ej4)
