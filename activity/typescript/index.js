// Ejercicio 1
console.error('Ejercicio 1---------------------------------------------------------');
var personProps = function (person) {
    var personCopy = person;
    var propsNames = Object.keys(person);
    var propsValues = [];
    propsNames.forEach(function (prop) {
        var property = prop;
        var propValue = getProperty(personCopy, property);
        propsValues.push(propValue);
    });
    return propsValues;
};
function getProperty(obj, key) {
    return obj[key];
}
var test1Ej1 = {
    name: 'Andres Felipe Ospina Lenis',
    age: 31,
    profession: 'Backend dev'
};
var personValues = personProps(test1Ej1);
console.log(personValues);
// Ejercicio 2
console.error('Ejercicio 2---------------------------------------------------------');
function sumOrConcatenate(x, y) {
    if (typeof x === 'number' && typeof y === 'number')
        return x + y;
    else if (typeof x === 'string' && typeof y === 'string')
        return "".concat(x, "-").concat(y);
    else
        return "".concat(x, ":").concat(y);
}
console.log(sumOrConcatenate(4, 3));
console.log(sumOrConcatenate(4, "hello"));
console.log(sumOrConcatenate("hello", "world"));
// Ejercicio 3
console.error('Ejercicio 3---------------------------------------------------------');
function startDriving(conveyance) {
    conveyance.turnOnEngine();
    if (isCar(conveyance)) {
        conveyance.pressPedal();
    }
    else {
        conveyance.openThrottle();
    }
}
function isCar(conveyance) {
    return conveyance.pressPedal !== undefined;
}
var car = {
    tires: 2,
    pressPedal: function () {
        console.log('El carro esta arrancando...');
    },
    turnOnEngine: function () {
        console.log('El carro se encendio...');
    }
};
//Test 1 Ejercicio 3
startDriving(car);
var bike = {
    tires: 2,
    openThrottle: function () {
        console.log('La moto esta arrancando...');
    },
    turnOnEngine: function () {
        console.log('La moto se encendio...');
    }
};
//Test 2 Ejercicio 3
startDriving(bike);
// Ejercicio 4
console.error('Ejercicio 4---------------------------------------------------------');
function removeFirstEntry(arr) {
    arr.shift();
    return arr;
}
var arr1 = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var test1Ej4 = removeFirstEntry(arr1);
console.log(test1Ej4);
var arr2 = [1, 2, 3, 4, 5, 6, 7];
var test2Ej4 = removeFirstEntry(arr2);
console.log(test2Ej4);
var arr3 = ['Hello', 'I', 'have', 3, 'tasks'];
var test3Ej4 = removeFirstEntry(arr3);
console.log(test3Ej4);
