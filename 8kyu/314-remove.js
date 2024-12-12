// 2024-CODING-CHALLENGE
// 314/366
// https://www.codewars.com/kata/57faece99610ced690000165

function remove(string) {
  return string.replace(/!+$/, "");
}

console.log(remove("Hi!"));
