//2024-CODING-CHALLENGE
// 35/366
//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// function repeatStr(n, s) {
//   let result = "";

//   for (i = 0; i < n; i++) {
//     result += s;
//   }

//   return result;
// }

const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(5, "#"));
