# Utility Types

## Overview

Además de toda la sintaxis que hemos visto, TypeScript cuenta con algunas utilidades que permiten hacer transformaciones de tipos para abarcar una gran cantidad de casos de uso, en esta sección veremos algunos de ellos.

## Partial

El tipo `Partial<T>` convierte todas las propiedades de un tipo `T` en opcionales. Es útil cuando queremos crear objetos parciales o actualizar solo algunas propiedades de un objeto existente.

Su definición sería la siguiente

```javascript
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

Y una implementación podría ser:

```javascript
interface Usuario {
    nombre: string;
    edad: number;
}

// Aquí, todas las propiedades de 'Usuario' se vuelven opcionales
type UsuarioParcial = Partial<Usuario>;

const usuario1: UsuarioParcial = { nombre: "Juan" }; // Válido
const usuario2: UsuarioParcial = { edad: 28 }; // Válido
```

## Required

El tipo `Required<T>` convierte todas las propiedades opcionales de un tipo `T` en obligatorias. Es útil cuando queremos asegurarnos de que todas las propiedades de un objeto estén presentes.

El uso de `Required` sería el siguiente

```javascript
type Required<T> = {
    [P in keyof T]-?: T[P];
};
```

Y un ejemplo de uso sería:

```javascript
interface UsuarioOpcional {
    nombre?: string;
    edad?: number;
}

type UsuarioCompleto = Required<UsuarioOpcional>;

const usuario1: UsuarioCompleto = { nombre: "Juan", edad: 28 }; // Válido
const usuario2: UsuarioCompleto = { nombre: "Juan" }; // Error: falta la propiedad 'edad'
```

## Pick

El tipo `Pick<T, K>` selecciona un conjunto de propiedades `K` del tipo `T`. Es útil cuando queremos extraer un subconjunto de propiedades de un objeto y crear un nuevo tipo con ellas.

`Pick` estaría implementado de la siguiente forma:

```javascript
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

Y su uso sería:

```javascript
interface Usuario {
    nombre: string;
    edad: number;
    email: string;
}

type UsuarioResumido = Pick<Usuario, "nombre" | "email">;

const usuario: UsuarioResumido = {
    nombre: "Juan",
    email: "juan@example.com"
}; // Válido
```

## Omit

El tipo `Omit<T, K>` elimina un conjunto de propiedades `K` del tipo `T`. Es útil cuando queremos crear un nuevo tipo excluyendo algunas propiedades de un objeto existente.

La definición de `Omit` es:

```javascript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

Y su uso sería:

```javascript
interface Usuario {
    nombre: string;
    edad: number;
    email: string;
}

type UsuarioSinEmail = Omit<Usuario, "email">;

const usuario: UsuarioSinEmail = {
    nombre: "Juan",
    edad: 28
}; // Válido

const usuarioConEmail: UsuarioSinEmail = {
    nombre: "Juan",
    edad: 28,
    email: "juan@example.com"
}; // Error: la propiedad 'email' no debe existir
```

## Exclude

El tipo `Exclude<T, U>` crea un nuevo tipo excluyendo aquellos elementos presentes en `U` del tipo `T`. Es útil cuando queremos eliminar elementos específicos de un tipo union.

La definición de `Omit` es:

```javascript
type Exclude<T, U> = T extends U ? never : T;
```

Y podríamos usarlo de la siguiente manera:

```javascript
type Animales = "perro" | "gato" | "elefante" | "tigre";
type AnimalesDomésticos = "perro" | "gato";

// Aquí, 'AnimalesSalvajes' será un tipo que contiene solo "elefante" y "tigre"
type AnimalesSalvajes = Exclude<Animales, AnimalesDomésticos>;

const animalSalvaje1: AnimalesSalvajes = "elefante"; // Válido
const animalSalvaje2: AnimalesSalvajes = "tigre"; // Válido
const animalSalvaje3: AnimalesSalvajes = "perro"; // Error: "perro" no está en el tipo 'AnimalesSalvajes'
```
