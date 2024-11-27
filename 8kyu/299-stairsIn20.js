// 2024-CODING-CHALLENGE
// 299/366
// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e

function stairsIn20(s) {
  //your code here
  const oneYearTotal = s
    .flat()
    .reduce((sum, stairsCount) => sum + stairsCount, 0);
  return oneYearTotal * 20;
}
