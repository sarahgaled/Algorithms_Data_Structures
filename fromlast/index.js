// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    // start by taking two pointers and set them both equal to the first node in the list
    let slow = list.getFirst()
    let fast = list.getFirst()
    // then use a while loop to move fast through our linked list and move it forward n times
    while(n > 0){
        // advance fast through the linked list
        fast = fast.next
        // then subtract 1 from n
        n--
    }
    // now advance both pointers forward by one at a time until fast hits the last node
    // so while there is still some next node to visit
    while(fast.next){
        // advance slow forward by one as well as fast
        slow = slow.next
        fast = fast.next
    }
    // and the instance we hit the end of the chain, then slow must be n elements behind
    //return slow
    return slow
}

module.exports = fromLast;
