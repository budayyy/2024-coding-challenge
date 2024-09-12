// 2024-CODING-CHALLENGE
// 223/366
// https://www.codewars.com/kata/56f695399400f5d9ef000af5

// function correctTail(body, tail) {
//  return body.split("").reverse()[0] === tail
// }

function correctTail(body, tail) {
  return body[body.length - 1] == tail;
}

console.log(correctTail("Fox", "x"));
