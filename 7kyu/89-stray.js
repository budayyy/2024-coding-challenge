//2024-CODING-CHALLENGE
// 89/366
// https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers) {
  return numbers.find((n) => numbers.indexOf(n) === numbers.lastIndexOf(n));
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));
