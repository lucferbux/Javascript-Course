# Proyecto

En esta segunda sesión vamos a repasar la estructura del proyecto para ver como abordar el desarrollo.

## Ficheros de configuración

En la **raíz del proyecto** encontramos diversos archivos de configuración y documentación general. Estos ficheros se encuentran aquí por su facilidad de acceso y debido a que por convención, todas las herramientas esperan esta información y configuración en la carpeta principal del proyecto. Estos archivos son:

* **package.json & package-lock.json**: Especificación de la configuración que espera un proyecto **npm**. Aquí se encuentran las dependencias, metadatos, comandos de ejecución y demás información acerca de nuestro proyecto en formato *JSON*. **Package-lock.json** se genera automáticamente en cada operación que **npm** modifique el **package.json** o **node_modules**.
* **node_modules**: Carpeta que aparecerá una vez ejecutemos `npm install`. Contiene el código de todas las dependencias de nuestro proyecto.
* **tsconfig.json**: Fichero de configuración de typescript. Podéis ver sus opciones en el [curso de TypeScript](https://javascript-course-threepoints.netlify.app/typescript/3_entorno/index.html).
* **README**: Archivo que contiene información acerca del proyecto en formato **markdown**. En muchos proveedores de control de versiones como [Github](https://github.com) o [Gitlab](https://about.gitlab.com) convierten este fichero en **HTML** para renderizarlo en la página principal.
* **LICENSE**: Licencia del proyecto, es recomendable elegir una licencia para tu proyecto en caso de hacerlo público, para proteger el código de uso indebido. Hay bastantes guías acerca de la elección de licencias como [esta de GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).
* **.gitignore**: Fichero que indica a git que archivos ignorar y no incluir en el control de versiones. Muy útil para excluir cosas como **node_modules** o ficheros de configuración como **.env**.
* **meta**: Carpeta donde almacenar documentación y recursos.

## Carpeta src

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

Aquí incluiremos las `interfaces` de TypeScript de todo el modelo de la aplicación. Tendremos una constante llamada `WeatherIcon` que nos permitirá implementar de forma genérica el icono necesario.

```javascript
export const WeatherIcon = {
    "01d": sunny,
    "01n": sunny,
    "02d": clearCloudy,
    "02n": clearCloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d": mostlyCloudy,
    "04n": mostlyCloudy,
    "09d": showers,
    "09n": showers,
    "10d": drizzle,
    "10n": drizzle,
    "11d": thunderstroms,
    "11n": thunderstroms,
    "13d": snow,
    "13n": snow,
    "50d": foggy,
    "50n": foggy,
} as const;
```

### networking

Aquí implementaremos la lógica de llamada de la aplicación mediante la librería [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

### styles

En esta última carpeta tendremos los ficheros de estilo de nuestra aplicación, en los que haremos uso de [sass css](https://sass-lang.com).
