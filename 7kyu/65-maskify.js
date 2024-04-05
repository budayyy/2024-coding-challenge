//2024-CODING-CHALLENGE
// 65/366
// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
  return cc
    .split("")
    .reverse()
    .map((value, index) => (index < 4 ? value : (value = "#")))
    .reverse()
    .join("");
}

console.log(maskify("11111111"));
console.log(maskify("Skippy"));
