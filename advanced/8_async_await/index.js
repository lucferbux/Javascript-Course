console.log("%cAsync Await", 'color: #3913B8; font-size: 20px;');

// 1. Async vs regunar
console.log("%c1. Async vs regular", 'color: #229179; font-size: 16px;');
function regularFunc() {
  return 1;
}
console.log(regularFunc());

async function asyncFunc() {
  return 1;
}
console.log(asyncFunc());

//objetoSinDefinir.llamadaMetodo();

async function asyncFuncAwait() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("1. Async/Await --> done!"), 80)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

asyncFuncAwait();

// 2. Async await es una evolución de las promesas, syntactic sugar

let randomNumber = () => {
  return Math.floor(Math.random() * 10);
};

var login = () => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      console.log("%c2. Creación función", 'color: #229179; font-size: 16px;');
      if (randomNumber() !== 0) {
        resolve("Logged");
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

// 3. Function with paramteres


console.log("Run before the promise");

let loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "lucferbux" && password === "patata") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};

let reqWithCredentials = async (username, password) => {
    try {
        let response = await loginWitUsername(username, password);
        console.log("%c3. Función con parámteros", 'color: #229179; font-size: 16px;');
        console.log(response);
    } catch(err) {
        console.log("%c3. Función con parámteros", 'color: #229179; font-size: 16px;');
        console.log("I'm in exception of async");
        console.log(err);
    }
}

reqWithCredentials("lucferbux", "patata");
