// Eighteenth
// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    // declare the constructor function bc i need to initialize an array
    constructor(){
        // this will hold the underlying array that will give us our data
        this.data = []
    }
    // next we'll put together the push method so that we could push the record onto our stack
    // accepts record as an argument
    // push method to push a record onto our stack
    push(record){
        // then we'll take the record and stick into our last index of the array
        this.data.push(record)
    }
    // to make sure that we always get back the last record or the most recently inserted record, we'll call the pop method
    pop(){
        return this.data.pop()
    }
    // our goal with peek is to return the last record inside of our array without actually removing it
    peek(){
        // we can access this data at the last index and make sure to return that method
        return this.data[this.data.length - 1]
    }
}

module.exports = Stack;
