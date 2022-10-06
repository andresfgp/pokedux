/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemons } from '../models/pokemon';
import { SET_POKEMONS } from './types';

export const setPokemons = (payload: Pokemons[]) => ({
  type: SET_POKEMONS,
  payload,
});
