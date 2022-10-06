import axios from 'axios';
import { Pokemon } from '../models/pokemon';

export const getPokemon = async () => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    return res.data.results;
  } catch (err) {
    return console.log(err);
  }
};

export const getPokemonDetails = (pokemon: Pokemon) => {
  return axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
