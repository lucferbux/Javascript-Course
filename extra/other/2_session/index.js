// Ejercicio 1

const person = {
  name: "Lucas Fernandez",
  age: 28,
  profession: "Full Stack",
};

function getProperties(person) {
  return Object.keys(person);
}

getProperties(person);

// Ejercicio 2

// -- Enumerados en la sección avanzada --

// Ejercicio 3

class InvertirCadena {
  constructor() {
    this.cadenaAInvertir = "";
  }

  reverse = () => {
    try {
      if (this.cadenaAInvertir === "") {
        throw Error("Cadena vacia");
      }
      console.log(this.cadenaAInvertir.split("").reverse().join(""));
    } catch (e) {
      console.error(e);
    }
  };
}

const invertirCadena = new InvertirCadena("");
invertirCadena.reverse();

invertirCadena.cadenaAInvertir = "Hello world";
invertirCadena.reverse();

invertirCadena.nuevoMetodo?.();

// alternative

try {
  invertirCadena.nuevoMetodo();
} catch {
  console.log("Error");
}

// Ejercicio 4

class Login {
  constructor(username, passowrd) {
    this.username = username;
    this.passowrd = passowrd;
  }

  login = () => {
    if (this.username == "admin" && this.passowrd == "passwd") {
      console.log("logged");
    } else {
      console.log("invalid credentials");
    }
  };
}

let login = new Login("admin", "passwd"); // alert -> User logged in
login.login();
let logbad = new Login("pepe", "bad"); // alert -> User or passwd incorrect
logbad.login();

// Ejercicio 5

const buttonSuccess = document.getElementById("loginSuccess");
const bottonFailure = document.getElementById("loginFailure");

buttonSuccess.addEventListener("click", () => {
  login.login();
});
bottonFailure.addEventListener("click", () => {
  logbad.login();
});

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

const buttonSuccessAsync = document.getElementById("loginSuccessAsync");
const bottonFailureAsync = document.getElementById("loginFailureAsync");

buttonSuccessAsync.addEventListener("click", async () => {
  try {
    const result = await loginWitUsername("admin", "passwd");
    console.log(result);
  } catch (e) {
    console.log(e);
  }
});
bottonFailureAsync.addEventListener("click", async () => {
  try {
    const result = await loginWitUsername("other", "bad");
    console.log(result);
  } catch (e) {
    console.log(e);
  }
});
