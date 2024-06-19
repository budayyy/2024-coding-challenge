//2024-CODING-CHALLENGE
// 140/366
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  //...
  let str = string
    .split(" ")
    .join("")
    .replace(/[\W\d]/g, "")
    .toLowerCase()
    .split("");

  return [...new Set(str)].length == 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
