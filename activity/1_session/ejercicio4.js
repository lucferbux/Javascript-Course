//Programa un script que imprima todos los números del 1 al 100 que sean divisibles por 7.

//Variable
let divisor = 0;

//Loop para que repita hasta el 100
for (let divisor = 0; divisor <= 100; divisor++) {
  //Condición para que muestre solo divisibles entre 7
  if (divisor % 7 == 0) {
    //Para que imprima los números
    console.log(divisor);
  }
}
