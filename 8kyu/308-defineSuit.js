// 2024-CODING-CHALLENGE
// 308/366
// https://www.codewars.com/kata/5a360620f28b82a711000047

function defineSuit(card) {
  // good luck

  return card.slice(-1) === "♠"
    ? "spades"
    : card.slice(-1) === "♣"
    ? "clubs"
    : card.slice(-1) === "♦"
    ? "diamonds"
    : "hearts";
}

console.log(defineSuit("Q♠"));
