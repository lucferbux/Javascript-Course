let InvertirCadena = class {
    constructor() {
        this.cadenaInvertir = "";
        }
    invierte = (cadena) => {
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
      reversa(cadena);
    }
}
