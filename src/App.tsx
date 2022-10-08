import { Col, Spin } from 'antd';
import { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import './App.css';
import Searcher from './components/searcher/Searcher';
import logo from './assets/logo.svg';
import PokemonList from './components/pokemon-list/PokemonList';
import { Data, Pokemon } from './models/pokemon';
import { Ui } from './models/ui';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import { useAppDispatch, useAppSelector } from './slices';

const App = () => {
  const pokemons: Pokemon[] = useAppSelector(
    (state: Data) => state.data.pokemons,
    shallowEqual
  );
  const loading = useAppSelector((state: Ui) => state.ui.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
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
