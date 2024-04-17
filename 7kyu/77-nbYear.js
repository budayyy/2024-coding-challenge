//2024-CODING-CHALLENGE
// 77/366
// https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
  // your code
  let totalYear = 0;

  while (p0 < p) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
    totalYear++;
  }

  return totalYear;
}

console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
