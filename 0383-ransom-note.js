/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // convert strings into arrays
  // loop until ransomNote array is empty or if any one element doesn't exist in magazine

  ransomNoteLetters = ransomNote.split("");
  magazineLetters = magazine.split("");

  canBeConstructed = true;

  while (ransomNoteLetters.length > 0 && canBeConstructed) {
    // take a letter from ransom note letters
    const letter = ransomNoteLetters.pop();
    console.log("letter:", letter);

    // look in magazine letters and find index of the first element that matches that letter
    const foundIndex = magazineLetters.findIndex((e) => e === letter);
    console.log("foundIndex:", foundIndex);
    console.log("magazine letter:", magazineLetters[foundIndex]);

    // if index was found remove it from the magazine letters
    if (foundIndex > -1) {
      magazineLetters.splice(foundIndex, 1);
    } else {
      canBeConstructed = false;
    }
  }

  return canBeConstructed;
};
