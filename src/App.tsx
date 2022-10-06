import { Col } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Searcher from './components/searcher/Searcher';
import logo from './assets/logo.svg';
import { getPokemon, getPokemonDetails } from './api';
import { setPokemons } from './actions';
import PokemonList from './components/pokemon-list/PokemonList';
import { Pokemon, Pokemons } from './models/pokemon';

const App = () => {
  const pokemons: Pokemon[] = useSelector((state: Pokemons) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pokemonsDetailed = await Promise.all<Pokemons>(
        pokemonsRes.map((pokemon: Pokemon) => getPokemonDetails(pokemon))
      );

      dispatch(setPokemons(pokemonsDetailed));
    };

    fetchPokemons();
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default App;
