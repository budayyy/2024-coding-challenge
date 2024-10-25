// 2024-CODING-CHALLENGE
// 266/366
// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f

function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}

console.log(buildString("Cheese", "Milk", "Chocolate"));
