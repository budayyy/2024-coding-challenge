// 2024-CODING-CHALLENGE
// 186/366
// https://www.codewars.com/kata/55a5bfaa756cfede78000026

// function problem(x) {
//   //your code here
//   if (typeof x === "string") {
//     return "Error";
//   } else {
//     return x * 50 + 6;
//   }
// }

const problem = (x) => (typeof x === "string" ? "Error" : x * 50 + 6);

console.log(problem(5));
