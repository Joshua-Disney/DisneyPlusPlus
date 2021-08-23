/**
 * @name Array Combinations
 * 
 * @description
 *  Return the number of unique arrays that can be formed by 
 *  picking exactly one element from each subarray.
 * 
 *  For example: solve([[1,2],[4],[5,6]]) = 4, because it results 
 *  in only 4 possibilites. 
 * 
 *  They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
 * 
 *  Make sure that you don't count duplicates; for example 
 *  solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra
 *  outcomes are just duplicates.
 * 
 * @param {number[][]} numbers
 */

function arrayCombinations(numbers) {
  let total = 1
  for (let i = 0; i < numbers.length; i++) {
    let unique = {}
    let count = 0
    for (let j = 0; j < numbers[i].length; j++) {
      
      if (unique[numbers[i][j]]) {
        
      }
      else {
        unique[numbers[i][j]] = 1
        count += 1
      }
    }
    total *= count
  }
  return total
}


module.exports = { arrayCombinations }