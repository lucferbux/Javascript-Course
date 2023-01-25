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
