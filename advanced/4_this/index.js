console.log("%cThis en Javascript", 'color: #3913B8; font-size: 20px;');


// 1. En el contexto del navegador "this" pertenece a "windows"
console.log("%c1. This en navegador", 'color: #229179; font-size: 16px;');
console.log(this === window);

// 2. "this" se refiere al contexto donde esté contenido
console.log("%c2. This en custom scope", 'color: #229179; font-size: 16px;');

var customThis = {
    name: 'Lucas',

    hello() {
        return `Hello ${this.name}`
    },

    helloArrow:() => {
        return `Hello ${this.name}`
    },

    info: function() {
        return this;
    }
}

console.log(customThis.hello());
console.log(customThis.helloArrow());
console.log(customThis.info());