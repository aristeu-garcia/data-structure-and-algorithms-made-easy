class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  makeCyclic() {
    if (this.tail && this.head) {
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
  }
  print(list) {
    let currentNode = list ? list.head : this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  splitTwoParts() {
    let slowNode = this.head;
    let fastNode = this.head;
    while (fastNode && fastNode.next) {
      let oldSlow = slowNode;
      slowNode = slowNode.next;
      fastNode = fastNode.next.next;
      if (this.head === fastNode) {
        return { head: fastNode, headTwo: oldSlow.next };
      }
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.makeCyclic();
const result = list.splitTwoParts();
console.log(result);
// list.print();
