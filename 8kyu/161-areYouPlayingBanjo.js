// 2024-CODING-CHALLENGE
// 161/366
// https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
  // Implement me
  const letter = name.split("")[0];
  if (letter === "R" || letter === "r") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

console.log(areYouPlayingBanjo("Adam"));
