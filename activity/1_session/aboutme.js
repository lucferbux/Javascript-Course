const me = {
    'name': 'Jose Moro',
    'profession': 'Developer',
    'position': 'Full Stack',
}


/**
 * Get message about me
 *
 * @returns {string}
 */
function aboutMe() {
    return `Hola, me llamo ${me.name} y me dedico a ${me.profession}.
     Estoy cursando este Máster porque me gustaría trabajar en ${me.position}`
}

export {
    aboutMe
}