//2024-CODING-CHALLENGE
// 29/366
//https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
}

console.log(positiveSum([-1, 2, 3, 4, -5]));
