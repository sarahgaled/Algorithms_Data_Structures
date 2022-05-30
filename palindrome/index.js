// Eleventh
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// we should be able to reverse a string, if the reversed string is equal to the original one, then that word is a palindrome, otherwise it is not
// 'abba' is the reversed form of 'abba'
// we are not asked to return a reverse string, rather to return a boolean value, return true or false to indicate whether or not this is a palindrome

//Step 1: we want to reverse the string that is given to us 
//Step 2: if a string is a palindrome the reversed form should be equal to the original form. not a lot of additional logic necessary, just need a direct comparison between 'reversed' and 'string' and return the result of that

// function palindrome(str){
    
//     const reversed = str.split('').reverse().join('');

//     return str === reversed;
// }



// array helper method - every function
// lets imagine [a, b, c, b, a] this was the array of characters that we're working with, were going to take the first element in the array and compare it to the last element in the array, if the two are equal we'll return true, so far this is a palindrome. and then we will repeat the process through out the array. we will compare c to itself bc it is at the very center, we'll compare 'b' to the previous 'b' and then we'll compare the last element to the first one. But were doing more comparisons than necessary.
// once weve checked every element up to the center, we dont have to check the remaining elements. so really this isnt an ideal solution for this problem bc were doing twice as much work as we really have to do. 
// the issue here of double comparison - you can propose this solution of every helper and then say in think this is a clear solution however its doing twice as much as it needs to do and then you can suggest some alternative solution

// notes:
// turn our str into an arr, so well call str.split and pass in the empty string and then call every
// the first argument to every function is a function that will be called for every element in the array
// we will recieve the first argument to this function which is each character from the array as an argument that we'll call 'char'
// as a second argument we are given the index of the elment we r currently iterating over which we will record as i. so the first time the inner function is a called i = 0, bc we are operating over the first element in the array
// so now inside the function we can return a comparison between the current element and the mered element on the other side of the array
// to get access to the element on the opposite side, we can look at the entire string array and access the element at the length of the array - 1
// so all we really have to do is look at the string at string.length - i (so that will make sure we will increment for every step through the ever function) - 1 (to make sure we are taking into account the fact that length is the overall length but we are zero indexed w js arrays).
// and then lastly we need to make sure we return the result of the every function call

function palindrome(str){

    return str.split('').every((char, i) =>{
        return char === str[str.length - i - 1]
    })
}

module.exports = palindrome;
