class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    if (!this.head) {
      const tempNode = new ListNode(value);
      this.head = tempNode;
      this.tail = this.head;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    const tempNode = new ListNode(value);
    currentNode.next = tempNode;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  delete(node) {
    console.log("node value", node.value);
    const tempNode = node
    node.value = tempNode.next.value
    node.next = node.next.next
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.print();

linkedList.delete(linkedList.head);

linkedList.print();
