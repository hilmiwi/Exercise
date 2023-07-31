//Get lowest, highest and average in array
function calculateArrayWithSort(arr){
    let total = 0
    const sortingArr = [...arr].sort((a,b)=> a - b)
    for(val of arr){
        total += val
    }
    console.log('------With sort function-------')
    console.log('Array = ', arr)
    return `Highest = ${sortingArr[arr.length-1]}, Lowest = ${sortingArr[0]}, Average = ${total/arr.length}`
}
console.log(calculateArrayWithSort([1,2,15,6,7,5])) //Highest = 15, Lowest = 1, Average = 6

function calculateArray(arr) {
    let highestVal = arr[0];
    let lowestVal = arr[0];
    let total = null
    for (let i = 0; i < arr.length; i++) {
      highestVal = highestVal > arr[i] ? highestVal : arr[i];
      lowestVal = lowestVal < arr[i] ? lowestVal : arr[i];
      total += arr[i]
    }
    console.log('--------Without sort----------')
    console.log('Array = ', arr)
    return `Highest = ${highestVal}, Lowest = ${lowestVal}, Average = ${total/arr.length}`
}
console.log(calculateArray([1,2,15,6,7,5])); //Highest = 15, Lowest = 1, Average = 6

// Array to string with comma & and
function arrayToString(arr){
    let result = ''
    for(let i = 0; i < arr.length; i++){
        if(i === arr.length - 2){
            result += arr[i] + ' and '
        }else if(i === arr.length - 1){
            result += arr[i]
        }else{
            result+= arr[i] + ', '
        }
    }
    return result
}
console.log(arrayToString(["Adam","Goerge","Johny","Frank"])) //Adam, Goerge, Johny and Frank

//Split an Array to String
function splitArr(str){
    const result = []
    let word = ''
    for(x of str){
        if(x !== " "){
            word += x
        }
        else{
            result.push(word)
            word = ''
        }
    }
    if(word){
        result.push(word)
    }
    return result
}

console.log(splitArr('Hello Beautiful  World')) //[ 'Hello', 'Beautiful', '', 'World' ]

//Calculate between two array
function sumTwoArray(arr1, arr2){
    const firstArr = arr1.length >= arr2.length ? arr1 : arr2
    const secArr = firstArr === arr1 ? arr2 : arr1
    const resultArr = firstArr.map((value,idx) => {
        return value + (secArr[idx] === undefined ? 0 : secArr[idx])
    })
    return resultArr
}
console.log(sumTwoArray([1,3,4,7], [4,1,3]))

//push value wihtout duplicating value
function addToArray(arr, x){
    let isNotSame = true
    for(let i = 0; i < arr.length; i++){
        isNotSame = isNotSame && arr[i] !== x
    }
    isNotSame && arr.push(x)
    return arr
}
console.log(addToArray([1,2,3], 1)) //[ 1, 2, 3 ]

//Remove all odd number in array
function removeOdd(arr){
    const result = arr.filter((x)=>{
        return x % 2 === 0
    })
    return result
}
console.log(removeOdd([1,12,3,4,1,22])) //[ 12, 4, 22 ]
