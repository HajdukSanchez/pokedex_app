import { useEffect, useRef, useState } from 'react';

import { pokemonApi } from '../../api/pokemonApi';
import { Pokemon, PokemonResponse, PokemonResult } from '../../models/pokemon.model';

export const usePokemon = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadPokemon = async () => {
    setIsLoading(true);
    const { data } = await pokemonApi.get<PokemonResponse>(nextPageUrl.current);
    nextPageUrl.current = data.next;
    _mapPokemonList(data.results);
  };

  const _mapPokemonList = (pokemons: PokemonResult[]) => {
    const newPokemons: Pokemon[] = pokemons.map(({ url, name }) => {
      const urlParts = url.split('/');
      const id = parseInt(urlParts[urlParts.length - 2]); // We get the ID of the pokemon
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, name, image: imageUrl };
    });
    setPokemonList([...pokemonList, ...newPokemons]);
    setIsLoading(false);
  };

  return {
    pokemonList,
    isLoading,
    loadPokemon,
  };
};
