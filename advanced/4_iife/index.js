console.log("%cImmediately Invoked Function Expression", 'color: #3913B8; font-size: 20px;');

// 1. Primera variante de IIFE
console.log("%c1. Primera variante de IIFE", 'color: #229179; font-size: 16px;');
(function() {
    alert("1. Estás usando IIFE")
}());

// 2. Segunda variante de IIFE
console.log("%c2. Segunda variante de IIFE", 'color: #229179; font-size: 16px;');
(function() {
    console.log("2. Estas usando IIFE")
})();

// 3. Comprobar el scope de IIFE
console.log("%c3. Tercera variante de IIFE", 'color: #229179; font-size: 16px;');
(function() {
    var newName = "Lucas";
    console.log(newName);
}());

(function() {
    var newName = "Maria";
    console.log(newName);
}());

console.log(window.newName);