// 2024-CODING-CHALLENGE
// 241/366
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

function sumOfDifferences(arr) {
  //
  arr = arr.sort((b, a) => a - b);
  let result = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] - arr[i + 1];
  }

  return result;
}

console.log(sumOfDifferences([2, 1, 10]));
