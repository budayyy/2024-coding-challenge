// 2024-CODING-CHALLENGE
// 269/366
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

function distinct(a) {
  return [...new Set(a)];
}

console.log(distinct([1, 1, 2]));
