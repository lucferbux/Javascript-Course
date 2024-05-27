
export class InvertirCadena {
  constructor() {
    this.cadenaInvertir = '';
  }

  reverseString = () => {
    if (this.cadenaInvertir === '') {
      throw new Error('La cadena a invertir no puede estar vacía.');
    }

    const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
    return cadenaInvertida;
  };
}
