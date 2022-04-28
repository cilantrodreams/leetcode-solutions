/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr[i] = i.toString();

    let element = "";
    if (i % 3 === 0) {
      element = element + "Fizz";
    }

    if (i % 5 === 0) {
      element = element + "Buzz";
    }

    if (element) {
      arr[i] = element;
    }
  }

  arr.shift();
  return arr;
};
