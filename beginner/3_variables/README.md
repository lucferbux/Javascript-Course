# Variables

Una variable es una contenedor para almacenar valores. Tradicionalmente esto se ha hecho con la palabra reservada `var`, pero ES6 introdujo dos nuevas palabras, `const` y `let`.


## Var
Antes de que existiese ES6 era la declaración por defecto. Tiene ciertas características que lo hacen un poco peculiar y no recomendable.

### Scope
El scope significa donde pueden ser utilizadas estas variables. `var` tiene un scope **global** o de **funcion**. El scrope global es cuando `var` es asignado fuera de un bloque de función, mientras que tiene un scope de función cuando está definido dentro.

### Hoisting
Otra de las características que tiene var es **hoisting**, un mecanismo de JavaScript donde las variables y declaraciones se mueven al inicio del scope de su declaración. Eso significa que da igual donde creemos la variable, estará disponible al inicio de ese bloque.

### Problemas
Por el scope de var, si hacemos una segunda declaración pisará a la función de encima.



## Let
Introducido en ES6, es un reemplazo moderno de var. Solventa los errores que hemos comentado.

### Scope
`let` está limitado en su bloque de scope {}. Así que una variable declarada en un bloque con let solo existiraé en ese bloque.

### Re-asignacion pero no Re-declaración
`let` no puede ser redeclarado dentro de su scope, no como var.

```
    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```
### Hoisting
Como var, let se inicializa al principio del código, pero no se le asigna `undefined`.


# Const
