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

/**
 * Login class handles the login functionality.
 */
export class Login {
  /**
   * Constructor for the Login class.
   * @param {string} username - The username of the user.
   * @param {string} password - The password of the user.
   */
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  /**
   * Method to handle the login functionality.
   * If the username is 'admin' and password is 'passwd', it alerts 'Usuario logeado'.
   * Otherwise, it alerts 'Usuario o contraseña incorrectas'.
   */
  login() {
    if (this.username === 'admin' && this.password === 'passwd')
      alert('Usuario logeado');
    else alert('Usuario o contraseña incorrectas');
  }
}
