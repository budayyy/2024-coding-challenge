//2024-CODING-CHALLENGE
// 141/366
// https://www.codewars.com/kata/54149054c1f3a6675b0009c2

function type(val) {
  // Check for basic types using typeof
  if (val === undefined) {
    return "Undefined";
  }

  if (val === null) {
    return "Null";
  }

  const type = val.constructor.name;

  if (type === "String" && !isNaN(val)) {
    return "String Numeric";
  }

  if (type !== "Number") {
    return type;
  }

  if (Number.isNaN(val)) {
    return "Number NaN";
  }

  if (Number.isInteger(val)) {
    return "Number Integer";
  }

  if (Number.isFinite(val)) {
    return "Number Float";
  }

  return "Number Infinite";
}

console.log(type("abc"));
