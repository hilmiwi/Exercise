function calculateAge(birthday){
    const now = new Date()
    const birthDay = new Date(birthday)
    const calc = Math.floor((now - birthDay) / 1000 / (3600 * 24 * 365))
    return calc

}
console.log(calculateAge("2000-08-08"))