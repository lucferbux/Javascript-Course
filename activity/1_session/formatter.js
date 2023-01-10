class Formatter {
    constructor() {
        this.prefix = 'Hello';
    }

    append(c) {
        console.log(this.prefix + ' ' + c)
    }
}


Formatter.prototype.toLowerString = function (c){
    console.log(c.toLowerCase())
}

var test = new Formatter()

test.append('Andres')
test.toLowerString('Andres')