// Fourth
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// The size here refers to the maximum number of elements in each new subarray

// Steps for solution 1:
// first we're going to assume our chunk function gets called with some array that has three elements inside of it
// we're also going to assume we have a chunk size of 2
// The algorithm that we're going to use:
// First we are going to create an empty array to hold chunks called 'chunked'
// Then we will iterate through our *unchunked* array that was passed into our func - "for each element in the unchunked array"
// Then for each element in that unchunked array we're going to go through a series of steps:
// We're going to retrieve the last element in 'chunked'. which is the element that's furthest to the right hand side
// The first time our algorithm runs, the brand new 'chunked' array will be empty, so when we attempt to retrieve the last element inside of it, we will end up with undefined - we'll have nothing to show for it, so the next line is how we handle that
// We're going to look at the last element that we just retrieved, the last element in the chunk to say we will say that 'if the last element doesnt exist, of if its length is equal to to 'chunk size' then it will execute the next step,
// we're going to push a new subarray, or a new chunk into the 'chunked' array with the current element we are iterating over (in the tutorial it is 1) and that concludes our first loop in the 'chunked' array and then we will iterate through the original array again (so moving on to element two in the tutorial) we will attempt to receieve the last element in chunked, but now looking at our last element, it exists so the if statment is not applicable anymore so else - add the current element (which is 2) into the chunk
// finally will iterate through our last element in our original array (last element is 3 in the tutorial) and we check the if statements Or - 'if the length is equal to chunk size.. and at this point in time there are already 2 elements in the chunk so we satisfy the if statement and we're going to push a new chunk into 'chunked' with the current element. 
// Now there is nothing to iterate through so with our for loop bc our original loop is now empty and we have ended up with our correctly chunked array



// function chunk(array, size) {

//     // step 1 is to declare a new array that is going to hold all these different chunks
//     const chunked = []
//     // Next we will iterate through our original array elements and will use the for of helper
//     for(let element of array){
//         // and then we'll execute some logic inside of here to look at the last element inside of our chunked array
//         // to get the last element from the chunked array - we'll make a temporary variable 
//         const last = chunked[chunked.length - 1] // to get the last element inside of there we say chunked at chunked.length - 1
//         // we want to check and see both IF the last element does note exist or if its length is equal to chunk size, bc if it is we want to push a new chunk into the chunked array with the current element that we're iterating over
//         if(!last || last.length === size){ //if last doesnt exist OR if the length of last is equal the to chunk size (size is the argument being passed to the func)
//         // then we want to add a new element to chunked or a new chunk to chunked and put our element inside that, so to do that we could do...
//         chunked.push([element])// we can add a new chunk and add an element at the same time, so we're doing both things in one step
//         } else { // the next thing we have to take care of is a case in which we already have a chunk but it isnt full yet, so in that case we are going to take the current element and add it to the chunk and the chunk we are discussing is the last variable 
//             last.push(element) //last bc that is the chunk we are currently working w and we will put that element into that thing/push
//         }
//     } 

//     // last step that you cant forget is to return the chunked array at the very bottom
//     return chunked;
// }

// Altenate Solution:
// This method will use the slice array function - a method or function that exists on all arrays
// We're going to start off by creating an empty 'chunked' array
// then we're going to create an index variable that will start at 0.
// Then we'll create a while loop - and the while loop will run as long as the index is less than our original array's length
// Inside the while loop, we're going to take a slice out of our original array starting at index and ending at index plus size. Then we will push that into our 'chunked' array
// for the first go through, our original array is [1,2,3] and our chunk size = 2
// we're starting off at index 0 and our chunk size is 2. so we're going to take a chunk size from zero to 2 (not including 2). and we're going to put that into our 'chunked' array
// so a slice from 0 to 2 from the original array will be 'chunked' = [1,2]
// and then we add chunk size to index.
// so second time around, we restart our while loop, so our index would now be equal to two and repeat the process
// so now we attempt to take a slice from two to four, in this case we dont have elements going up to 4, so it just gives us everything left in the original array




function chunk(array, size){

    // creating our empty 'chunked' array
    const chunked = []
    // since we want index to be able to change over time we will use a let key word 
    let index = 0

    // setting up our while loop that we want to run as long as index is less than the original arrays length
    while (index < array.length){
        // first thing is to write our slice statement that will take out the element from the original array
        // we want to slice everything from index to index plus size
        // array.slice(index, index + size) //array.slice produces an array that contains some number of elements our of the original array, so then we can take the slice that gets produced and push it the 'chunked' array
        chunked.push(array.slice(index, index + size)) // after our slice statement we have to move on to our next index, so we'll take our index variable and we'll add size to it 
        // we're not incrementing by 1, we're incrementing by the size variable bec we want to essentially take big scoops out of the original array over time
        index += size

    }

// dont forget to return the Array!

    return chunked

}

module.exports = chunk;
