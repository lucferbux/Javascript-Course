const formatter = {
  prefix: "Hello ",
  append: function(text) {
    console.log(this.prefix + text);
  }
};

formatter.append("World"); // Imprime "Hello World"




