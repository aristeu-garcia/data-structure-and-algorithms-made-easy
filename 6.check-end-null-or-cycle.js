class Node {
  prev = null;
  next = null;
  element = null;
  constructor(element) {
    this.element = element;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head.prev = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  findFromEnd(position) {
    if (position <= 0 || this.size < position) {
      return null;
    }
    let currentNode = this.tail;

    for (let i = 1; i < position; i++) {
      if (!currentNode.prev) return null;
      currentNode = currentNode.prev;
    }

    return currentNode.element;
  }

  print() {
    if (!this.head) {
      console.log("[]");
      return;
    }

    let currentNode = this.head;
    let list = "";
    do {
      list += ` ${currentNode.element} `;
      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    console.log(`[ ${list} ]`);
  }

  isCicly() {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.next === this.head) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }
}

const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);

linkedList.print();
console.log(linkedList.isCicly());
