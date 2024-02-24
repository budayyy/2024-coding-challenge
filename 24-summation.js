//2024-CODING-CHALLENGE
// 24/366
//https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// const summation = function (num) {
//   // Code here
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     result += i;
//   }

//   return result;
// };

// const summation = (num) =>
//   [...Array(num)].map((_, i) => i + 1).reduce((acc, curr) => acc + curr);

const summation = (num) => (num * (num + 1)) / 2;

console.log(summation(8));
