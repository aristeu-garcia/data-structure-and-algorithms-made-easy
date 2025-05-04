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
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
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
    let currentNode = this.head;
    let list = "";
    while (currentNode !== null) {
      list += ` ${currentNode.element} `;
      currentNode = currentNode.next;
    }
    console.log(`[ ${list} ]`);
  }
}

const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);

console.log("element", linkedList.findFromEnd(1));
