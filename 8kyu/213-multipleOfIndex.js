// 2024-CODING-CHALLENGE
// 213/366
// https://www.codewars.com/kata/5a34b80155519e1a00000009

function multipleOfIndex(array) {
  // good luck

  return array.filter((num, i) => num % i === 0 || num === 0);
}

console.log(multipleOfIndex([0, 2, 3, 6, 9]));
