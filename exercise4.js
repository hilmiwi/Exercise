//exercise 1
function triangle(height){
    let result = ''
    let num = 1
    let padDigit = (height*(height+1)/2).toString().length
    for(let i = 1; i <= height; i++){
        for(let j = 0; j < i; j++){
            result += (num++).toString().padStart(padDigit,0) + ' '
        }
        result += "\n"
    }
    return result
}
console.log(triangle(3))

//exercise 2
function fizzBuzz(n){
    let result = ''
    for(let i= 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result += "fizzbuzz" + "\n"
        }else if(i % 3 === 0 ){
            result += "fizz" + "\n"
        }else if(i % 5 === 0){
            result += "buzz" + "\n"
        }else{
            result+= i + "\n"
        }
    }
    return result
}
console.log(fizzBuzz(15))

//exercise 3
function BMI(weight, height){
    const bmiResult = weight/height**2
    let result = ''
    if(bmiResult < 18.5){
        result = "less weight"
    }else if(bmiResult >= 18.5 && bmiResult <= 2.49){
        result = "ideal"
    }else if(bmiResult >= 25 && bmiResult <= 29.9){
        result = "overweight"
    }else if(bmiResult >= 30 && bmiResult <= 39.9){
        result = "very overweight"
    }else{
        result = "obesity"
    }
    return(result)
}
console.log(BMI(70,1.65))

//exercise 4
function removeOdd(arr){
    const result = arr.filter((x)=>{
        return x % 2 === 0
    })
    return result
}
console.log(removeOdd([1,2,3,4,5,6,7,8,9]))

//exercise 5
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

console.log(splitArr('Hello World'))
