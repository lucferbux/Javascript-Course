console.log("%cCall Stack", 'color: #3913B8; font-size: 20px;');


function multiply(a, b) {
    return a * b;
}

function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
    // Call Stack event
    console.log("%c1. Eventos Call Stack", 'color: #229179; font-size: 16px;');
    var squared = square(n);
    console.log(squared);
}





function eventLoop() {
    // Event loop
    console.log("%c2. Event Loop", 'color: #229179; font-size: 16px;');
    console.log("Hi");

    setTimeout(function cb() {
        console.log("there");
    }, 5000);

    console.log("World");
}
