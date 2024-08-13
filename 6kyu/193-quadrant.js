// 2024-CODING-CHALLENGE
// 193/366
// https://www.codewars.com/kata/643af0fa9fa6c406b47c5399

function quadrant(x, y) {
  // Poveli!
  return x > 0 && y > 0
    ? 1
    : x < 0 && y > 0
    ? 2
    : x < 0 && y < 0
    ? 3
    : x > 0 && y < 0
    ? 4
    : 0;
}

console.log(quadrant(1, 2));
