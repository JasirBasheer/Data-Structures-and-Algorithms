class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentNode(index){
        return Math.floor((index-1)/2)
    }

    getLeftNode(index){
        return (2*index)+1
    }

    getRightNode(index){
        return (2*index)+2
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    
    delete(){
        if(this.heap.length == 0) return null
        if(this.heap.length === 1) return this.heap.pop()

        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return min
    }

    heapifyUp(){
        let index = this.heap.length -1
        while(index>0){
            let parent = this.getParentNode(index)
            if(this.heap[parent]>this.heap[index]){
                [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]]
                index = parent
            }else{
                break
            }
        }
    }

    heapifyDown(){
        let index = 0
        let left =this.getLeftNode(index)
        let smallest = left
        while(index<this.heap.length){
            let right = this.getRightNode(index)
            if(right<this.heap.length && this.heap[right]<this.heap[left]){
                smallest =right
            }
            if(this.heap[index]>this.heap[smallest]){
                [this.heap[index],this.heap[smallest]] = [this.heap[smallest],this.heap[index]]
                index = smallest
                left =this.getLeftNode(index)
            }else{
                break
            }
        }
    }

    heapSort(){
        let result = [];
        let originalHeap = [...this.heap];
        while(this.heap.length>0){
            result.push(this.delete());
        }
        this.heap = originalHeap
        return result
    }
}



const heap = new MinHeap()
heap.insert(43)
heap.insert(33)
heap.insert(23)
heap.insert(13)

console.log(heap.heap);
heap.delete(13)
console.log(heap.heapSort());
