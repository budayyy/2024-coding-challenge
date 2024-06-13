//2024-CODING-CHALLENGE
// 134/366
// https://www.codewars.com/kata/559536379512a64472000053

function playPass(s, n) {
  // your code
  return s
    .replace(/[A-Z]/g, (x) =>
      String.fromCharCode(((x.charCodeAt(0) + n - 65) % 26) + 65)
    )
    .replace(/\d/g, (x) => 9 - x)
    .split("")
    .map((x, i) => (i % 2 ? x.toLowerCase() : x.toUpperCase()))
    .reverse()
    .join("");
}

console.log(playPass("I LOVE YOU!!!", 1));
