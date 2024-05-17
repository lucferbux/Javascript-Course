// Ejercicio 1
import { createSentece, fakeStudent } from './aboutme.js';
const { name, title, job } = fakeStudent;

const fakeSentence = createSentece(name, title, job);

const sentence = createSentece(
  'Jorge Chacon',
  'Frontend Developer',
  'Full-Stack Developer - Growth Specialist'
);

console.log(sentence);
console.log(fakeSentence);

console.log('Ejercicio 1');

// Ejercicio 2

// Ejercicio 3

const divisiblesDeSiete = () => {
  let result = [];
  for (let numero = 0; numero < 101; numero++) {
    if (numero % 7 === 0) result.push(numero);
  }
  return result;
};

console.log(divisiblesDeSiete());

// Ejercicio 4

// Ejercicio 5

// Ejercicio 6

// Crear el objeto formatter
const formatter = {
  prefix: 'Hello ',
  append: function (str) {
    console.log(this.prefix + str);
  },
};

// Usar el método append
formatter.append('World');

// Añadir un nuevo método al prototype de formatter
 formatter.__proto__.toLowerString = function (str) {
   console.log(str.toLowerCase());
 };

// Usar el método toLowerString
 formatter.toLowerString('I’m Jorge');

const baseFormatter = {
  ...formatter,
  toLowerString: function (str) {
    console.log(str.toLowerCase());
  },
};

baseFormatter.toLowerString('I’m Jorge');


