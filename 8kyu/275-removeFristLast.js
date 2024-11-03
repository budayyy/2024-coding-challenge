// 2024-CODING-CHALLENGE
// 275/366
// https://www.codewars.com/kata/570597e258b58f6edc00230d

function array(string) {
  // TODO
  string = string.split(",");

  return string.length < 3 ? null : string.slice(1, -1).join(" ");
}

console.log(array("1,2,3,4,5,6,7"));
