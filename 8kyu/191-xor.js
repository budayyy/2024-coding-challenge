// 2024-CODING-CHALLENGE
// 191/366
// https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/

// function xor(a, b) {
//   // TODO: Program Me
//   return (a || b) && !(a && b);
// }

const xor = (a, b) => a != b;

console.log(xor(false, false));
console.log(xor(true, true));
