/**
 * My solution
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // go through every element of nums from highest index to lowest
  for (let i = nums.length; i >= 0; i--) {
    // if current element is less than previous element
    if (nums[i] < nums[i + 1]) {
      // loop through nums again in reverse order
      for (let j = nums.length; j >= 0; j--) {
        // if current element in inner loop is greater then current element in outer loop
        if (nums[j] > nums[i]) {
          // move inner loop element to index of outer loop element
          const temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          break;
        }
      }

      // then sort elements to the right of current element in ascending order
      let sorted = nums.splice(i + 1);
      sorted.sort((a, b) => a - b);
      nums.splice(i + 1, 0, ...sorted);

      return;
    }
  }

  // if nums is already the largest lexicographical permutation
  // modify nums to the lowest permutation
  nums.sort((a, b) => a - b);
  return;
};

// My solution is similar to the one on leetcode
// things that could've been done better
/**
 * Use a helper function for finding the next largest number to swap with
 * use a helper function to sort the rightmost elements in place instead of using splice
 *  this would prevent code duplication at the end of the solution function
 *  this would also reduce the multiple returns
 */
