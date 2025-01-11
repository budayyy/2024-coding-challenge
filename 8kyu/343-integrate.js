// 2024-CODING-CHALLENGE
// 343/366
// https://www.codewars.com/kata/59811fd8a070625d4c000013

function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}

console.log(integrate(3, 2));
console.log(integrate(12, 5));
