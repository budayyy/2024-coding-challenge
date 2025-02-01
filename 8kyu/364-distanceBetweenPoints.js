// 2024-CODING-CHALLENGE
// 364/366
// https://www.codewars.com/kata/58dced7b702b805b200000be

function distanceBetweenPoints(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

console.log(distanceBetweenPoints([1, 1], [1, 1]));
console.log(distanceBetweenPoints([0, 0], [1, 1]));
