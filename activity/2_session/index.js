// Ejercicio 1
// Example of arrow function
const person = {
    name: 'Lucas',
    age: 27,
    profession:'Developer',
};

// Regresa las llaves de un objeto
const getKeys = (obj) => Object.keys(obj).map(key => key)

// Regresa las llaves y su respectivo valor

const getAllInfo = (obj) => Object.keys(obj).map(key => `${key}: ${obj[key]}`);


// Hace la misma funcion que getAllInfo pero puede usarse cuando manipulamos objetos grandes de un forma mas optimizada
const getData = (obj) => {
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(`${key}: ${obj[key]}`);
        }
    }
    return result;
};


console.log(getData(person));

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4

// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
