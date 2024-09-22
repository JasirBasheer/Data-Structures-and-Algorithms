//Q: Convert an adjacency list to an adjacency matrix.

// const adjList ={
//     0:[1,2],
//     1:[2],
//     2:[0],
//     3:[]
// }

// let size = 4
// let matix = Array(size).fill(0).map(()=>Array(size).fill(0))

// for(let i in adjList){
//     adjList[i].forEach(j => {
//         matix[i][j]=1
//     });
// }

// console.log(matix);



// Q: Convert an adjacency matrix to an adjacency list.

// const matrix = [
//     [0, 1, 1, 0],
//     [0, 0, 1, 0],
//     [1, 0, 0, 0],
//     [0, 0, 0, 0]
//   ];

// let adjList ={}
// matrix.forEach((row,i)=>{
//     adjList[i] = []
//     row.forEach((val,j)=>{
//         if(val == 1) adjList[i].push(j)
//     })
// })

// console.log(adjList)



//Q: Implement BFS using an adjacency list.

// function bfs(adjList, start) {
//     let visited = new Array(Object.keys(adjList).length).fill(false);
//     let queue = [start];
//     visited[start] = true;

//     while (queue.length > 0) {
//       let node = queue.shift();
//       console.log(node);
//       adjList[node].forEach(neighbor => {
//         if (!visited[neighbor]) {
//           queue.push(neighbor);
//           visited[neighbor] = true;
//         }
//       });
//     }
//   }



//Q: Implement DFS using an adjacency list.


function dfs(adjList, start, visited = new Array(Object.keys(adjList).length).fill(false)) {
    visited[start] = true;
    console.log(start);

    adjList[start].forEach(neighbor => {
        if (!visited[neighbor]) {
            dfs(adjList, neighbor, visited);
        }
    });
}
