//2024-CODING-CHALLENGE
// 97/366
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

// function sumOfMinimums(arr) {
//   // your code here
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     result += Math.min(...arr[i]);
//   }
//   return result;
// }

const sumOfMinimums = (arr) =>
  arr.reduce((acc, curr) => acc + Math.min(...curr), 0);

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);
