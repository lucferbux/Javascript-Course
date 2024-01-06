console.log("%cOperadores", 'color: #3913B8; font-size: 20px;');

// Operadores Aritméticos
console.log("%cOperadores Aritméticos", 'color: #229179; font-size: 16px;');
let a = 30;
let b = 50;

// Addition
let add = a + b;
console.log(`add: ${add}`);

// Subtraction
let sub = a - b;
console.log(`sub: ${sub}`);

// Multiplication
let mul = a * b;
console.log(`mul: ${mul}`);

// Division
let div = a / b;
console.log(`div: ${div}`);

// Module
let modd = b % a;
console.log(`modd: ${modd}`);

// Exponent
let exp = a**b;
console.log(`exp: ${exp}`);


// Operadores de Comparación
console.log("%cOperadores de Compraración", 'color: #229179; font-size: 16px;');
// Ejemplos de operadores de comparación
a = 30;
b = 50;
let c = '30';

// Equality
let eq = a == b;
console.log(`eq: ${eq}`);

let eq2 = a == c;
console.log(`eq2: ${eq2}`);

// Equality + type
let eq3 = a === c;
console.log(`eq3: ${eq3}`);


// Inequality
//let ieq = a != b;
//console.log(`ieq: ${ieq}`);

let ieq2 = a != c;
console.log(`ieq2: ${ieq2}`);

// Inequality + type
let ieq = a !== b;
console.log(`ieq: ${ieq}`);

// Greater
let gt = a > b;
console.log(`gt: ${gt}`);

// Less
let ls = a < b;
console.log(`ls: ${ls}`);

// Greater or equal
let gteq = a >= b;
console.log(`gteq: ${gteq}`);

// Less or equal
let lseq = a <= b;
console.log(`lseq: ${lseq}`);

console.log(30 > 30);
console.log(30 >= 30);


// Operadores de Asignación
console.log("%cOperadores de Asignación", 'color: #229179; font-size: 16px;');
// Ejemplos de operadores de asignación
a = 30;
b = 50;

// Assignment (=)
c = a + b;
console.log(c);

// Addition with assignment
c = 60;
c += a;
console.log(c);

// Subtraction with assignment
c = 60;
c -= a;
console.log(c);

// Multiplication with assignment
c = 60;
c *= a;
console.log(c);

// Division with assignment
c = 60;
c /= a;
console.log(c);

// Operadores Lógicos, de Identidad y Pertenencia
console.log("%cOperadores Lógicos, de Identidad y Pertenencia", 'color: #229179; font-size: 16px;');
a = 30;
b = 50;
c = [20, 30, 70, 80];
let at = true;
let bf = false;

// AND operator
console.log(at && bf);

// OR operator
console.log(at || bf);

// NOT operator
console.log(!at);

// Membership
console.log(a in c);

