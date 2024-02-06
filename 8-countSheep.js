//2024-CODING-CHALLENGE
// 8/366
//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// cara bar bar
// const countSheep = function (num) {
//   //your code here
//   let result = "";
//   for (i = 1; i <= num; i++) {
//     result += `${i} sheep...`;
//   }
//   return result;
// };

// cara one liner
const countSheep = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(4));
