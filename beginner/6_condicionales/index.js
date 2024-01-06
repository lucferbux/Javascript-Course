console.log("%cCondicionales", 'color: #3913B8; font-size: 20px;');


console.log("%c1. If", 'color: #229179; font-size: 16px;');
let counter = 5
if(counter == 5) {
    console.log("We've reached 5")
}

console.log("%c2. If Else", 'color: #229179; font-size: 16px;');
if(counter == 6) {
    print("We've reached 6");
    console.log("Hello");
} else {
    console.log("We've got something else");
}

counter += 1

if(counter == 1){
    console.log("We've reached 1");
} else if(counter == 2){
    console.log("We've reached 2");
} else if(counter == 3){
    console.log("We've reached 3");
} else if(counter == 4){
    console.log("We've reached 4");
} else if(counter == 5){
    console.log("We've reached 5");
} else if(counter == 6){
    console.log("We've reached 6");
} else {
    console.log("We've got more than that");
}
