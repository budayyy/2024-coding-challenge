// 2024-CODING-CHALLENGE
// 312/366
// https://www.codewars.com/kata/57cff961eca260b71900008f

function isVow(a) {
  const letter = {
    97: "a",
    101: "e",
    105: "i",
    111: "o",
    117: "u",
  };
  return a.map((v) => letter[v] ?? v);
}

console.log(
  isVow([
    108, 99, 102, 118, 120, 109, 111, 119, 103, 102, 121, 116, 98, 107, 119,
    103, 109,
  ])
);
