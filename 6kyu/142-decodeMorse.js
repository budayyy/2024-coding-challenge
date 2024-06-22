//2024-CODING-CHALLENGE
// 142/366
// https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function (morseCode) {
  // Your code here
  // You can use MORSE_CODE[morse]
  return morseCode
    .split(" ")
    .map((v, i) => (MORSE_CODE[v] != undefined ? MORSE_CODE[v] : 1))
    .join("")
    .replace(/11/g, " ")
    .replace(/1/g, " ")
    .trim();
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
