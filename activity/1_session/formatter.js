class formatter
{
    constructor()
    {
        this.prefijo = 'Hello ';
    }

    append(texto)
    {
        return `${this.prefijo} ${texto}`;
    }
}

export{formatter};