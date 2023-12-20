// Ejercicio 1
// Definición de la interfaz 'Person'
interface Person {
  name: string;
  age: number;
  profession: string;
}

// Definición de la arrow function que acepta un parámetro de tipo 'Person' y devuelve un array con los valores de sus propiedades
const getPersonValues = (person: Person): (string | number)[] => {
  const { name, age, profession } = person;
  return [name, age, profession];
};

// Ejemplo de uso
const lucas: Person = {
  name: "Lucas",
  age: 28,
  profession: "Full Stack",
};

const valuesArray: (string | number)[] = getPersonValues(lucas);
console.log(valuesArray); // Salida: ["Lucas", 28, "Full Stack"]


// Ejercicio 2

function sumOrConcatenate(param1: number | string, param2: number | string): number | string {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    // Ambos parámetros son números, devuelve la suma
    return param1 + param2;
  } else if (typeof param1 === 'string' && typeof param2 === 'string') {
    // Ambos parámetros son strings, devuelve la concatenación con el símbolo "-"
    return `${param1}-${param2}`;
  } else {
    // Un parámetro es número y el otro es string, devuelve la concatenación con ":"
    return `${param1}:${param2}`;
  }
}

// Ejemplos de uso
console.log(sumOrConcatenate(4, 3));          // --> 7
console.log(sumOrConcatenate(4, "hello"));     // --> 4:hello
console.log(sumOrConcatenate("hello", "world"));// --> hello-world


// Ejercicio 3

// Definición de la interfaz Car
interface Car {
  tires: number;
  turnOnEngine(): void;
  pressPedal(): void;
}

// Definición de la interfaz Motorcycle
interface Motorcycle {
  tires: number;
  turnOnEngine(): void;
  openThrottle(): void;
}

// Type predicate para distinguir entre Car y Motorcycle
function isCar(vehicle: Car | Motorcycle): vehicle is Car {
  return 'pressPedal' in vehicle;
}

// Función que acepta un parámetro que puede ser Car o Motorcycle
function operateVehicle(vehicle: Car | Motorcycle): void {
  // Llamamos a la función común a ambas interfaces
  vehicle.turnOnEngine();

  // Utilizamos el type predicate para decidir qué función llamar
  if (isCar(vehicle)) {
    vehicle.pressPedal();
  } else {
    vehicle.openThrottle();
  }
}

// Ejemplos de uso
const car: Car = {
  tires: 4,
  turnOnEngine: () => console.log('Car engine is on'),
  pressPedal: () => console.log('Pressing the pedal in the car'),
};

const motorcycle: Motorcycle = {
  tires: 2,
  turnOnEngine: () => console.log('Motorcycle engine is on'),
  openThrottle: () => console.log('Opening the throttle on the motorcycle'),
};

operateVehicle(car);        // Salida esperada: Car engine is on, Pressing the pedal in the car
operateVehicle(motorcycle); // Salida esperada: Motorcycle engine is on, Opening the throttle on the motorcycle

// Ejercicio 4

function removeFirstEntry<T>(arr: T[]): T[] {
  return arr.slice(1);
}

// Ejemplos de uso
const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); // Esta línea generará un error ya que el tipo de elemento no es compatible

console.log(newStrArray);    // Salida esperada: ['World', 'Im', 'a', 'Full', 'Stack', 'Developer']
console.log(newNumArray);    // Salida esperada: [2, 3, 4, 5, 6, 7]
console.log(newMixedArray);  // Salida esperada: ['I', 'have', 3, 'tasks']