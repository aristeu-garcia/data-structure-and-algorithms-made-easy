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
  infixToPostfix(str) {
    const operators = ["/", "*", "+", "-"];
    let output = [];

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const operatorIndex = operators.findIndex((op) => op === char);

      if (operatorIndex !== -1) {
        while (!this.isEmpty()) {
          const top = this.peek();
          const stackOperatorIndex = operators.findIndex((op) => op === top);

          if (
            stackOperatorIndex !== -1 &&
            operatorIndex >= stackOperatorIndex
          ) {
            break;
          }

          output.push(this.pop());
        }

        this.push(char);
      } else if (char !== " ") {
      
        output.push(char);
      }
    }

    while (!this.isEmpty()) {
      output.push(this.pop());
    }

    return output.join(" "); // ← expressão final bem formatada
  }
}

const stack = new Stack();
console.log(stack.infixToPostfix("A + B * C"));
