// 2024-CODING-CHALLENGE
// 303/366
// https://www.codewars.com/kata/56a946cd7bd95ccab2000055

function lowercaseCount(str) {
  //How many?
  return (str.match(/[a-z]/g) || []).length;
}

console.log(lowercaseCount("abc"));
