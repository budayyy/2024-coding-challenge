// 2024-CODING-CHALLENGE
// 219/366
// https://www.codewars.com/kata/563b74ddd19a3ad462000054

function stringy(size) {
  // your code here
  return [...Array(size)].map((v, i) => (i % 2 === 0 ? "1" : "0")).join("");
}

console.log(stringy(4));
