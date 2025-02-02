// 2024-CODING-CHALLENGE
// 365/366
// https://www.codewars.com/kata/5713bc89c82eff33c60009f7/

function toFreud(string) {
  if (string === "") return "";
  string = string.split(" ").length;
  return [...Array(string)].map((x) => "sex").join(" ");
}

console.log(toFreud(""));
