// 2024-CODING-CHALLENGE
// 192/366
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

function expressionMatter(a, b, c) {
  let resultA = a + b + c;
  let resultB = a * b * c;
  let resultC = (a + b) * c;
  let resultD = a * (b + c);

  return [resultA, resultB, resultC, resultD].sort((a, b) => b - a)[0];
}

console.log(expressionMatter(2, 1, 2));
