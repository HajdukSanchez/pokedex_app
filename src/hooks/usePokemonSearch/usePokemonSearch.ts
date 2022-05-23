import { useState, useEffect } from 'react';

import { pokemonApi } from '../../api/pokemonApi';
import { Pokemon, PokemonResponse, PokemonResult } from '../../models/pokemon.model';

const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    const { data } = await pokemonApi.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
    _mapPokemonList(data.results);
  };

  const _mapPokemonList = (pokemons: PokemonResult[]) => {
    const newPokemons: Pokemon[] = pokemons.map(({ url, name }) => {
      const urlParts = url.split('/');
      const id = parseInt(urlParts[urlParts.length - 2]); // We get the ID of the pokemon
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, name, image: imageUrl };
    });
    setPokemonList(newPokemons);
    setIsFetching(false);
  };

  return { isFetching, pokemonList };
};

export { usePokemonSearch };
