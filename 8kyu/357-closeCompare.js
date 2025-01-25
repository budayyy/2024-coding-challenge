// 2024-CODING-CHALLENGE
// 357/366
// https://www.codewars.com/kata/56453a12fcee9a6c4700009c

function closeCompare(a, b, margin = 0) {
  // ...
  return Math.abs(a - b) <= margin ? 0 : Math.sign(a - b);
}

console.log(closeCompare(4, 5, 3));
