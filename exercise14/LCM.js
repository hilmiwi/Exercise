function LCM(number1, number2){
    const resNum1 = []
    const resNum2 = []
    let i = 1
    let result 
    do{
        resNum1.push(number1*i)
        resNum2.push(number2*i)
        result = resNum1.find(val => resNum2.includes(val))
        i++
    }
    while(result === undefined)
    return result
}
console.log(LCM(4,5))