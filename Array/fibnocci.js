function fibnocci(n){
    if(n==0 || n==1){
        return n
    }
    return fibnocci(n-1) + fibnocci(n-2)    
}
console.log(fibnocci(6))
