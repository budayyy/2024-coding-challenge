// 2024-CODING-CHALLENGE
// 165/366
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// function countPositivesSumNegatives(input) {
//   // your code here
//   if (input.length === 0 || input === null) {
//     return [];
//   } else {
//     let positive = 0;
//     let negative = 0;

//     for (let i = 0; i < input.length; i++) {
//       if (input[i] > 0) {
//         positive++;
//       } else {
//         negative += input[i];
//       }
//     }

//     return [positive, negative];
//   }
// }

function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((x) => x > 0).length,
        input.filter((x) => x < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
