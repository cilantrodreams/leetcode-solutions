/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let listLength = 0;
  let pointer = head;

  while (pointer) {
    listLength++;
    pointer = pointer.next;
  }

  let middleNode = Math.floor(listLength / 2) + 1;

  pointer = head;

  while (middleNode != 1) {
    pointer = pointer.next;
    middleNode--;
  }

  return pointer;
};
