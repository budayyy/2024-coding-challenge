// 2024-CODING-CHALLENGE
// 326/366
// https://www.codewars.com/kata/56fcfad9c7e1fa2472000034

function evil(n) {
  const binary = n.toString(2);

  const onesCount = binary.split("").filter((bit) => bit === "1").length;

  if (onesCount % 2 === 0) {
    return "It's Evil!";
  } else {
    return "It's Odious!";
  }
}

console.log(evil(4));
