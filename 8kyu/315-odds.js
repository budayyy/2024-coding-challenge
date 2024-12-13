// 2024-CODING-CHALLENGE
// 315/366
// https://www.codewars.com/kata/559f80b87fa8512e3e0000f5

function odds(values) {
  // arrow it
  return values.filter((x) => x % 2 !== 0);
}

console.log(odds([1, 2, 3, 4, 5, 6]));
