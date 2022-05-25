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
```

## Diferencias entre tipos e interfaces