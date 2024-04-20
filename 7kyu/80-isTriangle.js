//2024-CODING-CHALLENGE
// 80/366
// https://www.codewars.com/kata/56606694ec01347ce800001b

function isTriangle(a,b,c)
{
     return a + b > c && a + c > b && b + c > a;

}

console.log(isTriangle(1,2,2))
