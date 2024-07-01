//2024-CODING-CHALLENGE
// 150/366
//https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(braces) {
  //TODO
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
  }
  return !braces.length;
}

console.log(validBraces("[]"));
