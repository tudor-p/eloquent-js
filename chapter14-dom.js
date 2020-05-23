// the browser object model
// https://developer.mozilla.org/en-US/docs/Web/API/Window/

console.log(window) 

/* 

The Window interface represents a window containing a DOM document.
The document property points to the DOM document loaded in that window. 
A window for a given document can be obtained using the document.defaultView property.

A global variable, window, representing the window in which the script is running, is exposed to JavaScript code.

*/

// some methods and properties of the window model

console.log(
    window.innerHeight + '\n',
    window.innerWidth + '\n',
    window.location + '\n',
    window.screenX + '\n',
    window.screenY + '\n',
    window.history + '\n',
    window.history.length + '\n',
    window.document + '\n'
) //see more on page 124 js & jQ book.

/* 
window.prompt("How's it going?") //input for the 
window.open() // opens a new window, and the argument is an URL
window.close() //closes the window
window.blur()
window.confirm("Do you really want to leave?") //returns true/false
*/


// document object model

console.log(document.documentElement) // logs the entire html script 

// difference between nodes and node elements 

let collection = document.getElementsByClassName("isNode") //cannot use array methods on this one.

console.log(collection[0].nextSibling) // returns a node (in this case, it's space in the html script)
console.log(collection[0].nextElementSibling) // returns the next element (in this case, it's collection[1])

// moving nodes/elements around

function movingNodes () {
    
    let parentDiv = document.getElementById("sector1")

    parentDiv.insertBefore(parentDiv.lastElementChild, parentDiv.firstElementChild) // first one is the node/elem that you want to move, and the second is the reference node/elem

    parentDiv.replaceChild(parentDiv.lastElementChild, parentDiv.firstElementChild) // removes the old node
}

// removing/creating new nodes
function createOrRemoveNodes () {
    let newItem = document.createElement("li") //create the li element
    let newItemText = document.createTextNode("4") //this is a node in itself
    newItem.appendChild(newItemText)  // appends -- meaning puts it at the end
    let list = document.getElementById("list")
    list.append(newItem, "At the end") //append() can append more stuff.
    list.prepend("Prepend adds stuff at the beginning") //prepend()

    // there are a bunch of other methods to add HTML -- insert adjacent elem etc. 
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

    list.removeChild(list.lastChild)
    document.getElementById("1").remove()
}

// attribute and text manipualtion

function atrText () {
    let headersList = document.getElementsByTagName("h1")
    return {
        class1: headersList[0].getAttribute("class"), //getting a specific attribute, there is a setAttribute as well
        hasClass: headersList[0].hasAttribute("class"), //returns Boolean
        position: headersList[0].getBoundingClientRect() 
    } 
}



// moving through the tree

let sector1 = collection[0].parentElement
let sector1Children = {
    elements: sector1.children, // returns an HTML collection
    elementCount: sector1.childElementCount,
    nodes: sector1.childNodes,
} 

console.log(sector1, sector1.firstElementChild, sector1.lastElementChild)

console.log(collection[0].nextElementSibling, collection[1].previousElementSibling)


// 

function dimensionalProperties () {
    
    const dummy = document.getElementById("1")
    return {
        height: dummy.clientHeight,
        left: dummy.clientLeft,
        right: dummy.offsetTop,
        
    }

}

console.log(dimensionalProperties ())

