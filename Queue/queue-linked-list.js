class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class QueueLinkedList {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
    isEmpty() {
      return this.size === 0;
    }
    getsize() {
      console.log(this.size);
      return this.size;
    }
    enqueue(data) {
      let newNode = new Node(data);
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
        this.size++;
        return;
      }
      this.rear.next = newNode;
      this.rear = this.rear.next;
      this.size++;
    }
    dequeue() {
      if (this.isEmpty()) return "it is empty";
      console.log("removed data", this.front.data);
      this.front = this.front.next;
      this.size--;
    }
    display () {
      if (this.isEmpty()) return console.log("queu is empty");
      let curr = this.front;
      let queue = "";
      while (curr ) {
          queue+= curr.data + "->"
          curr = curr.next
      }
      return console.log(queue)
    }
  }
  
  
  let newQueue = new QueueLinkedList();
  newQueue.getsize();
  console.log("------------");
  newQueue.enqueue(1)
  newQueue.enqueue(2)
  newQueue.enqueue(3)
  newQueue.display()
  newQueue.dequeue()
  console.log("------------");
  newQueue.display()