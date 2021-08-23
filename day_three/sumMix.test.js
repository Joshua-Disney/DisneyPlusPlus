const tap = require('tap');
const { sumMix } = require('./sumMix');

tap.test(
  'sumMix() returns the correct results',
  t => {
    t.equal(sumMix([9, 3, '7', '3']), 22);
    t.equal(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
    t.equal(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
    t.end();
  }
)