// 2024-CODING-CHALLENGE
// 209/366
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

function warnTheSheep(queue) {
  return queue.indexOf("wolf") === queue.length - 1
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        queue.length - queue.indexOf("wolf") - 1
      }! You are about to be eaten by a wolf!`;
}

console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ])
);
