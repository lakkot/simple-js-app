var repository = [];

var charmander = {
  name: 'Charmander',
  height: 6,
  abilities: ['blaze', 'solar-power']
}

var bulbasaur = {
  name: 'Bulbasaur',
  height: 7,
  abilities: ['chlorophyll', 'overgrow']
}

var squirtle = {
  name: 'Squirtle',
  height: 5,
  abilities: ['rain-dish', 'torrent']
}
repository.push(charmander, bulbasaur, squirtle);


console.log(repository);

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
