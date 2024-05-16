
const generateNumberBySeven = (divisible) => {
    for (let i = 1; i <= 100; i++) {
        if (i % divisible === 0) {
            console.log(i);
        }
    }
}

const exampleActivityFour = () =>{
    for(var i = 0; i < 101; i++) {
        // Solución
    }
    console.log('Example 4',i);
}

export {
    generateNumberBySeven,
    exampleActivityFour
}