console.log("Scoping");


// var will have an output and let no, because var is function scoped and let is block scoped
// let func = function()  {

//     {
//         let l = 'let';
//         var v = 'var';
//     }

//     console.log(v);
//     console.log(l);

// }

// func();

// 1. Transform this function in order to avoid scoping
// Adding an IFFE
let funcIFFE = function()  {

    {(function() {
        let l = 'let';
        var v = 'var';
    }())
    }

    console.log(v);
    console.log(l);

}

funcIFFE();

