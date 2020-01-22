// empty repository for pokemons
var repository = [];
// objects to fill the array
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
//add objects to pokemon array
repository.push(charmander, bulbasaur, squirtle);


console.log(repository);

// iterate name and height from the pokemon array, emphasize ones above 0.6 height
for (i = 0; i < repository.length; i++) {
  if (repository[i].height > 0.6) {
  document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') - Wow that\'s big! </p>');
  } else {
  document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') </p>');
  }
}
