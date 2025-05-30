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

  sortedAppend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    if (value < this.head.value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let currentNode = this.head;

    while (currentNode.next !== null && currentNode.next.value < value) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const list = new DoublyLinkedList();

list.sortedAppend(4);
list.sortedAppend(1);
list.sortedAppend(3);
list.sortedAppend(2);

list.print();
