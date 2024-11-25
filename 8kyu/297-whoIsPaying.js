// 2024-CODING-CHALLENGE
// 297/366
// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7

function whoIsPaying(name) {
  //your code here
  if (name.length <= 2) return Array(name);

  let two = name.split("").splice(0, 2).join("");
  return [name, two];
}

console.log(whoIsPaying("Mexico"));
