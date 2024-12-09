// 2024-CODING-CHALLENGE
// 311/366
// https://www.codewars.com/kata/57a386117cb1f31890000039

function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

console.log(parseF("1"));
console.log(parseF(NaN));
