// 2024-CODING-CHALLENGE
// 328/366
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673

const flip = (d, a) => {
  if (d === "R") {
    return a.sort((a, b) => a - b);
  } else if (d === "L") {
    return a.sort((a, b) => b - a);
  }
};

console.log(flip("R", [3, 2, 1, 2]));
console.log(flip("L", [1, 4, 5, 3, 5]));
