let arr = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
let sum = 0

function findSum() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j]
        }
    }
    return sum
}
// console.log(findSum())

function* sumUsingGeneratorFun(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            yield arr[i][j]
        }
    }
}


const generator = sumUsingGeneratorFun(arr)
let gen = generator.next()

let sumofValue = 0;
while (!gen.done) {
    sumofValue += gen.value
    gen = generator.next()
}



function* extractOddNums(arr){
    for(let i =0;i<arr.length;i++){
        if(arr[i]%2!=0){
            yield arr[i]
        }
    }
}


let generator1 = extractOddNums(arr.flat())
let gen1 = generator1.next()
while(!gen1.done){
    console.log(gen1.value)
    gen1 = generator1.next()
}