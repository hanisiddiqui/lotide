const indexPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for (let index in sentence) {
    if (sentence[index] !== ' ')
    {
      if (results[sentence[index]]) {
        results[sentence[index]].push(Number(index));
      }
      else {
        results[sentence[index]] = [Number(index)];
      }
    }
  }
  console.log(results);
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

module.exports = indexPositions;

assertArraysEqual(indexPositions('hello').e, [1]);