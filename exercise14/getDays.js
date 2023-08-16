function getDays(month, year){
    const a = new Date(year, month,0).getDate()
    return a
}

console.log(getDays(2,2023))