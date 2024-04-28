//2024-CODING-CHALLENGE
// 88/366
// https://www.codewars.com/kata/559590633066759614000063

// function minMax(arr) {
//   let result = [];

//   let min = arr.sort((a, b) => a - b)[0];
//   let max = arr.sort((a, b) => b - a)[0];
//   result.push(min);
//   result.push(max);

//   return result;
// }

const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

console.log(minMax([1]));
