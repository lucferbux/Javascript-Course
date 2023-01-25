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

interface Car {
    tires: number;
    turnOnEngine:(param:string)=>void;
    pressPedal  :(param:string)=>void;
} 

interface Motorcycle {
    tires: number;
    turnOnEngine:(param:string)=>void;
    openThrottle:(param:string)=>void;
} 

function carVehicle(veh: Car | Motorcycle): veh is Car {
  return (veh as Car).pressPedal !== undefined;
}

function operaVehiculo(vehiculo: Car | Motorcycle) {
    
    vehiculo.turnOnEngine("Enciende el Motor");

    if (carVehicle(vehiculo)) {
    return vehiculo.pressPedal("Presiona el Pedal del CAR");
    } else    {
        return vehiculo.openThrottle("Acelerador abierto! de la MOTO");
    }
}

const movilMoto : Motorcycle = {
    tires:2,
    turnOnEngine: function(accion:string) {console.log(accion)},
    openThrottle: function(accion:string) {console.log(accion)}
    }

const movilCar : Car = {
    tires:4,
    turnOnEngine: function(accion:string) {console.log(accion)},
    pressPedal  : function(accion:string) {console.log(accion)}
}

// elegir sólo un móvil [ movilMoto | movilCar ]
//
//let movil = movilMoto;
let movil = movilCar

operaVehiculo(movil);

// Ejercicio 4
const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

function removeFirstEntry(...arrIn:any[] ){
//    
    //let arrOut: Array < number | string >;
    var arrOut : Array< number | string >;
    let x = 0;
    console.log("elementos en arrIn : ",arrIn.length );
    for (var i = 1; i < arrIn.length; i++) {
        x = i - 1;
        console.log(x,arrIn[i]);
    }
    return arrIn;
}

//function removeFirstEntry(...arrIn){
//    console.log(arrIn.length);
//}

console.log(strArray.length);
const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
//const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail

console.log("hola",strArray,newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];