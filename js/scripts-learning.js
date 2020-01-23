
var age = 40;
if (age <= 11) {
  console.log('a child')
} else if (age > 11 && age <20) {
  console.log('a teenager')
} else if (age >= 20 && age < 40) {
  console.log('a young person')
} else {
  console.log('full grown')
}

var result = age >= 40 ? 'fully grown' : 'still young';
console.log(result);

var ages = [20, 30, 25, 22, 31];
console.log(ages.length);


// a function without a return statement
function add(number1, number2) {
  console.log(number1 + number2);
}
var result = add(1, 2);
console.log(result)

function multiply(number1, number2) {
  return number1 * number2;
}
var result2 = multiply(3, 5);
console.log(result2);


//variable y will not be defined outside the foo function
var x = 5;

function foo(){
  var y = 10;
  console.log("From inside foo(): x = " + x);
  console.log("From inside foo(): y = " + y);
}

foo();
console.log("From outside foo(): x = " + x);
console.log("From outside foo(): y = " + y);
