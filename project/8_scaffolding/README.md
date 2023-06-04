# Instalación del proyecto

En este apartado vamos a ver como crear el proyecto desde 0 para que podamos trabajar con el. Los pasos son los siguientes:

1. Creamos el proyecto vacío con el siguiente comando:

```bash
mkdir typescript-weather && cd typescript-weather
```

2. Inicializamos el proyecto con el siguiente comando:

```bash
npm init -y
```

3. Instalamos las dependencias necesarias para el proyecto:

```bash
npm install css-loader@6.8.1 favicons@7.1.2 favicons-webpack-plugin@6.0.0 file-loader@6.2.0 html-loader@4.2.0 html-webpack-plugin@5.5.0 mini-css-extract-plugin@2.7.6 node-sass@9.0.0 sass-loader@13.3.1 style-loader@3.3.3 ts-loader@9.4.3 typescript@5.0.4 url-loader@4.1.1 webpack@5.84.1 webpack-cli@5.1.1 webpack-dev-server@4.15.0
```

4. Del [proyecto original](https://github.com/lucferbux/TypescriptWeatherExample) copiamos los archivos `tsconfig.json` y `webpack.config.js` en la raíz del proyecto para habilitar el uso de TypeScript y Webpack como vimos en la [sección inicial](../1_entorno/README.md).

5. Copiamos la carpeta `src` con la lógica de la aplicacióne la raíz del proyecto.

6. Ahora solo tenemos que ejecutar una copia en local con `npm run start:dev`