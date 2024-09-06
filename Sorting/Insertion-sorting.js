// Insertion Sort is a sorting algorithm that works by building a sorted portion of the list one element at a time. 
// It repeatedly takes the next element from the unsorted portion and inserts it into its correct position 
// within the sorted portion. This process continues until the entire list is sorted.



//Complexity
// ---------------------------------
// Best Case (Already Sorted)   : 𝑂(𝑛) Time
// Average Case                 : 𝑂(𝑛2) Time
// Worst Case (Reverse Sorted)  : 𝑂(𝑛2) Time
// Space Complexity             : 𝑂(1) 



// Code 


let nums = [5, 4, 3, 2, 1]

for (let i = 0; i < nums.length; i++) {
    let j = i
    while (j > 0 && nums[j - 1] > nums[j]) {
        let temp = nums[j - 1]
        nums[j - 1] = nums[j]
        nums[j] = temp
        j--
    }
}

console.log(nums)
