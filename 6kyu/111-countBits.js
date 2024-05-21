//2024-CODING-CHALLENGE
// 111/366
// https://www.codewars.com/kata/526571aae218b8ee490006f4/

var countBits = function (n) {
  // Program Me
  return n.toString(2).split("0").join("").length;
};

console.log(countBits(10));
