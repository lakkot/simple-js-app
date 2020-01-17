var age = 29;
var name = 'Anne';
var favoriteFood = 'snakes';

// alert("Hello World!");

document.write(favoriteFood);

favoriteFood = 'ice cream';

document.write(favoriteFood);

var name = 'Michal';
var age = 36;

document.write('Hi, my name is ' + name + ' and I\'m ' + age + ' years old!');

console.log(2+2);
console.log('2'+'2');
console.log('2'+2);
console.log(parseInt('2')+2);



var numberArray = [1, 2, 3];
var mixedArray = [
  1,
  'two',
  numberArray,
  { age: 5 }
];

console.log(mixedArray[1]); // Outputs 'two'
mixedArray[1] = 2;
console.log(mixedArray[1]); // Outputs 2
console.log(mixedArray[2]);
console.log(numberArray.length); // will output 3


var a = 1;
// The following lines implies: copy the current value of `a`, then assign it to `b`
var b = a;
console.log(a); // 1
console.log(b); // 1
a = 2;
console.log(a); // 2
console.log(b); // still 1 since this what has been copied earlier

var car1 = {
  model: 2019,
  color: "red"
};

// The next code line implies: tell “car2” to refer to what “car1” is referring to
var car2 = car1;

console.log(car1); // {model: 2019, color: "red"};
console.log(car2); // {model: 2019, color: "red"};

// Change the “model” property of the object referred to by “car1”
car1.model = 2018;

console.log(car1); // {model: 2018, color: "red"}
console.log(car2); // {model: 2018, color: "red"} -> Notice that “model” is now also 2018, even though the change was done by way of “car1”

var myVariable = 'Hi you!';
console.log(typeof myVariable);

var isItTrue = false;
console.log(typeof isItTrue);

var myVariable = undefined;
console.log(typeof myVariable);
