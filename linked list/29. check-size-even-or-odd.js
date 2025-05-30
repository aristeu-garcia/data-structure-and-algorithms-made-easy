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

  sizeEvenOdd() {
    let fastPointer = this.head;

    while (fastPointer != null && fastPointer.next != null) {
      fastPointer = fastPointer.next.next;

      if (fastPointer === null) {
        return true;
      }
      if (fastPointer.next === null) {
        return false;
      }
    }
  }
}

const listA = new LinkedList();
listA.append(1);
listA.append(2);
listA.append(3);
listA.append(4);
listA.append(5);

console.log(listA.sizeEvenOdd());
