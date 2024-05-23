// formatter.js
/*
   Crea un objeto llamado formatter con un atributo, que llamaremos “prefix”, que tendrá de valor “Hello “, 
   y un método que llamaremos “append”, que imprimirá la concatenación entre el atributo “prefix” y la cadena 
   que pasemos como argumento en el método.
        formatter.append(“World”) // Result: Hello World
   Ahora añade mediante el atributo prototype otro método que acepte también un solo argumento e imprima esa
   misma cadena en minúsculas.
        formatter.toLowerString(“I’m Lucas”) // Result: I’m lucas
*/

/* Crear el objeto formatter con atributos prefix que contendrá el valor "Hello", y el método append que imprimirá la concatenación entre el 
atributo "prefix" y la cadena que pasemos como argumento en el método. */
let formatter = {
    prefix: "Hello ",
    append: function(cadena) {
        console.log(this.prefix + cadena); // Imprime: Hello World
    }
};

// Llamar al método append con el parámetro cadena
formatter.append("World"); 

// Segundo método mediante el atributo prototype que acepte un argumento e lo imprima en minúsculas.
formatter.__proto__.toLowerString = function(str) {
    console.log(str.toLowerCase());
};

// Llamar al nuevo método toLowerString
formatter.toLowerString("I'm FerGtz"); // Resultado: i'm fergtz