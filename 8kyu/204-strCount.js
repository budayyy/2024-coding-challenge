// 2024-CODING-CHALLENGE
// 204/366
// https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter) {
  //code here
  return str.split("").filter((v) => v.includes(letter)).length;
}

console.log(strCount("Hello", "o"));
