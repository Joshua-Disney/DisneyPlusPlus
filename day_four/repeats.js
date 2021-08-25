/**
 * You will be given an array of numbers in which two numbers occur 
 * once and the rest occur only twice. Your task will be to return
 * the sum of the numbers that occur only once.
 *
 * For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 
 * 7 and 8 occur once, and their sum is 15. Every other number occurs 
 * twice.
 */

function repeats(array) {

let sum = 0;
let check = {};

for (let i = 0; i < array.length; i++) {
  if (check[array[i]]) {
    delete check[array[i]]
  }
  else {
    check[array[i]] = 1
  }
}

for (let i = 0; i < array.length; i++) {
  if (check[array[i]]) {
    sum += array[i]
  }
}

return sum

}

module.exports = { repeats };