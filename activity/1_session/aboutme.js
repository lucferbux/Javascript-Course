/**
 * Creates a sentence introducing a person.
 *
 * @param {string} name - The name of the student.
 * @param {string} title - The title or degree of the student.
 * @param {string} job - The job or profession the student aspires to.
 * @returns {string} The introduction sentence.
 */

export const createSentece = (name, title, job) => `Hola, me llamo ${name} y me dedico a ${title}. Estoy cursando este Máster porque me gustaría trabajar en ${job}`

export const fakeStudent = {
    name: 'John Doe',
    title: 'Enfermero',
    job: 'Doctor'
}