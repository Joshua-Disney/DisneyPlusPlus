/**
 * @name Square(n) Sum
 *
 * @description
 *  Complete the square sum function so that it squares each number
 *  passed into it and then sums the results together.
 *  For example, for [1, 2, 2] it should return 9 because 
 *  1^2 + 2^2 + 2^2 = 9.
 * 
 * @param {number[]} numbers
 * 
 */

function squareSum(numbers) {
  let total = 0
  numbers.forEach(i => {
    total += i ** 2
  })
  return total
}


module.exports = { squareSum };