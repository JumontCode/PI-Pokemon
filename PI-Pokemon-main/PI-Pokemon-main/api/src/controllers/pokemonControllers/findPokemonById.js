const Pokemon = require('../tablePokemon')

//*Controller for find pokemons by id
const findPokemonById = async (id) => {
    try {
      const findPokemon = await Pokemon.findByPk(id);
      if (!findPokemon) {
        return "Pokemon no encontrado";
      }
      return findPokemon;
    } catch (error) {
      return {error: error.message}
    }
  };

  module.exports = findPokemonById;