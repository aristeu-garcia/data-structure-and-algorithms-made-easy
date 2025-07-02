class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

class AdvancedStack {
  constructor() {
    this.main = new Stack();
    this.min = new Stack();
  }
  push(element) {
    this.main.push(element);
    if (this.min.peek() > element || this.min.isEmpty()) {
      this.min.push(element);
    } else {
      this.min.push(this.min.peek());
    }
  }
  getMinimum() {
    return this.min.peek();
  }
  print() {
    console.log("main ", this.main, " min: ", this.min);
  }
}
const stack = new AdvancedStack();
stack.push(4);
stack.push(2);
stack.push(5);
stack.push(1);
stack.push(3);


console.log(stack.getMinimum());
