class Graph {
    constructor(size){

        this.matrix = Array(size).fill(0).map(() => Array(size).fill(0));
    }
    addVertex(u,v){
        this.matrix[u-1][v-1] = 1
        this.matrix[v-1][u-1] = 1
    }
    display(){
        for(let i=0;i<this.matrix.length;i++){
            console.log(this.matrix[i])
        }
    }
}
const graph = new Graph(3)
graph.addVertex(1,3)
graph.display()
