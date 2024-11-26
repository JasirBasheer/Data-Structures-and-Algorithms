class Stack{
    constructor(){
        this.stack = []
    }
    push(data){
         this.stack.push(data)
    }
    pop(){
    return this.stack.pop()
    }

    sort(){
        let tempstack = []
        while(this.stack.length>0){
            let item = this.stack.pop()
            while(tempstack.length >0 && item<tempstack[tempstack.length-1]){
                this.stack.push(tempstack[tempstack.length-1])
                tempstack.pop()
            }
            tempstack.push(item)
        }
        this.stack = tempstack
    }
}


const stack = new Stack()
stack.push(3);
stack.push(4);
stack.push(1);
stack.push(43);
stack.sort()

console.log(stack)