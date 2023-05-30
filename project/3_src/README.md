# Lógica de aplicación

Ahora nos vamos a centrar en la carpeta `src`, que contendrá la lógica de nuestra aplicación. Su estructura es la siguiente:

```bash
|_ dom-manipulation
    |_ domManipulation.ts
|_ images
    |_ ...
|_ mock
    |_ responses.ts
|_ model
    |_ weatherResponses.ts
|_ networking
    |_ weather.ts
|_ styles
    |_ main.scss
|_ declaration.d.ts
|_ index.ts
|_ index.html
```

## Ficheros

![Scaffolding](/meta/0_20_scaffolding.png)

En la carpeta `src` encontraremos el código necesario para desarrollar nuestra aplicación, vamos a repasar algunos de los ficheros más importantes.

### root

En la carpeta raíz `/src` podemos encontrar los siguientes archivos:

* **index.ts:**: El punto de entrada de nuestra aplicación, aquí pondremos la lógica principal de nuestra web, e importaremos todos los ficheros que necesitemos para conseguirlo.
* **index.html:** El archivo html de entrada de nuestro proyecto, si observáis el fichero, no tiene importado ni los ficheros **javascript** ni los estilos **css** ya que Webpack se encargará de importarlos en tiempo de compilación.
* **declaration.d.ts:** Fichero de declaración de módulos para typescript, en nuestro proyecto nos permite **importar y usar los recursos gráficos**.

### dom-manipulation

En esta carpeta tendremos toda la lógica de manipulación del DOM. De todo esto hablaremos en el **Módulo 2** del Máster, pero si queréis ir entendiendo un poco la lógica, tenéis este estupenda [guía de mdn](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) con toda la información necesaria para saber manipular DOM con JavaScript.

* **domManipulation.ts:** En este fichero tendremos que **crear todas las referencias de elementos del index.html**, y luego añadir la lógica de las funciones declaradas para procesar la aplicación.

### images

Aquí tendremos todos los recursos gráficos de la aplicación, que luego importaremos gracias al `declaration.d.ts`.

### mock

En esta carpeta tendremos un ejemplo de respuesta si queremos hacer un *mock* de la repuesta antes de implementar el **networking**

### model

Aquí incluiremos las `interfaces` de TypeScript de todo el modelo de la aplicación.

### networking

Aquí implementaremos la lógica de llamada de la aplicación mediante la librería [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

### styles

En esta última carpeta tendremos los ficheros de estilo de nuestra aplicación, en los que haremos uso de [sass css](https://sass-lang.com).
