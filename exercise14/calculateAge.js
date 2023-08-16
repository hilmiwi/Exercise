function calculateAge(date){
    const newDate = new Date(date)
    const today = new Date()
    console.log( newDate, today)
    return today-newDate
}

console.log(calculateAge("1995-11-08"))