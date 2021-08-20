const tap = require('tap');

tap.test(
  'squareSum() squares and sums each number in the array',
  t => {
    
const {squareSum} = require('./squareSum.js');
    t.equal(squareSum([1, 2]), 5);
    t.equal(squareSum([0, 3, 4, 5]), 50);
  }
);
