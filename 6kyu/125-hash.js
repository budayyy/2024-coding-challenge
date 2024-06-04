//2024-CODING-CHALLENGE
// 125/366
// https://www.codewars.com/kata/527a6e602a7db3456e000a2b

var obj = {
  person: {
    name: "joe",
    history: {
      hometown: "bratislava",
      bio: {
        funFact: "I like fishing.",
      },
    },
  },
};

Object.prototype.hash = function (string) {
  var arr = string.split(".");
  return arr.reduce(function (pv, cv) {
    return pv ? pv[cv] : pv;
  }, this);
};

console.log(hash("obj.person.name"));
