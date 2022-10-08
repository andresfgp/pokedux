import { Pokemon, Pokemons } from '../../models/pokemon';
import PokemonCard from '../pokemon-card/PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons, searchPokemons, keyboard }: Pokemons) => {
  const data =
    searchPokemons.length === 0 && keyboard === '' ? pokemons : searchPokemons;
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
