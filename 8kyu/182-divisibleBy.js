// 2024-CODING-CHALLENGE
// 182/366
// https://www.codewars.com/kata/55edaba99da3a9c84000003b

function divisibleBy(numbers, divisor) {
  return numbers.filter((x) => (x % divisor === 0 ? numbers : null));
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([1, 3, 5], 2));
