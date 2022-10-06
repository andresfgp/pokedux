import PokemonCard from '../pokemon-card/PokemonCard';
import { RootObject } from './PokemonList.model';

const PokemonList = ({ results }: RootObject) => {
  return (
    <div className="PokemonList">
      {results.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
