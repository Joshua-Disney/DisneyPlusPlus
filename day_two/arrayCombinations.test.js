const tap = require('tap');
const { arrayCombinations } = require('./arrayCombinations');

tap.test(
  'arrayCombinations() returns the correct results',
  t => {
    t.equal(arrayCombinations([[1, 2], [4], [5, 6]]), 4);
    t.equal(arrayCombinations([[1, 2], [4, 4], [5, 6, 6]]), 4);
    t.equal(arrayCombinations([[1, 2], [3, 4], [5, 6]]), 8);
    t.equal(arrayCombinations([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]), 72);
    t.end();
  }
);