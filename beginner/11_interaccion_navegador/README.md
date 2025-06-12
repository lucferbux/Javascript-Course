# Interacción con el navegador

> Métodos para interactuar con el usuario mediante el navegador

## Introducción

JavaScript nos proporciona tres métodos básicos para interactuar directamente con el usuario a través del navegador. Estos métodos son útiles para mostrar información, solicitar datos y confirmar acciones. Aunque en aplicaciones modernas se suelen usar alternativas más sofisticadas, es importante conocer estos métodos fundamentales.

## Alert - Mostrar mensajes

La función `alert()` muestra una ventana emergente con un mensaje al usuario. Esta ventana bloquea la ejecución del código hasta que el usuario haga clic en "OK".

### Sintaxis
```javascript
alert(mensaje);
```

### Ejemplo
```javascript
// Mostrar un mensaje simple
alert("¡Hola! Bienvenido a nuestro sitio web");

// Mostrar información con variables
let nombre = "María";
alert("Hola " + nombre + ", gracias por visitarnos");

// Mostrar resultado de operaciones
let suma = 5 + 3;
alert("El resultado de 5 + 3 es: " + suma);
```

## Prompt - Solicitar información

La función `prompt()` muestra una ventana emergente que permite al usuario introducir texto. Devuelve el texto introducido como una cadena de caracteres, o `null` si el usuario cancela.

### Sintaxis
```javascript
let resultado = prompt(mensaje, valorPorDefecto);
```

### Ejemplo
```javascript
// Solicitar el nombre del usuario
let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola " + nombre + "!");

// Solicitar información con valor por defecto
let edad = prompt("¿Cuántos años tienes?", "18");
alert("Tienes " + edad + " años");

// Validar la entrada del usuario
let email = prompt("Introduce tu email:");
if (email !== null && email !== "") {
    alert("Tu email es: " + email);
} else {
    alert("No has introducido ningún email");
}
```

## Confirm - Confirmar acciones

La función `confirm()` muestra una ventana emergente con un mensaje y dos botones: "OK" y "Cancelar". Devuelve `true` si el usuario hace clic en "OK" y `false` si hace clic en "Cancelar".

### Sintaxis
```javascript
let resultado = confirm(mensaje);
```

### Ejemplo
```javascript
// Confirmar una acción
let confirmar = confirm("¿Estás seguro de que quieres eliminar este archivo?");
if (confirmar) {
    alert("Archivo eliminado");
} else {
    alert("Operación cancelada");
}

// Confirmar antes de salir de la página
let salir = confirm("¿Quieres abandonar esta página?");
if (salir) {
    // Código para redirigir o cerrar
    console.log("El usuario confirmó salir");
} else {
    console.log("El usuario decidió quedarse");
}
```

## Consideraciones importantes

* **Experiencia de usuario:** Estos métodos crean ventanas emergentes que pueden resultar intrusivas y bloquean la interfaz.
* **Conversión de tipos:** El método `prompt()` siempre devuelve una cadena de texto, por lo que necesitas convertir a número si es necesario.
* **Validación:** Siempre valida las entradas del usuario para evitar errores.
* **Alternativas modernas:** En aplicaciones web modernas se prefieren modales personalizados y elementos HTML como formularios.
* **Bloqueo de popup:** Algunos navegadores pueden bloquear estas ventanas si se considera spam.

## Buenas prácticas

1. **Usa mensajes claros:** Los mensajes deben ser descriptivos y fáciles de entender.
2. **Proporciona valores por defecto:** En `prompt()`, siempre incluye valores por defecto sensatos.
3. **Valida las entradas:** Comprueba que los datos introducidos sean válidos antes de usarlos.
4. **Maneja la cancelación:** Siempre considera qué hacer si el usuario cancela una operación.
5. **Usa con moderación:** Estas funciones están bien para aprender y prototipos, pero no abuses de ellas en aplicaciones reales.