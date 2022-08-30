const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const count = {};

  for (let letter of sentence) {
    if (letter != ' ')
    {
      if (count[letter]) {
        count[letter]++;
      }
      else {
        count[letter] = 1;
      }
    }
  }
  console.log(count);
};

countLetters("lighthouse in the house");

module.exports = countLetters;