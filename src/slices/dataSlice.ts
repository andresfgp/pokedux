/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';
import { Pokemon } from '../models/pokemon';

const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon: Pokemon) => getPokemonDetails(pokemon))
    );
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
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
    setFavorite: (state, action) => {
      const pokemons: Pokemon[] = [...state.pokemons];

      // eslint-disable-next-line no-return-assign
      pokemons.map((pokemon: Pokemon) =>
        pokemon.id === action.payload.id
          ? (pokemon.favorite = !pokemon.favorite)
          : pokemon
      );
    },
  },
});

export const { setFavorite, setPokemons } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
