import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";

export const SET_SOURCE = "SET_SOURCE";

const URL = "http://localhost:3001/pokemons";

export const getPokemons = () => {
  return async function (dispatch) {
    const {data} = await axios.get(`${URL}`);
    const AllPokemons = data;

    dispatch({ type: GET_POKEMONS, payload: AllPokemons });
  };
};