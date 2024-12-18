// 2024-CODING-CHALLENGE
// 319/366
// https://www.codewars.com/kata/52adc142b2651f25a8000643

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  // TODO
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

const sleigh = new Sleigh();

console.log(sleigh.authenticate("Santa Claus", "Ho Ho Ho!"));
