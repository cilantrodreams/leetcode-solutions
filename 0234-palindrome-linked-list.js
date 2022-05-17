/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  // traverse through linked list and concat each number to a string in opposite directions
  // after getting to the end of the list compare the two strings and see if they match
  
  let forward = "";
  let reverse = "";
  
  while (head != null) {
      forward = forward + head.val;
      reverse = head.val + reverse;
      head = head.next;
  }
  console.log("forward", forward);
  console.log("reverse", reverse);
  
  if (forward === reverse) {
      return true;
  }
  
  return false;
};