class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  reverse() {
    let currentNode = this.head;
    let prev = null;
    let next = null;
    while (currentNode !== null) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    this.head = prev;
  }

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.reverse();
list.print();
