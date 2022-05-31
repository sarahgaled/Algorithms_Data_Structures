// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  // constructor function is specifically made to intialize the linked list
  constructor() {
    this.head = null;
  }

  // we're not calling insertFirst with a node, rather with some data and then we have to create a new node
  insertFirst(data) {
    // create a new node and pass in the data
    // when we insert a new first node to our linked list, we do not want to overwrite any existing node that might be there
    // so to make sure that we dont accidentally overwrite any node, we can take any existing node that might already exist at this.head and pass it as the second argument to the new node constructor
    // now update it to look at the new node
    this.head = new Node(data, this.head);
  }
   // Returns the number of nodes in the linked list
  size(){
    // initialize a counter variable that will total up the number of nodes in the linked list
    let counter = 0
    // get a reference directly to the head of our linked list and we'll assign it to a local variable
    let node = this.head

    while(node){
        counter++
        node = node.next
    }

    return counter
  }
  //return the first node of the linked list
  getFirst(){
      return this.head
    //   bc this.head will always be pointing at the very first node in our linkedlist
  }
  //   get the very last node of our linkedlist
  getLast(){
    // we also have to watch out for the case if our list has no nodes associated with it 
    if(!this.head){ //if there is no head element/no node then
        return null //return null right away
    }
    // other wise we want to continue doing some work in the method
    // get a reference to the node - start off w the first node
    let node = this.head
    // we enter the loop bc the first loop the node will always be defined
    while(node){
        // check to see if node.next exists
        if(!node.next){
            // if it does not or its null that means that we r at the very end rn and should return node | if the next property is not defined then we return the node
            return node
        }
        // otherwise we update the node variable to the next one in our chain and then go through the while loop again
        node = node.next
    }
  }

//   clear empties the linked list of any nodes
clear(){
    // in order to empty/clear out the list of nodes, we just have to assign this.head to null
    this.head = null
}
// remove only the first node of the linkedlist
// all we have to do is reassign the lists head property to look at second node in the list
removeFirst(){
    // check to see if there is a head node
    if(!this.head){ // if there isnt a node here
        return // then return bc the linkedlist must be completely empty if nothing was assigned to the head
    }

    // after passing the if statement, its time to try to remove the first node
    // we will update this.head to look at the second node and we can get access to that by next
    // this.head returns a node. and a node has a next property that points at the next node in the chain
    this.head = this.head.next
}

// removes the lasst node of the linkedlist
removeLast(){
    // if the list is empty, i dont want to attempt to get a refference to the first or second node
    // check to see if there isnt a head node - if there isnt, our list is empty and we should return
    if(!this.head){
        return
    }
    // now consider the case if the list has a length of 1 node - if there is only 1 then i dont need a reference to the secone one
    // all i really want to do is remove the last node which in this case would also be the first
    // we can delete the node by setting this.head = null and then return
    if(!this.head.next){ //if there isnt a value defined at the next node, then we have a length of 1 ahd should remove the head and return
        this.head = null
        return
    }

    // reference the first and second node
    let previous = this.head
    let node = this.head.next
    // as long as node.next exists - as long as there is an additional element that we have to iterate through
    while(node.next){
        // we'll update the value of previous to be the current node and then node will be set to next node
        previous = node
        node = node.next
    }
    // when next isnt pointitng to anything anymore, after the while loop
    // to delete that last node, we can go back to the previous node and update its next property to point to null, rather than its current value
    previous.next = null
}

// insert a node at the end of the list 
insertLast(data){ //will be called with some data argument that we're supposed to insert into a new node
    // going to create insertLast by reusing the getLast func to get a referance to the last node in the list
    // we will then get a new node and attach it on
    // we also need to make sure we handle the case of if the linkedlist is empty and there isnt a node to retrieve
    const last = this.getLast() //this will retrieve current last node in the list
    if(last){ //if last exists - then there are existing nodes in our list
        last.next = new Node(data) //creating new node and passing data into it. we want to make sure the previous node, its next property should point to the node we just created
    } else { //the list is empty
        // create the node and set it to the linkedlists head proprty
        this.head = new Node(data)
    }
}

