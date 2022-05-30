// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     // creating a counter variable at the top and initializing it with a default value of 0, then iterate through all the characters inside of the string. If a given character is a vowel, then we will increment the counter and then at the end of the function we will return that counter
//     let count = 0
//     // creating an array that will contain all the different characters we want to consider
//     const checker = ['a', 'e', 'i', 'o', 'u']

//     for(let char of str.toLowerCase()){
//         // if the character we r looking at is included the checker array, then we r going to increment the counter
//         // if the checker includes any of those 5 characters
//         if(checker.includes(char)){
//             // then increment the counter
//             count++
//         }
//     }
//     return count
// }


// a more condensed solution
function vowels(str){
    // We're going to look at the string and call the match method on the string
    // match method is used to see if some possible thing is included inside of the string
    // so we can pass in a regular expression that will check to see have any vowels inside of here
    const matches = str.match(/[aeiou]/gi)
    // the square brackets let us know if the string contains any characater inside the braces
    // the g regular expression makes sure that we don't stop at the first match that we find inside of our string bc if there r multiple vowels, we will want to try and find them all
    // i - is for case sensitive or insensitive - so taking care of cases
    // so we will return that and assign it to a variable called matches
    // the thing with match it will return an array of all the matches if not it will return null so we have to handle both cases here
    // looking at the matches variable, if it is null which is a falsy value then we want to return 0 and if its an array, then that is a truthy value so we will return matches.length
    // and then return the result of the ternary expression.
    return matches ? matches.length : 0
}

module.exports = vowels;
