class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  getMax() {
    if (!this.items.length) {
      return null;
    }
    return Math.max(...this.items);
  }
}

const assert = require("assert");

const example = new Stack();
example.push(1);
example.push(2);
example.push(3);
assert.equal(example.getMax(), 3, "test 1");
console.log("all tests pass");
