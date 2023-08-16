function daysPassed(date){
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1
    const day = newDate.getDate()
    let result = 0
    for(let i = 1; i <= month; i++){
        if(month > 1){
            console.log(new Date(year, month + 1, i !== month ? day : 0).getDate())
            result += new Date(year, month + 1, i !== month ? day : 0).getDate()
        }else{
            console.log(new Date(year, month + 1, day).getDate())
            result += new Date(year, month + 1, day).getDate()
        }
    }
    return result
}
console.log(daysPassed("2023-12-31"))