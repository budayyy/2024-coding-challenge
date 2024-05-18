//2024-CODING-CHALLENGE
// 108/366
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
  //...
  return text
    .toLowerCase()
    .split("")
    .filter((value, index) => text.indexOf(value) !== index)
    .filter((value, index, arr) => arr.indexOf(value) == index).length;
}

console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("indivisibilities"));
