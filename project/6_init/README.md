# Inicialización

Antes de explicar el código en detenimiento, vamos a mencionar los ficheros de entrada y el ficharo de configuración de dependencias.

## Package.json


Este fichero va a servir para definir las dependencias de nuestro proyecto, así como los scripts que vamos a utilizar para ejecutarlo. Para ello, los pasos que vamos a seguir para inicializar nuestro proyecto son los siguientes:

1. Instalar las dependencias con `npm install`.
2. Ejecutar el proyecto en local con `npm run start:dev`.

```json
{
    "name": "webpack-babel",
    "version": "1.0.0",
    "description": "Template of a Webpack Babel project",
    "main": "index.js",
    "scripts": {
        "clean": "rm dist/bundle.js",
        "build-dev": "webpack --mode development",
        "build-prod": "webpack --mode production",
        "start:dev": "webpack serve --mode development"
    },
    "devDependencies": {
        "css-loader": "^6.7.3",
        "favicons": "^7.0.2",
        "favicons-webpack-plugin": "^6.0.0",
        "file-loader": "^6.2.0",
        "html-loader": "^4.2.0",
        "html-webpack-plugin": "^5.5.0",
        "mini-css-extract-plugin": "^2.7.2",
        "node-sass": "^8.0.0",
        "sass-loader": "^13.2.0",
        "style-loader": "^3.3.1",
        "ts-loader": "^9.4.2",
        "typescript": "^4.9.4",
        "url-loader": "^4.1.1",
        "webpack": "^5.75.0",
        "webpack-cli": "^5.0.1",
        "webpack-dev-server": "^4.11.1"
    }
}
```

## Index.ts

No nos vamos a detener en el archivo html porque ya se mencionará en el módulo 3, vamos a ver por encima el fichero `index.ts` para comprobar como es el punto de entrada de nuestro proyecto.

Podemos observar que vamos a importar los estilos y la función `getWeather` que hemos creado en el módulo anterior. Además, vamos a importar las funciones que hemos creado para manipular el DOM y vamos a añadir un evento al botón para que cuando se haga click, se ejecute la función `displayWeather`.

Gracias a la separación de preocupaciones, nuestro código es mucho más legible y mantenible y podemos centrarnos en cada parte del proyecto de forma independiente.

```javascript
import { getWeather } from './networking/weather';
import './styles/main.scss';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

export const displayWeather = async () => {
    const city = getCity();
    if(city) {
        const weather = await getWeather(city);
        updateInteface(weather);
    } 
}

if (buttonClick) buttonClick.addEventListener('click', displayWeather);
```