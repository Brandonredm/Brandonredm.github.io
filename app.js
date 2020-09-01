const getPokemon = () => {

  return $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon'
  })
}

//I want to be able to click on a button and have the text of the button be equal to const pokeselector
// const buttonClick = $('button').on('click', (event) =>
//   (event.target)$pokemondiv.innerText())
// )

//////WRITING IN PROGRESS
const pokeSelector = 'squirtle'


const getPokemonData = () => {
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
  $(".container").append($pokemondiv)
}


$(() => {


getPokemon()
//now that I've got the pokemon I want their names to appear in the html
   .then(makePokemon);
// I want the pokemon to be clickable and give new info on click.
getPokemonData()
    .then((whatisreturned)=>{
      console.log(whatisreturned)
    });

})
