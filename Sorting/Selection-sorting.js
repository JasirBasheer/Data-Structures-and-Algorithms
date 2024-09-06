// Selection Sort is a sorting algorithm that works by repeatedly selecting the smallest element
// from the unsorted portion of the list and swapping it with the element at the current position.
// This process continues until the entire list is sorted.


//Complexity
// ---------------------------------
// Best Case (Already Sorted): 𝑂(𝑛2) Time
// Average Case: 𝑂(𝑛2) Time
// Worst Case (Reverse Sorted): 𝑂(𝑛2) Time
// Space Complexity 𝑂(𝑛2) 



// Code 

let nums = [4, 5, 32, 1, 5]

for (let i = 0; i < nums.length - 1; i++) {
    let mini = i
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[mini] > nums[j]) {
            mini = j
        }
    }
    let temp = nums[mini]
    nums[mini] = nums[i]
    nums[i] = temp
}

console.log(nums)   // Output [ 1, 4, 5, 5, 32 ]




////////////////////////////////////////////////
/////  Selection Sort using while Loop  ///////
//////////////////////////////////////////////


let numsArr = [4, 5, 32, 1, 5], i = 0


while (i < numsArr.length - 1) {
    let mini = i
    let j = i + 1
    while (j < numsArr.length) {
        if (numsArr[mini] > numsArr[j]) {
            mini = j
        }
        j++
    }
    let temp = numsArr[mini]
    numsArr[mini] = numsArr[i]
    numsArr[i] = temp
    i++
}



console.log(numsArr)  // Output [ 1, 4, 5, 5, 32 ]

