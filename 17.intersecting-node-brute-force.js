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

  static findIntersection(headA, headB) {
    let currentNodeA = headA;
    let currentNodeB = headB;

    while (currentNodeA !== null) {
      while (currentNodeB !== null) {
        if (currentNodeA === currentNodeB) {
          return currentNodeA;
        }
        currentNodeB = currentNodeB.next;
      }
      currentNodeA = currentNodeA.next;
      currentNodeB = headB;
    }
  }
}

const common = new ListNode(30);
common.next = new ListNode(31);
common.next.next = new ListNode(32);

const listA = new LinkedList();
listA.head = new ListNode(10);
listA.head.next = new ListNode(11);
listA.head.next.next = new ListNode(12);
listA.head.next.next.next = common;

const listB = new LinkedList();
listB.head = new ListNode(20);
listB.head.next = new ListNode(21);
listB.head.next.next = common;

const intersection = LinkedList.findIntersection(listA.head, listB.head);
console.log(intersection ? intersection.value : "No intersection");
