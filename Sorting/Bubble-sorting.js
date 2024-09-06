// Bubble Sort is a sorting algorithm that works by repeatedly swapping adjacent elements
// if they are in the wrong order. This process is repeated for each element in the list
// until the entire list is sorted. Larger elements "bubble" to the end with each pass.


//Complexity
// ---------------------------------
// Best Case (Already Sorted): 𝑂(𝑛) Time
// Average Case: 𝑂(𝑛2) Time
// Worst Case (Reverse Sorted): 𝑂(𝑛2) Time
// Space Complexity 𝑂(𝑛2) 



// Code 


let nums = [5, 4, 3, 2, 1]

for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
        if (nums[j] > nums[j + 1]) {
            let temp = nums[j + 1]
            nums[j + 1] = nums[j]
            nums[j] = temp
        }
    }
}

console.log(nums)




////////////////////////////////////////////////
///////  Bubble Sort using while Loop  ////////
//////////////////////////////////////////////


let numArr = [5, 4, 3, 2, 1], i = 0

while (i < numArr.length) {
    let j = 0
    while (j < numArr.length - i - 1) {
        if (numArr[j] > numArr[j + 1]) {
            let temp = numArr[j + 1]
            numArr[j + 1] = numArr[j]
            numArr[j] = temp
        }
        j++
    }
    i++

}

console.log(numArr)
