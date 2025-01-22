// 2024-CODING-CHALLENGE
// 354/366
// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd

function pointsPer48(ppg, mpg) {
  return mpg === 0 ? 0 : Number(((ppg * 48) / mpg).toFixed(1));
}

console.log(pointsPer48(12, 20));
