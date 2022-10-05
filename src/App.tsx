import { Col } from 'antd';
import { useState } from 'react';
import './App.css';
import PokemonList from './components/pokemon-list/PokemonList';
import Searcher from './components/searcher/Searcher';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={Array(10).fill('')} />
    </div>
  );
};

export default App;
