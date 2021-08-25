const tap = require('tap');
const { repeats } = require('./repeats');

tap.test(
  'repeats() squares and sums each number in the array',
  t => {
    t.equal(repeats([4,5,7,5,4,8]),15);
    t.equal(repeats([9, 10, 19, 13, 19, 13]),19);
    t.equal(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
    t.equal(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
    t.equal(repeats([5, 10, 19, 13, 10, 13]),24);
    t.end();
  }
);
