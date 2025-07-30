class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.back = null;
  }

  pushFrontDEQ(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
      return;
    }
    newNode.next = this.front;
    this.front = newNode;
  }

  pushBackDEQ(value) {
    const newNode = new Node(value);
    if (!this.back) {
      this.front = newNode;
      this.back = newNode;
      return;
    }
    newNode.prev = this.back;
    this.back.next = newNode;
    this.back = newNode;
  }

  popFrontDEQ() {
    // deve remover do começo
    if (!this.front) {
      throw new Error("Queue is empty");
    }
    this.front = this.front.next;
    this.front.prev = null;
  }

  popBackDEQ() {
  if (!this.front) {
    throw new Error("Queue is empty");
  }

  if (this.front === this.back) {
    this.front = null;
    this.back = null;
  } else {
    this.back = this.back.prev;
    if (this.back) {
      this.back.next = null;
    }
  }
}


  print() {
    let currentNode = this.front;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const queue = new Deque();
queue.pushFrontDEQ(1);
queue.pushFrontDEQ(2);

queue.pushBackDEQ(3);

// queue.popFrontDEQ()
queue.popBackDEQ();

queue.print();
