//2024-CODING-CHALLENGE
// 117/366
// https://www.codewars.com/kata/5287e858c6b5a9678200083c

// function narcissistic(value) {
//   // Code me to return true or false
//   let pangkat = value.toString().length;
//   let angka = value.toString().split("");
//   let result = 0;

//   for (let i = 0; i < angka.length; i++) {
//     result += Math.pow(Number(angka[i]), pangkat);
//     console.log(result)
//   }

//   return value.toString().length == result.toString().length;
// }

function narcissistic(value) {
  return (
    String(value)
      .split("")
      .map((x) => Math.pow(x, String(value).length))
      .reduce((a, b) => a + b) === value
  );
}

console.log(narcissistic(487));
