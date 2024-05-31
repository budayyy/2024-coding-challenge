//2024-CODING-CHALLENGE
// 121/366
// https://www.codewars.com/kata/6656a4687f3e4eb5fb520817

// function evenOrOdd(n) {
//   //'Even' or 'Odd'
//   return n % 2 === 0 ? "Even" : "Odd";
// }

const evenOrOdd = new Proxy(
  function (number) {
    return number % 2 === 0 ? "Even" : "Odd";
  },
  {
    get: function (target, prop) {
      let number = Number(prop);
      if (isNaN(number)) {
        return undefined;
      }
      return number % 2 === 0 ? "Even" : "Odd";
    },
  }
);

console.log(evenOrOdd(2));
