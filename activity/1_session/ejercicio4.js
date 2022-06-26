(() => {
    // retorna true si el número es divisible entre siete
    function esDivisibleEntre7(numero) {
        return numero % 7 == 0;
    }

    // probar números del 0 al cien por 
    for(let i = 1; i <= 100; i++){
        if(esDivisibleEntre7(i)){
            console.log(`El número ${i} es divisible entre 7`);
        }
    }
})();