// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stack = new Stack();
    this.stack2 = new Stack();
  }

  add(value) {
    this.stack.push(value);
  }

  remove() {
    while (this.stack.peek()) {
      this.stack2.push(this.stack.pop());
    }

    const removedStack = this.stack2.pop();

    while (this.stack2.peek()) {
      this.stack.push(this.stack2.pop());
    }

    return removedStack;
  }

  peek() {
    while (this.stack.peek()) {
      this.stack2.push(this.stack.pop());
    }

    const peekedStack = this.stack2.peek();

    while (this.stack2.peek()) {
      this.stack.push(this.stack2.pop());
    }

    return peekedStack;
  }
}

module.exports = Queue;
