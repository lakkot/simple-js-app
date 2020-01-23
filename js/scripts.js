var repository = [];

var charmander = {
  name: 'Charmander',
  height: 0.6,
  abilities: ['blaze', 'solar-power']
}

var bulbasaur = {
  name: 'Bulbasaur',
  height: 0.7,
  abilities: ['chlorophyll', 'overgrow']
}

var squirtle = {
  name: 'Squirtle',
  height: 0.5,
  abilities: ['rain-dish', 'torrent']
}
repository.push(charmander, bulbasaur, squirtle);


console.log(repository);


for (i = 0; i < repository.length; i++) {
  if (repository[i].height > 0.6) {
  document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') - Wow that\'s big! </p>');
  } else {
  document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') </p>');
  }
}

// code like above, but writeen as function (in case you want to use it multiple times)
function printArrayDetails() {
  for (i = 0; i < repository.length; i++) {
    if (repository[i].height > 0.6) {
    document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') - Wow that\'s big! </p>');
    } else {
    document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') </p>');
    }
  }
}

printArrayDetails();

// simmilar function, but with parameters in order to be used with multiple arrays
var repository2 = [
  {name: 'Pidgeot', height: 1.5, abilities: ['keen-eye', 'tangled-feet']},
  {name: 'Vulpix', height: 0.6, abilities: ['flash-fire', 'drought']},
  {name: 'Pikachu', height: 0.4, abilities: ['static', 'lightningrod']}
];

function printArrayDetails2(pokemonList) {
  for (i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 0.6) {
      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow that\'s big! </p>')
    } else {
      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') </p>')
    }
  }
}

printArrayDetails2(repository);
printArrayDetails2(repository2);
