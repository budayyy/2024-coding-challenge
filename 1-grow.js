//2024-CODING-CHALLENGE
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078/

// cara bar bar
// function grow(x) {
//   let result = 1;
//   for (i = 0; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// cara simpel / one liner
// function grow(x) {
//   return x.reduce((acc, curr) => acc * curr);
// }

const grow = (x) => x.reduce((acc, cur) => acc * cur);

console.log(grow([1, 2, 3]));
