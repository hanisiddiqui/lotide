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

module.exports = middle;

