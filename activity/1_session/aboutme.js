'use strict'

let nombreCompleto = "Danny Rodriguez"
let profesion = "Servicios Infromaticos"
let puestoActual = "Senior Front end Web Developer"

const tmplLit = `“Hola, me llamo ${nombreCompleto} y me dedico a ${profesion}.
Estoy cursando este Máster porque me gustaría trabajar en ${puestoActual}”`

function ejecucionExterna() {
    console.log(tmplLit)
}

export {ejecucionExterna}
