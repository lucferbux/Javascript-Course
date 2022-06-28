const fullName = 'Patricio Gómez Meneses';
const profession = 'Ingeniero Electronico' ;
const wantedJob = 'Full Stack';

console.log('break point marker');

const presentation = `Hola, me llamo ${fullName} y me dedico a ${profession}. Estoy cursando este master por que me gustaria trabajar de ${wantedJob}`;
function aboutMe() {
    console.log(presentation);
    alert(presentation)
};
export { aboutMe }