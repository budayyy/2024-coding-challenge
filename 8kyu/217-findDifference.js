// 2024-CODING-CHALLENGE
// 217/366
// https://www.codewars.com/kata/58cb43f4256836ed95000f97

function findDifference(a, b) {
  let resultA = a.reduce((x, y) => x * y);
  let resultB = b.reduce((x, y) => x * y);

  return resultA - resultB < 0 ? resultB - resultA : resultA - resultB;
}

console.log(findDifference([2, 2, 3], [5, 4, 1]));
