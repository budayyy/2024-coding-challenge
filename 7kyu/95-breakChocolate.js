//2024-CODING-CHALLENGE
// 95/366
// https://www.codewars.com/kata/534ea96ebb17181947000ada

function breakChocolate(n, m) {
  return n === 0 || m === 0 ? 0 : n * m - 1;
}

console.log(breakChocolate(1, 1));
