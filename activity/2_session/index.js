// Ejercicio 1
console.log("🔮 Ejercicio 1");


let person = {
  name: "Cesar Ibarra",
  age: 29,
  profession: "Ingeniero Mecatronico"
}

const getPerson = data => {
  return Object.keys(data);
}

console.log(getPerson(person));

// Ejercicio 2
console.log("🔮 Ejercicio 2 valores this");
console.log("1. En el contexto global (window)", this); //window
console.log("2. En una funcion");
function test(){
  console.log(this); //window
}
test();

console.log("3. metodo de objeto");
const object = {
  name: "Objecto",
  getObject: function(){
    console.log(this); // Object
  }
};

object.getObject();

console.log("4. en un constructor");
function Test(data){
  this.data = data;
}

const ejemplo = new Test('Hello World');
console.log(ejemplo.data);

console.log("5. en un evento en el DOM");
//document.getElementById("myBtn").addEventListener("click", function(){
 // console.log(this); // <button id="myBtn">...</button>
//});

console.log("6. en una funcion llamada con call");
function greet() {
  console.log(this.name);
}
const obj = { name: 'John Doe' };
greet.call(obj); // 'Alice'

console.log("7. en unba funcion con bind");
function greet2(){
  console.log(this.name);
}

const obj2 = { name: "Jane Doe"};
const boundGreet2 = greet2.bind(obj2);
boundGreet2();

console.log("Diferencias arrow function y expressions");
console.log("Arrow: no tienen su propio this. heredan el this del contexto donde lo definieron");
console.log("Function: Si tienen su propio this, que depende de como lo llames");
const example = {
  value: 42,
  regularFunction: function() {
    console.log(this.value); // 42
  },
  arrowFunction: () => {
    console.log(this.value); // undefined (hereda `this` del contexto global o padre)
  }
};
example.regularFunction();
example.arrowFunction();


// Ejercicio 3
/*
Crea una clase a la que llamaremos "InvertirCadena" con las siguientes propiedades:
    • Un atributo llamado cadenaInvertir que sea una cadena vacía.
    • Una función que tome el atributo cadenaInvertir e imprima en pantalla el resultado invertido. Ej "Hola mundo" quedaría "odnum aloH". Recuerda la diferencia al llamar this en function arrows vs function expressions.
    • Si el parámetro de la cadena cadenaInvertir es vacío, lance un error (throw). Ej. "". throw error.
    • Ahora instancia la clase en un objeto que llamaremos invertirCadena.
Ejecuta primero la función sin cambiar cadenaInvertir. ¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?.
Ahora cambia el valor a cadenaInvertir y vuelve a llamar la función. ¿Cuál es el resultado?.
Por último, intenta acceder al siguiente método invertirCadena.nuevoMetodo(). ¿Cómo podemos hacer para que no de un error? */
console.log("🔮 Ejercicio 3");
class InvertirCadena {
  constructor() {
      this.cadenaInvertir = "";
  }

  invertirCadena() {
      if (this.cadenaInvertir === "") {
          throw new Error("La cadena está vacía");
      } else {
          console.log(this.cadenaInvertir.split('').reverse().join(''));
      }
  }
}

// Instanciar la clase
const invertirCadena = new InvertirCadena();

// Ejecuta la función sin cambiar cadenaInvertir
try {
  invertirCadena.invertirCadena();
} catch (error) {
  console.error(error.message);  // Esto imprimirá "La cadena está vacía"
}

invertirCadena.cadenaInvertir = "Hola desde mexico";
invertirCadena.invertirCadena(); 

// Intentar acceder a un método no definido
try {
  invertirCadena.nuevoMetodo();
} catch (error) {
  console.error("El método no existe:", error.message);
}

// Ejercicio 4
console.log("🔮 Ejercicio 4");

class newUser {
username = "";
password = "";

 constructor(username, password){
  this.username = username;
  this.password = password;
  this.login();
 } 

  login(){
    if(this.username === "admin" && this.password === "passwd"){
      alert("Usuario logeado");
    } else {
      alert("User y/o password son incorrectos")
    }
  }
}

// Ejemplo de uso:
let admin = new newUser('admin', 'passwd'); 
let user = new newUser('cesar', '123456'); 

// Ejercicio 5

document.getElementById("loginSuccess").addEventListener("click", ()=>{
  const admin = new newUser("admin", "passwd");
})

document.getElementById("loginFailure").addEventListener("click", ()=>{
  const user = new newUser("cesar", "123456");
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
      }, 1000);
    });
};

document.getElementById("loginSuccessAsync").addEventListener("click", async ()=>{
    try {
      const example = await loginWitUsername("admin", "passwd");
      alert(example, "Usuario logeado");
    } catch(err){
      alert(err);
    }
});

document.getElementById("loginFailureAsync").addEventListener("click", async ()=>{
  try {
    const example = await loginWitUsername("cesar", "123456");
    alert(example, "User y/o password son incorrectos");
  } catch(err){
    alert(err);
  }
})
