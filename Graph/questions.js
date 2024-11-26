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


