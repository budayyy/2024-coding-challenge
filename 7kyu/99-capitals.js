//2024-CODING-CHALLENGE
// 99/366
// https://www.codewars.com/kata/539ee3b6757843632d00026b

var capitals = function (word) {
  // Write your code here
  let result = [];
  word.split("");
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].length) {
      result.push(i);
    }
  }
  return result;
};

console.log(capitals("CodEWaRs"));
