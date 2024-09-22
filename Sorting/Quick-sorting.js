// function quickSort(arr){
//     if(arr.length <2){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])           
//         }

//     }
//     return[...quickSort(left), pivot,...quickSort(right)]
// }

// console.log(quickSort(arr))









let arr =[5,4,3,2,1]



function quickSort(arr,low =0,high = arr.length-1){
    if(low<high){

        let pivotIndex = partition(arr,low,high)
        quickSort(arr,low,pivotIndex-1)
        quickSort(arr,pivotIndex+1,high)
        
    }
    return arr
}


function partition(arr,low,high){
 let pivot = arr[high],i=low-1  
 for(let j =low;j<high;j++){
    if(arr[j]<pivot){
        i++
        let temp = arr[j]
        arr[j]=arr[i]
        arr[i]= temp
    }
 }   
 let temp =arr[i+1]
 arr[i+1] = arr[high]
 arr[high] = temp
 return i+1
}











console.log(quickSort(arr))

