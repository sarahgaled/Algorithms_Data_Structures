// Thirtneenth
// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    // need to create two stacks whenever we create the instance of the class queue
    // dont forget the constructor method
    constructor(){
         // so whenever we create an instance of a queue, we will automatically generate two stacks and assign ot to the queue class
        this.first = new Stack()
        this.second = new Stack()
    }
   
    // implement the add method
    add(record){
        // take the record we're going to add and push it into the first stack
        this.first.push(record)
    }

    // implement the remove method
    remove(){
        // we want to make sure we iterate through all the records inside of first stack
        // for every record in the first stack, we want to pop it out and push it into the second stack
        // when iterating to check if there are any remainging records in the stack - tht is done through peek method
        while(this.first.peek()){
            // we will call the peek method and so long as it returns a record, we will continue to iterate and push records from the first stack to the second
            // use a while loop to do this
            // so while peeking into the first stack, pop whatever is in the first stack and push it into the second stack
            this.second.push(this.first.pop())
        }
        // to get the record that we're looking for - we need to pop out of the second stack - tht will give us the record we're looking for 
        const record = this.second.pop()
        // then we want to make sure we pop everything from the second stack back into the first stack, which gets us ready for the next call to the remove method
        while(this.second.peek()){
            // same exact while loop but looking at the second stack, and for every record in there we're going to pop out and push it into the first stack - which will return us to the original state
            this.first.push(this.second.pop())
        }
        // now we want to return the record
        return record
    }
    // must implement peek method - once everything has been moved to the second stack, we're going to peek at the second stack
    // which will give us a reference to the record we're looking for and will return it, so not popping but rather peeking
    // after peeking at second stack, we will restore everything to the first
    
    // define peek method and use while to say while there are records in the first stack, 
    peek(){
        while(this.first.peek()){
            // we need to pop that record and push it into the second stack
            this.second.push(this.first.pop())
        }
        // then beneath it, to get a reference to the top record inside the second stack 
        // to get a reference to it, we will call peak

        const record = this.second.peek()
         // then we will use a while loop to peek and pop everything from that second stack and push it into the first stack again

         while(this.second.peek()){
             this.first.push(this.second.pop())
         }
         // then we will return the reference to the second record
         return record
    }
}

module.exports = Queue;
