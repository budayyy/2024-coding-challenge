// 2024-CODING-CHALLENGE
// 366/366
// https://www.codewars.com/kata/54fe05c4762e2e3047000add

class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  //YOUR CODE HERE...
  isWorthIt() {
    return this.draft - this.crew * 1.5 > 20;
  }
}

console.log(new Ship(15, 10).isWorthIt());
