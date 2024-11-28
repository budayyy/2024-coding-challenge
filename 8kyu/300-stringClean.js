// 2024-CODING-CHALLENGE
// 300/366
// https://www.codewars.com/kata/57e1e61ba396b3727c000251

function stringClean(s) {
  // Function will return the cleaned string
  return s.replace(/\d/g, "");
}

console.log(stringClean("123456789"));
console.log(stringClean("(E3at m2e2!!)"));
