# Estructura

Ahora vamos a ver los ficheros de configuración y la estructura de carpetas que vamos a utilizar en el proyecto.
Nuestro proyecto cuenta con la siguiente estructura:

```bash
|_ dist
|_ node_modules
|_ src
|_ webpack.config.js
|_ tsconfig.json
|_ package.json
|_ package-lock.json
|_ .gitignore
```

## Ficheros de configuración

En la **raíz del proyecto** encontramos diversos archivos de configuración y documentación general. Estos ficheros se encuentran aquí por su facilidad de acceso y debido a que por convención, todas las herramientas esperan esta información y configuración en la carpeta principal del proyecto. Estos archivos son:

* **package.json & package-lock.json**: Especificación de la configuración que espera un proyecto **npm**. Aquí se encuentran las dependencias, metadatos, comandos de ejecución y demás información acerca de nuestro proyecto en formato *JSON*. **Package-lock.json** se genera automáticamente en cada operación que **npm** modifique el **package.json** o **node_modules**.
* **node_modules**: Carpeta que aparecerá una vez ejecutemos `npm install`. Contiene el código de todas las dependencias de nuestro proyecto.
* **tsconfig.json**: Fichero de configuración de typescript. Podéis ver sus opciones en el [curso de TypeScript](https://javascript-course-threepoints.netlify.app/typescript/3_entorno/index.html).
* **README**: Archivo que contiene información acerca del proyecto en formato **markdown**. En muchos proveedores de control de versiones como [Github](https://github.com) o [Gitlab](https://about.gitlab.com) convierten este fichero en **HTML** para renderizarlo en la página principal.
* **LICENSE**: Licencia del proyecto, es recomendable elegir una licencia para tu proyecto en caso de hacerlo público, para proteger el código de uso indebido. Hay bastantes guías acerca de la elección de licencias como [esta de GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).
* **.gitignore**: Fichero que indica a git que archivos ignorar y no incluir en el control de versiones. Muy útil para excluir cosas como **node_modules** o ficheros de configuración como **.env**.
* **webpack.config.js**: Ya hemos mencionado este fichero, sirve para configurar el comportamiento de webpack.
* **meta**: Carpeta donde almacenar documentación y recursos.