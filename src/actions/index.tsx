/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemons } from '../models/pokemon';
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from './types';

export const setPokemons = (payload: Pokemons[]) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = (payload: { id: number }) => ({
  type: SET_FAVORITE,
  payload,
});
