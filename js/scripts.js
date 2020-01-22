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


for (i = 0; i < repository.length; i++) {
  if (repository[i].height > 6) {
  document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') - Wow that\'s big! </p>');
} else {
  document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') </p>');
}
}
