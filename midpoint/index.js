// Tenth
// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    // define two variables, slow and fast that will look at the first element in our linkedlist
    slow = list.getFirst()
    fast = list.getFirst()
    // write a while loop that says as long as the fast node has a node in front of it defined (next) and then a node if front of that defined, then
    //  then we will continue to iterate by moving slow by one or to the next
    while(fast.next && fast.next.next){
        slow = slow.next
        // and fast will jump forward by two
        fast = fast.next.next
    }
    // if the fast variable doesnt have a node in front it, then we will exit the while loop
    // so then we'll know that slow is point at the midpoint
    // so we will then return slow after the while loop runs
    return slow
}

module.exports = midpoint;
