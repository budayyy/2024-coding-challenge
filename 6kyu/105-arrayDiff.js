//2024-CODING-CHALLENGE
// 105/366
// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}

console.log(arrayDiff([1, 2, 2], [2]));
