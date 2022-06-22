# Introducción
> Preparación del entorno JavaScript
## Preparación del entorno

Vamos a preparar primero nuestro proyecto para poder seguir la clase. Aquí tenéis los pasos que necesitamos seguir para dejar el entorno montado en nuestro equipo.

### 1. Consola de desarrollador

1. Abre Chrome.
2. En la pantalla principal, pulsa el botón derecho y elige *Inspeccionar elemento* en el menú.
![Inspeccionar elemento](/meta/0_1_inspect.png)
3. Selecciona *Consola* en la pestaña.
4. Copia y pega el siguiente código y mira qué pasa `console.log('Hello World');`
![Consola chrome](/meta/0_2_console.png)
5. Copia y pega el siguiente código y mira qué pasa `alert('Hello World');`

### 2. Entorno

1. Descarga Visual Studio Code
2. Descarga e instala [Node](https://nodejs.org/en/)
3. Descarga Live Server en las extensiones de Visual Studio Code.
4. Selecciona el archivo `index.html` con el botón derecho y pulsa *Abrir con Live Server*
![Live server](/meta/0_3_live_server.png)

### 3. Modificando el código

1. Modifica el código JavaScript que se encuentra en el tag `<script></script>`.
2. Escribe un código que pinte en pantalla un mensaje.
3. Escribe un código que sume dos números y luego lo imprima en pantalla.
![Live server](/meta/0_4_code.png)

## Motor JavaScript

JavaScript originalmente funcionaba dentro de los navegadores web. Todo navegador tiene lo que llamamos el Motor JavaScript o *JavaScript Engine*, que ejecuta el código.
Aquí tenéis los mótores de los principales navegadores:

* [Google Chrome V8](https://v8.dev)
* [Mozilla SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey)
* [Safari JavaScript Core/ Nitro](https://developer.apple.com/documentation/javascriptcore)

En 2008, [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) cansado de las limitaciones de muchos Servidores Web, creó un entorno en C/C++ que contenía el motor V8 de Chrome y permitía la ejecución de **código en JavaScript fuera del navegador**.
Esto permitió el uso de JavaScript para desarrollo de Backend, ampliando enormemente la popularidad del lenguaje.

## JavaScript vs ECMAScript

Otro de los términos que tenemos que definir antes de comenzar con esta sesión es `ECMAScript` y su diferencia con JavaScript. Básicamente **ECMAScript** es una especificación, mientras que **JavaScript** es un lenguaje de programación que sigue esa especificación. Esto significa que *ECMAScript* va definiendo las novedades que posteriormente serán implementadas en *JavaScript*.
En 2015 se lanzó ECMAScript 6 **(ES6)**, este lanzamiento supuso una revolución ya que introdujo muchas novedades como `clasess`, nueva importación de módulos, o *keywords* como `let`.

## ¿Qué puede hacer JavaScript en el navegador?

JavaScript es un lenguaje muy versatil, ya que permite realizar una gran cantidad de tareas en diferentes entornos, pero esto mismo ha llevado a muchas confusiones acerca de lo que realmente puede hacer el lenguaje dentro del navegador.

El JavaScript moderno es un lenguaje de programación *"seguro"*, es decir, no permite acceder a la memoria o a la CPU a bajo nivel, ya que fue creado inicialmente para los navegadores. Gracias a entornos como *Node*, *JavaScript* puede acceder a recursos como procesos, archivos arbitrarios del sistema o CPU de forma sencilla, pero son *funcionalidades externas al navegador*.

Algunos ejemplos de los que JavaScript puede hacer en navegadores son los siguientes:

* Añadir HTLM a una página, modificar el contenido existente incluyendo estilos.
* Reaccionar a acciones de usuarios, como clics, movimientos del cursor, teclas...
* Realizar peticiones por internet a otros servidores remotos.
* Acceder y modificar cookies, enseñar mensajes al usuario.
* Serializar información en el cliente mediante *"almacenamiento local"*.
