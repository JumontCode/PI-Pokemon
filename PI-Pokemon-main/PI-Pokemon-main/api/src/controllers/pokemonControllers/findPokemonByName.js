const {Pokemon, Type} = require("../../db");
const axios = require("axios");

const URL = "https://pokeapi.co/api/v2/pokemon/";

//*Controller for find pokemons by name
const findPokemonByName = async (req, res) => {
  const {name} = req.query;
  try {
      const dbPokemons = await Pokemon.findOne({
          where: {name:name},
          include:{
              model:Type,
              attributes:["name"],
              through:{
                  attributes:[],
              },
          },
      })
      if(dbPokemons){
          return res.status(200).send(dbPokemons.dataValues)
      }
      const {data} = await axios(`${URL}${name}`.toLowerCase())
      res.status(200).send(data)

  } catch (error) {
      // if(error.response.status === 404) {
      //     return res.status(404).send(`Pokemon con el nombre ${name} no Encontrado`)
      // }
      res.status(500).send(error.message)
  }
};
module.exports = findPokemonByName;