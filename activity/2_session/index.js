// Ejercicio 1

var person = { name: "Lucas", age: 27, profession: "Developer" };

function returnKeys(obj) {
  const keys = Object.keys(obj);//extrae todas las keys
  console.log(keys);
  return keys;
}

ObjeToList(person);


// Ejercicio 2

// Ejercicio 3

var cadenaInvertir = "";

const revertString = (string) => {
  if (string === "") {
    throw new Error('El string es vacio!');
  } else {
    let stringRev = "";
    for (let i = 0; i < string.length; i++) {
      stringRev = string[i] + stringRev;
    }
    return (stringRev);
  }
};

const invertirCadena = {
  cadena: revertString(cadenaInvertir)
};

console.log(invertirCadena);

// Ejercicio 4

let username = "admin";
let password = "passwd";

let login = (username == "admin" && password == "passwd") ?
  () => alert('User logged in') :
  () => alert('User or passwd incorrect');

login(username, password);

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
