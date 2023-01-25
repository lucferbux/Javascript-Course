// Ejercicio 1
function toArray(persona) {
    var perfil = [persona.name, persona.age, persona.profession];
    return perfil;
}
var humano = {
    name: "Juan",
    age: 48,
    profession: "Ingeniero"
};
console.log(toArray(humano));
// Ejercicio 2
function sumOrConcatenate(param1, param2) {
    if (typeof param1 === "string" && typeof param2 === "string")
        return param1 + "-" + param2;
    if (typeof param1 === "number" && typeof param2 === "number")
        return param1 + param2;
    if ((typeof param1 === "string" && typeof param2 === "number") ||
        (typeof param1 === "number" && typeof param2 === "string"))
        return param1 + ":" + param2;
    return "Tipo de alguno de los parámetros INVÁLIDO";
}
console.log(sumOrConcatenate("7", "5"));
function carVehicle(veh) {
    return veh.pressPedal !== undefined;
}
function operaVehiculo(vehiculo) {
    vehiculo.turnOnEngine("Enciende el Motor");
    if (carVehicle(vehiculo)) {
        return vehiculo.pressPedal("Presiona el Pedal del CAR");
    }
    else {
        return vehiculo.openThrottle("Acelerador abierto! de la MOTO");
    }
}
var movilMoto = {
    tires: 2,
    turnOnEngine: function (accion) { console.log(accion); },
    openThrottle: function (accion) { console.log(accion); }
};
var movilCar = {
    tires: 4,
    turnOnEngine: function (accion) { console.log(accion); },
    pressPedal: function (accion) { console.log(accion); }
};
// elegir sólo un móvil [ movilMoto | movilCar ]
//
//let movil = movilMoto;
var movil = movilCar;
operaVehiculo(movil);
// Ejercicio 4
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
function removeFirstEntry() {
    var arrIn = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrIn[_i] = arguments[_i];
    }
    //    
    //let arrOut: Array < number | string >;
    var arrOut;
    var x = 0;
    console.log("elementos en arrIn : ", arrIn.length);
    for (var i = 1; i < arrIn.length; i++) {
        x = i - 1;
        console.log(x, arrIn[i]);
    }
    return arrIn;
}
//function removeFirstEntry(...arrIn){
//    console.log(arrIn.length);
//}
console.log(strArray.length);
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
//const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail
console.log("hola", strArray, newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
