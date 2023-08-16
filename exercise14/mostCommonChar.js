function mostCommonChar(str){
    const charArr = str.toLowerCase().replace(/[^a-z0-9]/gi, '').split("")
    const countChar = charArr.reduce((char, val) => {
        char[val] = (char[val] || 0) + 1;
        return char;
    },{})
    const max = Math.max(...Object.values(countChar))
    const getKeyMax = Object.keys(countChar).filter(key => countChar[key] == max)
    return getKeyMax + " => " + max
}
console.log(mostCommonChar('Hilmi Wijaksana'))