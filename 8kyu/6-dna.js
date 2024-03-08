//2024-CODING-CHALLENGE
// 6/366
//https://www.codewars.com/kata/5556282156230d0e5e000089/

// function DNAtoRNA(dna) {
//   let result = "";
//   for (i = 0; i < dna.length; i++) {
//     if (dna[i] == "T") {
//       result = result + "U";
//     } else {
//       result += dna[i];
//     }
//   }
//   return result;
// }

// function DNAtoRNA(dna) {
//   return dna
//     .split("")
//     .map((x, i) => (x === "T" ? "U" : x))
//     .join("");
// }

// function DNAtoRNA(dna) {
//   return dna.split("T").join("U");
// }

const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("GACCGCCGCC"));
