//2024-CODING-CHALLENGE
// 92/366
// https://www.codewars.com/kata/566fc12495810954b1000030/

// function nbDig(n, d) {
//   // your code
//   let count = 0;
//   let result = [...Array(n)]
//     .map((value, index) =>
//       d === 0 ? Math.pow(index, 2) : Math.pow(index + 1, 2)
//     )
//     .filter((x) => String(x).includes(d));
//   result.map(function (v, i) {
//     let k = v.toString().split("");
//     for (let j = 0; j <= k.length; j++) {
//       if (Number(k[j]) == d) {
//         count++;
//       }
//     }
//   });
//   return count;
// }

function nbDig(n, d) {
  let count = 0;
  let newArray = [];
  for (let i = 0; i <= n; i++) {
    let angka = i * i;
    if (String(angka).includes(d)) {
      newArray.push(angka);
    }
  }

  for (let j = 0; j < newArray.length; j++) {
    let kata = newArray[j].toString().split("");
    for (let k = 0; k < kata.length; k++) {
      if (kata[k] == d) {
        count++;
      }
    }
  }

  return count;
}

// console.log(nbDig(10, 0))
// console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
