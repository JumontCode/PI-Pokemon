const Pokemon = require("../tablePokemon");

// //*Controller for create pokemons
const createPokemon = async (req, res) => {
  try {
    const { name, image, life, stroke, defense, speed, height, weight, types } =
      req.body;

    if (!name || !image || !life || !stroke || !defense) {
      res.status(400).send("faltan datos");
    }
    
    const newPokemon = await Pokemon.create(
      {name, image, life, stroke, defense, speed, height, weight, types}
    );

    newPokemon.addTypes(types);
      res.status(201).send(newPokemon);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
}

module.exports = createPokemon;
