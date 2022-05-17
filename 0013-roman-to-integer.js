/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  // values of roman numerals
  const values = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  }
  
  let integer = 0;
  
  const numeralValues = s.split('').reverse().map(e => values[e]);
  
  // go through every value in array and determine the total integer value
  numeralValues.forEach((value, index, arr) => {
      // add current value to total
      integer += value;
      
      // if previous value divided by current value is equal to 5 or 10, subtract instead
      if (arr[index -1] / value === 5 || arr[index - 1] / value === 10) {
          // if true remove previously added value and subtract it
          integer -= 2 * value;
      }
  })

  return integer;
};