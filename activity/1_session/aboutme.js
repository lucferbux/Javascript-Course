c// aboutme.js
console.log("%c1. aboutme.js", 'color: #229179; font-size: 16px;');

function externalExecution() {
    console.log("aboutme.js is being executed");
}

export { externalExecution };

// Variables definition
var completeName = "Fernanda Gutierrez";
var profession = "IT People Manager";
var dreamJob = "Technical Manager";

var messageToDisplay = (`Hola, me llamo ${completeName} y actualmente me desempeño como ${profession}. Estoy cursando este Master porque me gustaría trabajar como ${dreamJob}`);

// Display value on console
console.log(messageToDisplay);