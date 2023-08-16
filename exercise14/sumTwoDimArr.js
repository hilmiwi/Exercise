function sumDimArr(arr){
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j]
        }
        result += sum
    }
    return result
}

let arr = [
    [1,2,3],
    [2,3,5],
    [2],
    [3,2]
]
console.log(sumDimArr(arr))