console.log("%cAsync Await", 'color: #3913B8; font-size: 20px;');

// 1. Async await es una evolución de las promesas, syntactic sugar
console.log("%c1. Creación función", 'color: #229179; font-size: 16px;');
let randomNumber = () => {
  return Math.floor(Math.random() * 10);
};

var login = () => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (randomNumber() !== 0) {
        resolve("Logged");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 100);
  });
};
var loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "lucferbux" && password === "patata") {
        resolve("89fasdf09sdfsdf");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 100);
  });
};

let req = async () => {
  try {
    let response = await login();
    console.log(response);
  } catch (err) {
    console.log("I'm in exeception of async");
    console.log(err);
  }
};

req();

// 2. Function with paramteres
console.log("%c2. Función con parámteros", 'color: #229179; font-size: 16px;');

console.log("Run before the promise");


let reqWithCredentials = async (username, password) => {
    try {
        let response = await loginWitUsername(username, password);
        console.log(response);
    } catch(err) {
        console.log("I'm in exception of async");
        console.log(err);
    }
}

reqWithCredentials("lucferbux", "patata");
