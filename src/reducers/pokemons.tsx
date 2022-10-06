import { SET_POKEMONS } from '../actions/types';

const initialState = {
  pokemons: [],
};

export const pokemonsReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};
