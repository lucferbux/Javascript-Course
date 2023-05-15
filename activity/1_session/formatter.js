// Crear el objeto formatter
const formatter = {
    prefix: "Hello ",
    append: function (str) {
      console.log(this.prefix + str);
    }
  };
  
  // Añadir el método toLowerString al atributo prototype
  formatter.__proto__.toLowerString = function (str) {
    console.log(str.toLowerCase());
  };
  
  // Ejecutar los métodos
  formatter.append("World"); // Resultado: Hello World
  formatter.toLowerString("I'm Lucas"); // Resultado: i'm lucas
  