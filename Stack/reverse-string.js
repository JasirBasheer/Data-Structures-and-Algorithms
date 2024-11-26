let str = "jasir"
let stack = []
let result = ""
for(let s of str){
    stack.push(s)
}
 while(stack.length!=0){
    result +=stack.pop()
 }
console.log(result)