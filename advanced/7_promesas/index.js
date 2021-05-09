console.log("%cPromesas", 'color: #3913B8; font-size: 20px;');

// 1. Creación promesa

let randomNumber = () => {
    return Math.floor(Math.random() * 10);
}


var login = new Promise(function(resolve, rejected) {
    setTimeout(() => {
        console.log("%c1. Creación promesa", 'color: #229179; font-size: 16px;');
        if(randomNumber() !== 0) {
            resolve('Logged');
        } else {
            rejected('Error: invalid username or password')
        }
    }, 100);
})


login
    .then( (resolved) => {
        console.log(resolved);
    })
    .catch( (rejected) => {
        console.log(rejected);
    })

console.log("Run before the promise");


// 2. Promesas con argumentos
var loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        // 2. Promesas con argumentos
        console.log("%c2. Promesas con argumentos", 'color: #229179; font-size: 16px;');
        if (username === "lucferbux" && password === "patata") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 100);
    });
  };
  

loginWitUsername("lucferbux", "patata")
.then( (resolved) => {
    console.log(resolved);
})
.catch( (rejected) => {
    console.log(rejected);
})