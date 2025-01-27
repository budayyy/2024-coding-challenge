// 2024-CODING-CHALLENGE
// 359/366
// https://www.codewars.com/kata/577a6e90d48e51c55e000217

var hotpo = function (n) {
  let count = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    count++;
  }
  return count;
};

console.log(hotpo(1));
console.log(hotpo(5));
