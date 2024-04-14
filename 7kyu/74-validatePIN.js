//2024-CODING-CHALLENGE
// 74/366
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

// function validatePIN(pin) {
//   //return true or false
//   if (pin.length === 6 || pin.length === 4) {
//     if (Number(pin) >= 0) {
//       return (
//         pin.match(/[0-9]/g).length === 6 || pin.match(/[0-9]/g).length === 4
//       );
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("0000"));
console.log(validatePIN("-1.234"));
