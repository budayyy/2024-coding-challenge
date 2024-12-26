// 2024-CODING-CHALLENGE
// 327/366
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

function toCsvText(array) {
  // good luck
  return array.map((x) => x.join()).join("\n");
}

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);
