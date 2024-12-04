// 2024-CODING-CHALLENGE
// 306/366
// https://www.codewars.com/kata/557b5e0bddf29d861400005d

function converter(mpg) {
  const MILES_TO_KILOMETERS = 1.609344;
  const GALLONS_TO_LITERS = 4.54609188;
  //code to convert miles per imperial gallon to kilometers per liter
  let result = (mpg * MILES_TO_KILOMETERS) / GALLONS_TO_LITERS;
  return parseFloat(result.toFixed(2));
}

console.log(converter(10));
