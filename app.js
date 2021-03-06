const getPokemon = () => {

  return $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=26',
  })
}

//I want to be able to click on a button and have the text of the button be equal to const pokeselector
//const buttonClick = () => {
  //I want this function to return the innertext/html of selected button
//  return 1
//});
//}
//I used this so that pokeSelector is equal to what is returned by button click, so that it can enter the getPokemonData function
//const pokeSelector = buttonClick();

//////WRITING IN PROGRESS
//const pokeSelector = "blastoise"


const getPokemonData = (pokeSelector) => {
  return $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/' + pokeSelector
  })
}
  ///////

const makePokemon = (data) => {
  const pokemonArray = data.results;
  pokemonArray.forEach((pokemon, i) => {
    const name = pokemon.name;
    placePokemonOnPage(name);
  });

}


const placePokemonOnPage = (name) => {
  const $pokemondiv = $('<button>')
  $pokemondiv.text(name)
  $pokemondiv.addClass('pokebutton')
  $(".container").append($pokemondiv)
}

const resetPokemon = () => {
  $('.galar').empty();
  $('.typeholder').empty();
}

const renderPokemon = (data) => {
  const $imageURL = data.sprites.front_default
  console.log(data)
   const $pokemonImage = $('<img>')
   $pokemonImage.attr('src', $imageURL)
   $('.galar').append($pokemonImage)
}

const addTheTypeToTheModal = (pokemontype) => {
  const $typeOfPokemon = $('<div>')
  $typeOfPokemon.addClass('poketype')
  //I need to grab the text of the type from the typearray
  $typeOfPokemon.text(pokemontype.type.name);

  $('.typeholder').append($typeOfPokemon)


}

const makePokemonTypeModal = (pokemonData) => {
  const typeArray = pokemonData.types
  typeArray.forEach((pokemontype, i) => {
    addTheTypeToTheModal(pokemontype);
    // const $typeOfPokemon = $('<div>')
    // $typeOfPokemon.addClass('poketype')
    // //I need to grab the text of
    // $typeOfPokemon.text(pokemontype.type.name);
    //
    // $('.typeholder').append($typeOfPokemon)

  });

}

const openModal = () => {
  const $modal = $('.modal');
  if ($(event.target).is('img')) {
  $modal.css("display", "block");

  }
}

const closeModal = () => {
  const $modal = $('.modal');
  $modal.css("display", "none");
}

$(() => {


getPokemon()
//now that I've got the pokemon I want their names to appear in the html
   .then(makePokemon);
// I want the pokemon to be clickable and give new info on click.
///Im thinking click will only work on original html
$('body').on('click', (event)=>{
  const pokeSelector = $(event.target).text();
  if ($(event.target).is('button.pokebutton')) {
    /// I want this to run buttonClick()
      // $('.galar').empty();
      // $('.typeholder').empty();
      resetPokemon();
    getPokemonData(pokeSelector)
        .then((pokemonData)=>{
          renderPokemon(pokemonData);

          makePokemonTypeModal(pokemonData);

        });
  //  console.log('yesss');
  }
  $('body').on('click', (event) => {
      openModal();
  })
  $('.modalclose').on('click', (event) => {
      closeModal();
  })
//
  });
})
