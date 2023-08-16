function getMinDate(date){
    const newDate = date.map(val => new Date(val))
    const result = newDate.sort()[0]
    return (result.getFullYear()+"-"+result.getMonth()+"-"+result.getDate())
}
console.log(getMinDate(['2023-08-17', '2023-08-15', '2023-08-12']))