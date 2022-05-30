// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1" yes thats a number but its inside of a string so they're considered as characters as far as we're concerned. so we return the string or the character 1, not the number


// Notes:
// the technique we're going to use to solve this can be used to solve many string related questions as well.

// Common String QUESTIONS: if you ever see questions like this, you want to think about using this technique
// Q1: what is the most common character in the string?
// Q2: Does string A have the same characters as string B (is it an anagaram?)
// Q3: Does the given string have any repeated characters in it?
// Anything with couting characters or comparing characters between two strings, you can always use this technique

// The Technique:
// We're going to take our string and essentially convert it into an object, where the keys of the object are the charaters of the string, and the values are the number of times that that character has been found.
// For example: "Hello There!" { H: 1, e: 3, l: 2, o: 1, "": 1, T: 1, h: 1, r: 1, !: 1}
// When we have this map, it makes many questions - straight forward for ex
// Q1: we could walk through the object find the property with the highest number assigned to it and immediately know that e is the most frequent used character
// Q2: we could build the same exact looking object from string a and string b and then compare the 2. make sure the objects have the same properties and values
// Q3: are there any duplicate characters in the string? if theres any value inside the object that is greater than 1 then yeah we found "l" twice and "e" three times, so yes in this particular case
// So setting up an obj like this is a really strong tool for solving any type of question around producing some count or verification/validation of a word.

// Notes:
// const string = 'Hello There!' 
// // then we're going to iterate through the string and for every character, we're going to add that character into the obj
// const chars = {} 
// // there are multiple ways to take the characters and put in the object, we can split the string up into an array and then use a foreach helper to loop over all the characters or we could use a for of loop to loop through all the charcters inside there which is basically the same thing
// // we will iterate through our string and for every character inside there, we will either add the character as a property and assign it a value of 1, or if we've already seen that character before, we will add 1 to it.
// for(let char of string){
//     // for every character that we find and iterate over, we're going to add a property to chars{}
//     // this will return a reference to that particular character or at least its value. Now if its the first time we're seeing this character we want to set it to 1. so if we havent seen 'H' at chars[char] then it will evaluate to undefined so we need to make sure we handle that case
//     if (!chars[char]){ // so if nothing exists here right now
//         // then set chars[char] = 1
//         chars[char] = 1
//     } else { //otherwise
//         // assume there is a number already there
//         chars[char]++ // take it and increment it by 1  
//     }
// }
// // if this is done in the browser and you print chars - you'll see {'H':1,'e':3, 'l':2, 'O':1, "":1, 'T':1, 'h':1, 'r':1, '!':1}

// // HOWEVER the conditional logic can be condensed to:
// const string = 'Hello There!' 
// const chars = {} 

// for(let char of string){
//     chars[char] = chars[char] + 1 || 1 //but if we leave to just chars[char] = chars[char] + 1 then we will get {'H':null,'e':null, 'l':null, 'O':null, "":null, 'T':null, 'h':null, 'r':null, '!':null} so thats why we have to put in that if statement to see if that value exists yet. so if adding 1 does result to a null value, thats fine, then instead, assign it the value of 1. So if it is falsy then assign it to 1 at chars[char]
// }





// Steven's Solution and Notes:
// a character map is an object where we take a character at the source string and add it as a key to the object and that value for that key is the number of times that letter has been found in the string


function maxChar(str) {
// we'll start by declaring a variable for our empty obj
    const charMap = {};
    let max = 0; // we're going to iterate through our map and if we find, if we find a character that has more uses than max then we'll set max equal to that value
    let maxChar = ''; // and we'll set maxChar to that character that was responsible for that number of uses

    for(let char of str){ // then we'll iterate over our source string and use that to build out the character map
        if (charMap[char]){ //for every character we recieve we will add an entry to our character map, if the entry already exists...
            charMap[char]++; // and if a character already exists there then we will increment it by 1
        } else {
            charMap[char] = 1; //otherwise assign it to 1
        }
    }
    
    // Now we have to iterate through the character map and find the character that was most used in a given string
    // the way we iterate through an obj, we're going to declare two helper variables at the top of the function. *let max = 0; **let maxChar = '';
    for (let char in charMap){ // a for of loop is used to iterate through an array and a string or any type of iterable object, but in this case we are iterating throughan actual object like a collection of key value pairs, so to iterate through this object or any type of js obj as opposed to an array or string, we use a loop that uses the for in syntax as opposed to for of. Trick: Object starts with O but can't use the for Of syntax
        if(charMap[char] > max){ //then if the charMap at this particular character is greater than our max
            max = charMap[char] // we're going to upate both the max number and max character
            maxChar = char //char is assigned the keys in that obj so itll be the different letters we added in to our obj
        }
    }
   
    return maxChar //after we run the loop we should know which character has the greatest number of uses and it'll be assigned to maxChar so that is what we r going to return
}

module.exports = maxChar;
