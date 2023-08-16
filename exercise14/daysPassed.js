function daysPassed(date){
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1
    const day = newDate.getDate()
    let result = 0
    if(month > 1){
        for(let i = 1; i <= month; i++){
            if(month > 1){
                let dayX = i === month ? day : 0
                result += new Date(year, i, dayX).getDate()
            }
        }
    }else{
        result += newDate.getDate()
    }
    return result
}
console.log(daysPassed("2023-02-5"))