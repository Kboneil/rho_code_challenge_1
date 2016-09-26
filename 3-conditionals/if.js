// 1 - Write a statement that console logs "Hello" if the two variables are equal


var first = 3;
var second = 5;

if (first==second) {
  console.log("Hello");
} else {                    // 2 - Expand your answer above to console log
  console.log("Goodbye");  //"Goodbye" if the variables are not equal
}

/*
3 - Write a statement that assigns the value of the addition of the first & second variables
    to a new variable called third IF first is greater than second. If second is greater than
    first assign the difference of the first & second variables to third.
*/
if(first>second){
  var third=first+second;
} else {
  var third=second-first;
}
console.log(third);
