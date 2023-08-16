//Check date is weekend
function isWeekend(date){
    const newDate = new Date(date)
    return newDate.getDay() === 6 || newDate.getDay() === 5 ? "Is Weekend" : "Is Weekday"
}
console.log(isWeekend("2023-08-17"))