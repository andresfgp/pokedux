import axios from 'axios';

const getPokemon = async () => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    return res.data.results;
  } catch (err) {
    return console.log(err);
  }
};

export default getPokemon;
