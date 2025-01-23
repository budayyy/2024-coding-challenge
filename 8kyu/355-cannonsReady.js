// 2024-CODING-CHALLENGE
// 355/366
// https://www.codewars.com/kata/5748a883eb737cab000022a6

const cannonsReady = (gunners) => {
  //your solution here
  for (let key in gunners) {
    if (gunners[key] === "nay") {
      return "Shiver me timbers!";
    }
  }
  return "Fire!";
};

console.log(
  cannonsReady({ Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" })
);
