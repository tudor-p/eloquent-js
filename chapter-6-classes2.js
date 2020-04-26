/* ====================================classes==================================== */

// Notation

class House {
    constructor (walls, size, price) {
        this.walls = walls
        this.size = size
        this.price = price
    }

    salesPitch (date) {
        console.log(`This house is valued at ${this.price} and will accept tenders on ${date}`)
    }

}

const myHouse = new House (4, "average", 1000)

myHouse.salesPitch(new Date())

// note: class declaration currently only accept methods. You can't save non-function values in a class


// Overriding prototype properties

House.prototype.hasGarden = false

let newHouse = new House (4,"small", 50.5)

// console.log(newHouse.hasGarden) // logs true
// however, you cannot see this propertes:
// console.log(Object.keys(newHouse)) // logs [ 'walls', 'size', 'price' ]


// the Map() class

let agesExample = {
    Boris: 55,
    Liang: 12,
    Julia: 62
}

// console.log(`Júlia is ${ages.Julia}`) // Júlia is 62
// console.log("Is Jack's age known?", "Jack" in ages) // Is Jack's age known? false
// console.log("Is toString's age known?", "toString" in ages) // Is toString's age known? true

// the issue here is that all objects have the prototype property. You can create objects without it, though: 

let example = Object.create(null)
// console.log(example.toString) //undefined

// a more elegant way to bypass the prototype issue is the Map class

let ages = new Map ()

//set values with .set(key, value)

ages.set("Tudor", 24) 

// get values

// console.log(ages.get("Tudor")) // logs 24

// console.log(ages.has("Tudor")) // logs true or false

// classes practical examples with explanations

class Library {
    constructor (itemName, id) {
        this.itemName = itemName
        this.id = id
    }

    get itemDetails () {
        return `Item's name is ${this.itemName} and it's ID is ${this.id}` 
    }

    set itemDetails (id) { // must take only 1 argument
        this.id = id
    }

}

let item1 = new Library ("Neuromancer", 1)

item1.itemDetails = 100

console.log(item1.itemDetails) // logs "Item's name is Neuromancer and it's ID is 100"

class Book extends Library { // this a subclass of Library. 
    constructor (itemName, id, colour) { 
        super (itemName, id) // this grabs the properties of the previous constructor
        this.colour = colour
    }
}

let book2 = new Book ("Random name", 10000, "red")

console.log(book2)




