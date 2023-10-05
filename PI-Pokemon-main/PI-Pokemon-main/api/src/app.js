const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');


//*Controllers
const createPokemon = require('./controllers/pokemonControllers/createPokemon.js')
const findAllPokemons = require('./controllers/pokemonControllers/findAllPokemons.js')
const findPokemonById = require('./controllers/pokemonControllers/findPokemonById.js')
const findPokemonByName = require('./controllers/pokemonControllers/findPokemonByName.js')


require('./db.js');

const server = express();

server.use(express.json())

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

  //*                   ROUTES FROM POKEMON CHARACTER

//* FIND ALL POKEMONS
server.get('/pokemons', async (req, res)=>{
  try {
    const pokemons = await findAllPokemons();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

//* FIND POKEMON BY ID
server.get('/pokemons/:idPokemon', async (req, res) => {
  const { id } = req.params;

  try {
    const pokemonById = await findPokemonById(parseInt(id));

    if (!pokemonById) {
      res.status(404).json({ error: 'Pokemon no encontrado' });
    }

    res.status(200).json(pokemonById);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//* FIND POKEMON BY QUERY
server.get('/pokemons/name?'), async (req, res)=>{
  const name = req.query;

  try {
    const finByName = await findPokemonByName(name);
    if(!finByName){
      res.status(404).json({ error: 'No existen pokemones con ese nombre' });
    }

    res.status(200).json(finByName); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//* CREATE POKEMON
server.post('/pokemon', async (req, res)=>{
  try {
    const {name, image, life, stroke, defense, speed, height, weight} = req.body;
    
    if(!name || !image || !life || !stroke || !defense){
      res.status(400).json('faltan datos');
    }

    const newPokemon = await createPokemon(name, image, life, stroke, defense, speed, height, weight);
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
})

//* ROUTES FROM TYPE

server.get('/types', async (req, res)=>{
  try {
    const findType = await findAllTypes();
    res.status(200).json(findType);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// server.post('/types', async (req, res)=>{
//   try {
//     const { name } = req.body;
//     const newType = await createType(name);
//     res.status(201).json(newType);
//   } catch (error) {
//     res.status(400).json({error: error.message});
//   }
// })

module.exports = server;
