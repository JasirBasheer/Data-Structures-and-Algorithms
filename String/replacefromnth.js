let str = 'Jasir'
let n = 2

function replaceFromNth(str, n, value) {
    if (str.length == 0) {
        return ""
    }
    if (n == 0) {
        return value + replaceFromNth(str.slice(1), n - 1, value)
    }
    return str[0] + replaceFromNth(str.slice(1), n - 1, value)
}

console.log(replaceFromNth(str, n, 'k'))