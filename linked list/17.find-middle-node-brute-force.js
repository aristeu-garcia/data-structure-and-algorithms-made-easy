class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return newNode;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return newNode;
  }

  findMiddle() {
    let currentNode = this.head;
    let size = 0;
    while (currentNode != null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
      size++;
    }
    console.log("size ", size);
    const middle = Math.abs(size / 2);
    let currentIndex = 1;
    currentNode = this.head;
    while (middle > currentIndex) {
      currentIndex++;
      currentNode = currentNode.next;
    }
    console.log("Middle of list: ", currentNode.value);
  }
}

const listA = new LinkedList();
listA.append(1);
listA.append(2);
listA.append(3);
listA.append(4);

listA.findMiddle();
