# Sesión 2

## Ejercicio 1

* Escribe un programa que tome como entrada un objeto y devuelva una lista con sus propiedades. Solo puede tener como entrada un objeto y el tipo de vuelta tiene que ser un array.

```javascript
var person {
    name: “Lucas”,
    age: 27,
    profession:”Developer",
}
// return -> [name, age, profession] 
```

## Ejercicio 2

* Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno.

## Ejercicio 3

* Escribe una arrow function (ES6 function) que tome como parámetro una cadena y la devuelva invertida. Ej "Hola mundo" quedaría "odnum aloH"

## Ejercicio 4

* Crea una clase con el formato ES6. Esta clase va a tener dos atributos, *username* y *password* y un método *login()* que compruebe que username tiene el valor **admin** y password el valor **passwd** y en caso positivo, lance una alerta diciendo que el usuario esté logeado, en caso contrario, que diga que el usuario o la contraseña son incorrectas. Siendo que:

```javascript
let login = new Login(“admin”, “passwd”) // alert -> User logged in
let logbad = new Login(“pepe”, “bad”) // alert -> User or passwd incorrect
```

## Ejercicio 5

En este ejercicio os voy a hacer mirar un poco de documentación extra. Y vamos a utilizar el fichero que se encuentra en `activity/2_session/index.html`:

* Crea dos *clickListener*, para los botones con id **loginSuccess** y **loginFailure**. En el primero crearemos un objeto login que sea correcto y llamaremos a la función para que de el resultado correcto. En el segundo crearemos un objeto login con parámetros incorrectos y llamaremos a login para que falle. Para ello consulta los siguientes documentos.
* [Get DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* [Click Listener](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

## Ejercicio 6

En este ejercicio vamos a añadir asincronía al resto de botones:

* Crea dos *clickListener*, para los botones con id **loginSuccessAsync** y **loginFailureAsync**. En el primero llamaremos a la función `loginWitUsername` para que de el resultado correcto. En el segundo llamaremos a la función con parámetros incorrectos. Os dejo un par de pistas para resolver el ejercicio.

* Primero, `addEventListener('click', () => {})` no acepta asincronía ya que es una **función síncrona**. Pero es posible sustituir el segundo argumento `() => {}` que es una función, por una función asíncrona (solo habría que añadir una palabra reservada).

* `loginWithUsername` devuelve una promesa, que lanza una excepción si falla, por lo que **habría que atrapar esa excepción para que nuestro programa no falle**.
