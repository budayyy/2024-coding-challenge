// 2024-CODING-CHALLENGE
// 327/366
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

const flip = (d, a) => {
  if (d === "R") {
    return a.sort((a, b) => a - b);
  } else if (d === "L") {
    return a.sort((a, b) => b - a);
  }
};

console.log(flip("R", [3, 2, 1, 2]));
console.log(flip("L", [1, 4, 5, 3, 5]));
