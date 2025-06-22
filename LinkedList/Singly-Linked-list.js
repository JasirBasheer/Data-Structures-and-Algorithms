class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        let newNode = new Node(value)
        if (this.head) {
            this.tail.next = newNode
        } else {
            this.head = newNode
        }
        this.tail = newNode
    }

    prepend(value) {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    pop() {
        let current = this.head
        if (!current) return
        if (!current.next) {
            this.head = null
            this.tail = null
            return;
        }
        while (current.next.next) {
            current = current.next
        }
        current.next = null
        this.tail = current
    }

    print() {
        let current = this.head
        let values = []

        while (current) {
            values.push(current.value)
            current = current.next
        }
        console.log(values.join(' => '));

    }

    search(value) {
        if (!this.head) return
        let current = this.head

        while (current) {
            if (current.value == value) {
                console.log(true);
                return true
            }
            current = current.next
        }
        console.log(false);
        return false
    }

    printRevese() {
        let current = this.head
        let values = []

        while (current) {
            values.push(current.value)
            current = current.next
        }
        console.log(values.reverse().join(' => '));
    }

    reverse() {
        let current = this.head
        let prev = null
        let next = null

        while (current) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.head = prev
    }

    removeDuplicates() {
        let values = new Set()
        let current = this.head
        values.add(current.value)

        while (current.next) {
            if (values.has(current.next.value)) {
                current.next = current.next.next
            } else {
                values.add(current.next.value)
                current = current.next
            }
        }

    }

    findMid() {
        let slow = this.head
        let fast = this.head

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        console.log(slow.value)
    }

    findNthNode(position) {
        let current = this.head
        let index = 1

        while (current) {
            if (position == index) {
                console.log(current.value)
                return
            }
            index++
            current = current.next
        }
        console.log('Element not found')
    }

    findNthNodeEnd(position) {

    }

    mergeTwoLL(L1, L2) {
        L1.tail.next = L2.head
    }

    isCycle() {
        let slow = this.head
        let fast = this.head

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next

            if (slow === fast) {
                console.log(true);
                return true
            }
        }
        console.log(false)
        return false
    }


    removeCycle() {
        let startingNode = this.head
        let current = this.head

        while (current) {
            if (current.next == startingNode) {
                current.next = null
                console.log("Cycle removed");
                return;
            }
            current = current.next
        }
        console.log('No cycle detected');
    }


    reverseToNth(position) {
        let current = this.head
        let half = null
        let index = 1
        while (current && index < position) {
            current = current.next
            index++
        }
        half = current.next
        current.next = null


        let temp = half

        while (temp && temp.next) {
            temp = temp.next
        }
        
        temp.next = this.head
        this.head =half

    }


    isPlindrom(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        let current = slow
        let prev = null
        let next =null
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current =next
        }
        let right = prev
        let left = this.head

        while(right){
            if(right.value!=left.value){
                console.log('not a palindrom')
                return false
            }
            right = right.next
            left = left.next
        }
        console.log('  palindrom')
        return true
        
    }

}


const LL = new LinkedList()
LL.append(23)
LL.append(22)
LL.append(22)
LL.append(23)

// LL.reverseToNth(2)

// LL.search(232)


LL.isPlindrom()




