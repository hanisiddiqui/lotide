const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

assertEqual(eqArrays(middle([1,2,34,57,8645,10]), [5,6]), true);
assertEqual(eqArrays(middle([1,2,34,57,8645,10]), [34,57]), true);
assertEqual(eqArrays(middle([1,2,34,57,7263,8645,10]), [34,57]), true);
assertEqual(eqArrays(middle([1,2,34,57,7263,8645,10]), [57]), true);