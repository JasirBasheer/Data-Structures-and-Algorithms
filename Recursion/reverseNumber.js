// reverse numeber without using split or any other methods


function reverseNumber(num,res=0){
    if(num<=0)return res
    return reverseNumber(Math.floor(num/10),res*10+(num%10))
}


console.log(reverseNumber(12345)) // 54321