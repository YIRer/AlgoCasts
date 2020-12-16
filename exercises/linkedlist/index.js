// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// class Node {
//   constructor(data = null, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insertFirst(value) {
//     this.insertAt(value, 0);
//   }

//   size() {
//     let count = 0;
//     let node = this.head;

//     while (node) {
//       count++;
//       node = node.next;
//     }
//     return count;
//   }

//   getFirst() {
//     return this.getAt(0);
//   }

//   getLast() {
//     if (!this.head) {
//       return null;
//     }

//     let node = this.head;

//     while (node) {
//       if (!node.next) {
//         return node;
//       }
//       node = node.next;
//     }
//   }

//   clear() {
//     this.head = null;
//   }

//   removeFirst() {
//     this.removeAt(0);
//   }

//   removeLast() {
//     if (!this.head) {
//       return;
//     }

//     if (!this.head.next) {
//       this.head = null;
//       return;
//     }

//     let prev = this.head;
//     let node = this.head.next;

//     while (node.next) {
//       prev = node;
//       node = node.next;
//     }
//     prev.next = null;
//   }

//   insertLast(value) {
//     const lastNode = this.getLast();
//     const newNode = new Node(value, null);

//     if (lastNode) {
//       lastNode.next = newNode;
//     } else {
//       this.head = newNode;
//     }
//   }

//   getAt(idx) {
//     if (!this.head) {
//       return null;
//     }
//     let i = 0;
//     let node = this.head;

//     while (node) {
//       if (i === idx) {
//         return node;
//       }

//       i++;
//       node = node.next;
//     }

//     return null;
//   }

//   removeAt(idx) {
//     if (!this.head) {
//       return;
//     }

//     if (idx === 0) {
//       this.head = this.head.next;
//       return;
//     }

//     const prevNode = this.getAt(idx - 1);
//     if (prevNode && prevNode.next) {
//       prevNode.next = prevNode.next.next;
//     }
//   }

//   insertAt(value, idx) {
//     if (!this.head) {
//       this.head = new Node(value, null);
//       return;
//     }

//     if (idx === 0) {
//       this.head = new Node(value, this.head);
//       return;
//     }

//     const prevNode = this.getAt(idx - 1) || this.getLast();
//     prevNode.next = new Node(value, prevNode.next);
//   }

//   forEach(callbackFn) {
//     let node = this.head;
//     let idx = 0;
//     while (node) {
//       callbackFn(node, idx);
//       node = node.next;
//       idx++;
//     }
//   }

//   *[Symbol.iterator]() {
//     let node = this.head;

//     while (node) {
//       yield node;
//       node = node.next;
//     }
//   }
// }

class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
  }

  insertFirst(value) {
    if (!this.head) {
      this.head = new Node(value, null);
    } else {
      const first = this.head;
      const newNode = new Node(value, first);

      this.head = newNode;
    }

    if (!this.last) {
      this.last = this.head;
    }
  }

  size() {
    if (this.head) {
      let currentNode = this.head;
      let size = 0;

      while (currentNode) {
        size++;
        currentNode = currentNode.next;
      }
      return size;
    } else {
      return 0;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.last;
  }

  clear() {
    this.head = null;
    this.last = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      this.last = null;
      return;
    }

    let prevNode = this.head;
    let currentNode = this.head.next;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    prevNode.next = null;
    this.last = prevNode;
  }

  insertLast(value) {
    const newNode = new Node(value, null);
    if (!this.head) {
      this.head = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  getAt(index) {
    if (index === 0) {
      return this.head;
    }

    let idx = 0;
    let currentNode = this.head;

    while (currentNode) {
      idx++;
      currentNode = currentNode.next;
      if (idx === index) {
        return currentNode;
      }
    }

    return null;
  }

  removeAt(index) {
    if (index === 0) {
      this.removeFirst();
    }
    const prevNode = this.getAt(index - 1);
    if (prevNode && prevNode.next) {
      prevNode.next = prevNode.next.next;
    }
  }

  insertAt(value, index) {
    if (!this.head) {
      this.head = new Node(value, null);
      return;
    }
    if (index === 0) {
      this.insertFirst(value);
    } else {
      const prevNode = this.getAt(index - 1);
      const newNode = new Node(value, prevNode ? prevNode.next : null);

      if (prevNode) {
        prevNode.next = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
    }
  }

  forEach(callbackFn) {
    let node = this.head;
    let idx = 0;
    while (node) {
      callbackFn(node, idx);
      node = node.next;
      idx++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
