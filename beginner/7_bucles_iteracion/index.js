console.log("%cBucles", 'color: #3913B8; font-size: 20px;');

console.log("%c1. For", 'color: #229179; font-size: 16px;');

for (let i = 0; i < 10; i++) {
    if (i%2 == 0) {
      console.log(`${i} Es par`)
    } else {
      console.log(`${i} No es par`)
    }
}

console.log("%c1.1 For In", 'color: #229179; font-size: 16px;');

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


console.log("%c2. While", 'color: #229179; font-size: 16px;');

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(x);
}

// Bucle infinito cuidado ya que la n vale 2
// while (n > 2) {
//     n++;
//     x += n;
//     console.log(x);
//   }

console.log("%c3. While Do", 'color: #229179; font-size: 16px;');

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

console.log("%c4. Switch", 'color: #229179; font-size: 16px;');
switch(navigator.language) {
  case "en-US":
  case "en-GB":
  case "en-AU":
    console.log('Idioma inglés');
    break;
  case "es-ES":
  case "es-AR":
  case "es-CL":
  case "es-CO":
  case "es-CR":
  case "es-DO":
    console.log('Idioma español');
  default:
    console.log('No se identificó idioma')
}