# Interfaces

## Overview

Las interfaces son un tipo de construcción que permite definir los tipos en Objetos JavaScript. El compilador de TS no convierte la interfaz en código JavaScript, utiliza las interfaces para la comprobación de tipos.

Puede extenderse para tener más flexibilidad y cuenta con atributos opcionales, atributos de solo lectura o funciones.

```typescript
interface Person {
    name: string;
    age: number;
    id?: string;
    talk:(string)=>void;
}

interface Student extends Person {
    college: string;
    bachelor: string;
}

const student: Student = {
    name: "Lucas",
    age: 25,
    college: "ThreePoints",
    bachelor: "Master Full Stack",
    talk: function(phrase: string) {
        console.log(phrase);
    }
}

student.talk("Hello world");
```

Si habéis estado atentos, os daréis cuenta que las `interfaces` son muy parecidas a las `types aliases` que hemos visto en la sección anterior, y es que podemos declarar un typo de objeto anónimo que luego aplicar a cualquier instancia, teniendo atributos, funciones, opcionales... Con esto nos surge la duda de **cuando escoger tipos y cuando interfaces**. Vamos a responderlo.

## Diferencias entre Type Aliases e Interfaces

Hace tiempo, las diferencias entre **type aliases** e **interfaces** eran más pronunciadas, pero estos últimos años TypeScript ha ido incorporando funcionalidades en ambas estructuras haciendo que **sea posible elegir libremente cualquiera de las dos**. Casi todas las funcionalidades de `interfaces` se encuentran en `type`, la diferencia más importante es que **los tipos no pueden volver a abrirse para añadir nuevas propiedades**, mientras que las **interfaces son siempre extensibles**.

```typescript
// Extendiendo una Interface

interface Vehicle {
    name: string
}

interface Car extends Vehicle {
    id: number
}

const opel: Car = { name: "Opel", id: 123423434 };
console.log(opel.name);
console.log(opel.id);

// Extendiendo un Type mediante intersecciones

type Computer = {
    name: string
}

type Mac = Computer & {
    model: string
}

const mac: Mac = { name: "MacBook", model: "Pro" };
console.log(mac.name);
console.log(mac.model);


// Añadir nuevos campos a una Interface

interface Phone {
    brand: string
}

interface Phone {
    model: string
}

const iPhone: Phone = { brand: "iPhone", model: "13" };
console.log(iPhone.brand);
console.log(iPhone.model);

// Añadir nuevos campos a una Type (No se puede)

type Tablet = {
    brand: string
}

// Error: Duplicate identifier "Tablet"
// type Tablet = {  
//     model: string
// }
```
