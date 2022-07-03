function formatter(sufix, txtminuscula)
{
    this.prefix = 'Hello ';
    this.sufix = sufix;
    this.append = function()
    {
        return this.prefix + this.sufix;
    }

    this.toLowerString = function()
    {
        return txtminuscula.toLowerCase();
    }

    console.log(this.append());
    console.log(this.toLowerString());
}

let objformatter = new formatter('World', "I'm Lucas");

/* formatter.prototype.toLowerString = function()
{
    return this.txtminuscula.toLowerCase(); 
}

let msgminuscula = new formatter('World', "I'm Lucas");

console.log(msgminuscula.toLowerString()); */