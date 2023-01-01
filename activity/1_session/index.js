// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4
for(let i = 0; i < 101; i++){
    if(i % 7 === 0){
        console.log(i)
    }
}

// Ejercicio 5

// Ejercicio 6
const formatter = {
    prefix: 'Hello',
    append(world){
        console.log(`${this.prefix} ${world}`)
    },
    toLowerString(name){
        console.log(name.toLowerCase())
    }
    
}

formatter.append('World')
formatter.toLowerString('Stephano Palomino')

