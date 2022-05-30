// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// MOST ASKED INTERVIEW QUESTION

// NOTES:
// we are going to build a character map out of stringA and stringB and then we will compare all the characters inside those two maps together.
// instead of writing two for loops we are going to write a helper function to build a character map for us


// function anagrams(stringA, stringB) {
// // creating our two char maps and now we must compare them together
//     const aCharMap = buildCharMap(stringA)
//     const bCharMap = buildCharMap(stringB)
// // but if we compare them we might come across an edge case of missing a char so an easy way to solve this is to look at the number of keys inside of both these maps and check to see if they are identicle in length
// // so we're going to pull out the keys from both these objects and we'll count the number of keys that is contained in both
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         // then return false bc we must know then that we do not have an anagram
//         return false
//     }
// // now if they do have the same number of characters then we want to proceed with the map checking process
// // in which we will look at each character and compare the number of uses that it has to the other map.
// // all we have to do is iterate through one charMap, look at every character inside of it and then compare it to the other char map
//     for (let char in aCharMap){
//         // if a char in the aCharMap is not equal to the char at bCharMap
//         if(aCharMap[char] !== bCharMap[char]){
//             // then something must be wrong. so we say how many times has A been used inside of aCharMap, if it hasnt been used the same number of times inside bCharMap then these two things do not line up and return false
//             return false
//         }
//     }
// // if these two cases are true then return true because it is an anagram
//     return true
// }

// function buildCharMap(str){
//     // creating an empty object that serves as our character map
//     const charMap = {}

//     // we will then iterate through our string and for every character inside there we will add it to our char map
//     // but our string also needs to only consider lower case characters and we also need to strip out any spaces or punctuation
//     // doing the cleanup logic in line in the for loop and r only iterating through the portions of the str that we care about
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
//         // incrementing the character and also handling the case if the char has not yet been assigned to the character map
//         charMap[char] = charMap[char] + 1 || 1
//     }

//     // now we can use our helper func to produce a character for both strA and strB
//     return charMap
// }

// This solution runs into some performance concerns although it is straight forward
// we will take our two inputs and will clean up both strings by removing any spaces or punctuation, lowercase both strings, and then sort both strings 
// no matter what charactes we have inside, they will end up in the exact same order. and if both strings are identicle then we can say we have an anagram
// no need for any iteration or loops

function anagrams(stringA, stringB){
    // call cleanString and call both clean strings and if the both of them are identicle then we must have an anagram
return cleanString(stringA) === cleanString(stringB)
}

// going to create a helper func to automatically clean up each of the strings
// the sort method belongs to arrays and not strings so we have to turn the str into an array and then turn it back into str
function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join()
}



module.exports = anagrams;
