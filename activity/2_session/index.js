// Ejercicio 1
let person = {
  "name": "Danny",
  "age": 27,
  "profession": "Developer"
}

let personData = [person.name,person.age, person.profession]

console.log(personData)

// Ejercicio 2

// Ejercicio 3
/*
const cadena = "Hola mundo"
const invertirCadena = cadenaInvertir => cadenaInvertir.split("").reverse().join("")
invertirCadena(cadena)
console.log(invertirCadena(cadena))
*/
// Ejercicio 3
class InvertirCadena {
  constructor(cadena){    
    this.cadena = cadena
  }  
  cadenaInvertir(){
    try {
      if(this.cadena !== ""){
        let inv = cInvertir => cInvertir.split("").reverse().join("")
        return inv(this.cadena)
      }
    }  catch (error) {
      if (this.cadena == "") {
        console.log('cadena Vacia')    
      } else {
        throw error
      }  
    }  
  }
}

let myChain = new InvertirCadena("Hola mundo")
console.log(myChain.cadenaInvertir())


// Ejercicio 4
let login = (username,password) => {
  return new Promise(function (resolve, rejected){
    setTimeout(() => {
      if (username === "admin" && password ==="passwd"){
        resolve("User logged in")
      } else {
        rejected("User or password incorrect")
      }
    }, 100)
  })
}
//login("admin","passwd")

login("pepe","bad")

.then((resolved) => {
  alert(resolved)
})
.catch((rejected) => {
  alert(rejected)
})

// Ejercicio 5
//#loginSuccess
const bntLS = document.querySelector('#loginSuccess')

bntLS.addEventListener('click', event => {
  login("admin","passwd")
  .then((resolved) => {
    alert(resolved)
  })
  .catch((rejected) => {
    alert(rejected)
  })
})

//#loginFailure
const bntLF = document.querySelector('#loginFailure')

bntLF.addEventListener('click', event => {
  login("pepe","bad")
  .then((resolved) => {
    alert(resolved)
  })
  .catch((rejected) => {
    alert(rejected)
  })
})




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

let reqWithCredentials = async (username, password) => {
  try {
      let response = await loginWitUsername(username, password);      
      alert(response);
  } catch(err) {      
      alert("I'm in exception of async \n Error: invalid username or password");
      console.log(err);
  }
}

//#loginSuccessAsync
const bntLSA = document.querySelector('#loginSuccessAsync')
bntLSA.addEventListener('click', event => {
  reqWithCredentials("admin","passwd")  
})

//#loginFailureAsync
const bntLFA = document.querySelector('#loginFailureAsync')
bntLFA.addEventListener('click', event => {
  reqWithCredentials("lucferbux", "patata")
})

//console.log(reqWithCredentials("lucferbux", "patata"));