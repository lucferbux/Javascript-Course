let nombreYapellidos = "Luis Alberto Carrasquilla Zambrano"
let profesion = "Ingeniería Electrónica"
let puesto = "Desarrollo FullStack"

let saludo = `Hola, me llamo ${nombreYapellidos} y me dedico a la ${profesion}.
Estoy cursando este Máster porque me gustaría trabajar en ${puesto}`

//await new Promise(resolve => setTimeout(resolve, 1000));
//console.log('desde about me');
console.log(saludo)


// Programa un script que imprima todos los números del 1 al 100 que sean divisibles por 7.
let divisiblesPorSiete = []
for (let i = 0 ; i < 100; i++){
    if(i % 7 == 0){
        //console.log(i)
        divisiblesPorSiete.push(i)
    }
}

console.log(divisiblesPorSiete)

/*
1. Crea un objeto llamado formatter con un atributo, que llamaremos prefix, que tendrá de valor “Hello “, 
2. y un método que llamaremos append, que imprimirá la concatenación entre el atributo prefix y la cadena que pasemos como argumento en el método.
3. Ahora añade mediante el atributo prototype otro método que acepte también un solo argumento e imprima esa misma cadena en minúsculas. 
*/

let formatter = {
        prefix: "Hello",
        append: function (word) {
            return this.prefix + " " + word;
        },
        prototype : function( phrase ){
            return phrase.toLowerCase()
        }
    }

console.log("1. ", formatter.prefix)
console.log("2. ", formatter.append("Luis"))
console.log("3. ", formatter.prototype("Luis, SOY UN STRING EN MAYÜSCULAS, O Lo Era?"))