//create the ultimate repository for all Pokemons in IIFE
var ultimateRepository = (function() {
  //empty repository
  var ultimateRepository = [];
  //variableto get the API link, where the pokemon list will come from
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  //add line item
  function add(pokemon) {
    ultimateRepository.push(pokemon);
  }
  //see all items
  function getAll() {
    return ultimateRepository;
  }
  //create list of items based on what's pulled from API
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
  //show pokeon details (on click - through event listenet in alllistitem function
  function showDetails(pokemon) {
    console.log(pokemon);
  };
  //promis to load list from the API (only name and url)
  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (error) {
        console.log(error);
      })
    };
  //make functions available from outside the IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList
  }
}());

/*
//print items from ultimateRepository to html
ultimateRepository.getAll().forEach(
  function(item) {
    ultimateRepository.addListItem(item);
  }
);
*/
//print items fetched from API to ultimateRepository
ultimateRepository.loadList().then(function() {
  ultimateRepository.getAll().forEach(function(item) {
    ultimateRepository.addListItem(item);
  });
});
