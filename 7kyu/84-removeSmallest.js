//2024-CODING-CHALLENGE
// 84/366
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  return numbers.filter((x, i) => i !== numbers.indexOf(Math.min(...numbers)));
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
