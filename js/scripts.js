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
