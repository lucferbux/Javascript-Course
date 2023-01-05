let formatter = {
    prefix: "Hello",
    append: function(texto){
               console.log(formatter.prefix + " " + texto);
    }
};

formatter.toLowerString = function (texto2) {
    console.log(texto2.toLowerCase());
};
