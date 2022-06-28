# Creación de Objetos

En la [sesión pasada](/beginner/9_objetos/README.md) hablábamos de que los objetos en JavaScript difieren de objetos en otros lenguajes de programación. Esto es debido a que JavaScript es un **Lenguaje Orientado a Prototipos**. En esta sección veremos que la creación de objetos difiere de otros lenguajes y como el concepto de **clases** introducido en ES6 no es lo que puede parecer al principio.

## Funciones Constructoras

Las **constructor functions** o funciones constructoras son funciones cuyo fin es construir nuevos objetos. La palabra reservada `new` se utiliza como operador para crear nuevas instancias basadas en una función constructora. Ya hemos visto algún constructor previamente como `new Array()` o `new Date()`, pero podemos crear nuestras funciones para objetos personalizados.

Una **función constructora** no es más que una función regular que se convierte en constructor cuando se declara con la palabra `new`.

```javascript
// without name 
var person = function(name, age) {
    this.name = name;
    this.age = age;
}

var lucas = new person("Lucas", 26);

var maria = new person("Maria", 27);

console.log(lucas);
console.log(maria);

// with name
function Person(name, age){
    this.name = name;
    this.age = age;
}

let person1 = new Person("Lucas", 27);
console.log(person1);
```

Podemos añadir ahora un método a este objeto accediendo al `prototype` de la **función constructora** y declarando un nuevo valor.

```javascript
Person.prototype.info = function() {
    console.log(`Hi I'm ${this.name} and I'm ${this.age}`);
}

person1.info();
```

Se podría extender el objeto mediante un **spread operator** de sus prototipos.

```javascript
let person_extended = {
    height: 180,
    ...person1
}

console.log(person_extended);

```

Como podéis ver es posible crear objetos mediante **funciones constructoras** aunque es un poco engorroso el añadir nuevos métodos o extender las clases, es por ello que en **ES6** se introdujeron las **clases**.

## Clases

Al final las **Clases** presentadas en ES6 no son clases como tal. Al menos como pudieran parecer en otros lenguajes. Las clases son "funciones especiales" que encapsulan datos. Estas clases están construidas en base a **prototipos** y tienen dos componentes sintácticos: **class expression** y **class declaration**, con los cuales pueden declararse.

### Class declaration

Una forma de definir una clase es mediante las **declaraciones de clase**. Para ello se usa la palabra reservada `class` con el nombre de la función. Estas declaraciones se diferencian de las **function declarations** en el hoisting, es decir, si se intentan referenciar antes de declararse JavaScript lanzará un error.

```javascript
// Class declaration

// const error_student = new Student("Pepe", 23); // Uncomment this to throw a ReferenceError for hoistin.

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
    }
}

const first_student = new Student("Pedro", 22);
first_student.displayInfo();
```

### Class expression

La segunda forma de definir una función es mediante las **expresiones de clase**. Estas definiciones pueden realizarse con o sin nombre, y además este nombre es local al cuerpo de la clase.

```javascript
// Class expression

// unnamed

let NewStudent = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
    }
}

console.log(NewStudent.name);

// named

let NewPerson = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
    }
}

console.log(NewPerson.name);
```

### Cuerpo de la clase

El cuerpo de la clase es la parte entre los corchetes `{}`. Aquí se pueden definir el constructor, propiedades y métodos.

El **constructor** es un método especial para crear e inicializar los objetos declarados con `class`. Solo **puede haber un constructor** dentro de una clase. Un constructor puede usar `super` para acceder a la clase padre.

Los **métodos** son funciones dentro de las clases que pueden funcionar como acceso de atributos, modificadores, generadores...

```javascript
class Cat {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    displayInfo() {
        console.log(`miau miau miau miau`);
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(newName) {
        this._name = newName;
    }
}

let snowball = new Cat("Snowball", 7);
console.log(snowball.name);
snowball.name = "Snowball II";
console.log(snowball.name);
```

### Herencia

Es posible crear una relación de herencia entre objetos mediante la palabra reservada `extend`. Funciona igual que como lo vimos en la [sección anterior](/beginner/9_objetos/README.md), al final es una abstracción de las funciones, pero acaba siendo prototipos heredados.

```javascript
class Vehicle {
    constructor(tires, plate) {
        this._tires = tires;
        this._plate = plate;
    };

    start() {
        console.log("Starting the engine...");
    }

    info() {
        console.log(`${this.constructor.name} with plate: ${this._plate}`)
    }
}

class Car extends Vehicle{
    constructor(plate) {
        super(4, plate);
    }

    turnRadio() {
        console.log("Tunning the radio");
    }
}

let opel = new Car("234lk");

opel.info();
opel.turnRadio();
```

Hay muchísimas más propiedades de las clases en JavaScript, [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) podéis ver una recopilación de todas las características que posee.