// returns the node at the provided index
getAt(index){ //it will be called with some specific index
    // first edge case - no nodes at all 
    // second edge case - someone calls an index that is out of bounds
    // check to see if there is a head node
    if(!this.head){ //if there isnt a head node, then immediately return null bc we have nothing to iterate through
        return null
    }

    // if we succeed in the check then start the algo that takes the first node and counter temporary variable, iterate through the list one node at a time and for every step we'll check to see if counter is equal to index

    let counter = 0
    let node = this.head //node var to look at the first node in our lists

    while(node){ //as long as there is a node
        // we'll see if counter is equal the index tht we're trying to retrieve
        if(counter === index){
            // tht means we have found the node at the given index we are trying to find
            return node
        }
        // if we dont meet the if statement that means we havent reached the index we're looking for, in the case we'll want to advanace our node along and increment the counter
        counter++
        // to move along the node reference we'll say the new node is going to equal node.next
        node = node.next
    }
    // have to take into account if an index is out of bounds
    return null // if we exited the while loop that means we couldnt find the node and u asked for an index that we did not retrieve while running the while loop

}

// removes node at the provided index and is passed an index
removeAt(index){//calling it with argument of index which will be the index of the node we want to remove
// first edgecase - if we have no nodes in our linkedlist at all - if no nodes, then return
// second edgecase - trying to delete the last node - we can use the getAt method to tru and find the node at the index of one less than the one we're trying to remove
// but what happens if we're trying to remove the node at index 0? there is no prev node! so we have to handle the case where we're trying to delete the first element as well.

// check to see if our list is empty
    if(!this.head){ //if no head element, then return
        return
    }

    // removing the head element
    if(index === 0){ //if we're trying to remove the very first element
        this.head = this.head.next //then we're going to update the chain, so rather than pointing to the first element, point to the next element in the chain which effectively removes the first element
        // if there is only one element then the next value would have been null which is fine bc if we point head to null and remove the only element, the head should be pointing to null
        return //if we meet the if statement then we must return bc we dont want to execute any other logic
    }

    // we're going to attempt tp use getAt to find the previous node, the one right before we're trying to remove
    const previous = this.getAt(index - 1) 
    // check to see if we're getting a valid previous element here
    if(!previous || !previous.next){ //if previous does not exist or if unable to find the next one then return
        return //we cant possibly remove the node at the given index 
    }
    // want to make sure that previous.next looks at the next one into the future
    previous.next = previous.next.next
}

// create a new node and insert it at a new provided index. if the index is about of bounds we would want to include it at the end of the list
insertAt(data, index){
// check the case in which the linkedlist is empty
    if(!this.head){ //if this.head doesnt exist
        this.head = new Node(data) //then we should create a new element and point our head property at that new element
        return
    }

// insert a new node with data at the 0 index when the list has elemenets
if(index === 0){
    this.head = new Node(data, this.head) //the node constructor takes in a second argument which will be used as the enxt reference inside the node that is created
    // so if we pass in the current this.head, then we will make a new node that has a next property of the current head
    return //if we caught this case then return
}

// at some middle element
// in this case we are trying to find the previous element of the one right before the one that we're trying to add
const previous = this.getAt(index - 1) || this.getLast() //calling getAt to find the previous node
const node = new Node(data, previous.next)
previous.next = node //to make sure previous is looking at the next node
}

// inserting a new node when the index is out of bound - we need to add it to the end of the list 
// we'll create a new node and well point next to look at null
// so we'll create the node and add it to the end of the list but we have to make sure that the previous node is looking at the last one
// so we need a reference to the previous node
// this.getAt(index - 1) - if this returns a falsy value,
// then we will go into the or case and will this.getLast() and run this instead which means go and get the last in the list

}

module.exports = { Node, LinkedList };
