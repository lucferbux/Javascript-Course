console.log("%cClosures", 'color: #3913B8; font-size: 20px;');

// 1. Closures
console.log("%c1. Closures", 'color: #229179; font-size: 16px;');

var add = (num1) => {
    return (num2) => {
        return num1 + num2
    }
}


var add2 = add(2);

console.log(add2(8));

var add10 = add(10);

console.log(add10(2));