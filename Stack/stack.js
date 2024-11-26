class Stack {
    constructor() {
        this.items = []
    }

    push(value) {
        this.items.push(value)
    }
    pop() {
        if (this.items.length == 0) {
            return "stack is empty"
        }
        this.items.pop()
    }
    peek() {
        if (this.items.length == 0) return "Stack is empty"
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    sortStack() {
        let temp = []

        while (!this.isEmpty()) {
            let current = this.pop()

            while (temp.length > 0 && temp[temp.length - 1] < current) {
                this.push(temp.pop())
            }
            temp.push(current)
        }

        while (temp.length > 0) {
            this.push(temp.shift())
        }
    }

    deleteMid() {
        let middle = Math.floor(this.stack.length / 2)
        this.deleteHelper(middle)
    }

    deleteHelper(middle) {
        if (this.isEmpty()) return
        let current = this.pop()
        if (this.stack.length === middle) {
            return
        }
        this.deleteHelper(middle)
        this.push(current)
    }
}

// const stack = new Stack()
// stack.push(34)
// stack.push(345)
// stack.push(332)
// stack.pop()


// console.log(stack.isEmpty())




class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class stackWithLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    enqueue(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    dequeue() {
        if (!this.head) return "Head is empty"
        let current = this.head, prev = null
        if (!current.next) {
            this.head = null
            this.tail = null
            return
        }
        while (current.next != null) {
            prev = current
            current = current.next
        }
        prev.next = null
        this.tail = prev
    }
}


let stack = new stackWithLinkedList()
stack.enqueue(23)
stack.enqueue(233)
stack.enqueue(12)
stack.dequeue()
stack.dequeue()
stack.dequeue()


console.log(stack.head)