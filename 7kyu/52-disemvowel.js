//2024-CODING-CHALLENGE
// 52/366
// https://www.codewars.com/kata/52fba66badcd10859f00097e/

// function disemvowel(str) {
//   return str
//     .split("")
//     .filter((n) => !"auieoAIUEO".includes(n))
//     .join("");
// }

const disemvowel = (str) => str.replace(/[aiueoAIUEO]/gi, "");

console.log(disemvowel("This website is for losers LOL!"));
