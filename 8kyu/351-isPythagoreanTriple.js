// 2024-CODING-CHALLENGE
// 351/366
// https://www.codewars.com/kata/5951d30ce99cf2467e000013

function isPythagoreanTriple(integers) {
  // Good luck friends!
  let a = Math.pow(integers[0], 2);
  let b = Math.pow(integers[1], 2);
  let c = Math.pow(integers[2], 2);
  return a + b === c || a + c === b || b + c === a;
}

console.log(isPythagoreanTriple([3, 4, 5]));
