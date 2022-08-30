const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  let bool = eqArrays(array1, array2);
  if (bool) {
    console.log('the same');
  }
  else {
    console.log('different');
  }
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let count = 0;
    for (let item of itemsToRemove) {
      if (source[i] === item) {
        count++;
      }
    }
    if ( count === 0) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);