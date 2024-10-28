// 2024-CODING-CHALLENGE
// 268/366
// https://www.codewars.com/kata/574b3b1599d8f897470018f6

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

console.log(getRealFloor(15));
