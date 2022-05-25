# Immediately Invoked Function Expression

> Aislamiento de variables y pronta ejecución

Las Expresiones de funciones inmediatamente invocadas son **funciones JavaScript** que se ejecutan nada más ser definidas.

Es un patrón de diseño conocido como [Funciones Anónimas Auto-Ejectuadas](https://developer.mozilla.org/en-US/docs/Glossary/Self-Executing_Anonymous_Function) que consiste en dos partes:

1. La primera parte es una función anónima encerrada en el `Operador de agrupación ()`. Esto previene el acceso de variables dentro del IIFE y tampoco "ensucian" el scope global.
2. La segunda parte crea la función inmediatamente invocada con el comando `()` con el que JavaScript directamente interpretará la función.

Al hacer esto, podemos crear nuevas variables sin que colisionen con el scope original.

```javascript
// 1. Primera variante de IIFE
console.log("%c1. Primera variante de IIFE", 'color: #229179; font-size: 16px;');
(function() {
    alert("1. Estás usando IIFE")
}());

// 2. Segunda variante de IIFE
console.log("%c2. Segunda variante de IIFE", 'color: #229179; font-size: 16px;');
(function() {
    console.log("2. Estas usando IIFE")
})();

// 3. Comprobar el scope de IIFE
console.log("%c3. Tercera variante de IIFE", 'color: #229179; font-size: 16px;');
(function() {
    var newName = "Lucas";
    console.log(newName);
}());

(function() {
    var newName = "Maria";
    console.log(newName);
}());

console.log(window.newName);
```

## Casos de Uso

Hay algunos casos de uso en los que es muy útil este patrón, que seguro que veréis en ciertas codebases que se enfrenten a estos problemas:

### Evitar contaminar el global namespace

En *codebase* muy grandes es muy normal encontrarse la inicialización de multitud de variables globales. Como ya vimos en la sección de variables, es importante evitar colisiones, sobre todo si tenemos que importar múltiples archivos de distintas partes del proyecto. Es por ello que es muy útil usar *IIFE* para aislar estas declaraciones y que no entren en conflicto con el resto de código.

```javascript
(() => {
    // Código de iniciación, por ejemplo conectarse a una base de datos
    let someVariable;
    let otherVariable;
})();

// No podremos acceder y por lo tanto no tendrán colisión someVariable y otherVariable fuera del IIFE.
```

### Ejecutar inmediatamente una función asíncrona

```javascript
function delayedFunction(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

(async function(x) { // async function expression used as an IIFE
  let p_a = delayedFunction(20);
  let p_b = delayedFunction(30);
  return x + await p_a + await p_b;
})(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});
```

### Patrón módulo

En muchas ocasiones es interesante ocultar cierta funcionalidad que estamos definiendo en un módulo, es por ello que *IIFE* puede ser un mecanismo interesante para poder ocultar ciertas características del código de nuestro módulo.

```javascript
const chargeBattery = (percentage) => ((copyPercentage) => {
  let percentage = copyPercentage; // Esta variable es privada
  const internalMechanism = () => {
    console.log('Direccionando batería a este dispositivo');
  };
  internalMechanism();
  return {
    charge(amount) {
      if (percentage >= amount) {
        percentage -= amount;
        return percentage;
      }
      return 'Batería insuficiente';
    },
  };
})(percentage);

const firstPhone = chargeBattery(100);   // Direccionando batería a este dispositivo
console.log(firstPhone.percentage);      // undefined, no se puede acceder a un atributo privado
console.log(firstPhone.charge(10));      // 90
console.log(firstPhone.charge(30));      // 60
console.log(firstPhone.doBadThings);     // undefined, el método es privado
const secondPhone = chargeBattery(20);   // Direccionando batería a este dispositivo
console.log(secondPhone.charge(30));     // Batería insuficiente
console.log(secondPhone.charge(20));     // 0
```
