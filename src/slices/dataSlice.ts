/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';
import { Pokemon } from '../models/pokemon';

const initialState = {
  pokemons: [],
  searchPokemons: [],
  keyboard: '',
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon: Pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    searchPokemons: (state, action) => {
      const { pokemons } = state;
      state.keyboard = action.payload;
      state.searchPokemons =
        action.payload === ''
          ? pokemons
          : pokemons.filter((pokemon: Pokemon) =>
              pokemon.name.toLowerCase().includes(action.payload.toLowerCase())
            );
    },
    setFavorite: (state, action) => {
      const pokemons: Pokemon[] = [...state.pokemons];
      const searchPokemons: Pokemon[] = [...state.searchPokemons];
      setBoolean(pokemons, action);
      setBoolean(searchPokemons, action);
    },
  },
});

const setBoolean = (array: Pokemon[], action: { payload: { id: number } }) => {
  return array.map((pokemon: Pokemon) =>
    pokemon.id === action.payload.id
      ? (pokemon.favorite = !pokemon.favorite)
      : pokemon
  );
};

export const { setFavorite, searchPokemons, setPokemons } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
