// encapsulation

/* this. creates a public property of the global object
In browsers, the global object is window (eg window.property)
In nodejs, the global object is the module.exports object. "this" refers to it. Example 1 - this inside the global object 
*/

module.exports.table = "globalTable"
// console.log(this.table) // this will log "globalTable". 

// example 2: This inside an object

let house = {
    table: "houseTable",
    type: "normal house",
    cleaningAlert () {
        console.log(`${this.type} needs cleaning.`)
    }
}

// console.log(this.table) // will still log "globalTable"
// console.log(house.table) // will log "houseTable". here you can't use "this"

// example 3: methods

let biggerHouse = {
    table: "biggerHouseTable",
    type: "bigger house",
    cleaningAlert () {
        console.log(`${this.type} needs cleaning.`)
    }
}

// biggerHouse.cleaningAlert() // logs "bigger house needs cleaning."
// house.cleaningAlert() // logs "normal house needs cleaning."

// example 4: functions and using call()

function cleaningAlert (date) {
    console.log(`${this.table} needs cleaning ${date}`)
}

// cleaningAlert.call(this, "asap") // will log "globalTable needs cleaning asap"

// What's interesting about this is that by using .call(obj, args), the function basically becomes a method of that object. You can pass arguments as well. Eg. 

// cleaningAlert.call (biggerHouse, "In two days") // will log: "biggerHouseTable needs cleaning In two days"

// example 5: Inner Functions. The difference betweem function and the arrow function

module.exports.shoes = "Oxford"

function polishShoes (date) {
    /*
    function innerFunction (date) {
        console.log(`You need to polish the ${this.shoes} shoes ${date}`)
    } 

    This will log "You need to polish the undefined shoes tomorrow"
    */
    
    const innerFunction = date => {
        console.log(`You need to polish the ${this.shoes} shoes ${date}`)
    }
    
    innerFunction(date) 
}

// polishShoes.call(this, "tomorrow") 


// Object.create () 

let houseBlueprint = {
    walls: 4,
    roof: true,
    value: 100,
    salesPitch () {
        console.log (`My value is ${this.value}`)
    }
}

let hugeHouse = Object.create(houseBlueprint)
hugeHouse.value = 10000
// hugeHouse.salesPitch() // "My value is 10000"

// Doing the same thing, using constructor functions (this is basically how classes used to be defined before 2015)

function House (walls, roof, value) { //this is a constructor function
    this.walls = walls
    this.roof = roof
    this.value = value
}

// all constructor functions have a property called "prototype" which starts empty ({})
console.log(House.prototype) // logs {} 

House.prototype.salesPitch = function () { // arrrow function doesn't work here, it 
    console.log (`My value is ${this.value}`)
} 

let myHouse = new House (4,true,50)

myHouse.salesPitch() // logs "My value is 50"


