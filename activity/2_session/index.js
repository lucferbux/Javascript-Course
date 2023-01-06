// Ejercicio 1

var person= {name: "Lucas",age: 27,profession:"Developer"};

function returnKeys(obj) {
    const keys = Object.keys(obj);//extrae todas las keys
    console.log(keys);
    return keys;
}

ObjeToList(person);


// Ejercicio 2

// Ejercicio 3

const revertString = (weight) => {
  if(weight=== ""){
      throw new Error('El string es vacio!');
  }else{
    let stringRev ="";
      for(let i= 0; i<weight.length; i++){
          stringRev = weight[i]+stringRev;
      }
      console.log(stringRev) ;
  }
};

revertString("we");
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
