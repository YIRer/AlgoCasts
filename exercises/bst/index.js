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

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (node.data < newNode.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(value) {
    this.insertNode(this, new Node(value));
  }

  find(node, value) {
    if (node === null) {
      return null;
    }

    if (node.data > value) {
      return this.find(node.left, value);
    } else if (node.data < value) {
      return this.find(node.right, value);
    } else {
      return node;
    }
  }

  contains(value) {
    return this.find(this, value);
  }
}


module.exports = Node;
