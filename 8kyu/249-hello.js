// 2024-CODING-CHALLENGE
// 249/366
// https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name) {
  if (name === undefined) return "Hello, World!";
  if (name.length < 1) return "Hello, World!";
  name = name
    .toLowerCase()
    .split("")
    .map((_, i) => (i === 0 ? _.toUpperCase() : _))
    .join("");
  return `Hello, ${name}!`;
}

console.log(hello());
