console.log("%cPromesas", 'color: #3913B8; font-size: 20px;');

// 1. Creación promesa
console.log("%c1. Creación promesa", 'color: #229179; font-size: 16px;');

let randomNumber = () => {
    return Math.floor(Math.random() * 10);
}


var login = new Promise(function(resolve, rejected) {
    setTimeout(() => {
        if(randomNumber() !== 0) {
            resolve('Logged');
        } else {
            rejected('Error: invalid username or password')
        }
    }, 100);
})


login
    .then( (resolved) => {
        console.log(resolved);
    })
    .catch( (rejected) => {
        console.log(rejected);
    })

console.log("Run before the promise");