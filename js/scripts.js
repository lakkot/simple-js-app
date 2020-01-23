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

/*printing first aray to console - inactive
console.log(repository);
*/

/* iterate name and height from the pokemon array, emphasize ones above 0.6 height - inactive
for (i = 0; i < repository.length; i++) {
  if (repository[i].height > 0.6) {
  document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') - Wow that\'s big! </p>');
  } else {
  document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') </p>');
  }
}
*/

/* code like above, but written as function (in case you want to use it multiple times) - inactive
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
*/

//second pokemon array
var repository2 = [
  {name: 'Pidgeot', height: 1.5, abilities: ['keen-eye', 'tangled-feet']},
  {name: 'Vulpix', height: 0.6, abilities: ['flash-fire', 'drought']},
  {name: 'Pikachu', height: 0.4, abilities: ['static', 'lightningrod']}
];

// simmilar function, but with parameters in order to be used with multiple arrays
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


// first function with a 'return' statement. Simple division of two numbers with a not about not dividing with 0
function divide(dividend, divisor) {
  if (divisor === 0) {
    return 'What is wrong with you!'
  }else {
    var division = dividend / divisor;
    return division;
  }
}


console.log(divide(5, 10));
console.log(divide(10, 0));
