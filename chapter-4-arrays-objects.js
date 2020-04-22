// the "in" operator

const myObject = {
    property1: [1,2,3],
    property2: "This is a string"
}

// console.log("property1" in myObject) // returns true or false; good way to check if the property exists


//  Object.assign -- this copies all the properties from one function to the other. Note: where properties are the same, it overrides them. 
let objectA = {a: 1, b: 2}
Object.assign(objectA, {b: 3, c: 4})
// console.log(objectA)
// returns {a: 1, b: 3, c: 4}


// Mutability. Objects are mutable, which means they can change their values.
// An implication of this is that 2 objects (although they seem to have the same prperties see {} === {} below), will not be equal to each other. 

console.log({}==={}) //but, 

// However, you can bind an object to another like so: 

let object1 = {value: 10}
let object2 = object1
let object3 = {value: 10};

/* 
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

*/

// arrays have the .includes property

let array1 = [1, 2, 3, 4, 5]
//console.log(array1.includes(1))

// removing a an element from an array with a givenindex: 

function removeElement (array, index) {
    return array.slice(0, index)
        .concat(array.slice(index+1))
}

// console.log(removeElement(array1,3))


// strings

console.log("coconuts".slice(4, 7))
// returns "nut"
console.log("coconut".indexOf("u"))
// returns 5
console.log("one two three".indexOf("ee")) // looks for a string instead of a character.
// returns 11
console.log("  okay \n ".trim())
// returns okay

console.log(String(2).padStart(3,"00"))
// .split() and .join()
let sentence = "Secretarybirds specialize in stomping"
let words = sentence.split(" ")
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

// .repeat()
console.log("LA".repeat(3));
// → LALALA



