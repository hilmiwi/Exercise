//check objects are equal
function checkEquality(obj1, obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

console.log(checkEquality({a:1, b:2}, {a:1, b:2}))

//intersection of two object
function getInter(obj1, obj2){
    const result = {}
    for(let key in obj1){
        for(let key2 in obj2){
            if(key === key2 && obj1[key] === obj2[key]){
                result[key] = obj1[key] 
            }
        }
    }
    return result
}

console.log(getInter({a:1, b:2}, {a:1, c:2}))

//Merge to array object and remove duplicate
function checkDuplication(arr1, arr2){
    const mergedArr = [...arr1, ...arr2]
    const result = mergedArr.filter((obj, idx) => {
        return idx === mergedArr.findIndex(obj2 => {
            return JSON.stringify(obj) === JSON.stringify(obj2)
        })
    })
    return result
}
console.log(checkDuplication(
    [{a:1, b:2}, {a:2, b:6}],
    [{a:3, b:2}, {a:1, b:2}],
    ))

//Swap key and value of object
function swap(arrObj){
    return arrObj.map(obj => {
        const newObj = {}
        for(let key of Object.keys(obj)){
            newObj[obj[key]] = key
        }
        return newObj
    })
}
console.log(swap([{name: "John", age:20}, {name:'himi', age: 21}]))

//Factorial with recursion
function factorial(x) {
    if(x >= 0){
        return  x === 0 ? 1 : x * factorial(x - 1)
    }else {
        return 'Factorial number must be positive number'
    }
}
console.log(factorial(2))
