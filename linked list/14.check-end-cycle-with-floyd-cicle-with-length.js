class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  checkLoopFloydWithLength() {
    let slowNode = this.head;
    let fastNode = this.head;
    while (fastNode && fastNode.next) {
      slowNode = slowNode.next;
      fastNode = fastNode.next.next;
      let size = 1;
      if (slowNode === fastNode) {
        fastNode = fastNode.next;
        while (slowNode !== fastNode) {
          fastNode = fastNode.next
          size++;
        }
        console.log(`The size of loop is ${size}`);
        return true;
      }
    }
    return false;
  }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

list.print();
list.makeCyclic();
console.log(list.checkLoopFloydWithLength());
