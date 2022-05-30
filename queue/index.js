// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// Data structures are all about runtime complexity 
// a data structure is some way of organizing information or data in ur program with some optimal runtime complexity for adding, editing, or removing records.
// in an interview setting, alot of the data structure questions are really themed around run time complexity
// try and think of what data structure can I use to solve this problem that has some optimal runtime complexity for what we're trying to solve
// JS natively implements several data structures. u will be asked about 'inferior' data structures
// u will have an interviewer ask you to build a queue from scratch 
// we're going to use a js array to represent a Queue
// a queue can be thought of as a container where records or pieces of data enter on one end of the container and exit on the other. You can think of it as being very much like waiting in line to buy tickets from a ticketing counter like for a train or movie
// the process of adding a record into a queue is referred to as in queueing or adding a record and then taking something out from the other end is thought of as dequeing or removing a record.
// a queue follows first in first out - FIFO
// whenever we make a queue in JS, we usually make an array, but we do our best to hide access to all these methodsthat belong to the array and only use .unshift() to pop an element in the front of an array and .pop() to remove an element from the end of an array
// To... Run this
// create a new, empty queque - const q = new Queue()
// add a record to a queue - q.add(1)
// remove record at the end of a queue - q.remove()

// using ES2015 class adding code like below to be able to interact with it - we'll call new Queue to produce a Queue, q.add and q.remove to get back the element we just added
class Queue {
    // we need something to actually hold data inside of our queue, something to hold these records in order
    // the array will do all of the storage work
    // whenever we create a queue from scratch and use the new keyword on it, we're going to intialize an array and assign it to the instance of the queue that has created 
    // and the only location inside of a class that we have to run some initialization code is in the constructor method
    // in ES2015 whenever we create a new instance of a class, if we define a function called constructor inside of it, that constructor will automatically be called when we create a new instance  
    constructor(){
        // create a new array and assign it as a property to out Queue instance 
        this.data = []
    }
    // adding the add method. this add method will be called with some record or some piece of data that needs to be stored inside of our array
    // and then we're going to insert this new record into the underlying array that we r pretending is our actual queue
    // the goal is to add the new piece of data to the front of the array/data structure
    add(record){
        this.data.unshift(record)
    }
    // implementing the remove method
    // remove should take whatever is on the opposite side, so at the end of our queue and return it. 
    remove(){
        // to get the last record out of an array, we can use the pop method
        return this.data.pop()
    }
}


module.exports = Queue;
