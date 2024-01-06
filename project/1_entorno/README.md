# Entorno

Para crear un proyecto web en Typescript, hay determinados archivos y frameworks que es necesario conocer 

## TSConfig

![TSConfig](/meta/0_19_tsconfig.png)

Fichero compilación de TypeScript, al principio puede parecer muy confuso pero hay solo unas pocas configuraciones que son necesarias al principio.

* **target**: Ya lo vimos en la parte de CLI, indica a qué versión de ES queremos compilar nuestro código.
* **watch**: Si lo ponemos a **true** recompilará el código cada vez que modifiquemos alguno de los ficheros.
* **lib**: Automáticamente incluye tipos de distintos entornos que indiquemos como el **DOM**, **ES2017**...
* **outdir**: El fichero donde generaremos los ficheros JavaScript compilados.
* **sourceMap**: Permite la creación de **source maps** que son ficheros que ayudan en el debug de la aplicación una vez convertido en código JavaScript.
* **strict**: Genera el código JavaScript con `strict mode`.
* **module**: Define el formato de módulo que tendrá el código a exportar, normalmente será `CommonJS` para **node** y `ES6` para el navegador.
* **allowJs**: Si se pueden importar ficheros JavaScript o no.


## Webpack

Webpack es un empaquetador o bundler. Su finalidad será coger todos los archivos de un proyecto como son los ficheros javascript, de css, imágenes, gifs… Y agruparlos en un único archivo que contendrá toda la lógica y los recursos.

![Webpack](/meta/0_18_webpack.png)

Los principales beneficios de implementar Webpack son los siguientes:

* **Eliminación de recursos innecesarios**: Webpack solo agrupará los recursos que estemos utilizando en un proyecto, tanto imágenes como CSS, cargando en la web app los elementos esenciales.

* **Control del procesamiento de los recursos**: Podemos controlar por ejemplo que las imágenes se codifiquen en base64, convertir archivos sass en CSS vanilla, minimizar el HTML…

* **Despliegue a producción estable**: Es imposible desplegar el proyecto si faltan estilos, scripts o imágenes, ya que el propio Webpack controla el grafo de dependencias.

* **Optimización del proyecto**: Desde Webpack 4 existe un modo de producción que tiene como objetivo minimizar el tamaño del paquete, optimizar el código en tiempo de ejecución, impedir la exposición de código fuente o rutas y facilidad en el acceso a recursos.

El principal problema es la alta curva de aprendizaje que requiere esta herramienta. Aún así, Frameworks tan famosos como **React** lo utilizan (sin exponer su dificultosa configuración) para gestionar la compilación del código.

La estructura del fichero Webpack de nuestro proyecto es la siguiente:

```javascript
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin("./src/images/icon.png"),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};

module.exports = config;
```

Vamos a repasar por encima algunas configuraciones:

* **entry**: Indica el fichero de entrada de webpack para compilar el proyecto.
* **devtool**: Indica como los *source maps* son generados, es decir, el fichero final, **inline-source-map** es recomendado para publicar un solo fichero.
* **output**: Indica el nombre del fichero resultante.
* **module**: Contiene las diferentes reglas para compilar los archivos, siendo algunos de estos los ficheros `html`, ficheros `ts` para typescript, `css` para estilos o recuros `png`, `jpg`...
* **plugins**: Carga los diferentes plugins que seleccionemos, en este caso tenemos uno para minimizar css con `MiniCssExtractPlugin`, controlar el *favicon* con `FaviconsWebpackPlugin` y comprimir el HTML con `HtmlWebpackPlugin`.