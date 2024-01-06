# Iteración avanzada

> Hacer peticiones externas con asincronía

Vamos a combinar ahora rápidament lo visto en la sección de asincronía con peticiones externas a un servicio API. Vamos a hacer uso del método [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) para obtener información de una API externa.

Para realizar la petición, vamos a hacer uso de la API [fetc](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) incluída por defecto en el navegador. Esta API nos permite realizar peticiones HTTP de forma sencilla con una sintáxis sencilla.

Fetch nos devuelve una [promesa](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) que podemos resolver con el método `then` y que nos permite obtener el resultado de la petición. En caso de que la petición falle, podemos obtener el error con el método `catch`. Podemos traducir esto a `async/await` usando la sintaxis que ya hemos visto.

```javascript
const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => data);
};

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
};
```

Ahora simplemente vamos a coger la referencia de los botones y vamos a llamar a las funciones cuando se haga click en ellos.

```javascript
const getUsersButton = document.querySelector("#getUsers");
getUsersButton.addEventListener("click", async () => {
    const users = await getUsers();
    console.log(users);
});

const getPostsButton = document.querySelector("#getPosts");
getPostsButton.addEventListener("click", () => {
    getPosts().then((data) => console.log(data));
});
```
