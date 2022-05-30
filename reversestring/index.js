// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// first we want to split the string so were going use the split method to return a new array
// then we're going to want to reverse the string so we're going to use the reverse method on the newly created array
// then we want to join all the elements in the array into a string so going to use the join method

// SJ's method
// function reverse(str) {

//     let splitString = str.split("")

//     let reverseArray = splitString.reverse()

//     let joinedStr = reverseArray.join("")

//     return joinedStr

// }

// console.log(reverse("Greetings!"))


// Steven's method

//Step 1: Turn str into an array
//Step 2: Call reverse method on the array - that will reverse all the elements in the array
//Step 3: Join the array back into a string
//Step 4: Return the result

// function reverse(str){
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');

// }

// cleaner code 
// function reverse(str){
//     return str.split('').reverse().join('');
// }

//for loop method

//Step 1: Create an empty string called 'reversed'
//Step 2: then we're going to iterate through the string that was provided and for each character in that string, we're going to take that character and add it to the start of 'reversed' and after iterating through the entire string we will
//Step 3: Return the variable 'reversed'
// So essentially were gonna make an empty string and were going to take each character out of the original string and stick it into the new one, one at a time
// and because we are adding each character to the start of 'reversed', the reversed variable will contain the 'reversed string'


function reverse(str){
    let reversed = ''; //this is the string that were going to assemble over time as we iterate through the str variable

    for (let character of str){ //new syntax - for a variable declaration of character of the iterable obj we want to itarate through - which is all the characters of str varibale. so were going to take each char of str and set it up to the variable character
        reversed = character + reversed // then take that character and add it to the start of the string reversed
    }

    return reversed; //then after the entire for loop - we return the string reversed
}


// Array Helper Method
// Step 1: take string and turn into an array by calling the split func on it
// Step 2: and then were going to use the reduce helper 
// reduce is used to take all the different values in an array and condense them all down to one singular value 

// function reverse(str){
//     return str.split('').reduce((reversed, character) => { //which is what we want to do here - we want to take all the values within the array that we just created and condense them down to a single string value. 
//     // reduce takes two separate arguments, first is an arrow func and the second will be a starting initial value for our function - in this case we are passing an empty string.
//     // whenever reduce runs, its going to take the starting argument '', pass it into the arrow function as the first argument and then whatever gets returned from the inner function will then be used as the starting argument for every successive run of the function.
//     // in total the func runs one time for every element within the array (str.split).
//     // in other words the first value that is passed into reduce is our reversed string - so i will receive it as anargument named reversed
//     // the second argument is the element or character that wer currently operating on out of our array (str.split) and we will recieve that as an argument called character
//         return character + reversed;

//         // then were going to take the character that were operating on right now and then add it to the total reversed string and then return the result
//         // so the reduce call will yield a string that is the reversed form of the str that was passed in, so the last we thing we need to make sure of is that we return the result
//     }, '');
// }


// function reverse(str){
//     return str.split('').reduce((rev, char) => char + rev, '');
// }



module.exports = reverse;
