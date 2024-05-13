//2024-CODING-CHALLENGE
// 103/366
// https://www.codewars.com/kata/541c8630095125aba6000c00

// function digitalRoot(n) {
//   let result = n.toString();
//   while (result.length > 1) {
//     result = result
//       .split("")
//       .reduce((acc, curr) => Number(acc) + Number(curr))
//       .toString();
//   }

//   return Number(result);
// }

// ajaib
const digitalRoot = (n) => ((n - 1) % 9) + 1;

console.log(digitalRoot(10));
