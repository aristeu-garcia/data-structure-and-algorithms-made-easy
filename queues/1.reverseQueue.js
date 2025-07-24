class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.join(" | "));
  }
}

class Queue {
  constructor() {
    this.items = [];
  }
  enQueue(value) {
    return this.items.push(value);
  }

  deQueue() {
    const element = this.items.shift();
    console.log("removing element ", element);
    return element;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  reverse() {
    const stack = new Stack();
    while (!this.isEmpty()) {
      stack.push(this.deQueue());
    }

    while(!stack.isEmpty()){
        this.enQueue(stack.pop())
    }
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
queue.enQueue("A");
queue.enQueue("B");
queue.enQueue("C");

queue.reverse();

