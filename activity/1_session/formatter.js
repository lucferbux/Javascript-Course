const formatter = {
    prefix: 'Hello',
    append(c) {
        return formatter.prefix + ' ' + c
    },
    toLowerString(c) {
        return (formatter.prefix + ' ' + c).toLowerCase()
    },
}

console.log(formatter.append('madafuker'))
console.log(formatter.toLowerString('madafuker'))