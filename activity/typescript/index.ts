// Ejercicio 1

interface Person {
    name: string;
    age: number;
    profession: string;
} 

function toArray(persona:Person): Array<number|string>  {
    let perfil= [persona.name, persona.age, persona.profession];
return perfil;

}

const humano : Person = {
    name : "Juan",
    age : 48,
    profession : "Ingeniero"
}

console.log(toArray(humano));

// Ejercicio 2

function sumOrConcatenate(param1:number|string, param2:number|string):number|string  {

    if (typeof param1 === "string" && typeof param2 === "string")
       return param1+"-"+param2;
 
    if (typeof param1 === "number" && typeof param2 === "number")
       return param1 + param2;
 
    if ((typeof param1 === "string" && typeof param2 === "number") || 
        (typeof param1 === "number" && typeof param2 === "string"))
       return param1+":"+param2;
 
 return "Tipo de alguno de los parámetros INVÁLIDO";
 
 }
 
 console.log(sumOrConcatenate("7","5"));

// Ejercicio 3

// Ejercicio 4
