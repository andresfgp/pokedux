import PokemonCard from '../pokemon-card/PokemonCard';
import { Props } from './PokemonList.model';

const PokemonList = ({ pokemons }: Props) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} />;
      })}
    </div>
  );
};

export default PokemonList;
