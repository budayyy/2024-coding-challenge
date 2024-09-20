// 2024-CODING-CHALLENGE
// 231/366
// https://www.codewars.com/kata/595970246c9b8fa0a8000086

function capitalizeWord(word) {
  return word
    .split("")
    .map(function (value, index) {
      if (index === 0) {
        return value.toUpperCase();
      } else {
        return value;
      }
    })
    .join("");
}

console.log(capitalizeWord("glasswear"));
