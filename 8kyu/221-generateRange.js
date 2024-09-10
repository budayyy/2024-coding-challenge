// 2024-CODING-CHALLENGE
// 221/366
// https://www.codewars.com/kata/55eca815d0d20962e1000106

function generateRange(min, max, step) {
  let result = [];

  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}

console.log(generateRange(2, 10, 2));
