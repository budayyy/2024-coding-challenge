// 2024-CODING-CHALLENGE
// 238/366
// https://www.codewars.com/kata/5302d846be2a9189af0001e4

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));
