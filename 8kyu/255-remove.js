// 2024-CODING-CHALLENGE
// 255/366
// https://www.codewars.com/kata/57fae964d80daa229d000126

function remove(string) {
  //coding and coding....
  let newArray = string;
  let end = string.split("").reverse()[0];

  return end === "!" ? newArray.slice(0, -1) : newArray;
}

console.log(remove("Hi!"));
