// 2024-CODING-CHALLENGE
// 177/366
// https://www.codewars.com/kata/56efc695740d30f963000557

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.split("")
    .map((letter) =>
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase()
    )
    .join("");
};

console.log("heLLo world".toAlternatingCase());
