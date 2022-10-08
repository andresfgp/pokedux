import { SET_FAVORITE, SET_POKEMONS } from '../actions/types';
import { Pokemon } from '../models/pokemon';

const initialState = {
  pokemons: [],
};

export const pokemonsReducer = (
  state = initialState,
  action: { type: string; payload: Pokemon }
) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_FAVORITE:
      // eslint-disable-next-line no-case-declarations
      const pokemons: Pokemon[] = [...state.pokemons];

      // eslint-disable-next-line no-return-assign, no-case-declarations
      pokemons.map((pokemon: Pokemon) =>
        pokemon.id === action.payload.id
          ? // eslint-disable-next-line no-param-reassign
            (pokemon.favorite = !pokemon.favorite)
          : pokemon
      );

      return { ...state, pokemons };
    default:
      return state;
  }
};
