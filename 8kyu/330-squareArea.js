// 2024-CODING-CHALLENGE
// 330/366
// https://www.codewars.com/kata/5748838ce2fab90b86001b1a

function squareArea(A) {
  return Number(Math.pow((2 * A) / Math.PI, 2).toFixed(2));
}

console.log(squareArea(14.05));
