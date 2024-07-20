// 2024-CODING-CHALLENGE
// 170/366
// https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x) {
  return x
    .split("")
    .map((v, i) => (v < 5 ? "0" : "1"))
    .join("");
}

console.log(fakeBin("45385593107843568"));
