//2024-CODING-CHALLENGE
// 58/366
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// function accum(s) {
//   // your code
//   return s
//     .split("")
//     .map((value, index) => {
//       let jumlah = index + 1;
//       let result = "";
//       for (let i = 0; i < jumlah; i++) {
//         if (i === 0) {
//           result += value.toUpperCase();
//         } else {
//           result = result + value.toLowerCase();
//         }
//       }
//       return result;
//     })
//     .join("-");
// }

function accum(s) {
  return s
    .split("")
    .map((v, i) => v.toUpperCase() + v.toLowerCase().repeat(i))
    .join("-");
}

// console.log(accum("abcd"));
console.log(accum("ZpglnRxqenU"));
