const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//*Controllers pokemon models
const findAllPokemons = require("../controllers/pokemonControllers/findAllPokemons");
const findPokemonById = require("../controllers/pokemonControllers/findPokemonById");
const findPokemonByName = require('../controllers/pokemonControllers/findPokemonByName')
const createPokemon = require('../controllers/pokemonControllers/createPokemon')

//*Controllers pokemonTypes models
const findAllTypes = require("../controllers/typeControllers/findAllTypes");
const postType = require("../controllers/typeControllers/createType");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/', (req, res) => {
    res.send('Server is running...')
})

//Pokemon routs
router.get("/pokemons", findAllPokemons);                //* SUCCESS....
router.post("/pokemons/name", findPokemonByName);      //* SUCCESS....
router.get("/pokemons/:idPokemon", findPokemonById);  //* SUCCESS....
router.post("/pokemons", createPokemon);            //* SUCCESS....

//Types routs
router.get("/types", findAllTypes);             //* SUCCESS....
router.post("/types", postType);               //* SUCCESS....

module.exports = router;
