import { Col } from 'antd';
import { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './components/pokemon-list/PokemonList';
import Searcher from './components/searcher/Searcher';
import logo from './assets/logo.svg';
import getPokemon from './api';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList count={0} next="" previous={null} results={pokemons} />
    </div>
  );
};

export default App;
