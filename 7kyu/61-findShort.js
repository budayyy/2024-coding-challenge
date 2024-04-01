//2024-CODING-CHALLENGE
// 61/366
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
  let string = s.split(" ");
  let result = string[0];
  for (let i = 1; i < string.length; i++) {
    if (result.length > string[i].length) {
      result = string[i];
    }
  }
  return result.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("Let's travel abroad shall we"));
