// flattening an array using reduce and concat

function flattenArray (array) {
    return array.reduce((accumulator, subArray) => accumulator.concat(subArray), [])
}

// HO loop function -- this doesn't make much sense to me. See the answer below:

// function loop(start, test, update, body) {
//     for (let value = start; test(value); value = update(value)) {
//       body(value);
//     }
//   }
  
//   loop(3, n => n > 0, n => n - 1, console.log);

// everything function (1)

function everyFunction (arr, test) {
    for (let element of arr) {
        if (!test(element)) return false
    }
    return true
}

// console.log(everyFunction ([4, 5], n => n > 3))

// everything function (2) -- using some

function everySomeFunction (arr, test) {
    return arr.some(element => !test(element)) ? false : true
}

// console.log(everySomeFunction ([1,2,3], n => n < 1))

