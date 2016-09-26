// 1 - Write a function declaration that takes no arguments and returns the value 4
var one = function () {
  return 4;
}
console.log(one(7));
/*
2 - Write a function declaration that takes two arguments and returns the value
    of the result of the multiplication of both arguments
*/
var two = function(first, second) {
  return first * second;
}
console.log(two(3,5));
// 3 - Write a function expression that takes one argument and console logs that value.
function three (first){
  console.log(first);
}

// 4 - Write a function declaration that takes a number and divides it by two.
var four = function (num){
  return num/2;
}
console.log(four(16));
/*
5 - Call the function from 4 and pass it into the function from 2 called with
    the arguments 10, 20. Console log the result.
*/
four(two(10,20));

console.log("result", four(two(10,20)));
