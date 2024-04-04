//2024-CODING-CHALLENGE
// 64/366
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// function dnaStrand(dna) {
//   let result = "";
//   for (i = 0; i < dna.length; i++) {
//     if (dna[i] === "A") {
//       result = result + "T";
//     } else if (dna[i] === "T") {
//       result = result + "A";
//     } else if (dna[i] === "G") {
//       result = result + "C";
//     } else {
//       result = result + "G";
//     }
//   }
//   return result;
// }

// const dnaStrand = (dna) =>
//   dna
//     .split("")
//     .map((x, i) => (x === "A" ? "T" : x === "T" ? "A" : x === "G" ? "C" : "G"))
//     .join("");

let pairs = { A: "T", T: "A", C: "G", G: "C" };
const dnaStrand = (dna) => dna.replace(/./g, (c) => pairs[c]);

console.log(dnaStrand("ATTGC"));
