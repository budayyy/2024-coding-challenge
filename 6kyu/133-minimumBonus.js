//2024-CODING-CHALLENGE
// 133/366
// https://www.codewars.com/kata/595ef0c7458ad5facc000019

function minimumBonus(scores) {
  let bonuses = Array(scores.length).fill(1);

  scores.forEach((score, i) => {
    if (i > 0 && score > scores[i - 1]) {
      bonuses[i] = bonuses[i - 1] + 1;
    }
  });

  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1]) {
      bonuses[i] = Math.max(bonuses[i], bonuses[i + 1] + 1);
    }
  }
  const totalBonuses = bonuses.reduce((sum, bonus) => sum + bonus, 0);
  return totalBonuses;
}

console.log(minimumBonus([20, 30, 10, 30, 40, 10, 20, 30, 40, 30]));
console.log(minimumBonus([10, 20, 30, 20]));
