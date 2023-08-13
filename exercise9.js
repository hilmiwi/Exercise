//Employee
class Employee{
    constructor(name, workingHour){
        this.name = name
        this.workingHour = workingHour
    }
    setWorkingHour(hour){
        this.workingHour = hour
    }
    getWorkingHout(){
        return this.workingHour
    }
}

class Fulltime extends Employee{
    constructor(name, workingHour, salary){
        super(name, workingHour)
        this.salary = salary
    }
    totalSalary(){
        if(this.workingHour > 6){
            this.salary = 6 * 100000 + (this.workingHour - 6 ) * 75000
        }else{
            this.salary = this.workingHour * 100000
        }
        return `Name: ${this.name} \nTypes: Full-time \nWorking Hour: ${this.workingHour} \nIDR ${this.salary.toLocaleString('id', {minimumFractionDigits: 0 })}`
    }
}

class PartTime extends Employee{
    constructor(name, workingHour, salary){
        super(name, workingHour)
        this.salary = salary
    }
    totalSalary(){
        if(this.workingHour > 6){
            this.salary = 6 * 50000 + (this.workingHour - 6 ) * 30000
        }else{
            this.salary = this.workingHour * 50000
        }
        return `Name: ${this.name} \nTypes: Part-time \nWorking Hour: ${this.workingHour}\nIDR ${this.salary.toLocaleString('id', {minimumFractionDigits: 0 })}`
    }
}

const john = new Fulltime('John')
john.setWorkingHour(6)
console.log(john.totalSalary())

const levi = new PartTime('Levi')
levi.setWorkingHour(10)
console.log(levi.totalSalary())


// Shooting game
class ShootingGame{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }
    getRandomItem(){
        const randItem = {
            health: 0,
            power:0
        }
        randItem.health = Math.floor(Math.random() * (10 - 0) + 0)
        randItem.power = Math.floor(Math.random() * (10 - 0) + 0)
        return randItem
    }
    start(){
        this.player1.useItem(this.getRandomItem())
        this.player2.useItem(this.getRandomItem())
        console.log('-----'+this.player1.showStatus() + ' vs ' +this.player2.showStatus()+'-----')
        console.log('------------------------------------------------------------------------------------------')
        let gamePlay = true
        let turnPlayer = true
        while(gamePlay){
            console.log("=> "+(turnPlayer ? this.player1.name : this.player2.name) + " turn <=")
            console.log("Before => " + this.player1.showStatus() + ' vs ' + this.player2.showStatus())
            this.player1.useItem(this.getRandomItem())
            this.player2.useItem(this.getRandomItem())
            console.log( "After => " + this.player1.showStatus() + ' vs ' + this.player2.showStatus())
            turnPlayer ? this.player2.hit(this.player1.power) : this.player1.hit(this.player2.power)
            console.log("Result => " + this.player1.showStatus() + ' vs ' + this.player2.showStatus())
            console.log('------------------------------------------------------------------------------------------')
            gamePlay = this.player1.health > 0 && this.player2.health > 0
            turnPlayer = !turnPlayer
        }
        console.log('=> ' + (this.player1.health > 0 ? this.player1.name : this.player2.name) + ' Win <= ')
    }
}

class Player {
    constructor(name, health = 100, power = 10){
        this.name = name
        this.health = health
        this.power = power
    }
    hit(power){
        this.health = this.health - power < 0 ? 0 : this.health - power
    }
    useItem(item){
        this.health = this.health + item.health
        this.power = this.power + item.power
    }
    showStatus(){
        return `${this.name} (Health => ${this.health}, Power => ${this.power})`
    }
}

const naruto = new Player('Naruto')
const sasuke = new Player('Sasuke')
const shooting = new ShootingGame(naruto, sasuke)
shooting.start()