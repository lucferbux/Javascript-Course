const btnLoginSuccess = document.getElementById('loginSuccess');
const btnLoginFailure = document.getElementById('loginFailure');


btnLoginSuccess.addEventListener('click', () => { //Arrow function

  const login = {
    username: 'usuario',
    password: 'contraseña'
  };

  const result = loginSuccessFunction(login);
  console.log(result);
});

btnLoginFailure.addEventListener('click', () => { //Arrow function
  const login = {
    username: 'usuario_failed',
    password: 'contraseña_failed'
  };

  loginFailureFunction(login);
});

function loginSuccessFunction(login) {
  return 'Inicio de sesión exitoso';
}

function loginFailureFunction(login) {
  console.log('Error: Inicio de sesión fallido');
}
