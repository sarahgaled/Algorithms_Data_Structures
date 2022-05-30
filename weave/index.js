// Twenty Three
// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    // create a new queue that can store the combined result of source one and source two
    const q = new Queue();
    // now we need to make sure we iterate through all the different elements inside source one and source two without accessing the arrays inside of them which is where the peek function comes into play
    // if there are no more elements left in the queue then the peek function will return undefined
    // to iterate through all the elements in both these cues we can use a while loop

    while (sourceOne.peek() || sourceTwo.peek()){
        //so long as either one of these is returning some method then we're good to go
        //logic for first taking an element from sourceOne and add it to our queue and then take an element out of source two and add it to our queue
        //we also have to check the peak function again on both of the queues and make sure that they both still have elements inside them before we attempt to take something out and insert into the third one
        if(sourceOne.peek()){
            // if there is still an element inside there then 
            q.add(sourceOne.remove())
        }

        if(sourceTwo.peek()){
            q.add(sourceTwo.remove())
        }
    }

    return q

}

module.exports = weave;
