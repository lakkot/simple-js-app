//create the ultimate repository for all Pokemons in IIFE
var pokemonRepository = (function() {
  //empty repository
  var repository = [];
  //variableto get the API link, where the pokemon list will come from
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  //choosing variable for modal
  var $modalContainer = document.querySelector('#modal-container');
  //add line item
  function add(pokemon) {
    repository.push(pokemon);
  }
  //see all items
  function getAll() {
    return repository;
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
    $button.innerText = listItem.name;
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


    //get data from details API for the selected pokemon
    function loadDetails(item) {
      var url = item.detailsUrl;
      return fetch(url).then(function(response) {
        return response.json();
      }).then(function(details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
        item.abilities = details.abilities;
      }).catch(function(e) {
        console.error(e);
      });
    };

    //show pokemon details by calling the loadDetails API function (on click - through event listenet in alllistitem function
    function showDetails(item) {
      var $textContainer = document.querySelector('.modal-left');
      var $imageContainer = document.querySelector('#modal-image');
      pokemonRepository.loadDetails(item).then(function() {
        $textContainer.innerHTML ='';
        $imageContainer.innerHTML ='';
        var $modalName = document.createElement('h1');
        $modalName.innerText = item.name;

        var $modalHeight = document.createElement('p');
        $modalHeight.classList.add('height');
        $modalHeight.innerText = 'Height: ' + item.height + ' meters';

        var $modalDescriprion = document.createElement('p');
        $modalDescriprion.classList.add('description');
        $modalDescriprion.innerText = item.abilities[0].ability.name + ', ' + item.abilities[1].ability.name;
        //$modalDescriprion.innerText = abilitiesArray;

        var $modalImage = document.createElement('img');
        $modalImage.src = item.imageUrl;

        $textContainer.appendChild($modalName);
        $textContainer.appendChild($modalHeight);
        $textContainer.appendChild($modalDescriprion);
        $imageContainer.appendChild($modalImage);

        console.log(item);

        $modalContainer.classList.add('is-visible');
      });
    };

    document.querySelector('.close-modal').addEventListener('click', () => {
      $modalContainer.classList.remove('is-visible');
    })

  //make functions available from outside the IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadDetails: loadDetails,
    showDetails: showDetails,
    loadList: loadList
  };
}());


//print items fetched from API to ultimateRepository
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(item) {
    pokemonRepository.addListItem(item);
  });
});
