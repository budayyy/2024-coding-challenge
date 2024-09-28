// 2024-CODING-CHALLENGE
// 239/366
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

// function multiTable(number) {
//   // good luck
//   let result = "";
//   for (let i = 1; i <= 10; i++) {
//     result += `${i} * ${number} = ${i * number}`;
//     if (i < 10) {
//       result += "\n";
//     }
//   }

//   return result;
// }

function multiTable(number) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`)
    .join("\n");
}

console.log(multiTable(5));
