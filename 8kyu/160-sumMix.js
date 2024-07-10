// 2024-CODING-CHALLENGE
// 160/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x) {
  return x.reduce((acc, curr) => Number(acc) + Number(curr));
}

console.log(sumMix([9, 3, "7", "3"]));
