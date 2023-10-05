const Pokemon = require("../tablePokemon");

  //*Controller for find pokemons
const findAllPokemons = async () => {
  const pokemon = await Pokemon.findAll();
  return pokemon;
};

module.exports = findAllPokemons;
