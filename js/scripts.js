//adding title with JS
var $mainTitle = document.querySelector('h1');
console.log($mainTitle.innerText); // -> <h1></h1>
$mainTitle.innerText = 'Pokedex';
console.log($mainTitle.innerText); // -> <h1>*</h1>


//-----Creating various repositories - empty, full and IIFE accessible------
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

//second pokemon array
var repository2 = [
  {name: 'Pidgeot', height: 1.5, abilities: ['keen-eye', 'tangled-feet']},
  {name: 'Vulpix', height: 0.6, abilities: ['flash-fire', 'drought']},
  {name: 'Pikachu', height: 0.4, abilities: ['static', 'lightningrod']}
];
//third array - IIFE format
var pokemonRepository3 = (function() {
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

//adding pokemons to new array
pokemonRepository3.add(golbat);
pokemonRepository3.add(venonat);
pokemonRepository3.add(machoke);
//-------------end of pokemon arrays--------------------------

//create the ultimate repository for all Pokemons in IIFE
var ultimateRepository = (function() {
  var ultimateRepository = []

  function add(pokemon) {
    ultimateRepository.push(pokemon);
  }

  function getAll() {
    return ultimateRepository;
  }

  function addListItem(listItem) {
    //assign variable to ul list
    var $pokemonMainList = document.querySelector('ul');
    // assign variable to list item (not existing in html)
    var $listItem = document.createElement('li');
    // assign variable to button (not existing in html)
    var $button = document.createElement('button');
    // creating a conditional from what will be written inside the button
    if (listItem.height > 0.6) {
      $button.innerText = listItem.name + ' - Biggie!';
    } else {
      $button.innerText = listItem.name;
    }
    //adding a CSS class to the button
    $button.classList.add('button');
    //nesting list items inside a ul item
    $pokemonMainList.appendChild($listItem);
    //nesting a button inside the list item
    $listItem.appendChild($button);
    $button.addEventListener('click', function() {
      showDetails(listItem);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  }
}());

//function to push items to one big array
function combineArrays(oldArray, newArray) {
  for (i = 0; i < oldArray.length; i++) {
    newArray.push(oldArray[i]);
  }
};

//copy line items from to the IIFE protected ultimateRepository
combineArrays(repository, ultimateRepository.getAll());
combineArrays(repository2, ultimateRepository.getAll());
combineArrays(pokemonRepository3.getAll(), ultimateRepository.getAll());

//print items from ultimateRepository to html
ultimateRepository.getAll().forEach(
  function(item) {
    ultimateRepository.addListItem(item);
  }
);
