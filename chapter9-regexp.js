// Regular expressions

let re1 = new RegExp("abc")
let re2 = /eighteen\+/

// .test()
console.log(/eig/.test("eighteen")) // logs true

// [] -- enter whatever characters in there and they will match either of them. Ex: 

console.log(/[tr]udor/.test("tudor")) // logs true
console.log(/[tr]udor/.test("rudor")) // also logs true

// [^] -- this excludes the character (it will match everything but this character)

console.log(/[^t]udor/.test("tudor")) // logs false
console.log(/[^t]udor/.test("1udor")) // logs true

// ranges 

console.log(/[0123456789]/.test("in 1992")) // logs true
console.log(/[0-9]/.test("in 1992")) // also logs true

console.log(/[a-z]rue/.test("true")) // logs true
console.log(/[a-z]rue/.test("6rue")) // logs false

// repeating characters

let phoneNumber = /[0-9]{11}/ //only a 11-digit number will match

let specificWord = /[a-z]{4,8}/ //words between 4 and 8 letters only

let atLeastFive = /[a-z]{5,}/ 

// When you put a plus sign (+) after something in a regular expression, it indicates that the element may be repeated more than once. 
// Thus, /\d+/ matches one or more digit characters.

/*
console.log(/'\d+'/.test("'123'")) // → true
console.log(/'\d+'/.test("''")); // → false
console.log(/'\d*'/.test("'123'")); // → true
console.log(/'\d*'/.test("''")); // → true
*/

// The star (*) has a similar meaning but also allows the pattern to match zero times. 
// Something with a star after it never prevents a pattern from matching: 
// it'll just match zero instances if it can’t find any suitable text to match.


// metacharacters and special characters

/*

\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\t  Only tab character
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline
[^]   excludes
?   will render the previous char presence optional
*   previous character can appear as many times as you want and it will still match
*/

// starting and ending 

console.log(/^[a-z]{5}$/.test("abcde")) // this will only match a 5 letter string. The difference between this and the previous one with just {},
// is that it would log true even if someone types 500 chars, because it matches the first expression


//  | is the "or" operator of regexp, it works well with (). Ex: /(pet/toy) dog/

//you can and an 'i' at the end of the regexp to make it case insensitive

// /lalala/.exec() method gives you a 

// https://www.youtube.com/watch?v=Eu1KRvw4tKg&list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD&index=16



