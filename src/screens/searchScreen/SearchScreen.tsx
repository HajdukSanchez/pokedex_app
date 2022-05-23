import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './SearchScreen.styles';
import { usePokemonSearch } from '../../hooks';
import { Pokemon } from '../../models/pokemon.model';
import { Loading, PokemonList, PokemonListHeader, SearchInput } from '../../components';

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, pokemonList } = usePokemonSearch();
  const [searchText, setSearchText] = useState<string>('');
  const [filterPokemon, setFilterPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (searchText.length === 0) return setFilterPokemon([]);
    if (isNaN(parseInt(searchText))) {
      setFilterPokemon(pokemonList.filter((pokemon: Pokemon) => pokemon.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())));
    } else {
      const pokemonById: Pokemon | undefined = pokemonList.find((pokemon: Pokemon) => pokemon.id === parseInt(searchText))!;
      setFilterPokemon(pokemonById ? [pokemonById] : []);
    }
  }, [searchText]);

  return isFetching ? (
    <Loading color="grey" />
  ) : (
    <View style={{ ...styles.container }}>
      <SearchInput style={{ ...styles.search, top: top + 20 }} onDebounce={setSearchText} debounceTime={300} />
      <PokemonList
        data={filterPokemon}
        showHeader
        showLoading={false}
        headerComponent={<PokemonListHeader title={searchText} style={styles.listTitle} />}
      />
    </View>
  );
};

export { SearchScreen };
