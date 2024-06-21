//2024-CODING-CHALLENGE
// 142/366
// https://www.codewars.com/kata/59b401e24f98a813f9000026

function computeDepth(x) {
  let arr = [];
  for (let i = 1; ; i++) {
    arr.push((x * i).toString().split(``));
    if ([...new Set([].concat(...arr))].length === 10) return i;
  }

  return "to easy";
}

console.log(computeDepth(42));
