const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array1, array2) {
  let bool = eqArrays(array1, array2);
  if (bool) {
    console.log('the same');
  }
  else {
    console.log('different');
  }
};

module.exports = assertArraysEqual;