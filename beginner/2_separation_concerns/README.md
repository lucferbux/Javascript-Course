# Instrucciones

## 1. Separación de Preocupaciones

1. Ahora el tag `<script>` tiene un atributo llamado **src**. Esto indica el fichero que cargará con el código JavaScript.
2. Separar diferentes archivos permite llevar a cabo la [Separación de Preocupaciones](https://en.wikipedia.org/wiki/Separation_of_concerns) muy importante en el mundo del desarrollo.

## 2. Módulos

Los módulos en javascript permiten separar los ficheros que contienen el código en trozos más pequeños. Gracias a mecanismos de importación y exportación es posible separar la lógica de las funcionalidades en ficheros más pequeños e importarlos donde fuese necesario. Las dos declaraciones más importantes son `import`y `export`.

Los módulos son evaluados nada más improtarse, por lo que el código que no esté contenido se ejecutará nada más importarse el fichero.

En los módulos, el comando `this` es indefinido, por lo que será necesario hacer operaciones de bind para ejecutar window.
