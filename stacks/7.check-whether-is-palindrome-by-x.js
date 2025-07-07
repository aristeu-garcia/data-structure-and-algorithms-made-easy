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
  isPalindrome(token) {
    let middle = false;
    for (let i = 0; i < token.length; i++) {
      if (token[i] === "X") {
        middle = true;
        continue;
      }
      if (!middle) {
        this.push(token[i]);
      } else {
        if (token[i] === this.peek()) {
          this.pop();
        } else {
          return false;
        }
      }
    }
    return this.isEmpty();
  }
}

const stack = new Stack();
const result = stack.isPalindrome("2ababaXababa");
console.log(result);
