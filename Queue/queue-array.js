class Queue {
    constructor() {
        this.items = []
    }
    enqueue (data) {
        return this.items.push(data)
    }
    dequeue () {
        if (this.isEmpty()) return console.log("stack underflow");
        return this.items.shift(); 
    }

    isEmpty () {
        return this.items.length === 0
    }
    peek () {
        if (this.isEmpty()) return console.log("no elements in queue");
        return console.log(this.items[0])
    }
    size () {
        return this.items.length
    }
    printQueue () {
        let queueString = "";
        for (let i = 0 ; i< this.size(); i++) {
            queueString+=  this.items[i]+",";
        }
        console.log(queueString)
    }
}

const myqueue = new Queue();
myqueue.enqueue(5)
myqueue.enqueue(6)
myqueue.enqueue(7)
myqueue.dequeue()
myqueue.peek()
myqueue.printQueue()