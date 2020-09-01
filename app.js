const getPokemon = () => {

  return $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon'
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


$(() => {


getPokemon()
//now that I've got the pokemon I want their names to appear in the html
   .then(makePokemon);
// I want the pokemon to be clickable and give new info on click.
///Im thinking click will only work on original html
$('body').on('click', (event)=>{
  const pokeSelector = $(event.target).text();
  if ($(event.target).is('button')) {
    /// I want this to run buttonClick()
    getPokemonData(pokeSelector)
        .then((pokemonData)=>{
        const $imageURL = (pokemonData.sprites.front_default)
        console.log(pokemonData)
         const $pokemonImage = $('<img>')
         $pokemonImage.attr('src', $imageURL)
         $('.galar').append($pokemonImage)
        });
  //  console.log('yesss');
  }


//
});
})
