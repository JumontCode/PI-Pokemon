// const { Pokemon, Type } = require("../../db");
// const axios = require("axios");
// const { Sequelize, DataTypes, Op } = require('sequelize');
// const { v4: uuidv4 } = require('uuid');


// const URL = "https://pokeapi.co/api/v2/pokemon/";

// const findPokemonById = async (req, res) => {
//   const { idPokemon } = req.params;

//   const maria = 'fdba4df1-9e3d-4237-9663-c26edfbe17e5';
//   const luis = '06120b21-9131-48bf-985b-ea9349433cbe';

//   function validateUUID(uuid) {
//     const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
//     return uuidRegex.test(uuid);
//   }

//   if(validateUUID(idPokemon)){
//      res.status(200).json('es valida');

//   }
//     console.log(!validateUUID(luis) ? 'no es valida' : 'es valida');
//     res.end();

    
//   // try {
//   //   const searchPokemon = await Pokemon.findOne({
//   //     where: {
//   //       id: id,
//   //     },
//   //   });
//   //   if(!searchPokemon){
//   //     res.status(404).json({ error: "Pokemon no encontrado" });
//   //   }
//   //   else{
//   //     res.status(200).json(searchPokemon);
//   //   }
//   // } catch (error) {
//   //   res.status(500).json({ error: error.message });
//   // }
// };

// //     if(Number(id)){}
// //   else{
// //     //* FIND POKEMON IN API
// //       try {
// //         const response = axios.get(`${URL}${id}`);
// //       if (response.data) {
//   //         const { id, name, image, life, stroke, defense, speed, height, weight } = response.data;
//   //         res.status(200).json(response.data);
//   //       }
//   //       } catch (error) {
//     //         res.status(500).json({ error: error.message });
//     //   }
//     // }
//     // }
    
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/pokemon/";
const {Pokemon,Type} = require("../../db.js")

const findPokemonById = async(req,res) => {
    const {idPokemon} = req.params;
    try {
  // //* FIND POKEMON IN DB
        const findPokemon = await Pokemon.findByPk(idPokemon,{
            include:{
                model:Type,
                attributes:["name"],
                through:{
                    attributes:[],
                },
            },
        })
        if(findPokemon){
            return res.status(200).send(findPokemon.dataValues)
        }
        const {data} = await axios(`${URL}${idPokemon}`)
        res.status(200).send(data)
        console.log(data);
    } catch (error) {
    }
}

  module.exports = findPokemonById;