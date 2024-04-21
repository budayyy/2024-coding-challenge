//2024-CODING-CHALLENGE
// 81/366
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = (arr) => {
  // your code
  return arr
    .join("")
    .split("")
    .reduce((a, b) => a * 2 + +b, 0);
};

console.log(binaryArrayToNumber([0, 1, 1, 0]));
