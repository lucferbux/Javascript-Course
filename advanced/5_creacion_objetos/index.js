console.log("%cObject Creation", 'color: #3913B8; font-size: 20px;');

// 1. En javascript, un objeto puede ser una función heredada

console.log("%c1. Objeto basado en función", 'color: #229179; font-size: 16px;');

var person = function(name, age) {
    this.name = name;
    this.age = age;
}

var lucas = new person("Lucas", 26);

var maria = new person("Maria", 27);

console.log(lucas);
console.log(maria);

// 2. Todos los objetos están relacionados con sus padres

console.log("%c2. Relación de objetos", 'color: #229179; font-size: 16px;');

var lucas_extended = {
    height: 180,
    ...lucas
}

console.log(lucas_extended);
