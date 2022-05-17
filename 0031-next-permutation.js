/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // then return

  // go through every element of nums from highest index to lowest
  for (let i = nums.length; i >= 0; i--) {
    // if current element is greater than next element
    if (nums[i] > nums[i - 1]) {
      console.log("current num:", nums[i]);
      console.log("next num:", nums[i - 1]);

      // move the current element to the left in the array
      const temp = nums[i - 1];
      nums[i - 1] = nums[i];
      nums[i] = temp;

      // then sort elements to the right of the array in ascending order
      let sorted = nums.splice(i);
      console.log("subarray to be sorted:", sorted);

      sorted.sort((a, b) => a - b);
      console.log("sorted subarray:", ...sorted);

      nums.splice(i, 0, sorted);

      return;
    }
  }

  // if nums is already the largest lexicographical permutation
  // modify nums to the lowest permutation
  nums.sort((a, b) => a - b);
  return;
};
