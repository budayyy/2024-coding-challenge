//2024-CODING-CHALLENGE
// 59/366
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

// const isSquare = function (n) {
//   if (n < 0) return false;
//   return !(Math.sqrt(n) % 1);
// };

const isSquare = (n) => Math.sqrt(n) % 1 === 0;

console.log(isSquare(-1));
