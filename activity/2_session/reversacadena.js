let InvertirCadena = class {
    constructor(cadenaInvertir) {
        this.cadenaInvertir = ""; //cadena vacia?  o null? 
        }
    invierte = (cadena) => {
       try {
            if (cadena === this.cadenaInvertir || cadena === null || cadena === undefined) throw new Error("Cadena vacia");
            let i = 0;
            function reversa(cad) {
                  i = cad.length-1;
                  if (i >= 1) {
                     return cad[i] + reversa(cad.slice(0,-1));  
                     }  
                  else {
                     return cad[i];
                     }
            }
            return reversa(cadena);
       }
       catch (msg) {
            console.log(msg.message); 
       }
    }
}
