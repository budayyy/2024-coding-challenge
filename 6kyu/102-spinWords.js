//2024-CODING-CHALLENGE
// 102/366
// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
  //TODO Have fun :)
  return string
    .split(" ")
    .map(function (value, index) {
      if (value.length > 4) {
        value = value.split("").reverse().join("");
      }
      return value;
    })
    .join(" ");
}

console.log(spinWords("Just kidding there is still one more"));
