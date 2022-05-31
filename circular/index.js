// Fifth
// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// going to use two separate pointers to iterate through our linked list at different speeds
    // initialize slow to look at the first node and initialize fast to look at the next node
    // if the next two nodes after fast are defined, then we're going to enter a for loop
    // inside the for loop, we're going to move fast up by 2 nodes and we will move slow up by one node 
    // after doing this we're going to do a check of are slow and fast looking at the same node in our linked list?
    // if yes - then that means we must have a circular linked list
    // otherwise we'll continue to iterate through the list
    // and we will return fast if the last node looking at null bc then theres an end to the linked list and its not circular

function circular(list) {
    // create two variables that will look at the first element of our linked list
    let slow = list.getFirst()
    let fast = list.getFirst()
    // set up the while loop to iterate through the list so long as the next value of fast and the one after that are NOT equal to null
    while(fast.next && fast.next.next){
    // so while those are defined, then we want to conintue iterating through our loop
    // take the slow variable and move it forward by 1
    // and take fast and move it over 2
        slow = slow.next
        fast = fast.next.next
    // now look at the nodes slow and fast are looking at and compare them -
        if(slow === fast){
        // if they're the same variable, then return true - we must have a circular linked list
            return true
        }
    }
    // if we ever reach a point that one of those return false, that means we've hit the end of the while loop and will exit it bc it is positively not a circular linked list
    // so we will return false
    return false
}

module.exports = circular;
