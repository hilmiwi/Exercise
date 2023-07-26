// Multiplication table of a given integer
let integer = 9
for(let i = 1; i <=10; i++){
    console.log(`${integer} x ${i} = ${integer * i}`)
}

//Palindrome
let word = 'aa'
let palWord = ''
for(let i = 0; i < word.length; i++){
    palWord += word[word.length - i - 1]
}
console.log(palWord === word ? 'is Palindrome' : 'not Palindrome')

//Convert cm to km
let cm = 5
console.log(`${cm}cm adalah ${cm/100000}km`)

//Format currency
let rpValue = 1000000
let rpString = rpValue.toString()
let rpFormat = ''
for(let i = rpString.length; i > 0; i--){
    if(i % 3 === 0 && i != rpString.length){
        rpFormat += '.'
    }
    rpFormat += rpString[rpString.length - i]
}
console.log(`${rpValue} => Rp. ${rpFormat},00`)

//Remove string
let charX = 'ell'
let str = 'Hello world'
let strResult = str.replace(charX,'')
console.log(`string = "${str}", search string = "${charX}" => "${strResult}"`)

//Reverse string
let wordX = 'Hello'
let revWord = ''
for(let i = 0; i < wordX.length; i++){
    revWord += wordX[wordX.length - i - 1]
}
console.log(`Reverse word: ${wordX} => ${revWord}`)

//Swap case
let letter = 'aBcDEFg'
let resultLetter = ''
for(let i = 0; i < letter.length; i++){
    if(letter[i] === letter[i].toLowerCase()){
        resultLetter += letter[i].toUpperCase()
    }else{
        resultLetter += letter[i].toLowerCase()
    }
}
console.log(letter + ' => ' +resultLetter)

// find the largerst integer
let int1 = 1
let int2 = -4
let largerstInt = null
if(int1 - int2 > 0){
    largerstInt = int1
} else {
    largerstInt = int2
}
console.log(`angka terbesar adalah ${largerstInt}`)

//Sort num
let val1 = 4
let val2 = 3
let val3 = 1
let valX = null

if(val1 > val2){
    valX = val1
    val1 = val2
    val2 = valX
}
if(val1 > val3){
    valX = val1  
    val1 = val3
    val3 = valX
}
if(val2 > val3){
    valX = val2
    val2 = val3
    val3 = valX
}
console.log('sorting result => ' + val1,val2,val3)

//Data type
let data = '2'
let dataRes = null
if(typeof(data) == 'string'){
    dataRes = 1
}else if(typeof(data) == 'number'){
    dataRes = 2
}else{
    dataRes = 3
}
console.log(data + ' => ' + dataRes + ' (' + typeof(data) + ')')

//Change letter into *
let strWords = 'Lorem Ipsum is simply dummy text of the printing'
let letterX = 'L'
let wordsRes = ''
for(let i = 0; i < strWords.length; i++){
    strWords[i].toLowerCase() == letterX.toLowerCase() ? wordsRes+= '*' : wordsRes += strWords[i]
}
console.log(`letter : ${letterX}
${strWords} => ${wordsRes}`)