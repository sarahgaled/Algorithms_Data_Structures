// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    // constructor function is specifically made to intialize the linked list
    constructor(){
        this.head = null;
    }
}

module.exports = { Node, LinkedList };
