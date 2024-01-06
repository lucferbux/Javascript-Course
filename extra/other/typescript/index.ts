// Ejercicio 1

// Crea una interfaz 'Person' que tenga como atributos 'name', 'age' y 'profession'. Ahora define una arrow function que tenga como parámetro esta interaz y que devuelva un array con sus propiedades.
// Esta función tiene que tener tipado el parámetro de entrada y el return
// return - ["name", "age", "profession"]

interface Person {
    name: String;
    age: Number;
    profession: String;
}

const listProperties = (person: Person): string[] => {
    const objectProperties = Object.keys(person)
    return objectProperties
}

console.log(listProperties({name: "Lucas", age: 27, profession: "Teacher"}))

// Ejercicio 2

// Escribe una función llamada `sumOrConcatenate` que acepte dos parámetros. Cada uno de estos parámetros podrá ser de tipo `number` o `string`. La función devolverá una suma si los dos parámetros son números, una concatenación con el símbolo `-` si son los dos `strings` o una cadena concatenadad con `:` si uno es un `number` y el otro `string`.

function sumOrConcatenate(
  value1: string | number,
  value2: string | number
): number | string {
  if (typeof value1 === "number" && typeof value2 === "number") {
    return value1 + value2;
  } else if (typeof value1 === "string" && typeof value2 === "string") {
    return `${value1}-${value2}`;
  } else {
    return `${value1}:${value2}`;
  }
}

console.log(sumOrConcatenate(4, 3));
console.log(sumOrConcatenate(4, "hello"));
console.log(sumOrConcatenate("hello", "world"));



// Ejercicio 3

// Crea dos interfaces, una llamada 'Car' y otra 'Motorcycle'. La primera tendrá las propiedades tires (number), turnOnEngine() (función que devuelve void) y pressPedal() (funciónn que devuelve void),
// La segunda tendrá las propiedades tires (number), turnOnEngine() (función que devuelve void) y openThrottle() (funciónn que devuelve void).
// Escribe una función que acepte un parámetro que pueda ser Car o Motorcycle que, primero llame a turnOnEngine, y luego si es Car llame a pressPedal pero si es Motorcycle llame a openThrottle().
// Para la comprobación no valdrá typeof, necesitaremos hacer uso de type predicates https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

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

function isCar(vehicle: Car | Motorcycle): vehicle is Car {
    return (vehicle as Car).pressPedal !== undefined
}

function drive(vehicle: Car | Motorcycle): void {
    vehicle.turnOnEngine()

    if(isCar(vehicle)) {
        const car = vehicle;
        car.pressPedal()
    } else {
        const motorcycle = vehicle;
        motorcycle.openThrottle();
    }
}

// Ejercicio 4

// Crea una `función genérica`, que acepte un array que pueda contener `strings` y `numbers` y devuelva el **mismo array sin el primer elemento**.

function removeFirstEntry<T extends string | number>(arr: T[]): T[] {
    return arr.splice(1);
}

