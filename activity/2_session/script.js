/* Ejercicio 5 */

// Obtenemos los elementos de los botones loginSuccess y loginFailure, usamos el correcto uso de mayúscula y minúsculas.
const btnLoginSuccess = document.getElementById('loginSuccess');
const btnLoginFailure = document.getElementById('loginFailure');

// Creamos el clickListener para el botón loginSuccess
btnLoginSuccess.addEventListener('click', () => { //Arrow function
  // Creamos un objeto login con parámetros correctos
  const login = {
    username: 'usuario',
    password: 'contraseña'
  };

  // Llamamos a la función para obtener el resultado correcto
  const result = loginSuccessFunction(login);
  console.log(result);
});

// Creamos el clickListener para el botón loginFailure
btnLoginFailure.addEventListener('click', () => { //Arrow function
  // Creamos un objeto con parámetros incorrectos
  const login = {
    username: 'usuario_failed',
    password: 'contraseña_failed'
  };

  // Llamamos a la función de inicio de sesión para que falle
  loginFailureFunction(login);
});

// Definimos las funciones 

// Función para el resultado correcto del inicio de sesión
function loginSuccessFunction(login) {
  // Retorna el resultado correcto
  return 'Inicio de sesión exitoso';
}

// Función para el fallo del inicio de sesión
function loginFailureFunction(login) {
  // Por ejemplo, muestra un mensaje de error
  console.log('Error: Inicio de sesión fallido');
}

