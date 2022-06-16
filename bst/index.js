// Second
// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

// contains will be a search for our tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // if the number being passed into the function is less than the root node AND there is something already assigned on the left property
    if (data < this.data && this.left) {
      // then insert that data to the left
      this.left.insert(data);
    } else if (data < this.data) {
      // if there is no node on the left side, create a new node and assign it to this.left
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      // if the data is greater than this.data and there is already something assigned to the right side
      this.right.insert(data);
    } else if (data > this.data) {
      //if there isnt a node on the right, create a new node and assign it to the right
      this.right = new Node(data);
    }
  }

  contains(data) {
    // check to see if the node has data = to the data argument, if true return the entire node
    if (this.data === data) {
      return this;
    }
    // assuming the current node doesnt have the current value, we will recurse through the tree
    // if the current node has a value less than the data argument, then move to the right side of the tree. but we might not have a node there, so we'll verify that there is one
    if (this.data < data && this.right) {
      // if we need to go to the right side, we can recurse by saying this - make sure to return with recursion
      return this.right.contains(data);
    }

    // left side
    else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    // case in which the data argument doesnt exist in our tree
    return null;
  }
}

module.exports = Node;
