# API Fetch

Esta sección es bastante sencilla, pero merece la pena explicarla. Vamos a crear un archivo `weather.ts` en el que vamos a definir las funciones que nos permitirán hacer las llamadas a la API.
Este fichero hará uso de la función `fetch` de JavaScript, que nos permite hacer llamadas a APIs de forma sencilla. Si queréis saber más sobre esta función, podéis consultar la [documentación de MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

## Async Await

Como ya hemos mencionado en la sección de JavaScript, ahremos uso de asincronía para ejecutar las llamadas a la API. Para ello, haremos uso de la palabra reservada `async` en la definición de la función, y de la palabra reservada `await` en la llamada a la función `fetch`.

```javascript
export const getWeather = async (city: string): Promise<WeatherResponse> => {
  var requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`,
    requestOptions
  );
  return response.json();
};
```

Podeís observar que la función `getWeather` devuelve una `Promise` de tipo `WeatherResponse`, que es la interfaz que hemos definido en el fichero `model/weatherResponses.ts`.

## Promises

Esta respuesta podría realizarse también con `Promises`, como ya vimos en su momento, vamos a ver rápidamente cómo refactorizar la llamada anterior para realizarla con Promesas.

```javascript
export const getWeatherPromises = (city: string): Promise<WeatherResponse> => {
  var requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`,
    requestOptions
  ).then((response) => response.json());
};
```