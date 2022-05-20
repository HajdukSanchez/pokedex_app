import { useEffect, useRef } from 'react';

import { pokemonApi } from '../../api/pokemonApi';

export const usePokemon = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadPokemon = async () => {
    const { data } = await pokemonApi.get(nextPageUrl.current);
    console.log(data);
  };
};
