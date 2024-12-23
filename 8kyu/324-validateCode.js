// 2024-CODING-CHALLENGE
// 324/366
// https://www.codewars.com/kata/56a25ba95df27b7743000016

function startsWith123(code) {
  // Convert the number to a string and use regex to check the starting digit
  return /^[123]/.test(code.toString());
}

console.log(startsWith123(1234));
