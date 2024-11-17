// 2024-CODING-CHALLENGE
// 289/366
// https://www.codewars.com/kata/562926c855ca9fdc4800005b

function numberToPower(number, power) {
  // Code here
  let result = 1;

  for (let i = 0; i < power; i++) {
    result = result * number;
  }

  return result;
}

console.log(numberToPower(4, 2));
