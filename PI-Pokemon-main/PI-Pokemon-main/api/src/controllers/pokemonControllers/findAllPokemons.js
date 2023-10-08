const {Pokemon} = require("../../db.js")

//*Controller for find pokemons
const axios = require("axios")
const URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

const searchPokemons = async(value) => {
    const response = await axios(value)
    const allPromises = response.data.results.map(async index=> {
        const {data} = await axios(index.url)
        return data;
      })
      
      const infoPokemons = await axios.all(allPromises)
      // console.log(pokePromises);
    
    return infoPokemons.map(index => {
        const types = index.types.map(type => {
            return type.type.name
        })
        
        return {
            // "abilities":index.abilities,
            // "base_experience":index.base_experience,
            // "forms":index.forms,
            "height":index.height,
            "id":index.id,
            "name":index.name,
            // "order":index.order,
            "images":index.sprites.other["official-artwork"],
            "stats":index.stats,
            "types":types,
            "weight":index.weight,
        }
    })
}

const dbPokemons = async(model) => {
    const data = await model.findAll()
    return data.map(index => {
        return {...index.dataValues}
      })
}

const findAllPokemons = async(req,res) => {
    try {
        const apiPokemons = await searchPokemons(URL) //recibe la url para mapear a todos los pokemons
        const dbPokemon = await dbPokemons(Pokemon) //recibe el modelo y me trae a todos los pokemons de la DB
        const pokemons = [...apiPokemons, ...dbPokemon]
        res.status(200).send(pokemons)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = findAllPokemons;