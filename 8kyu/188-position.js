// 2024-CODING-CHALLENGE
// 188/366
// https://www.codewars.com/kata/5808e2006b65bff35500008f

function position(letter) {
  //Write your own Code!
  return `Position of alphabet: ${letter.toLowerCase().charCodeAt() - 96}`;
}

console.log(position("A"));
