# Estructura del código

> Estructurar correctamente nuestro código JavaScript

## Separación de Preocupaciones

A la hora de crear código, cuanto más aumenta la complejidad del proyecto, más aumenta las líneas de código del mismo. Es por ello que existen mecanismo para asegurar que podemos organizar nuestro código de una manera lógica y concisa, para así evitar situaciones en las que el mantenimiento del código sea inabordable. Una de estas estrategias es separar nuestro código en múltiples ficheros, cada uno encargado de un set de funcionalidades específico. Esto es lo que llamamos **separación de preocupaciones**.

1. Ahora el tag `<script>` tiene un atributo llamado **src**. Esto indica el fichero que cargará con el código JavaScript.
2. Separar diferentes archivos permite llevar a cabo la [Separación de Preocupaciones](https://en.wikipedia.org/wiki/Separation_of_concerns) muy importante en el mundo del desarrollo.

```html
        </div>
    </div>
    <script src="../../prism.js"></script>


    <script type="module" src="index.js">
    </script>
</body>

</html>
```

## Use Strict

Durante mucho tiempo JavaScript evolucionó sin problemas de compatibilidad, todos los cambios que se añadían no modificaban funcionamientos anteriores. Con la introducción de **ECMASCript 5**, algunos cambios empezaban a modificar la funcionalidad establecida de JavaScript. Para la seguridad del código antiguo, muchas de esas modificaciones están desactivadas por defecto. Para activarlas hay que añadir la directiva `use strict`.

## Módulos

Los módulos en javascript permiten separar los ficheros que contienen el código en trozos más pequeños. Gracias a mecanismos de importación y exportación es posible separar la lógica de las funcionalidades en ficheros más pequeños e importarlos donde fuese necesario. Las dos declaraciones más importantes son `import` y `export`. Básicamente podemos decir que un módulo es un fichero de código.

Los módulos **son evaluados nada más importarse**, por lo que el código que no esté contenido se ejecutará nada más importarse el fichero. Además, lo smódulos siempre funcionan en modo `use strict`

En los módulos, el comando `this` es indefinido, esto es debido porque cada módulo tiene un *scope* de alto nivel (lo definiremos próximamente).

## (Anexo) Debuggear con consola

Vamos a comprobar si primero se ejecuta el código de módulo al importarse, para ello vamos a añadir algunos *breakpoints* a nuestro código y controlar la ejecución de nuestros scripts.

1. Abrimos la consola de Chrome.
2. Nos dirigímos a la sección de *"Sources"*.
3. En la pestaña de navegación escogemos primero el fichero `index.js`.
4. En la barra lateral izquierda, vamos pulsando en las lineas que queramos para añadir *breakpoints*.
![Añadir breakpoint](/meta/0_5_breakpoint.png)
5. Repetimos el proceso en *"additional.js"*.
6. Al recargar la página la ejecución se dentendrá en el primer breakpoint, pulsando en el botón de *"play"* saltaremos al siguiente *breakpoint*.
![Ejecutar debugger](/meta/0_6_running.png)