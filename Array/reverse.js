let arr = [1,2,3,4,5,6,7]

function reverse(arr,start = 0,end = arr.length-1){
    if(start>=end){
        return;
    }
    [arr[start],arr[end]] = [arr[end],arr[start]]
    reverse(arr,start+1,end-1)
      
}

reverse(arr)
console.log(arr);
