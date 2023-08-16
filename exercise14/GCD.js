function GCD(number1, number2){
    function findGCD(number){
        let i = 0
        const arrRes = []
        while(i <= number){
            if(number % i === 0){
                arrRes.push(i)
            }
            i++
        }
        return arrRes
    }
    const resNum1 = findGCD(number1)
    const resNum2 = findGCD(number2)
    const sortedRes = [...resNum1, ...resNum2].sort((a, b) => a-b)
    const filterRes = sortedRes.filter((val, idx, arr) => arr[idx-1] === val)
    return Math.max(...filterRes)
}
console.log(GCD(18, 30))