//Prototype
function Formatter () {
  this.prefix = "Hello",
  this. append = function (text) {
    return `${this.prefix} ${text}`;
  }
};

Formatter.prototype.toLowerString = function(text) {
  const transformText = this.append(text);
  return transformText.toLowerCase();  
}

const CustomFormatter = new Formatter();

export {CustomFormatter};