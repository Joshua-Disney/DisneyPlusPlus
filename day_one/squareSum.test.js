const tap = require('tap');
const { squareSum } = require('./squareSum');

tap.test(
  'squareSum() squares and sums each number in the array',
  t => {
    t.equal(squareSum([1, 2]), 5);
    t.equal(squareSum([0, 3, 4, 5]), 50);
    t.end();
  }
);
