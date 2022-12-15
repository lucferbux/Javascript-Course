# Objetos

> Objetos y prototipos

Los objetos son otro tipo de dato que ya mencionamos en [la sección 4](/beginner/4_tipos_dato/README.md). A diferencia de los tipos primitivos, un objeto puede almacenar colecciones de datos con índices y entidades más complejas.

Los objetos en JavaScript se diferencian un poco de otros lenguajes de programación, al ser un lenguaje **basado en prototipos** y no puramente orientado a objetos, en un momento veremos que significa esto.

## Definición

Un objeto se declara mediante paréntesis `{}`, si hacemos una declaración literal, o con el constructor `Object`. Los objetos almacenan propiedades, que son una tupla de **clave: valor**, donde la clave es una **cadena** o string y el valor puede ser **cualquier otro tipo**.

```javascript
// Declaring objects
let student = new Object();
let user = {};
let me = {name: "Lucas", age: 27};
```

## Propiedades

Como se puede observar, se puede crear un objeto con una declaración literal añadiendo inmediatamente propiedades, estas propiedades almacenaran un valor y pueden ser accedidas mediante la sintaxis `object.property``

![Objeto en JavaScript](/meta/0_14_objects.png)

```javascript
// Accessing properties
console.log(me.name);
console.log(me.age);
```

Para crear una nueva propiedad en el objeto, solo necesitamos hacer la llamada al objeto y añadir el valor con la propiedad.

```javascript
// Creating properties
me.profession = "Full Stack";
console.log(me);
```

Como podéis ver, las propiedades pueden ser de múltiples tipos y como no hay determinadas operaciones para su acceso, creación (como hemos visto) y eliminación.

```javascript
// Deleting properties
delete me.profession;
```

Además de esto, las propiedades  pueden ser una combinación de palabras, aunque personalmente no recomiendo su uso porque puede derivar en varios problemas.

```javascript
// multiword properties

let multiword = {
    "new variable": "Hello world"
}

// multiword.new variable // Access error
console.log(multiword["new variable"]);

multiword["other variable"] = "I'm Lucas";

console.log(multiword);
```

## Orientación a Prototipos

Como hemos comentado antes, JavaScript es un **lenguaje orientado a prototipos**. Esto significa que las propiedades y métodos del objeto pueden ser compartidos a través de objetos generalizados que tienen la habilidad de ser clonados y extendidos.

```javascript
// 1. Creación de un objeto vacío
var person = function() {}

// 2. Añadir nuevo atributo con "Object.prototype"
person.prototype.name = 'n/a';
person.prototype.age = 0;

// Ahora al crear un nuevo objeto, estará vacío pero con dos atributos por defecto
var janeDoe = new person();

console.log(janeDoe);
console.log(janeDoe.name);
console.log(janeDoe.age);

// Extendemos una función
person.prototype.hello = function () {
    return `Hello ${this.name}`;
}

console.log(janeDoe.hello());

```

Se diferencia de otros **lenguajes basados en clases** en que las clases no son los planos (blueprints) que definen la construcción de objetos, si no que un objeto se define, y puede extender a otros objetos a través de sus propiedades.

![Herencia JavaScript](/meta/0_15_inheritance.png)

Hablando más claro, en una **herencia clásica**, un programador escribe una clase, que define un objeto. Múltiples objetos pueden ser instanciados por la misma clase, así tienes código definido una sola vez que describe diferentes objetos en un programa. Luego las clases pueden organizarse en jerarquías para la reutilización de código.  

En la **herencia por prototipado**, los objetos **heredan directamente** de otros objetos. Toda la abstracción de las clases desaparece. La reutilización de código y la jerarquía se consigue a través de un enlace de los objetos extendidos. Cuando pedimos una propiedad en un objeto, irá siguiendo esta jerarquía hacia arriba hasta dar con el objeto que definió esa propiedad en primera instancia.

Podremos obtener los prototipos de un objeto mediante el método `Object.getPrototypeOf()``

```javascript
// Get properties from object
console.log(Object.getPrototypeOf(me));
console.log(me.__proto__)
```

Si queremos, podremos heredar las propiedades de un objeto a través de otro.

```javascript
// Object inheritance
console.log("+++++ creating vehicle +++++++++");

let vehicle = {
    tires: 4,
    start: function() {
        console.log("Starting engine...");
    }
}

vehicle.start();

console.log("+++++ creating car +++++++++");

let car = Object.create(vehicle);

car.start();

car.stop = function() {
    console.log("Stop the engine...");
}

console.log(vehicle);
console.log(car);
```

En la sección avanzada veremos qué son las clases en realidad en JavaScript y como funcionan en profundidad, ya que puede crear bastante confusión si se cuenta con conocimientos previos en otros lenguajes de programación.

## Desestructuración de Objetos

No nos podemos ir de esta sección sin conocer el concepto de **object destructuring** en JavaScript, ya que será bastante común dentro de la importación de **librerías y paquetes**.

Esta característica es muy útil y bastante popular, y básicamente permite acceder a **propiedades de los objetos** sin necesidad de llamarlos constantemente. Os pongo un ejemplo.

```javascript
let teacher = {
    name: 'Lucas',
    age: 25,
    nationality: 'spanish'
};
```

Para acceder a las propiedades de este objeto, podemos crear unas nuevas variables y asignar las propiedades.

```javascript
let nameTeacher = teacher.name;
let nationalityTeacher = teacher.nationality;
```

Hast aquí bien, podemos acceder a las propiedades que queramos de una forma sencilla. Pero desde el punto de vista estructural, si necesitamos asignar **n** propiedades tendremos que repetir el proceso **n** veces. Es donde entra en juego la desestructuración de objetos.

```javascript
console.log("%c4. Desestructuración de objetos ", 'color: #229179; font-size: 16px;');

// 1. Property to variable
const { age } = teacher;

// 2. Multiple properties
const { name, nationality } = teacher;

// 3. Wrong desttructuring
const { invented } = teacher;

// 4. Default value
const { other = "I have a value! " } = teacher;

// 5. Alias
const { age: agePerson } = teacher;
```

## Estilo

Para ampliar vuestros conocimientos sobre las guías de estilo de objetos en JavaScript, podéis dirigiros a la [guía de estilos de MDN](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#functions_and_objects).
