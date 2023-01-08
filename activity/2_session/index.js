// Ejercicio 1

var person = { name: "Lucas", age: 27, profession: "Developer" };

function returnKeys(obj) {
  const keys = Object.keys(obj);//extrae todas las keys
  console.log(keys);
  return keys;
}
returnKeys(person);


// Ejercicio 2


// Ejercicio 3

var cadenaInvertir = "";

let revertString = (string) => {
  try{
    if (string === "") {
      throw new Error('El string es vacio!');
    } else {
      let stringRev = "";
      for (let i = 0; i < string.length; i++) {
        stringRev = string[i] + stringRev;
      }
      return (stringRev);
    }
  } catch (err) {
    alert( "won't work" );
  }

};
console.log(  "Error atrapado");
const invertirCadena = {
  cadena: revertString(cadenaInvertir)
};

console.log(invertirCadena);

// Ejercicio 4
class Login {
  constructor(user, password) {
    this.user = user;
    this.password = password;
  }

  login() {
    if (this.user === "admin" && this.password === "passwd") {
      alert("User logged in");
    } else {
      alert("User or password incorrect");
    }
  }
}

// Ejercicio 5
const btnSuccess = document.getElementById('loginSuccess');
btnSuccess.addEventListener('click', () => {
  let newLogin = new Login("admin", "passwd");
  newLogin.login();
});

const btnFailure = document.getElementById('loginFailure');
btnFailure.addEventListener('click', () => {
  let newLogin = new Login("navarro", "123");
  newLogin.login();
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

const btnLoginSuccessAsync = document.getElementById('loginSuccessAsync');
btnLoginSuccessAsync.addEventListener('click', async => {

  loginWitUsername("admin", "passwd").then((resolved) => {
    alert(resolved);
  })
    .catch((rejected) => { alert(rejected); })
});

const btnLoginFailureAsync = document.getElementById('loginFailureAsync');
btnLoginFailureAsync.addEventListener('click', async => {
  loginWitUsername("navarro", "123").then((resolved) => {
    alert(resolved);
  })
    .catch((rejected) => { alert(rejected); })
});
