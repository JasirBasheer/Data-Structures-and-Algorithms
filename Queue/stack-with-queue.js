class StackWithQueue {
    constructor() {
        this.q1 = []
        this.q2 = []
    }

    push(x) {
        this.q2.push(x)

        while (this.q1.length != 0) {
            this.q2.push(this.q1.shift())
        }
        let temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
    }

    pop() {
        return this.q1.shift()
    }
    display() {
        for ( let i of this.q1 ) {
            console.log(i)
        }
      }
}

const stack = new StackWithQueue();
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop()
stack.display()
