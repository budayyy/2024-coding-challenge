//2024-CODING-CHALLENGE
// 90/366
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));
