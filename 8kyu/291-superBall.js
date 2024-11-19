// 2024-CODING-CHALLENGE
// 291/366
// https://www.codewars.com/kata/53f0f358b9cb376eca001079

var Ball = function (ballType = "regular") {
  // your code goes here
  this.ballType = ballType;
};

let ball1 = new Ball();
let ball2 = new Ball("super");

ball1.ballType; //=> "regular"
ball2.ballType; //=> "super"

console.log(ball1);
console.log(ball2);
