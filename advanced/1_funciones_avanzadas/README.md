# Funciones Avanzadas

## Diferencia entre arrow functions y funciones regulares

### 1. Sintaxis

```
// ES5
var add = function(x, y) {
  return x + y;
};
// ES6
let add = (x, y) => { return x + y };
```

Permite aplicar y reducir las lineas de código de la función hasta llegar a la mínima xpressión.

```let add = (x, y) => x + y ```

### 2. Binding de argumentos.

Las **arrow functions** no tienen **argument binding**. En el caso de las funciones tradicionales se puede acceder al atributo `arguments` mientras que en arrow functions no:

```
let myFunc = {  
  showArgs : () => { 
  console.log(...arguments); 
 } 
}; 
myFunc.showArgs(1, 2, 3, 4); // ERROR
```

### 3. Uso de "this"

Las **arrow functions** no hacen uso de this externo, no funciona el binding, mientras que en las funciones tradicionales sí.

### 4. Funcionalidad

Las funciones tradicionales son **callables()** adn **constructible()**. Minetras que las arrow functions solo **callables()**