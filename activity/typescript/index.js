// Ejercicio 1
function toArray(persona) {
    var perfil = [persona.name, persona.age, persona.profession];
    return perfil;
}
var humano = {
    name: "Juan",
    age: 48,
    profession: "Ingeniero"
};
console.log(toArray(humano));
// Ejercicio 2
function sumOrConcatenate(param1, param2) {
    if (typeof param1 === "string" && typeof param2 === "string")
        return param1 + "-" + param2;
    if (typeof param1 === "number" && typeof param2 === "number")
        return param1 + param2;
    if ((typeof param1 === "string" && typeof param2 === "number") ||
        (typeof param1 === "number" && typeof param2 === "string"))
        return param1 + ":" + param2;
    return "Tipo de alguno de los parámetros INVÁLIDO";
}
console.log(sumOrConcatenate("7", "5"));
// Ejercicio 3
// Ejercicio 4
