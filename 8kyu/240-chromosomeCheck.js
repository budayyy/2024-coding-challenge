// 2024-CODING-CHALLENGE
// 240/366
// https://www.codewars.com/kata/56530b444e831334c0000020

function chromosomeCheck(sperm) {
  if (sperm.includes("Y")) {
    return "Congratulations! You're going to have a son.";
  } else {
    return "Congratulations! You're going to have a daughter.";
  }
}

console.log(chromosomeCheck("XY"));
