console.log("%cInteracción con el navegador", 'color: #3913B8; font-size: 20px;');

console.log("%c1. Ejemplos de Alert", 'color: #229179; font-size: 16px;');

// Ejemplo 1: Alert básico
// alert("¡Hola! Bienvenido a nuestro sitio web");

// Ejemplo 2: Alert con variables
let nombre = "María";
// alert("Hola " + nombre + ", gracias por visitarnos");

// Ejemplo 3: Alert con operaciones
let suma = 5 + 3;
// alert("El resultado de 5 + 3 es: " + suma);

console.log("%c2. Ejemplos de Prompt", 'color: #229179; font-size: 16px;');

// Ejemplo 1: Prompt básico
// let nombreUsuario = prompt("¿Cuál es tu nombre?");
// alert("Hola " + nombreUsuario + "!");

// Ejemplo 2: Prompt con valor por defecto
// let edad = prompt("¿Cuántos años tienes?", "18");
// alert("Tienes " + edad + " años");

// Ejemplo 3: Validar entrada de prompt
// let email = prompt("Introduce tu email:");
// if (email !== null && email !== "") {
//     alert("Tu email es: " + email);
// } else {
//     alert("No has introducido ningún email");
// }

console.log("%c3. Ejemplos de Confirm", 'color: #229179; font-size: 16px;');

// Ejemplo 1: Confirm básico
// let confirmar = confirm("¿Estás seguro de que quieres continuar?");
// if (confirmar) {
//     alert("Has confirmado la acción");
// } else {
//     alert("Has cancelado la acción");
// }

// Ejemplo 2: Confirm para eliminar
// let eliminar = confirm("¿Estás seguro de que quieres eliminar este archivo?");
// if (eliminar) {
//     console.log("Archivo eliminado");
//     alert("Archivo eliminado correctamente");
// } else {
//     console.log("Operación cancelada");
//     alert("Operación cancelada");
// }

console.log("%c4. Calculadora Simple (comentada para evitar popups automáticos)", 'color: #229179; font-size: 16px;');

// Calculadora simple usando interacción del navegador
function calculadoraSimple() {
    // Solicitar el primer número
    let numero1 = prompt("Introduce el primer número:", "0");
    
    // Verificar si el usuario canceló
    if (numero1 === null) {
        alert("Operación cancelada");
        return;
    }
    
    // Solicitar el segundo número
    let numero2 = prompt("Introduce el segundo número:", "0");
    
    if (numero2 === null) {
        alert("Operación cancelada");
        return;
    }
    
    // Convertir a números
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    
    // Verificar que sean números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Error: Por favor introduce números válidos");
        return;
    }
    
    // Solicitar la operación
    let operacion = prompt("¿Qué operación quieres realizar? (+, -, *, /)", "+");
    
    if (operacion === null) {
        alert("Operación cancelada");
        return;
    }
    
    let resultado;
    
    // Realizar la operación
    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 === 0) {
                alert("Error: No se puede dividir por cero");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert("Operación no válida");
            return;
    }
    
    // Mostrar el resultado
    alert(`El resultado de ${numero1} ${operacion} ${numero2} = ${resultado}`);
    
    // Preguntar si quiere hacer otra operación
    let continuar = confirm("¿Quieres realizar otra operación?");
    if (continuar) {
        calculadoraSimple(); // Llamada recursiva
    } else {
        alert("¡Gracias por usar la calculadora!");
    }
}

// Para ejecutar la calculadora, descomenta la siguiente línea:
// calculadoraSimple();

console.log("%c5. Ejemplos de conversión de tipos", 'color: #229179; font-size: 16px;');

// Ejemplo: Convertir entrada de prompt a número
// let numeroTexto = prompt("Introduce un número:", "10");
// let numeroEntero = parseInt(numeroTexto);
// let numeroDecimal = parseFloat(numeroTexto);

// console.log("Texto:", numeroTexto, typeof numeroTexto);
// console.log("Entero:", numeroEntero, typeof numeroEntero);
// console.log("Decimal:", numeroDecimal, typeof numeroDecimal);

console.log("%c6. Validación de entradas", 'color: #229179; font-size: 16px;');

// Función para validar que la entrada sea un número
function solicitarNumero(mensaje, valorPorDefecto = "0") {
    let entrada;
    let numero;
    
    do {
        entrada = prompt(mensaje, valorPorDefecto);
        
        // Si el usuario cancela, retornar null
        if (entrada === null) {
            return null;
        }
        
        numero = parseFloat(entrada);
        
        if (isNaN(numero)) {
            alert("Por favor, introduce un número válido");
        }
        
    } while (isNaN(numero));
    
    return numero;
}

// Para probar la validación, descomenta las siguientes líneas:
// let numeroValidado = solicitarNumero("Introduce un número válido:");
// if (numeroValidado !== null) {
//     alert("Número válido: " + numeroValidado);
// } else {
//     alert("Operación cancelada");
// }

console.log("Todos los ejemplos están preparados. Descomenta las líneas para probar las funciones interactivas.");