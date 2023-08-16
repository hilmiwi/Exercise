function longestPrefix(arr){
    let match = true
    let i = 0
    let result = ""
    while(match){
        let sampleStr = arr[0][i]
        for (let j = 1; j < arr.length; j++) {
            if(sampleStr !== arr[j][i]){
                match = false
                break
            }
            result += arr[i][j]
        }
        i++
    }
    return result
}

console.log(longestPrefix(["cat", "car", "cattle"]))