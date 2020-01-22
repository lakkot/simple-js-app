
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
