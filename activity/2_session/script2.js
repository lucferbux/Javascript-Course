/* Ejercicio 6 */

// Obtenemos las referencias a los botones
const loginSuccessAsyncButton = document.getElementById('loginSuccessAsync');
const loginFailureAsyncButton = document.getElementById('loginFailureAsync');

// Configuramos el listener para el botón de login exitoso
loginSuccessAsyncButton.addEventListener('click', async () => {
  try {
    await loginWithUsername('admin', 'passwd');
    console.log('Inicio de sesión exitoso');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
});

// Configuramos el listener para el botón de login fallido
loginFailureAsyncButton.addEventListener('click', async () => {
  try {
    await loginWithUsername('incorrectUsername', 'incorrectPassword');
    console.log('Inicio de sesión exitoso');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
});

// Función asincrónica que realiza el login con username y password
const loginWithUsername = async (username, password) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'passwd') {
        resolve('User logged in'); // Resolvemos la promesa con un mensaje de inicio de sesión exitoso
      } else {
        reject(new Error('Error: invalid username or password')); // Rechazamos la promesa con un error si las credenciales son incorrectas
      }
    }, 200); // Simulación de tiempo de espera de 200 milisegundos
  });
};
  