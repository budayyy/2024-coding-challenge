//2024-CODING-CHALLENGE
// 44/366
//https://www.codewars.com/kata/5545f109004975ea66000086

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(3, 3, 4));
