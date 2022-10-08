import { Col, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Searcher from './components/searcher/Searcher';
import logo from './assets/logo.svg';
import { getPokemon, getPokemonDetails } from './api';
import { setPokemons, setLoading } from './actions';
import PokemonList from './components/pokemon-list/PokemonList';
import { Data, Pokemon, Pokemons } from './models/pokemon';
import { Ui } from './models/ui';

const App = () => {
  const pokemons: Pokemon[] = useSelector((state: Data) => state.data.pokemons);
  const loading = useSelector((state: Ui) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all<Pokemons>(
        pokemonsRes.map((pokemon: Pokemon) => getPokemonDetails(pokemon))
      );

      dispatch(setPokemons(pokemonsDetailed));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
};

export default App;
