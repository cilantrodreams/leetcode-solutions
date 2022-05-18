/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // then return

  // go through every element of nums from highest index to lowest
  for (let i = nums.length; i >= 0; i--) {
    // if current element is less than previous element
    if (nums[i] < nums[i + 1]) {
      // move the current element to the left in the array
      // this logic is currently incorrect
      // const temp = nums[i - 1];
      // nums[i - 1] = nums[i];
      // nums[i] = temp;

      // loop through nums again in reverse order
      for (let j = nums.length; j >= 0; j--) {
        // if current element in inner loop is greater then current element in outer loop
        if (nums[j] > nums[i]) {
          // move inner loop element to index of outer loop element
          console.log("nums[i]", nums[i]);
          console.log("nums[j]", nums[j]);
          const temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          break;
        }
      }

      // then sort elements to the right in the array in ascending order
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
