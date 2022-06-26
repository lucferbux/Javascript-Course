(() => {
    const formatter = {
        prefix: "Hello",
        append: function(x) {
            return `${this.prefix} ${x}`;
        }
    }
    
    // 6: crear objeto, función, concatenar Hello World
    console.log('Ejercicio 6:', formatter.append('World'));
    
    // 6b: añadir método al proto
    formatter.__proto__.toLowerString = function(x){
        return this.append(x).toLowerCase();
    }

    console.log('Ejercicio 6b:', formatter.toLowerString('Soy Esteban'));
})();