//2024-CODING-CHALLENGE
// 75/366
// https://www.codewars.com/kata/551f37452ff852b7bd000139

// function addBinary(a, b) {
//   let result = "";
//   let angka = a + b;

//   while (angka > 0) {
//     let sisaBagi = angka % 2;
//     result = sisaBagi + result;
//     angka = Math.floor(angka / 2);
//   }

//   return result;
// }

const addBinary = (a, b) => (a + b).toString(2);

console.log(addBinary(1, 1));
