# Objetos

Los objetos son otro tipo de dato que ya mencionamos en [la sección 4](/beginner/4_tipos_dato/README.md). A diferencia de los tipos primitivos, un objeto puede almacenar colecciones de datos con índices y entidades más complejas.

Los objetos en JavaScript se diferencian un poco de otros lenguajes de programación, al ser un lenguaje **basado en prototípos** y no puramente orientado a objetos, en un momento verémos que significa esto.

## Definición

Un objeto se declara mediante parénteis `{}`, si hacemos una declaración literal, o con el constructor `Object`. Los objetos almacenan propiedades, que son una tupla de **clave: valor**, donde la clave es una **cadena** o string y el valor puede ser **cualquier otro tipo**.

```javascript
// Declaring objects
let teacher = new Object();
let user = {};
let me = {name: "Lucas", age: 27};
```

## Propiedades

Como se puede observar, se puede crear un objeto con una declaración literal añadiendo inmediatamente propiedades, estas propiedades almacenaran un valor y pueden ser accedidas mediante la sintáxis `object.property``

![Objeto en JavaScript](/meta/0_14_objects.png)

```javascript
// Accesing properties
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

![Herencia Javascript](/meta/0_15_inheritance.png)

Hablando más claro, en una **herencia clásica**, un programador escribe una clase, que define un objeto. Múltiples objetos pueden ser instanciados por la misma clase, así tienes código definido una sola veez que describe diferentes objetos en un programa. Luego las clases pueden organizarse en jerarquías para la reutilización de código.  

En la **herencia por prototipado**, los objetos **heredan directamente** de otros objetos. Toda la abstracción de las clases desaparece. La reutilización de código y la jerarquía se consigue a través de un enlace de los objetos extendidos. Cuando pedimos una propiedad en un objeto, irá siguiendo esta jerarquía hacia arriba hasta dar con el objeto que definió esa propiedad en primera instancia.



Podremos obtener los prototipos de un objeto mediante el método `getPrototypeOf()``

```javascript
// Get properties from object
console.log(me.getPrototypeOf());
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

En la sección avanzada veremos qué son las clases en realidad en Javascript y como funcionan en profundidad, ya que puede crear bastante confusión si se cuenta con conocimientos previos en otros lenguajes de programación.