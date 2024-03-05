//2024-CODING-CHALLENGE
// 34/366
//hhttps://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers) {
  let result = 0;
  for (i = 0; i < numbers.length; i++) {
    result += numbers[i] * numbers[i];
  }
  return result;
}

console.log(squareSum([0, 3, 4, 5]));
