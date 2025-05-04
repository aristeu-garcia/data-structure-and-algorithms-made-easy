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
    this.hash = {};
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

  buildFromEnd() {
    let currentNode = this.tail;
  
    this.hash[0] = currentNode;
    for (let i = 1; i < this.size; i++) {
      this.hash[i] = currentNode.prev;
      currentNode = currentNode.prev;
    }
    return this.hash;
  }

  findFromEndByHash(position) {
    if (position <= 0 || this.size < position) {
      return null;
    }
  
    const currentNode = this.hash[position - 1];

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
linkedList.buildFromEnd()
console.log("element", linkedList.findFromEndByHash(1));
