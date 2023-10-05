const { Pokemon } = require('../../db'); 

// //*Controller for create pokemons
const createPokemon = async (
    name,image,life,stroke,
    defense,speed,height,weight
) => {
  const newPokemon = 
        await Pokemon.create({name,image,life,stroke,
        defense,speed,height,weight});
  return newPokemon;
};

module.exports = createPokemon;