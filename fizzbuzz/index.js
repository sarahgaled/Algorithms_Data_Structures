// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Notes:
// U really just have to figure out how to calculate a multiple of a number
// To calculate multiples, we're going to use the modulo % operator - we can determine the remainder of a number during division
// For example 9 % 3 = 0 because 3 goes into 9 exactly three times and so the remainder is zero
//  10 % 3 = 1 because 3 still goes into 10 three times but there is one left over
//  11 % 3 = 2 away from 9. 12 % 3 = 0 because 3 goes into 12 exactly 4 times with no remainder
//  what we wanna do is take some given number that we're r trying to test and use the modulo operator with the number that we r using as the multiple and the real question we are asking is if the result of that is === 0 
//  if 12 % 3 === 0 then 12 must be a multiple of 3
//  However if we had 11 % 3 = 0 then it will just return false

// in practice we r going to test for each number from 1 to n, n being the number being passed into the function as an argument - we r going to test if a given number % 3 === 0 and if given number % 5 === 0 that is really the challenge

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++){
        // is the number a multiple of 3 & 5? bc if so we want to console.log and nothing else in this step through the loop, no return
        if (i % 15 === 0){ //or if (i % 3 === 0 && i % 5 === 0)
            console.log("fizzbuzz")
        } else if (i % 3 === 0){
            console.log('fizz')
        } else if (i % 5 === 0){
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

module.exports = fizzBuzz;
