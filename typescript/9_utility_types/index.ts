console.log("%cUtility Types", "color: #3913B8; font-size: 20px;");

console.log("%c1. Partial", "color: #229179; font-size: 16px;");

interface Usuario {
  nombre: string;
  edad: number;
}

// Aquí, todas las propiedades de 'Usuario' se vuelven opcionales
type UsuarioParcial = Partial<Usuario>;

const usuarioOpcional1: UsuarioParcial = { nombre: "Juan" }; // Válido
const usuarioOpcional2: UsuarioParcial = { edad: 28 }; // Válido
const usuarioOpcional3: UsuarioParcial = { nombre: "Juan", edad: 28 }; // Válido
console.log(usuarioOpcional1);
console.log(usuarioOpcional2);
console.log(usuarioOpcional3);

console.log("%c2. Required", "color: #229179; font-size: 16px;");

interface UsuarioOpcional {
  nombre?: string;
  edad?: number;
}

type UsuarioCompleto = Required<UsuarioOpcional>;

const usuarioCompleto1: UsuarioCompleto = { nombre: "Juan", edad: 28 }; // Válido
//const usuarioCompleto2: UsuarioCompleto = { nombre: "Juan" }; // Error: falta la propiedad 'edad'
console.log(usuarioCompleto1);
console.log("Error: falta la propiedad 'edad'");

console.log("%c3. Record", "color: #229179; font-size: 16px;");

type TareasPorDía = Record<"lunes" | "martes" | "miércoles", string[]>;

const tareas: TareasPorDía = {
  lunes: ["compras", "ejercicio"],
  martes: ["trabajo", "estudio"],
  miércoles: ["cine", "cena"],
}; // Válido

console.log(tareas);

console.log("%c4. Pick", "color: #229179; font-size: 16px;");

interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

type UsuarioResumido = Pick<Usuario, "nombre" | "email">;

const usuarioPick: UsuarioResumido = {
  nombre: "Juan",
  email: "juan@example.com",
}; // Válido

// const usuarioPickNoValido: UsuarioResumido = {
//   nombre: "Juan",
//   email: "juan@example.com"
//   edad: 28
// }; // No válido

console.log(usuarioPick);
console.log("No válido");

console.log("%c5. Omit", "color: #229179; font-size: 16px;");

interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

type UsuarioSinEmail = Omit<Usuario, "email">;

const usuario: UsuarioSinEmail = {
  nombre: "Juan",
  edad: 28,
}; // Válido

// const usuarioConEmail: UsuarioSinEmail = {
//   nombre: "Juan",
//   edad: 28,
//   email: "juan@example.com"
// }; // Error: la propiedad 'email' no debe existir

console.log(usuario);
console.log('Error: la propiedad "email" no debe existir');

console.log("%c6. Exclude", "color: #229179; font-size: 16px;");

type Animales = "perro" | "gato" | "elefante" | "tigre";
type AnimalesDomesticos = "perro" | "gato";

// Aquí, 'AnimalesSalvajes' será un tipo que contiene solo "elefante" y "tigre"
type AnimalesSalvajes = Exclude<Animales, AnimalesDomesticos>;

const animalSalvaje1: AnimalesSalvajes = "elefante"; // Válido
const animalSalvaje2: AnimalesSalvajes = "tigre"; // Válido
//const animalSalvaje3: AnimalesSalvajes = "perro"; // Error: "perro" no está en el tipo 'AnimalesSalvajes'

console.log(animalSalvaje1);
console.log(animalSalvaje2);
console.log('Error: "perro" no está en el tipo "AnimalesSalvajes"');
