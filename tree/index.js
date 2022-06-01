// Twentieth
// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree


// 2 ways to iterate through a tree
// Breadth-First Traversal - 
// We itrerate at each level of the tree from left to right
// create an empty array, immediately take the root node from our tree and stick that into the array at the very start
// then we start iterating through the array and say while the array has some elements in it, take out the very first element
// retrieve all its children and stick it into the end of the array
// pass the node to iterator function to throw it away
// repeat

// Depth-First Traversal
// Start at the top of the tree and then move down at the left hand side as far as we can go
// as soon as we hit the bottom, we go back up to the closest parent and then go back down
// the difference between breadth first and depth first is where to stick the elements of the node and for depth that is in the beginning of the array

class Node {
    constructor(data){
        // initialized our data variable
        this.data = data
        // initialize an array to store children
        this.children = []
    }

    // the add func will be called wuth some data and inside that func we need to create a new node and add it to the current nodes children array
    // we're really just creating a new node and pushing it into the childrens array

    add(data){
        // create a new node with data
        // then take that new node and push it into the current nodes children array
        this.children.push(new Node (data))
    }

    // call remove which is a method on a node, when we call it, we're supposed to pass in data.
    // given some data, look at each child element of the current node. as soon as we find data that equals the same data that was passed into remove
    // we're going to remove that node entirely
    // we're looking at a node and trying to manipulte its children
    remove(data){
        // going to filter children and look at every node value and then reassign the children property
        // filter doesnt modify the children array so we're going to assign the children array to it
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor(){
        // when first creating a tree, its going to start off with an empty root property
        this.root = null
    }

    traverseBF(fn){
        // take the root node and and stick in the new array
        const arr = [this.root]

        while(arr.length){ // as long as the array has something in it, take out the element
            // remove the element 
            const node = arr.shift()//shift method takes out the first element of the array

            // then take all of the nodes children and push them into the array
            arr.push(...node.children)//take all the elements out of the array and push them in one by one into the array
            // then we can take node and pass it to the iterator function which was provided as an argument to traverse BredthFirst
            fn(node)
        }
    }

    traverseDF(fn){
        // create an array that contains only the root node
        const arr = [this.root]

        // then iterate through the array and as long as the array has something in it, continue to iterate
        while(arr.length){
            // and remove the first element out of the array
            const node = arr.shift()//shift method takes out the first element of the array
            // take that nodes children and add it on to the front of the array
            arr.unshift(...node.children)
            // call the argument function with the node we're currently considering
            fn(node)
        }
    }
}

module.exports = { Tree, Node };
