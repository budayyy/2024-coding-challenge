//2024-CODING-CHALLENGE
// 41/366
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name) {
  // code away
  return name
    .split(" ")
    .map((value, index) => value[0])
    .join(".")
    .toUpperCase();
}

console.log(abbrevName("ahQfO dtRobgZamtSrnnb"));
