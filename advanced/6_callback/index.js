console.log("%cCallback", 'color: #3913B8; font-size: 20px;');

// 1. Returning a function to async
console.log("%c1. Callback function", 'color: #229179; font-size: 16px;');

let myCallback = (callback) => {
    setTimeout(() => {
        callback("1. Callback function ---> logged");
    }, 100);
};

let logUser = (response) => {
    console.log("Entramos en el logUser")
    console.log(response);
};

myCallback(logUser);

console.log("This is going to print before...");


// 2. Passing arguments
console.log("%c2. Callback function with arguments", 'color: #229179; font-size: 16px;');

// Having an error
let logError = (error) => {
    console.log("Entramos en el error")
    console.log(error);
}

let loggingCallback = (login, response, error) => {
    setTimeout(() => {
        if(login.username === "lucferbux" && login.password === "patata") {
            response("2. Callback with parameters --> User logged")
        } else {
            error("error, username or password invalid")
        }
    }, 100);
}

loggingCallback({username: "lucferbux", password: "patata"}, logUser, logError);


console.log("This is going to print before too...");
