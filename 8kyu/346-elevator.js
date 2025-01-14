// 2024-CODING-CHALLENGE
// 346/366
// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a

function elevator(left, right, call) {
  // code on! :)
  return Math.abs(call - left) < Math.abs(call - right) ? "left" : "right";
}

console.log(elevator(0, 1, 0));
