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

class Node {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }

  add(value) {
    const node = new Node(value);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor(data) {
    this.root = null;
  }

  // traverseBF(callback) {
  //   const root = this.root;
  //   const childrens = root.children;
  //   const resultArr = [];

  //   resultArr.push(root);
  //   while (childrens.length > 0) {
  //     const node = childrens.shift();
  //     resultArr.push(node);

  //     node.children.forEach((child) => {
  //       childrens.push(child);
  //     });
  //   }
  //   return resultArr.forEach(callback);
  // }

  traverseBF(callback) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      callback(node);
    }
  }

  traverseDF(callback) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      callback(node);
    }
  }
}

module.exports = { Tree, Node };
