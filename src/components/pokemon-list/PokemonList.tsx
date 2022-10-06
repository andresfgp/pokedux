import { Pokemon, Pokemons } from '../../models/pokemon';
import PokemonCard from '../pokemon-card/PokemonCard';

const PokemonList = ({ pokemons }: Pokemons) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon: Pokemon) => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <PokemonCard key={pokemon.name} {...pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
