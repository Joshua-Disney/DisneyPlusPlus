/**
 * Given an array of integers as strings and numbers, 
 * return the sum of the array values as if all were numbers.
 *
 * Return your answer as a number.
 * 
 * @param {(string|number)[]} array
 * 
 * @returns number
 */

function sumMix(array) {
  // Initial solution
//  let sum = 0

//  for (let i = 0; i < array.length; i++) {
//    sum += parseInt(array[i])
//  }

//  return sum

return array.reduce((sum, currentVal) => sum + parseInt(currentVal), 0)
}

module.exports = { sumMix } 