const validparntehesees = (parnathesees,obj = { "{": "}", "[": "]", "(": ")" })=>{
    let stack = []
    for(let i =0;i<parnathesees.length;i++){
        if(parnathesees[i] == '{' || parnathesees[i] == '[' ||parnathesees[i] == '('){
            stack.push(parnathesees[i])
        }else{
            console.log(parnathesees[i])
            let top = stack.pop()
            if(obj[top]!==parnathesees[i]){
                return false
            }
        }
    }
    console.log(stack)
    return stack.length === 0
}


console.log(validparntehesees("[]"));
