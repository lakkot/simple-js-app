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

printArrayDetails2(repository2);

// same effect, bu with using a forEach loop
function printArrayDetails3(pokemonList) {
  if (pokemonList.height > 0.6) {
    document.write('<p>' + pokemonList.name + ' (height: ' + pokemonList.height + ') - Wow that\'s big! </p>')
  } else {
    document.write('<p>' + pokemonList.name + ' (height: ' + pokemonList.height + ') </p>')
  }
}

repository.forEach(printArrayDetails3);

// this time, creating an array that inside a variale, to enable control of access to the array
var pokemonRepository3 = (function () {
  //actual repository (empty)
  var repository3 = [];

  //functions that control how you can access the array
  function add(pokemon) {
    if (typeof(pokemon) === 'object' || Object.keys(pokemon) === 'name' && 'height' && 'abilities') {
      repository3.push(pokemon);
    } else {
      document.write('<p>Please reformat your Pokemon as Object</p>')
    }
  }

  function getAll() {
    return repository3;
  }
  //return function results to be used outsie the function (e.g. pokemonRepository3.add)
  return {
    add: add,
    getAll: getAll
  };
})();

//new set of pokemons
var golbat = {
  name: 'Golbat',
  height: 1.6,
  abilities: ['inner-focus', 'infiltrator']
}

var venonat = {
  name: 'Venonat',
  height: 1.0,
  abilities: ['runaway', 'tinted-legs']
}

var machoke = {
  name: 'Machoke',
  height: 1.5,
  abilities: ['guts', 'stead-fast']
}
//pokemon that is not an object, to try out the typeof function
var falsePokemon = 12;

//adding pokemons to new arraay (how to do it in 1 line?)
pokemonRepository3.add(falsePokemon);
pokemonRepository3.add(golbat);
pokemonRepository3.add(venonat);
pokemonRepository3.add(machoke);
console.log(pokemonRepository3.getAll());

//reusing the same printArrayDetails3 function used in previous array with a forEach loop ('pokemonRepository3.getAll()' would be equivalent to repository3 if the array was accessible globally)
pokemonRepository3.getAll().forEach(printArrayDetails3);
