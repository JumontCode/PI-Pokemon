// const {Type} = require("../../db");

// const findAllTypes = async (req, res) => {
//   const types = await Type.findAll();
//   res.status(200).json(types);
// };

// module.exports = findAllTypes;

const axios = require("axios")
const URL = 'https://pokeapi.co/api/v2/type'
const {Type} = require("../../db.js")

const findAllTypes = async(req,res) => {
    try {
        const {data} = await axios(URL)
        const types = data.results.map(e => {
            return e.name
        })

        const allPromises = types.map(async index => {
            const [pokemonType] = await Type.findOrCreate({
                where:{type:index},
                defaults:{
                    type:index
                }
            })
            return pokemonType.dataValues
        })

        Promise.all(allPromises)
        .then(response => {
            res.status(200).json(response)
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = findAllTypes