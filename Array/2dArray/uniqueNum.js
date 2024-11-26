let arr = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
let dupArray = arr.flat()

let result = dupArray.filter((item)=>{
    if(dupArray.indexOf(item) === dupArray.lastIndexOf(item)){
        return item
    }
})

console.log(result)