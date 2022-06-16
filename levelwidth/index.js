// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// anytime you see the word width - you want to think about a breadth first traveral of our tree
// for the solution we're going to have two separate arrays - one will be counters that with hold the actual width of our tree at each level - and it will be what we want to eventually return from our function
// then we'll have another array that will serve as a buffer/queue that we're going to use to iterate through our tree in a breadth first fashion
// 
// 

function levelWidth(root) {
    //create a counters array thats going to hold the width of our tree at each level - intialize the first value as 0
    // create an array that will hold all the working elements or the cue taht we r wating process in our tree. and we intialize it with the root node of our tree and will have a stopper value
    // now iterate - as long as theres more than one thing in the array, that means there must be some more amount of work to do
    // inside the loop -take out the first element 

    //if the node we're looking at is s, then take counters and push in a new element
    // and push s back at the of the array

    
}

module.exports = levelWidth;
