console.log("%cGestión de errores", "color: #3913B8; font-size: 20px;");

console.log("%c1. try...catch", "color: #229179; font-size: 16px;");

try {
  let dog = {
    name: "Seymur",
    age: 12,
  };

  dog.breed.subtype;
} catch (err) {
  console.log(err);
}

console.log("%c2. throw", "color: #229179; font-size: 16px;");

let response = `{ "name": "Lucas" }`;

try {
  let user = JSON.parse(response);

  if (!user.name || !user.age) {
    throw new SyntaxError("Error, falta alguno de los datos");
  }

  console.log(user.name);
} catch (err) {
  console.log("Error JSON: " + err.message);
}

console.log("%c3. custom error", "color: #229179; font-size: 16px;");

class MalformedField extends Error {
  constructor(message) {
    super(message);
    this.name = "MalformedField";
  }
}

let responseMalformed = `{ "name": 23, "age": 28 }`;

try {
  let user = JSON.parse(responseMalformed);

  if (!user.name || !user.age) {
    throw new SyntaxError("Error, falta alguno de los datos");
  }

  if (typeof user.name !== "") {
    throw new MalformedField("Name no es una cadena");
  }

  console.log(user.name);
} catch (err) {
  if (err instanceof MalformedField) {
    console.log("Atributo invalido: " + err.message);
  } else if (err instanceof SyntaxError) {
    // (*)
    console.log("JSON Syntax Error: " + err.message);
  } else {
    throw err;
  }
}
