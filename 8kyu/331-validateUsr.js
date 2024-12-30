// 2024-CODING-CHALLENGE
// 331/366
// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

function validateUsr(username) {
  const res = /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}

console.log(validateUsr("asddsa"));
