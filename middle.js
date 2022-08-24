const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(array) {
  let middleIndex = array.length / 2;
  let middleElements = [];

  if (middleIndex % 1 === 0.5) {
    middleElements.push(array[Math.round(middleIndex -1)]);
  }

  else {
    middleElements.push(array[Math.round(middleIndex -1)]);
    middleElements.push(array[middleIndex]);
  }
  return middleElements;
};

assertEqual(eqArrays(middle([1,2,34,57,8645,10]), [5,6]), true);
assertEqual(eqArrays(middle([1,2,34,57,8645,10]), [34,57]), true);
assertEqual(eqArrays(middle([1,2,34,57,7263,8645,10]), [34,57]), true);
assertEqual(eqArrays(middle([1,2,34,57,7263,8645,10]), [57]), true);