// these are things I encountered in the book and haven't had time to explore but are
// stil quite interesting. 

// call(), bind(), apply() https://www.youtube.com/watch?v=c0mLRpw-9rI
// https://www.youtube.com/watch?v=uBdH0iB1VDM

// chapter 7 (the robot project)

// .eval()

// ch11 asynchronous programming genenrally. 

// continue keyword

// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop,
// and continues execution of the loop with the next iteration.

let text = '';

for (let i = 0; i < 10; i++) {
  
    if (i === 3) continue
  
    text = text + i

}

console.log(text);
// expected output: "012456789"

// what is polyfill?

// xss attacks