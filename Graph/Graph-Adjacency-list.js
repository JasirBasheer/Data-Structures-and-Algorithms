class Graph {
    constructor() {
        this.adjacencylist = {}
    }

    addVertex(vertex) {
        if (!this.adjacencylist[vertex]) {
            this.adjacencylist[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencylist[vertex1]) {
            this.addVertex(vertex1)
        }

        if (!this.adjacencylist[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)

    }

    hasEdge(vertex1, vertex2) {
        if (!this.adjacencylist[vertex1]) {
            return false
        }
        if (!this.adjacencylist[vertex2]) {
            return false
        }


        return this.adjacencylist[vertex1].has(vertex2) && this.adjacencylist[vertex2].has(vertex1)

    }

    removeEdge(vertex1, vertex2) {
        this.adjacencylist[vertex1].delete(vertex2)
        this.adjacencylist[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencylist[vertex]){
            return
        }

        for(let adjacencyVertex of this.adjacencylist[vertex]){
            this.removeEdge(vertex,adjacencyVertex)
        }

        delete this.adjacencylist[vertex]
    }

    display() {
        for (let vertex in this.adjacencylist) {

            console.log(vertex + " => " + [...this.adjacencylist[vertex]])
        }
    }

    bfs(){
    
    }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.display()
console.log('..................');

graph.removeVertex("A")

graph.removeEdge('B', 'C')
graph.display()

