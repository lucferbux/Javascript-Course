// Ejercicio 1
import {ejecucionExterna} from "./aboutme.js"

ejecucionExterna()

console.log("Ejercicio 1");

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4

for (let i = 1; i <=100; ++i){
    if((i % 7) == 0){
      console.log(i)
    }
  }

// Ejercicio 5

// Ejercicio 6
let formatter = {"prefix":"Hello"}

formatter["addend"] = "World"

console.log(formatter.prefix + " " + formatter.addend)

formatter["toLowerString"] = formatter.prefix.toLowerCase() + " " + formatter.addend.toLowerCase()

console.log(formatter.toLowerString)

let newFormatter = Object.create(formatter)

newFormatter.prefix = "I 'm"
newFormatter.addend = "Danny"
console.log(newFormatter.prefix + " " + newFormatter.addend)

newFormatter["toLowerString"] = newFormatter.prefix.toLowerCase() + " " + newFormatter.addend.toLowerCase()

console.log(newFormatter.toLowerString)