/**
 * Given a string formula representing a chemical formula, return the count of each atom.

The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow.

For example, "H2O" and "H2O2" are possible, but "H1O2" is impossible.
Two formulas are concatenated together to produce another formula.

For example, "H2O2He3Mg4" is also a formula.
A formula placed in parentheses, and a count (optionally added) is also a formula.

For example, "(H2O2)" and "(H2O2)3" are formulas.
Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

The test cases are generated so that all the values in the output fit in a 32-bit integer.

1 <= formula.length <= 1000
formula consists of English letters, digits, '(', and ')'.
formula is always valid.
 */

/**
 * @param {string} formula
 * @return {string}
 */
 var countOfAtoms = function(formula) {
    
  // determine what the atomic elements formula are
  // elements always start with uppercase letter and zero or more lower case letter
  // add them to object with element as key
  // output should order elements by atomic number

  // convert formula string to array of character strings and loop
  const elements = {};
  const formulaChars 
  [...formula].forEach((char, index, array) => {
    let element = "";

    // check if character is a number
    if (isNaN(char) === false) {
      return;
    }

    // check if character is uppercase
    if (char === char.toUpperCase()) {
      element += char;

      // check if next character is lowercase
      if (array[index + 1] === array[index + 1].toLowerCase) ()
    }
  });

};