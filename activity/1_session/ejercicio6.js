const formatter = {
    prefix: 'Hello',
    append(world){
        console.log(`${this.prefix} ${world}`)
    },
    toLowerString(name){
        console.log(name.toLowerCase())
    }
    
}

formatter.append('World')
formatter.toLowerString('Stephano Palomino')