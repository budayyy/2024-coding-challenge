// 2024-CODING-CHALLENGE
// 288/366
// https://www.codewars.com/kata/577bd026df78c19bca0002c0

function correct(string) {
  // your code here
  let huruf = {
    1: "I",
    0: "O",
    5: "S",
  };

  let result = "";
  string = string.split("");

  for (let i = 0; i < string.length; i++) {
    if (huruf[string[i]]) {
      result += huruf[string[i]];
    } else {
      result += string[i];
    }
  }

  return result;
}

console.log(correct("DUBL1N"));
console.log(correct("IF-RUDYARD KIPLING"));
