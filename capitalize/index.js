// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// NOTES:
// we're going to start off by making an empty array called words. the words array is going to store the end result of the capitalized words that we are dealing with
// Then we will take the original string that was passed into our function and split it by the space character to get an array of words. So each of those words are what we're going to try and capitalize
// we will then loop through that array and we will uppercase the first letter of each word
// then we will join that first letter that we capitalized with the rest of the word
// and then we will push the result into that original words array that we created at the beginning
// after looping through each word we will join the words back together into a string and we will return it from the function

// function capitalize(str) {
//     // first we will declare an empty array of words 
//     const words = []
//     // we will then loop through the string and split it by spaces
//     for(let word of str.split(' ')){
//         // so now wtvr string gets passed in here, assuming its a sentence split by spaces, they will be split up by the split statement. so instead of "H","I","","T","H","E","R","E" the space will make it look like "Hi","There"
//         // next will take the first character of each word, then we will join it w the rest of the word by using the slice function. we'll say the slice w 1 which gives me everything from the element of index 1
//         // and then we will push the result in the result array
//         words.push(word[0].toUpperCase() + word.slice(1))   
//     }
//     // we will take the words array and join them together with a space character and return the result
//     return words.join(' ')
// }

// SOLUTION #2:
// not the best solution but it gets the job done - for the first letter of the string, it will look to the left and not see a space so it wont capitalize a letter
// were going to create an empty string called result
// then we're going to iterate each character in the string and for each character we will look at it and say
// if the character to the left, is that a space? if yes we will take the character that we are currently iterating over and capitalize it and add it to the original string
// otherwise if it isnt a space to the left of the character, then we'll take the character and add it to result
// when we create the initial string result, rather than create an ampty string, we should create 'result' which is the first character of the input string capitalized. so were immediately capitalizing the first character of a string 


function capitalize(str){
    // declaring the result that will take the first character of the string and capitalize it 
    let result = str[0].toUpperCase()
// now we can iterate from 1 to the length of string and for every character we'll look to the left and decide whether its need to be capitalized the current character
    for(let i = 1; i < str.length; i++){
        // i-1 is to the left of the current character, if that is a space
        if(str[i-1] === ' '){
            // then I want to take the current character that we're looking at, its going to capitalize it and add it to the result string
            result += str[i].toUpperCase()
            // if the character to the left of the current character is not a space
        } else {
            // in that case we just want to add it to the result string
            result += str[i]
        }
    }

    return result
}

module.exports = capitalize;
