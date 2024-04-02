//2024-CODING-CHALLENGE
// 62/366
// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
  //code here
  const lowerStr = str.toLowerCase();
  let hurufX = 0;
  let hurufO = 0;

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === "x") {
      hurufX += 1;
    } else if (lowerStr[i] === "o") {
      hurufO += 1;
    }
  }

  return hurufX === hurufO;
}

console.log(XO("xxOo"));
