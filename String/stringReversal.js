let str = 'Jasir'

function reverseStr(str) {
    if (str.length == 0) return ""
    return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1))
}

console.log(reverseStr(str))