// 2024-CODING-CHALLENGE
// 216/366
// https://www.codewars.com/kata/586c1cf4b98de0399300001d

function combat(health, damage) {
  // Write your code here
  let result = health - damage;

  return result > 0 ? result : 0;
}

console.log(combat(100, 5));
