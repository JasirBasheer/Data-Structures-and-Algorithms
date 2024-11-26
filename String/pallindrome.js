let str = 'malayalam'

function isPalindrom(str) {
    if (str.length == 1) {
        return true
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    return isPalindrom(str.slice(1, -1))
}

console.log(isPalindrom(str));
