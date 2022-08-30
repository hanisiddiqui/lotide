const eqObjects = function (object1, object2) {
  let result;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (object1[key].length !== object2[key].length) {
      return false;
    }
    else if (Array.isArray(object1[key]))
    {
      result = eqArrays(object1[key], object2[key]);
      if (result === false) {
        return result;
      }
    }
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log('false');
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let bool = eqObjects(actual, expected);

  if (bool === false) {
    console.log('different');
  }
  else {
    console.log('the same');
  }
};

module.exports = assertObjectsEqual;

assertObjectsEqual({'a':1,'b':[1,2,3]}, {'b':[1,2,3], 'a':1});
assertObjectsEqual({'a':'1','b':[1,2,3]}, {'b':[1,2,3], 'a':1});