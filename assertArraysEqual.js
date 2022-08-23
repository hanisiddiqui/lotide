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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, '2', 3], [1, 2, 3]);