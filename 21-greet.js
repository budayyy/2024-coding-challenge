//2024-CODING-CHALLENGE
// 21/366
//https://www.codewars.com/kata/5772da22b89313a4d50012f7

const greet = (name, owner) => {
  // Add code here
  return name === owner ? "Hello boss" : "Hello guest";
};

console.log(greet("Daniel", "Daniel"));
