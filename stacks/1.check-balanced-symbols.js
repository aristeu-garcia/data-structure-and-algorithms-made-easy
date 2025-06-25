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
  checkBalancedSymbols(str) {
    const stack = new Stack();
    const openers = ["(", "[", "{"];
    const closers = [")", "]", "}"];
    const matches = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    for (let i = 0; i <= str.length; i++) {
      if (openers.includes(str[i])) {
        stack.push(str[i]);
      }
      if (closers.includes(str[i])) {
        if (stack.isEmpty()) {
          throw new Error("Stack is empty");
        }

        stack.pop(matches[str[i]]);
      }
    }
    if (!stack.isEmpty()) {
      throw new Error("Stack must be empty");
    }
  }
}

const stack = new Stack();
stack.checkBalancedSymbols("((A+B)+(C-D)");
