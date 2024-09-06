// Merge Sort is a divide-and-conquer sorting algorithm that works by recursively splitting the array into
// smaller sub arrays, sorting each sublist, and then merging them back together to form a sorted list.


//Complexity
// ---------------------------------
// Best Case (Already Sorted)   : O(n log n) Time
// Average Case                 : O(n log n) Time
// Worst Case (Reverse Sorted)  : O(n log n) Time
// Space Complexity             : 𝑂(n) 



// Code 

let nums = [5, 43, 3, 2, 1]

function mergeSort(nums) {
    if (nums.length < 2) {
        return nums
    }

    let middle = Math.floor(nums.length / 2)
    let left = nums.slice(0, middle)
    let right = nums.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right) {
    let sortedArray = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift())
        } else {
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray, ...left, ...right]

}

console.log(mergeSort(nums))  // Output [ 1, 2, 3, 5, 43 ]