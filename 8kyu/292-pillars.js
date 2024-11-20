// 2024-CODING-CHALLENGE
// 292/366
// https://www.codewars.com/kata/5bb0c58f484fcd170700063d

function pillars(numPill, dist, width) {
  // your code here
  return numPill > 1 ? (numPill - 1) * (dist * 100) + (numPill - 2) * width : 0;
}

console.log(pillars(2, 20, 25));
