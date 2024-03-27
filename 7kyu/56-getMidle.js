//2024-CODING-CHALLENGE
// 56/366
// https://www.codewars.com/kata/56747fd5cb988479af000028

// function getMiddle(s) {
//   let result = "";
//   let cek = s.length % 2 === 0;
//   let jumlah = s.length / 2;
//   console.log(jumlah);
//   if (cek) {
//     for (let i = 0; i < s.length; i++) {
//       if (i === jumlah - 1 || i === jumlah) {
//         result += s[i];
//       }
//     }
//   } else {
//     return s.at(jumlah);
//   }

//   return result;
// }

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
// console.log(getMiddle('a'))
