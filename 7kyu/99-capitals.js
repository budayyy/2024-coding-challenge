//2024-CODING-CHALLENGE
// 99/366
// https://www.codewars.com/kata/539ee3b6757843632d00026b

var capitals = function (word) {
  // Write your code here
  word = word.split("");
  let result = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }

  return result;
};

console.log(capitals("CodEWaRs"));
