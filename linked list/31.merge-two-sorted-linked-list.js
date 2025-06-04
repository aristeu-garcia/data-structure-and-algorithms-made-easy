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

  insertSorted(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    if (value < this.head.value) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value < value) {
      current = current.next;
    }

    newNode.next = current.next;
    newNode.prev = current;

    if (current.next) {
      current.next.prev = newNode;
    } else {
      this.tail = newNode;
    }

    current.next = newNode;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  mergeWith(listTwo) {
    if (this.head === null) {
      this.head = listTwo.head;
      this.tail = listTwo.tail;
    }

    if (listTwo === null) {
      return;
    }
    const resultList = new DoublyLinkedList();
    if (this.head.value <= listTwo.head.value) {
      resultList.head = this.head;
    } else {
      resultList.head = listTwo.head;
    }
    resultList.tail = resultList.head;

    let currentNodeA = this.head;
    let currentNodeB = listTwo.head;

    let resultHead = null;
    let resultTail = null;

    if (currentNodeA.value <= currentNodeB.value) {
      resultHead = currentNodeA;
      currentNodeA = currentNodeA.next;
    } else {
      resultHead = currentNodeB;
      currentNodeB = currentNodeB.next;
    }
    resultHead.prev = null;
    resultTail = resultHead;

    while (currentNodeA && currentNodeB) {
      let nodeToAdd;
      if (currentNodeA.value <= currentNodeB.value) {
        nodeToAdd = currentNodeA;
        currentNodeA = currentNodeA.next;
      } else {
        nodeToAdd = currentNodeB;
        currentNodeB = currentNodeB.next;
      }

      resultTail.next = nodeToAdd;
      nodeToAdd.prev = resultTail;
      resultTail = nodeToAdd;
    }

    let remaining = currentNodeA || currentNodeB;
    if (remaining) {
      resultTail.next = remaining;
      remaining.prev = resultTail;

      while (remaining.next) {
        remaining = remaining.next;
      }
      resultTail = remaining;
    }
    this.head = resultHead;
    this.tail = resultTail;
  }
}

const list = new DoublyLinkedList();
list.insertSorted(2);
list.insertSorted(3);
list.insertSorted(4);
list.insertSorted(5);
list.insertSorted(6);

const listTwo = new DoublyLinkedList();
listTwo.insertSorted(7);
listTwo.insertSorted(8);

listTwo.mergeWith(list);
console.log(listTwo.toArray());
