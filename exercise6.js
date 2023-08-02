// Exercise 1 Student Data
function calculate(studentData){
    const result = {
        score: {},
        age: {}
    }
    function resultDataScore(key){
        const sortData = studentData.sort((a,b)=> b.score - a.score)
        let average = 0
        for(let value of studentData){
            average += value.score
        }
        result.score.highest = sortData[0].score
        result.score.lowest = sortData[sortData.length - 1].score
        result.score.average = average/sortData.length
    }
    function resultDataAge(){
        const sortData = studentData.sort((a,b)=> b.age - a.age)
        let average = 0
        for(let value of studentData){
            average += (new Date() - value.age) / 1000 / (3600 * 24 * 365)
        }
        result.age.lowest = (new Date() - sortData[0].age) / 1000 / (3600 * 24 * 365)
        result.age.highest =  (new Date() - sortData[sortData.length - 1].age) / 1000 / (3600 * 24 * 365)
        result.age.average = average/sortData.length
    }
    resultDataScore()
    resultDataAge()
    return result
}

const studentData = [
    {
        name:'George',
        email:'grg@gmail.com',
        age: new Date('2003-12-2'),
        score: 50
    },
    {
        name:'Johny',
        email:'John@yahoo.com',
        age: new Date('1990-1-28'),
        score: 80
    },
    {
        name:'Lala',
        email:'lala@lala.com',
        age: new Date('2002-2-2'),
        score: 100
    }
]
console.log(calculate(studentData))

//Exercise 2 Transaction Program
class Product{
    static productList = []
    constructor(name, price){
        this.name = name,
        this.price = price
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setPrice(price){
        this.price = price
    }
    getPrice(){
       return this.price
    }
}

class Transaction {
    constructor(){
        this.total = 0;
        this.cart = [];
    }
    addCart(productName, qty){
        for(let item of Product.productList){
            if(productName.name == item.name){
                let totalPrice = item.price * qty
                let itemOrder = {
                    ...item,
                    qty: qty,
                    total: totalPrice
                }
                this.cart.push(itemOrder)
                this.total = this.total + totalPrice
                return
            }
        }
    }
    showTotal() {
        return this.total
    }
    checkout() {
        const checkoutObj = {
            product: this.cart,
            total: this.total,
        };
        return checkoutObj
    }
}

const apel = new Product("apel", 2000)
const mangga = new Product("mangga", 1000)
const anggur = new Product("anggur", 1000)
Product.productList.push(apel, mangga, anggur)

const trans = new Transaction()
trans.addCart(apel, 3)
trans.addCart(mangga, 1)
trans.addCart(apel, 2)
console.log(trans.showTotal())
console.log(trans.checkout())
