# Immediately Invoked Function Expression

Las Expresiones de funciones inmediatamente invocadas son **funciones JavaScript** que se ejecutan nada más ser definidas.

Es un patrón de diseño conocido como [Funciones Anónimas Auto-Ejectuadas](https://developer.mozilla.org/en-US/docs/Glossary/Self-Executing_Anonymous_Function) que consiste en dos partes:

1. La primera parte es una función anónima encerrada en el `Operador de agrupación ()`. Esto previene el acceso de variables dentro del IIFE y tampoco "ensucian" el scope global.
2. La segunda parte crea la función inmediatamente invocada con el comando `()` con el que JavaScript directamente interpretará la función.

Al hacer esto, podemos crear nuevas variables sin que colisionen con el scope original.

**Es una buena práctica agrupar una aplicación JavaScript en IIFE**