// 2024-CODING-CHALLENGE
// 284/366
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

function differenceInAges(ages) {
  ages.sort((a, b) => a - b);
  let min = Math.min(...ages);
  let max = Math.max(...ages);

  return [min, max, max - min];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));
