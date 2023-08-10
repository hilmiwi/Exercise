// //Excel Function
function convertExcel(column){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const arrCol = column.toUpperCase().split("")
    let result = 0
    for(let i = 0; i < arrCol.length; i++){
        const alphaIdx = alphabet.split('').indexOf(arrCol[arrCol.length - 1 - i]) + 1
        result += 26**i*alphaIdx
    }
    return result
}
console.log(convertExcel("ABC"))

//Find the single one of Array
function findInt(arr){
    const sortedArr = arr.sort()
    for(let i = 0; i < sortedArr.length; i+=2){
        if(sortedArr.length > 1){
            if(sortedArr[i] !== sortedArr[i+1]){
                return sortedArr[i]
            }
        }else{
            return sortedArr[0]
        }
    }
}
console.log(findInt([1,3,3,1,2]))

// Anagram
function anagram(s,t){
    let sortS = s.split('').sort((a,b) => b - a)
    let sortT = t.split('').sort((a,b) => b - a)
    let isSame = true
    if(sortS.length === sortT.length){
        for(let i = 0; i < sortS.length; i++){
            isSame = sortS[i] === sortT[i] && isSame
        }
    }else{
        isSame = false
    }
    return isSame
}
console.log(anagram('boom','boom'))

//Calimbing staircase
function staircase(stair){
    return stair < 4 ? stair : staircase(stair - 1) + staircase(stair-2)
}
console.log(staircase(5))