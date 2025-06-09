class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
    this.tail = newNode;
  }

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  revertLinkedListPairs() {
    if (!this.head || !this.head.next) return;

    let dummy = new Node();
    dummy.next = this.head;
    let prev = dummy;

    while (prev.next && prev.next.next) {
      let first = prev.next;
      let second = first.next;
      first.next = second.next;
      second.next = first;
      prev.next = second;
      prev = first;
    }

    this.head = dummy.next;
  }
}


const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

list.revertLinkedListPairs();
list.print();
