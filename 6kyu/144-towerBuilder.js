//2024-CODING-CHALLENGE
// 144/366
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  // build here
  return [...Array(nFloors)].map(
    (n, i) =>
      " ".repeat(nFloors - 1 - i) +
      "*".repeat(i * 2 + 1) +
      " ".repeat(nFloors - 1 - i)
  );
}

console.log(towerBuilder(3));
