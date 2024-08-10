// 2024-CODING-CHALLENGE
// 190/366
// https://www.codewars.com/kata/5899642f6e1b25935d000161/

function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
}

console.log(mergeArrays([1, 2, 3, 4, 5], [5, 6, 7, 8]));
