//2024-CODING-CHALLENGE
// 115/366
// https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) {
  return arr.filter((e) => /^[:;][-~]?[)D]$/.test(e)).length;
}

console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
