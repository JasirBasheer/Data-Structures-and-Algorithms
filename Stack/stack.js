class Stack{
    constructor(){
        this.items = []
    }

    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.items.length == 0){
            return "stack is empty"
        }
        this.items.pop()
    }
    peek(){
        if(this.items.length==0)return "Stack is empty"
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }
}

// const stack = new Stack()
// stack.push(34)
// stack.push(345)
// stack.push(332)
// stack.pop()


// console.log(stack.isEmpty())




class Node{
    constructor(value){
        this.value =value
        this.next = null
    }
}

class stackinLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    enqueue(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
        }else{
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    dequeue(){
        if(!this.head)return "Head is empty"
        let current = this.head,prev = null
        if(!current.next){
            this.head = null
            this.tail = null
            return
        }
        while(current.next!=null){
            prev = current
            current = current.next
        }
        prev.next = null
        this.tail = prev
    }
}


let stack = new stackinLinkedList()
stack.enqueue(23)
stack.enqueue(233)
stack.enqueue(12)
stack.dequeue()
stack.dequeue()
stack.dequeue()


console.log(stack.head)