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

  //stack: ordered list which insertion and deletion are done at one end, called top. The last element
  // inserted is the first one to be deleted (LIFO) or (FILO)

  push(element) {
    const newNode = new Node(element);

    if (this.head === null && this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  pop() {
    const newHead = this.head.next;
    this.head = newHead;
    this.size--;
  }

  peek() {
    if (this.isEmpyt()) {
      console.log(null);
      return
    }
    console.log(this.head.element);
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

  isEmpyt() {
    return this.size === 0 && this.head === null;
  }
}

const linkedList = new LinkedList();
linkedList.push(1);
// linkedList.push(2);
// linkedList.push(3);

// linkedList.print();
console.log(linkedList.isEmpyt());
linkedList.peek();
