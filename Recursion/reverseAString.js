function recursion(str){
    if(str.length == 0)    return ""
    return str[str.length-1] + recursion(str.slice(-1))   
}

console.log(recursion("jasir"))