// 2024-CODING-CHALLENGE
// 215/366
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

var findAverage = function (nums) {
  // Code here
  return nums.reduce((a, b) => a + b) / nums.length;
};

console.log(findAverage([1, 3, 5, 7]));
