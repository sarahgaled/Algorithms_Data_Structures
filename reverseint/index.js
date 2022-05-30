// Fifteenth
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// we need to reverse a data integer, if we are passing in 15, then we should get back 51
// if the numbers end with zero's then when the number is flipped, the zero's should dissapear. 90 will simply return as the number 9 not 09.
// both the input and the output should be numbers.
// we can still apply the string reversal methods but we need to return a number and not a string

// Trick number 1:
// we can turn a number into a string by using the toString() method 
// const myNumber = 200 if I want to turn that integer into a string then I can just do 
// myNumber.toString() - and that returns a string 200 so then at this point we can use familiar functions
// myNumber.toString().split('') and turn it into an array of strings
// and then join it back together to form another string - myNumber.toString().split('').join('')
// by using .toString() we can turn our number into a string and work on it as if it were a string with all the reversal techniques

// Trick number 2:
// we can use the math.sign() built in js func - which returns the sign of the number, indicating whether the number is positive, negative, or zero
// w this func we can pass in a number, if the number is positive, the func will return a 1, if it is negative it will return -1, if it is a positive 0 it will return 0, if it is a negative 0, it will return -0.

// Trick/Step 3: when using these string methods, we're still dealing with a string so in order to turn all that stuff back into an actual number we can use the parseInt() method
// for ex - parseInt(myNumber.toString()) - it takes a string and returns a number

// In order to reverse the number, we're going to use the same methodology that we've used to reverse any other string
// we're going to take the number, somehow treat it as a string, we'll split that number into an array, we'll use the reverse method on it, and then we'll join it back together. 
// 


// regular function
// function reverseInt(n) {
//     return (parseInt(n.toString().split('').reverse().join('')) * Math.sign(n))
// }

// arrow function
// const reverseInt = n => parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)

// Steven's Solution:
function reverseInt(n){

    const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('')

    return parseInt(reversed) * Math.sign(n)
}

console.log(reverseInt(500))

module.exports = reverseInt;

