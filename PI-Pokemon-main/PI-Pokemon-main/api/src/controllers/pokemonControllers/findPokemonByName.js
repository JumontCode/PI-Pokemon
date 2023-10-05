const Pokemon = require('../tablePokemon')
const axios = require("axios");


//*Controller for find pokemons by name
const findPokemonByName = async (name) => {
    const findName = name.toLowerCase();
    // peticion a la base de datos
  
    const dbPokemons = await Pokemon.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${findName}%`,
        },
      },
    });
  
    // peticion a la API
    const response = await axios.get(
      `https://api-url.com/pokemons?name=${findName}`
    );
    const apiPokemons = response.data;
    console.log(apiPokemons);
  
    // copia de la base de datos y la API
    const Pokemons = [...dbPokemons, ...apiPokemons];
  
    if (Pokemons.length === 0) {
      return "No existen pokemones con ese nombre";
    }
    return Pokemons;
  };

  module.exports = findPokemonByName;