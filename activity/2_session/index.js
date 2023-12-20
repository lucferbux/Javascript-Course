// Ejercicio 1 

const getObjectProperties = (obj) => Object.keys(obj);

const person = {
    name: "Lucas",
    age: 27,
    profession: "Developer",
};

const result = getObjectProperties(person);
console.log(result); // Output: ["name", "age", "profession"]



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
