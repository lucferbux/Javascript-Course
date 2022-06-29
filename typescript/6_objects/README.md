# Objetos


Como ya vimos en la sección de JavaScript, los objetos son la **unidad fundamental para agrupar y pasar información**. En TypeScript, representamos esta información mediante el *tipo objeto*.

Este tipo se puede representar de varias maneras, ya sea como objeto anónimo:

```javascript
function greetAnonymous(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
greetAnonymous({name: "Lucas", age: 28});
```

Pueden ser declarados a través de `interfaces`:

```javascript
interface Person {
  name: string;
  age: number;
}

let person: Person = {name: "Lucas", age: 28};
 
function greetInterface(person: Person) {
  return "Hello " + person.name;
}
greetInterface(person);
```

O como un `type alias`

```javascript
type PersonType = {
  name: string;
  age: number;
};

let personType: PersonType = {name: "Lucas", age: 28};
 
function greetType(person: PersonType) {
  return "Hello " + person.name;
}

greetType(personType);
```

En estos tres ejemplos tenemos funciones con objetos como parámetros que contienen la propiedad `name`, un string, y `age`, un número.

Es por ello que podemos utilizar cualquiera de estas estructuras para representar objetos en JavaScript, además, como [vimos en la sección de interfaces](../3_interfaces/README.md), actualmente en TypeScript puede usarse indistintamente `interfaces` y `type alias` en casi cualquier contexto.
