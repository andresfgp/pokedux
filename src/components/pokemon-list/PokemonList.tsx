import { Pokemon, Pokemons } from '../../models/pokemon';
import PokemonCard from '../pokemon-card/PokemonCard';

const PokemonList = ({ pokemons, searchPokemons }: Pokemons) => {
  const data = searchPokemons.length === 0 ? pokemons : searchPokemons;
  return (
    <div className="PokemonList">
      {data.map((pokemon: Pokemon) => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <PokemonCard key={pokemon.name} {...pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
