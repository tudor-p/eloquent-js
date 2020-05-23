setTimeout(() => {console.log("After 2 second(s)")}, 2000)

// promises and chaining

const getSomething = (a) => {
    return new Promise((resolve, reject) => {
        
        // logic here about getting the data from a database, 
        if (a > 100) {
            resolve(a) // 
        } else {
            reject("Error")
        }

    })
}

getSomething(101).then(data => { // if Promise is resolved, then the .then() funciton will happen, with data being the data in resolve() 
    console.log(data) // logs "Anything happened"
    return getSomething(102) // you need to return a Promise to use .then() and chain the Promises
}).then(data => {
    console.log(data)
    return getSomething(94)
}).catch(err => { //otherwise the .catch() will happen, and err is the data in reject()
    console.log(err) // logs "Error"
})


// async await


const asyncFunction = async () => { // calling an async function always returns a promise
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data1 = await response.json() 
    const response2 = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data2 = await response2.json()
    return {
        1: data1,
        2: data2
    }
} 


console.log(asyncFunction().then(
    data => console.log(data)
))

