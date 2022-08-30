const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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

const firstLetter = word => word[0];

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["Ground", "12345678", "to", "major", "tom"];
const words2 = ["ground", 1234567, "to", "major", "tom"];

assertArraysEqual(map(words, firstLetter), ['g','c','t','m','t']);
assertArraysEqual(map(words1, firstLetter), ['G','1','t','m','t']);
assertArraysEqual(map(words2, firstLetter), ['g',1,'t','m','t']);


module.exports = map;