//2024-CODING-CHALLENGE
// 137/366
// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
  const result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i, j);
      }
    }
  }

  return result;
}

console.log(twoSum([1, 2, 3], 4));
