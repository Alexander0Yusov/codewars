// Description:
// Jack really likes his number five: the trick here is that you have to multiply each number
// by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

// Solution:

function myFunction(number) {
  const symbols = String(number).replace("-", "").length;
  return number * Math.pow(5, symbols);
}

console.log(myFunction(66)); //66*5^2=1650
