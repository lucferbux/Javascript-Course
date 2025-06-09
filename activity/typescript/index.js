// Ejercicio 1
// Definición de la interfaz 'Person'
interface Person {
  name: string;
  age: number;
  profession: string;
}

 //Toma un objeto de tipo 'Person' y devuelve un array con los valores de sus propiedades.
let getPersonValues = (personObject: Person): (string | number)[] => {
  return Object.values(personObject);
};

// Ejemplo de uso:
let johany: Person = {
  name: "Johany",
  age: 30,
  profession: "Developer",
};
let personValues = getPersonValues(johany);
console.log(personValues); // Imprime: ["Johany", 30, "Developer"]

// Ejercicio 2

const sumOrConcatenate = (param1: number | string, param2: number | string): number | string => {
  // Caso 1: Ambos parámetros son números
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
    // Caso 2: Ambos parámetros son cadenas
  if (typeof param1 === 'string' && typeof param2 === 'string') {
    return `${param1}-${param2}`; // Usamos template literals para la concatenación con '-'
  }
    // Caso 3: Uno es número y el otro es cadena (cualquier orden)
    return `${param1}+${param2}`; // Usamos template literals para la concatenación con '+'
};

  // Ejemplos de uso:

// Ambos son números (suma)
console.log("Números:", sumOrConcatenate(5, 10));        // Resultado: 15

// Ambos son cadenas (concatenación con '-')
console.log("Cadenas:", sumOrConcatenate("Hola", "Mundo")); // Resultado: "Hola-Mundo"

// Uno número y otro cadena (concatenación con '+')
console.log("Número + Cadena:", sumOrConcatenate(123, "texto")); // Resultado: "123+texto"
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
  function isCar(vehicle: Car | Motorcycle): vehicle is Car {
  return (vehicle as Car).pressPedal !== undefined && typeof (vehicle as Car).pressPedal === 'function';
}
function isMotorcycle(vehicle: Car | Motorcycle): vehicle is Motorcycle {
 return (vehicle as Motorcycle).openThrottle !== undefined && typeof (vehicle as Motorcycle).openThrottle === 'function';
}
function operateVehicle(vehicle: Car | Motorcycle): void {
vehicle.turnOnEngine();
if (isCar(vehicle)) {
  vehicle.pressPedal();
} else if (isMotorcycle(vehicle)) {
vehicle.openThrottle();
  } else {
console.log("Tipo de vehículo desconocido.");
  }
}
  // --- Implementaciones de ejemplo de las clases para probar ---

class MyCar implements Car {
  tires: number = 4;

  turnOnEngine(): void {
    console.log("Coche: Motor encendido.");
  }

  pressPedal(): void {
    console.log("Coche: Pedal presionado.");
  }
}

class MyMotorcycle implements Motorcycle {
  tires: number = 2;

  turnOnEngine(): void {
    console.log("Motocicleta: Motor encendido.");
  }

  openThrottle(): void {
    console.log("Motocicleta: Acelerador abierto.");
  }
}
// --- Ejemplos de uso ---

let myCarInstance = new MyCar();
let myMotorcycleInstance = new MyMotorcycle();

console.log("--- Operando Coche ---");
operateVehicle(myCarInstance);
  
// Ejercicio 4
//Función genérica que acepta un array y devuelve un nuevo array
  let removeFirstElement = <T>(arr: T[]): T[] => {
    return arr.slice(1);
};
  // --- Ejemplos de uso ---
  // Array mixto (strings y numbers)
let mixto = ["uno", 2, "tres", 4, "cinco"];
let mixtoSinPrimero = removeFirstElement(mixto);
console.log("Array original (mixto):", mixto);
console.log("Array sin el primer elemento (mixto):", mixtoSinPrimero);
// Salida: [2, "tres", 4, "cinco"]
  
  
