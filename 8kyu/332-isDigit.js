// 2024-CODING-CHALLENGE
// 332/366
// https://www.codewars.com/kata/57126304cdbf63c6770012bd

function isDigit(s) {
  //your code
  s = s.trim();
  return /^-?\d+(\.\d+)?$/.test(s);
}

console.log(isDigit("3"));
