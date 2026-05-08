function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;

  let slow = dummyNode;
  let fast = dummyNode;

  let count = 0;
 
  fast = dummyNode

  while(count < n + 1){
    fast = fast.next
    count ++;
  }
   
  while(fast){
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next;
  return dummyNode.next
};

console.log(JSON.stringify(removeNthFromEnd(head, 2), null, 2))
