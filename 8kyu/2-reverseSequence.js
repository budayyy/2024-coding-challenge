//2024-CODING-CHALLENGE
// 2/366
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// cara barbar
// const reverseSeq = (n) => {
//   let result = [];
//   for (i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

// cara one liner
const reverseSeq = (n) => [...Array(n)].map((_, i) => i + 1).reverse();

console.log(reverseSeq(5));
console.log(reverseSeq(10));
