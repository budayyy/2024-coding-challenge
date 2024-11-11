// 2024-CODING-CHALLENGE
// 283/366
// https://www.codewars.com/kata/565f5825379664a26b00007c

function getSize(width, height, depth) {
  let area = 2 * (width * height + width * depth + height * depth);
  let volume = width * height * depth;

  return [area, volume];
}

console.log(getSize(10, 10, 10));
