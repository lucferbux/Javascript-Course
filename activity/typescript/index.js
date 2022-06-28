// Ejercicio 1
var listProperties = function (person) {
    var objectProperties = Object.keys(person);
    return objectProperties;
};
console.log(listProperties({ name: "Lucas", age: 27, profession: "Teacher" }));
function isCar(vehicle) {
    return vehicle.pressPedal !== undefined;
}
function drive(vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        var car = vehicle;
        car.pressPedal();
    }
    else {
        var motorcycle = vehicle;
        motorcycle.openThrottle();
    }
}
