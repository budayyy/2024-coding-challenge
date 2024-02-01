//2024-CODING-CHALLENGE
// 3/366
//https://www.codewars.com/kata/59ca8246d751df55cc00014c/

// cara bar bar
// function hero(bullets, dragons) {
//   if (dragons * 2 <= bullets) {
//     return true;
//   } else {
//     return false;
//   }
// }

//
const hero = (bullets, dragons) => dragons * 2 <= bullets;

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(100, 40));
